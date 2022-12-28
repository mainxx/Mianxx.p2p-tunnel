﻿using System.Buffers.Binary;
using System.Net;
using System.Text;

namespace socks5
{
    /// <summary>
    /// socks5 数据包解析和组装
    /// </summary>
    public sealed class Socks5Parser
    {

        /// <summary>
        /// 获取客户端过来的支持的认证方式列表
        /// </summary>
        /// <param name="span"></param>
        /// <returns></returns>
        public static Socks5EnumAuthType[] GetAuthMethods(ReadOnlySpan<byte> span)
        {
            //VER       NMETHODS    METHODS
            // 1            1       1-255
            //版本     支持哪些认证     一个认证方式一个字节
            Socks5EnumAuthType[] res = new Socks5EnumAuthType[span[1]];
            for (int i = 0; i < span.Length; i++)
            {
                res[i] = (Socks5EnumAuthType)span[i];
            }
            return res;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="span"></param>
        /// <returns></returns>
        public static (string username, string password) GetPasswordAuthInfo(Span<byte> span)
        {
            /*
             子版本 username长度 username password长度 password
             0x01   
             */
            string username = span.Slice(2, span[1]).GetString();
            string password = span.Slice(2 + span[1] + 1, span[2 + span[1]]).GetString();
            return (username, password);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        public static int GetRemotePort(Memory<byte> data)
        {
            ushort int16Port = 0;
            if (data.Length < 3)
            {
                return int16Port;
            }
            Span<byte> span = data.Span.Slice(3);
            int16Port = (Socks5EnumAddressType)span[0] switch
            {
                Socks5EnumAddressType.IPV4 => span.Slice(1 + 4, 2).ToUInt16(),
                Socks5EnumAddressType.Domain => span.Slice(1 + 16, 2).ToUInt16(),
                Socks5EnumAddressType.IPV6 => span.Slice(2 + span[1], 2).ToUInt16(),
                _ => 0,
            };
            return BitConverter.IsLittleEndian ? BinaryPrimitives.ReverseEndianness(int16Port) : int16Port;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="data"></param>
        /// <param name="ipMemory"></param>
        /// <returns></returns>
        public static IPEndPoint GetRemoteEndPoint(Memory<byte> data, out Span<byte> ipMemory)
        {
            ipMemory = Helper.EmptyArray;
            try
            {
                if (data.Length <= 4)
                {
                    return new IPEndPoint(IPAddress.Any, 0);
                }
                //VERSION COMMAND RSV ATYPE  DST.ADDR  DST.PORT
                //去掉 VERSION COMMAND RSV
                var span = data.Span.Slice(3);

                IPAddress ip = null;
                int index = 0;
                switch ((Socks5EnumAddressType)span[0])
                {
                    case Socks5EnumAddressType.IPV4:
                        ipMemory = span.Slice(1, 4);
                        ip = new IPAddress(span.Slice(1, 4));
                        index = 1 + 4;
                        break;
                    case Socks5EnumAddressType.IPV6:
                        ipMemory = span.Slice(1, 16);
                        ip = new IPAddress(span.Slice(1, 16));
                        index = 1 + 16;
                        break;
                    case Socks5EnumAddressType.Domain:
                        ip = NetworkHelper.GetDomainIp(Encoding.UTF8.GetString(span.Slice(2, span[1])));
                        index = 2 + span[1];
                        break;

                    default:
                        break;
                }
                ushort int16Port = span.Slice(index, 2).ToUInt16();
                int port = BitConverter.IsLittleEndian ? BinaryPrimitives.ReverseEndianness(int16Port) : int16Port;

                return new IPEndPoint(ip, port);
            }
            catch (Exception ex)
            {
                //Logger.Instance.Error(ex);
            }
            return null;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="span"></param>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        public static Memory<byte> GetUdpData(Memory<byte> span)
        {
            //RSV FRAG ATYPE DST.ADDR DST.PORT DATA
            //去掉 RSV FRAG   RSV占俩字节
            span = span.Slice(3);
            return (Socks5EnumAddressType)span.Span[0] switch
            {
                Socks5EnumAddressType.IPV4 => span[(1 + 4 + 2)..],
                Socks5EnumAddressType.IPV6 => span[(1 + 16 + 2)..],
                Socks5EnumAddressType.Domain => span[(2 + span.Span[1] + 2)..],
                _ => throw new NotImplementedException(),
            };
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="remoteEndPoint"></param>
        /// <param name="responseCommand"></param>
        /// <returns></returns>
        public static unsafe byte[] MakeConnectResponse(IPEndPoint remoteEndPoint, byte responseCommand)
        {
            //VER REP  RSV ATYPE BND.ADDR BND.PORT

            byte[] res = new byte[6 + remoteEndPoint.Address.Length()];
            var span = res.AsSpan();

            res[0] = 5;
            res[1] = responseCommand;
            res[2] = 0;
            res[3] = (byte)(remoteEndPoint.Address.AddressFamily == System.Net.Sockets.AddressFamily.InterNetwork ? Socks5EnumAddressType.IPV4 : Socks5EnumAddressType.IPV6);

            remoteEndPoint.Address.TryWriteBytes(span.Slice(4), out _);

            int port = remoteEndPoint.Port;
            ref int _port = ref port;
            fixed (void* p = &_port)
            {
                byte* pp = (byte*)p;
                res[^2] = *(pp + 1);
                res[^1] = *pp;
            }


            return res;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="remoteEndPoint"></param>
        /// <param name="data"></param>
        /// <returns></returns>
        public static unsafe Memory<byte> MakeUdpResponse(IPEndPoint remoteEndPoint, Memory<byte> data)
        {
            //RSV FRAG ATYPE DST.ADDR DST.PORT DATA
            //RSV占俩字节

            int ipLength = remoteEndPoint.Address.Length();
            byte[] res = new byte[4 + ipLength + 2 + data.Length];
            var span = res.AsSpan();

            res[0] = 0;
            res[1] = 0;
            res[2] = 0; //FRAG
            res[3] = (byte)(ipLength == 4 ? Socks5EnumAddressType.IPV4 : Socks5EnumAddressType.IPV6);

            int index = 4;

            remoteEndPoint.Address.TryWriteBytes(span.Slice(index), out _);
            index += ipLength;

            int port = remoteEndPoint.Port;
            ref int _port = ref port;
            fixed (void* p = &_port)
            {
                byte* pp = (byte*)p;
                res[index] = *(pp + 1);
                res[index + 1] = *pp;
            }
            index += 2;

            data.CopyTo(res.AsMemory(index, data.Length));

            return res;
        }

    }
}