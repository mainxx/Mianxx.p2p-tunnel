﻿using common.libs;
using common.libs.extends;
using common.server;
using common.server.model;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Buffers.Binary;
using System.Collections.Concurrent;
using System.Linq;
using System.Net;
using System.Reflection;

namespace common.proxy
{
    public interface IProxyPlugin : IAccess
    {
        public byte Id { get; }
        public bool ConnectEnable { get; }
        public EnumBufferSize BufferSize { get; }
        public IPAddress BroadcastBind { get; }

        /// <summary>
        /// 验证数据完整性
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        public EnumProxyValidateDataResult ValidateData(ProxyInfo info);

        /// <summary>
        /// 请求数据预处理
        /// </summary>
        /// <param name="info"></param>
        /// <returns>是否发送给目标端</returns>
        public bool HandleRequestData(ProxyInfo info);

        /// <summary>
        /// 回复数据预处理
        /// </summary>
        /// <param name="info"></param>
        /// <returns>是否发送给来源端</returns>
        public bool HandleAnswerData(ProxyInfo info);


        public void Started(ushort port) { }
        public void Stoped(ushort port) { }
    }


    public static class ProxyPluginLoader
    {
        delegate void DelegateValidateData(Memory<byte> data);
        delegate void DelegateValidateAccess(ProxyInfo info);
        delegate void DelegateCommandAnswer(ProxyInfo info);

        public static ConcurrentDictionary<byte, IProxyPlugin> plugins = new ConcurrentDictionary<byte, IProxyPlugin>();
        public static void LoadPlugin(IProxyPlugin plugin)
        {
            if (plugins.ContainsKey(plugin.Id))
            {
                Logger.Instance.Error($"plugin {plugin.Id} : {plugin.GetType().Name} already exists");
            }
            else
            {
                plugins.TryAdd(plugin.Id, plugin);
            }
        }
        public static bool GetPlugin(byte id, out IProxyPlugin plugin)
        {
            return plugins.TryGetValue(id, out plugin);
        }

    }


    public interface IProxyPluginValidator
    {
        bool Validate(ProxyInfo info);
    }
    public class ProxyPluginValidator : IProxyPluginValidator
    {
        private readonly IServiceAccessValidator serviceAccessValidator;
        private readonly Config config;

        public ProxyPluginValidator(IServiceAccessValidator serviceAccessValidator, Config config)
        {
            this.serviceAccessValidator = serviceAccessValidator;
            this.config = config;
        }
        public bool Validate(ProxyInfo info)
        {
            return
                (
                info.ProxyPlugin.ConnectEnable
                || serviceAccessValidator.Validate(info.Connection.ConnectId, info.ProxyPlugin.Access)
                )
                && FirewallDenied(info) == false;
        }

        /// <summary>
        /// 防火墙阻止
        /// </summary>
        /// <param name="info"></param>
        /// <param name="protocolType"></param>
        /// <returns></returns>
        private bool FirewallDenied(ProxyInfo info)
        {
            FirewallProtocolType protocolType = info.Step == EnumProxyStep.Command && info.Command == EnumProxyCommand.Connect ? FirewallProtocolType.TCP : FirewallProtocolType.UDP;

            //阻止IPV6的内网ip
            if (info.TargetAddress.Length == EndPointExtends.ipv6Loopback.Length)
            {
                Span<byte> span = info.TargetAddress.Span;
                return span.SequenceEqual(EndPointExtends.ipv6Loopback.Span)
                     || span.SequenceEqual(EndPointExtends.ipv6Multicast.Span)
                     || (span[0] == EndPointExtends.ipv6Local.Span[0] && span[1] == EndPointExtends.ipv6Local.Span[1]);
            }
            //IPV4的，防火墙验证
            else if (info.TargetAddress.Length == 4)
            {
                uint ip = BinaryPrimitives.ReadUInt32BigEndian(info.TargetAddress.Span);

                uint keyGlobal = new FirewallKey(info.TargetPort, protocolType, 0).Memory;
                uint keyGlobal0 = new FirewallKey(0, protocolType, 0).Memory;
                uint keyPlugin = new FirewallKey(info.TargetPort, protocolType, info.PluginId).Memory;
                uint keyPlugin0 = new FirewallKey(0, protocolType, info.PluginId).Memory;

                //黑名单
                if (config.DeniedFirewalls.Count > 0)
                {
                    bool res = config.DeniedFirewalls.TryGetValue(keyGlobal0, out FirewallCache cache)
                        || config.DeniedFirewalls.TryGetValue(keyGlobal, out cache)
                        || config.DeniedFirewalls.TryGetValue(keyPlugin0, out cache)
                        || config.DeniedFirewalls.TryGetValue(keyPlugin, out cache);
                    if (res)
                    {
                        for (int i = 0; i < cache.IPs.Length; i++)
                        {
                            //有一项匹配就不通过
                            if ((ip & cache.IPs[i].MaskValue) == cache.IPs[i].NetWork)
                            {
                                return true;
                            }
                        }
                    }
                }
                //局域网或者组播，验证白名单
                if (info.TargetAddress.IsLan() || info.TargetAddress.GetIsBroadcastAddress())
                {
                    if (config.AllowFirewalls.Count > 0)
                    {
                        bool res = config.AllowFirewalls.TryGetValue(keyGlobal0, out FirewallCache cache)
                       || config.AllowFirewalls.TryGetValue(keyGlobal, out cache)
                       || config.AllowFirewalls.TryGetValue(keyPlugin0, out cache)
                       || config.AllowFirewalls.TryGetValue(keyPlugin, out cache);

                        if (res)
                        {
                            for (int i = 0; i < cache.IPs.Length; i++)
                            {
                                //有一项通过就通过
                                if ((ip & cache.IPs[i].MaskValue) == cache.IPs[i].NetWork)
                                {
                                    return false;
                                }
                            }
                        }

                    }
                    return true;
                }

            }
            //其它的直接通过
            return false;
        }
    }

    public sealed class ProxyPluginValidatorHandler
    {
        Wrap<IProxyPluginValidator> first;
        Wrap<IProxyPluginValidator> last;

        private readonly ServiceProvider serviceProvider;
        public ProxyPluginValidatorHandler(ServiceProvider serviceProvider)
        {
            this.serviceProvider = serviceProvider;
        }

        public void LoadValidator(Assembly[] assemblys)
        {
            foreach (IProxyPluginValidator validator in ReflectionHelper.GetInterfaceSchieves(assemblys, typeof(IProxyPluginValidator)).Distinct().Select(c => (IProxyPluginValidator)serviceProvider.GetService(c)))
            {
                if (first == null)
                {
                    first = new Wrap<IProxyPluginValidator> { Value = validator };
                    last = first;
                }
                else
                {
                    last.Next = new Wrap<IProxyPluginValidator> { Value = validator };
                    last = last.Next;
                }
            }
        }
        public bool Validate(ProxyInfo info)
        {
            Wrap<IProxyPluginValidator> current = first;
            while (current != null)
            {
                if (current.Value.Validate(info) == false)
                {
                    return false;
                }
                current = current.Next;
            }
            return true;
        }
    }
    sealed class Wrap<T>
    {
        public T Value { get; set; }
        public Wrap<T> Next { get; set; }
    }
}
