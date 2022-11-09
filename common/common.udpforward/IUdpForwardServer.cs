﻿using common.libs;

namespace common.udpforward
{
    /// <summary>
    /// tcp转发监听服务
    /// </summary>
    public interface IUdpForwardServer
    {
        public void Start(ushort sourcePort);
        public void Response(UdpForwardInfo model);
        public void Stop(ushort sourcePort);
        public void Stop();

        public SimpleSubPushHandler<UdpForwardInfo> OnRequest { get; }
        public SimpleSubPushHandler<UdpforwardListenChangeInfo> OnListenChange { get; }
    }
   
    public class UdpforwardListenChangeInfo
    {
        public int Port { get; set; }
        public bool State { get; set; }
    }
}
