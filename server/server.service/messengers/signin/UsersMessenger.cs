﻿using common.libs;
using common.libs.extends;
using common.server;
using common.server.model;
using server.messengers;
using server.messengers.singnin;
using System.Linq;

namespace server.service.messengers.signin
{
    /// <summary>
    /// 服务端权限配置
    /// </summary>
    [MessengerIdRange((ushort)UsersMessengerIds.Min, (ushort)UsersMessengerIds.Max)]
    public sealed class UsersMessenger : IMessenger
    {
        private readonly IClientSignInCaching clientSignInCaching;
        private readonly IServiceAccessValidator serviceAccessValidator;
        private readonly IUserStore userStore;
        public UsersMessenger(IClientSignInCaching clientSignInCaching, IServiceAccessValidator serviceAccessValidator, IUserStore userStore)
        {
            this.clientSignInCaching = clientSignInCaching;
            this.serviceAccessValidator = serviceAccessValidator;
            this.userStore = userStore;
        }

        [MessengerId((ushort)UsersMessengerIds.Page)]
        public void Page(IConnection connection)
        {
            if (clientSignInCaching.Get(connection.ConnectId, out SignInCacheInfo client) == false)
            {
                return;
            }
            if (serviceAccessValidator.Validate(connection, EnumServiceAccess.Setting) == false)
            {
                return;
            }

            UserInfoPageModel userInfoPage = new UserInfoPageModel();
            userInfoPage.DeBytes(connection.ReceiveRequestWrap.Payload);

            connection.WriteUTF8(new UserInfoPageResultModel
            {
                Count = userStore.Count(),
                Page = userInfoPage.Page,
                PageSize = userInfoPage.PageSize,
                Data = userStore.Get(userInfoPage.Page, userInfoPage.PageSize).ToList()
            }.ToJson());
        }

        [MessengerId((ushort)UsersMessengerIds.Add)]
        public void Add(IConnection connection)
        {
            if (clientSignInCaching.Get(connection.ConnectId, out SignInCacheInfo client) == false)
            {
                connection.Write(Helper.FalseArray);
                return;
            }
            if (serviceAccessValidator.Validate(connection, EnumServiceAccess.Setting) == false)
            {
                connection.Write(Helper.FalseArray);
                return;
            }

            bool res = userStore.Add(connection.ReceiveRequestWrap.Payload.GetUTF8String().DeJson<UserInfo>());

            connection.Write(res ? Helper.TrueArray : Helper.FalseArray);
        }

        [MessengerId((ushort)UsersMessengerIds.Remove)]
        public void Remove(IConnection connection)
        {
            if (clientSignInCaching.Get(connection.ConnectId, out SignInCacheInfo client) == false)
            {
                connection.Write(Helper.FalseArray);
                return;
            }
            if (serviceAccessValidator.Validate(connection, EnumServiceAccess.Setting) == false)
            {
                connection.Write(Helper.FalseArray);
                return;
            }

            bool res = userStore.Remove(connection.ReceiveRequestWrap.Payload.ToUInt64());

            connection.Write(res ? Helper.TrueArray : Helper.FalseArray);
        }
    }
}
