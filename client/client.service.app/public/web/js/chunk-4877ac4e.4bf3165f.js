(window["webpackJsonp"]=window["webpackJsonp"]||[])?.Invoke([["chunk-4877ac4e"],{"1a37":function(e,t,o){var n=o("e995");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=o("499e").default;r("ebddeaf6",n,!0,{sourceMap:!1,shadowMode:!1})},"3c03":function(e,t,o){var n=o("870b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=o("499e").default;r("14cf0b9e",n,!0,{sourceMap:!1,shadowMode:!1})},"49f5":function(e,t,o){"use strict";var n=o("7a23"),r=function(e){return Object(n["pushScopeId"])("data-v-f29e7028"),e=e(),Object(n["popScopeId"])(),e},l=Object(n["createTextVNode"])("配置"),c=r((function(){return Object(n["createElementVNode"])("div",{class:"t-c w-100"},"无内容，或配置失败，为未注册或未拥有配置权限",-1)})),d=Object(n["createTextVNode"])("取 消"),a=Object(n["createTextVNode"])("确 定");function u(e,t,o,r,u,i){var f=Object(n["resolveComponent"])("el-button"),m=Object(n["resolveComponent"])("el-input"),s=Object(n["resolveComponent"])("el-form-item"),b=Object(n["resolveComponent"])("el-form"),p=Object(n["resolveComponent"])("el-dialog");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createElementVNode"])("span",{onClick:t[0]||(t[0]=function(){return r.handleEdit&&r.handleEdit.apply(r,arguments)})},[Object(n["renderSlot"])(e.$slots,"default",{},(function(){return[Object(n["createVNode"])(f,{size:"small"},{default:Object(n["withCtx"])((function(){return[l]})),_:1})]}),!0)]),Object(n["createVNode"])(p,{title:"配置",modelValue:e.showAdd,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.showAdd=t}),center:"","close-on-click-modal":!1,"append-to-body":"",width:"80rem"},{footer:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{onClick:t[2]||(t[2]=function(t){return e.showAdd=!1})},{default:Object(n["withCtx"])((function(){return[d]})),_:1}),Object(n["createVNode"])(f,{type:"primary",loading:e.loading,onClick:r.handleSubmit},{default:Object(n["withCtx"])((function(){return[a]})),_:1},8,["loading","onClick"])]})),default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(b,{ref:"formDom",model:e.form,rules:e.rules,"label-width":"0"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(s,{label:"",prop:"Content","label-width":"0"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(m,{type:"textarea",modelValue:e.form.Content,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.form.Content=t}),autosize:{minRows:10,maxRows:30}},null,8,["modelValue"])]})),_:1}),Object(n["createVNode"])(s,{label:"","label-width":"0"},{default:Object(n["withCtx"])((function(){return[c]})),_:1})]})),_:1},8,["model","rules"])]})),_:1},8,["modelValue"])],64)}var i=o("5530"),f=o("a1e9"),m=o("dd69"),s=o("3ef4"),b={props:["className"],emits:["success"],setup:function(e,t){var o=t.emit,n=Object(f["p"])({loading:!1,showAdd:!1,showEditor:!1,form:{ClassName:e.className,Content:""},rules:{}}),r=function(){n.showAdd=!0,n.showEditor=!1,Object(m["a"])(n.form.ClassName).then((function(e){n.form.Content=e}))},l=Object(f["r"])(null),c=function(){l.value.validate((function(e){if(!e)return!1;n.loading=!0,Object(m["c"])(n.form.ClassName,n.form.Content).then((function(e){e?s["a"].error(e):(n.loading=!1,n.showAdd=!1,s["a"].success("已保存"),o("success"))})).catch((function(e){s["a"].error(e),n.loading=!1}))}))};return Object(i["a"])(Object(i["a"])({},Object(f["z"])(n)),{},{formDom:l,handleEdit:r,handleSubmit:c})}},p=(o("fb9c"),o("56d2"),o("6b0d")),O=o.n(p);const j=O()(b,[["render",u],["__scopeId","data-v-f29e7028"]]);t["a"]=j},"56d2":function(e,t,o){"use strict";o("1a37")},"594d":function(e,t,o){var n=o("24fb");t=n(!1),t?.Invoke([e.i,".el-row[data-v-7dfe3027]{width:100%}.el-form-item.last[data-v-7dfe3027]{margin-bottom:0}.register-form[data-v-7dfe3027]{padding:2rem}.register-form .inner[data-v-7dfe3027]{border:1px solid #eee;padding:2rem;border-radius:4px}.el-collapse[data-v-7dfe3027]{margin-bottom:1rem}@media screen and (max-width:768px){.el-col[data-v-7dfe3027]{margin-top:.6rem}}",""]),e.exports=t},"73cf":function(e,t,o){"use strict";o.r(t);var n=o("7a23"),r=function(e){return Object(n["pushScopeId"])("data-v-7dfe3027"),e=e(),Object(n["popScopeId"])(),e},l={class:"register-form"},c=r((function(){return Object(n["createElementVNode"])("h3",{class:"title t-c"},"将本客户端注册到服务器",-1)})),d={class:"t-c w-100",style:{"padding-bottom":".6rem"}},a=Object(n["createTextVNode"])("服务端配置"),u=Object(n["createTextVNode"])("服务端权限配置"),i={class:"inner"},f={class:"flex"},m=r((function(){return Object(n["createElementVNode"])("span",{class:"flex-1"},null,-1)})),s=["onClick"],b=Object(n["createTextVNode"])("使用ipv6"),p=Object(n["createTextVNode"])("自动注册"),O=Object(n["createTextVNode"])("p2p加密"),j=Object(n["createTextVNode"])("注册加密"),C=Object(n["createTextVNode"])("使用udp"),g=Object(n["createTextVNode"])("使用tcp"),V=Object(n["createTextVNode"])("使用原端口"),x=Object(n["createTextVNode"])("自动打洞"),h=Object(n["createTextVNode"])("断线重连"),w=Object(n["createTextVNode"])("> "),N=Object(n["createTextVNode"])("中继节点"),v=Object(n["createTextVNode"])("> "),U={class:"t-c w-100"},_=Object(n["createTextVNode"])("注册"),S=Object(n["createTextVNode"])("退出");function I(e,t,o,r,I,R){var y=Object(n["resolveComponent"])("el-button"),T=Object(n["resolveComponent"])("ConfigureModal"),P=Object(n["resolveComponent"])("el-input"),E=Object(n["resolveComponent"])("el-form-item"),A=Object(n["resolveComponent"])("el-col"),k=Object(n["resolveComponent"])("el-popover"),D=Object(n["resolveComponent"])("CircleClose"),G=Object(n["resolveComponent"])("el-icon"),B=Object(n["resolveComponent"])("el-option"),L=Object(n["resolveComponent"])("el-select"),M=Object(n["resolveComponent"])("el-tooltip"),q=Object(n["resolveComponent"])("el-row"),H=Object(n["resolveComponent"])("el-checkbox"),z=Object(n["resolveComponent"])("el-collapse-item"),J=Object(n["resolveComponent"])("el-collapse"),F=Object(n["resolveComponent"])("el-form");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",l,[c,Object(n["createElementVNode"])("div",d,[Object(n["createVNode"])(T,{className:"ServerConfigure"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(y,{size:"small"},{default:Object(n["withCtx"])((function(){return[a]})),_:1})]})),_:1}),Object(n["createVNode"])(T,{className:"ServiceAccessrConfigure"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(y,{size:"small"},{default:Object(n["withCtx"])((function(){return[u]})),_:1})]})),_:1})]),Object(n["createElementVNode"])("div",i,[Object(n["createVNode"])(F,{"label-width":"8rem",ref:"formDom",model:e.model,rules:e.rules},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{label:"","label-width":"0"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(q,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(A,{xs:24,sm:8,md:8,lg:8,xl:8},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{label:"名称",prop:"Name"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(P,{modelValue:e.model.Name,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.model.Name=t}),maxlength:"32","show-word-limit":"",placeholder:"设置你的注册名称"},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(n["createVNode"])(A,{xs:24,sm:8,md:8,lg:8,xl:8},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{label:"短id",prop:"ShortId"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(k,{placement:"top-start",title:"短id",trigger:"hover",content:"暂不可用"},{reference:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(P,{modelValue:e.model.ShortId,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.model.ShortId=t}),readonly:""},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(A,{xs:24,sm:8,md:8,lg:8,xl:8},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{label:"分组",prop:"GroupId"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(M,{class:"box-item",effect:"dark",content:"设置你的分组编号，两个客户端之间分组编号一致时相互可见",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(L,{modelValue:e.model.GroupId,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.model.GroupId=t}),onChange:r.handleGroupIdChange,"allow-create":"",clearable:"",filterable:"","default-first-option":"",placeholder:"选择或输入分组编号"},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.model.GroupIds,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(B,{key:t,label:e,value:e},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",f,[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e),1),m,Object(n["createElementVNode"])("span",{style:{padding:"1px 0 0 1rem"},onClick:Object(n["withModifiers"])((function(e){return r.handleRemoveGroupId(t)}),["stop"])},[Object(n["createVNode"])(G,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(D)]})),_:1})],8,s)])]})),_:2},1032,["label","value"])})),128))]})),_:1},8,["modelValue","onChange"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(E,{label:"","label-width":"0"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(q,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(A,{xs:24,sm:8,md:8,lg:8,xl:8},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{label:"注册地址",prop:"ServerIp"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(P,{modelValue:e.model.ServerIp,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.model.ServerIp=t}),placeholder:"域名或IP地址"},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(n["createVNode"])(A,{xs:24,sm:8,md:8,lg:8,xl:8},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{label:"udp端口",prop:"ServerUdpPort"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(P,{modelValue:e.model.ServerUdpPort,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.model.ServerUdpPort=t})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(n["createVNode"])(A,{xs:24,sm:8,md:8,lg:8,xl:8},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{label:"tcp端口",prop:"ServerTcpPort"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(P,{modelValue:e.model.ServerTcpPort,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.model.ServerTcpPort=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(J,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(z,{title:"可选和其它",name:"1"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{label:"","label-width":"0"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(q,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(A,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{label:"ipv6",prop:"UseIpv6"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(H,{modelValue:e.model.UseIpv6,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.model.UseIpv6=t}),disabled:""},{default:Object(n["withCtx"])((function(){return[b]})),_:1},8,["modelValue"])]})),_:1})]})),_:1}),Object(n["createVNode"])(A,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{label:"绑定ip",prop:"BindIp"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(P,{modelValue:e.model.BindIp,"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.model.BindIp=t}),placeholder:"绑定ip",readonly:""},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(n["createVNode"])(A,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{label:"udp限速",prop:"UdpUploadSpeedLimit"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(M,{class:"box-item",effect:"dark",content:"udp发送速度限制（字节数,0不限制）",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(P,{modelValue:e.model.UdpUploadSpeedLimit,"onUpdate:modelValue":t[8]||(t[8]=function(t){return e.model.UdpUploadSpeedLimit=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(E,{label:"","label-width":"0"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(q,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(A,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{label:"自动注册",prop:"AutoReg"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(H,{modelValue:e.model.AutoReg,"onUpdate:modelValue":t[9]||(t[9]=function(t){return e.model.AutoReg=t})},{default:Object(n["withCtx"])((function(){return[p]})),_:1},8,["modelValue"])]})),_:1})]})),_:1}),Object(n["createVNode"])(A,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{label:"次数",prop:"AutoRegTimes"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(M,{class:"box-item",effect:"dark",content:"如果自动注册失败，将要重试几次",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(P,{modelValue:e.model.AutoRegTimes,"onUpdate:modelValue":t[10]||(t[10]=function(t){return e.model.AutoRegTimes=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(A,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{label:"间隔",prop:"AutoRegInterval"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(M,{class:"box-item",effect:"dark",content:"间隔多久重试一次(ms)",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(P,{modelValue:e.model.AutoRegInterval,"onUpdate:modelValue":t[11]||(t[11]=function(t){return e.model.AutoRegInterval=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(A,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{label:"延迟",prop:"AutoRegDelay"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(M,{class:"box-item",effect:"dark",content:"断线后多久重试",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(P,{modelValue:e.model.AutoRegDelay,"onUpdate:modelValue":t[12]||(t[12]=function(t){return e.model.AutoRegDelay=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(E,{label:"","label-width":"0"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(q,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(A,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{label:"加密",prop:"ClientEncode"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(M,{class:"box-item",effect:"dark",content:"客户端之间通信使用加密",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(H,{modelValue:e.model.ClientEncode,"onUpdate:modelValue":t[13]||(t[13]=function(t){return e.model.ClientEncode=t})},{default:Object(n["withCtx"])((function(){return[O]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(A,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{label:"密钥",prop:"ClientEncodePassword"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(M,{class:"box-item",effect:"dark",content:"加密密钥32位，为空则每次加密随机密钥，如果填写，则各客户端都填写",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(P,{type:"password","show-password":"",maxlength:"32","show-word-limit":"",modelValue:e.model.ClientEncodePassword,"onUpdate:modelValue":t[14]||(t[14]=function(t){return e.model.ClientEncodePassword=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(A,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{label:"加密",prop:"ServerEncode"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(M,{class:"box-item",effect:"dark",content:"客户端与服务端之间通信使用加密",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(H,{modelValue:e.model.ServerEncode,"onUpdate:modelValue":t[15]||(t[15]=function(t){return e.model.ServerEncode=t})},{default:Object(n["withCtx"])((function(){return[j]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(A,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{label:"密钥",prop:"ServerEncodePassword"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(M,{class:"box-item",effect:"dark",content:"加密密钥 32位，为空则每次加密随机密钥，使用p2p.snltty.com服务器则必须留空",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(P,{type:"password","show-password":"",maxlength:"32","show-word-limit":"",modelValue:e.model.ServerEncodePassword,"onUpdate:modelValue":t[16]||(t[16]=function(t){return e.model.ServerEncodePassword=t})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(E,{label:"","label-width":"0"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(q,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(A,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{label:"udp",prop:"UseUdp"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(M,{class:"box-item",effect:"dark",content:"是否使用udp",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(H,{modelValue:e.model.UseUdp,"onUpdate:modelValue":t[17]||(t[17]=function(t){return e.model.UseUdp=t})},{default:Object(n["withCtx"])((function(){return[C]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(A,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{label:"tcp",prop:"UseTcp"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(M,{class:"box-item",effect:"dark",content:"是否使用tcp",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(H,{modelValue:e.model.UseTcp,"onUpdate:modelValue":t[18]||(t[18]=function(t){return e.model.UseTcp=t})},{default:Object(n["withCtx"])((function(){return[g]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(A,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{label:"原端口",prop:"UseOriginPort"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(M,{class:"box-item",effect:"dark",content:"是否使用原端口打洞",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(H,{modelValue:e.model.UseOriginPort,"onUpdate:modelValue":t[19]||(t[19]=function(t){return e.model.UseOriginPort=t})},{default:Object(n["withCtx"])((function(){return[V]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(A,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{label:"掉线超时",prop:"TimeoutDelay"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(M,{class:"box-item",effect:"dark",content:"多久时间无法连通则掉线ms,使用5的倍数",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(P,{modelValue:e.model.TimeoutDelay,"onUpdate:modelValue":t[20]||(t[20]=function(t){return e.model.TimeoutDelay=t}),placeholder:"掉线超时"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(E,{label:"","label-width":"80"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(q,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(A,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{label:"自动打洞",prop:"UsePunchHole"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(M,{class:"box-item",effect:"dark",content:"发现新客户端后是否自动打洞",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(H,{modelValue:e.model.UsePunchHole,"onUpdate:modelValue":t[21]||(t[21]=function(t){return e.model.UsePunchHole=t})},{default:Object(n["withCtx"])((function(){return[x]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(A,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{label:"重连",prop:"UseReConnect"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(M,{class:"box-item",effect:"dark",content:"客户端之间掉线后，是否尝试重新连接",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(H,{modelValue:e.model.UseReConnect,"onUpdate:modelValue":t[22]||(t[22]=function(t){return e.model.UseReConnect=t})},{default:Object(n["withCtx"])((function(){return[h]})),_:1},8,["modelValue"]),w]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(A,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{label:"中继节点",prop:"UseRelay"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(M,{class:"box-item",effect:"dark",content:"是否允许本客户端作为中继节点",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(H,{modelValue:e.model.UseRelay,"onUpdate:modelValue":t[23]||(t[23]=function(t){return e.model.UseRelay=t})},{default:Object(n["withCtx"])((function(){return[N]})),_:1},8,["modelValue"]),v]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(E,{label:"","label-width":"0",class:"t-c last"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",U,[Object(n["createVNode"])(y,{type:"primary",size:"large",loading:r.signInState.LocalInfo.IsConnecting,onClick:r.handleSubmit},{default:Object(n["withCtx"])((function(){return[_]})),_:1},8,["loading","onClick"]),r.signInState.LocalInfo.UdpConnected||r.signInState.LocalInfo.TcpConnected?(Object(n["openBlock"])(),Object(n["createBlock"])(y,{key:0,type:"info",size:"large",loading:r.signInState.LocalInfo.IsConnecting,onClick:r.handleExit},{default:Object(n["withCtx"])((function(){return[S]})),_:1},8,["loading","onClick"])):Object(n["createCommentVNode"])("",!0)])]})),_:1})]})),_:1},8,["model","rules"])])])}var R=o("5530"),y=(o("a9e3"),o("e9c4"),o("d3b7"),o("3ca3"),o("ddb0"),o("ac1f"),o("5319"),o("a434"),o("a1e9")),T=o("9709"),P=o("ea39"),E=o("3ef4"),A=o("5c40"),k=o("49f5"),D={components:{ConfigureModal:k["a"]},setup:function(){var e=Object(y["r"])(null),t=Object(T["a"])(),o=Object(y["p"])({model:{ShortId:0,Name:"",ServerIp:"",ServerUdpPort:0,ServerTcpPort:0,AutoReg:!1,AutoRegTimes:10,AutoRegInterval:5e3,AutoRegDelay:5e3,GroupId:"",GroupIds:[],ClientEncode:!1,ClientEncodePassword:"",ServerEncode:!1,ServerEncodePassword:"",UsePunchHole:!1,TimeoutDelay:2e4,UseUdp:!1,UseTcp:!1,UseRelay:!0,UseIpv6:!1,BindIp:"0.0.0.0",UseOriginPort:!0,UseReConnect:!1,UdpUploadSpeedLimit:0},rules:{Name:[{required:!0,message:"必填",trigger:"blur"}],ServerIp:[{required:!0,message:"必填",trigger:"blur"}],AutoRegTimes:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:2147483647,message:"数字 1-2147483647",trigger:"blur",transform:function(e){return Number(e)}}],AutoRegInterval:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:2147483647,message:"数字 1-2147483647",trigger:"blur",transform:function(e){return Number(e)}}],AutoRegDelay:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:2147483647,message:"数字 1-2147483647",trigger:"blur",transform:function(e){return Number(e)}}],TimeoutDelay:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:2147483647,message:"数字 1-2147483647",trigger:"blur",transform:function(e){return Number(e)}}],ServerUdpPort:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:65535,message:"数字 1-65535",trigger:"blur",transform:function(e){return Number(e)}}],ServerTcpPort:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:65535,message:"数字 1-65535",trigger:"blur",transform:function(e){return Number(e)}}],UdpUploadSpeedLimit:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:0,max:2147483647,message:"数字 0-2147483647",trigger:"blur",transform:function(e){return Number(e)}}],ShortId:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:0,max:255,message:"数字 0-255",trigger:"blur",transform:function(e){return Number(e)}}]}}),n={},r=function(){Object(P["a"])().then((function(e){console.log(e),n=e,o.model.ShortId=t.ClientConfig.ShortId=n.ClientConfig.ShortId,o.model.Name=t.ClientConfig.Name=n.ClientConfig.Name,o.model.GroupId=t.ClientConfig.GroupId=n.ClientConfig.GroupId,o.model.GroupIds=t.ClientConfig.GroupIds=n.ClientConfig.GroupIds,o.model.AutoReg=t.ClientConfig.AutoReg=n.ClientConfig.AutoReg,o.model.AutoRegTimes=t.ClientConfig.AutoRegTimes=n.ClientConfig.AutoRegTimes,o.model.AutoRegInterval=t.ClientConfig.AutoRegInterval=n.ClientConfig.AutoRegInterval,o.model.AutoRegDelay=t.ClientConfig.AutoRegDelay=n.ClientConfig.AutoRegDelay,o.model.ClientEncode=t.ClientConfig.Encode=n.ClientConfig.Encode,o.model.ClientEncodePassword=t.ClientConfig.ClientEncodePassword=n.ClientConfig.EncodePassword,o.model.UsePunchHole=t.ClientConfig.UsePunchHole=n.ClientConfig.UsePunchHole,o.model.UseReConnect=t.ClientConfig.UseReConnect=n.ClientConfig.UseReConnect,o.model.TimeoutDelay=t.ClientConfig.TimeoutDelay=n.ClientConfig.TimeoutDelay,o.model.UseIpv6=t.ClientConfig.UseIpv6=n.ClientConfig.UseIpv6,o.model.BindIp=t.ClientConfig.BindIp=n.ClientConfig.BindIp,o.model.UseUdp=t.ClientConfig.UseUdp=n.ClientConfig.UseUdp,o.model.UseTcp=t.ClientConfig.UseTcp=n.ClientConfig.UseTcp,o.model.UseRelay=t.ClientConfig.UseRelay=n.ClientConfig.UseRelay,o.model.UseOriginPort=t.ClientConfig.UseOriginPort=n.ClientConfig.UseOriginPort,o.model.UdpUploadSpeedLimit=t.ClientConfig.UdpUploadSpeedLimit=n.ClientConfig.UdpUploadSpeedLimit,o.model.ServerIp=t.ServerConfig.Ip=n.ServerConfig.Ip,o.model.ServerUdpPort=t.ServerConfig.UdpPort=n.ServerConfig.UdpPort,o.model.ServerTcpPort=t.ServerConfig.TcpPort=n.ServerConfig.TcpPort,o.model.ServerEncode=t.ServerConfig.Encode=n.ServerConfig.Encode,o.model.ServerEncodePassword=t.ServerConfig.ServerEncodePassword=n.ServerConfig.EncodePassword})).catch((function(e){}))},l=function(){var e=JSON.parse(JSON.stringify(n));return e.ClientConfig.ShortId=+o.model.ShortId,e.ClientConfig.Name=o.model.Name,e.ClientConfig.GroupId=o.model.GroupId,e.ClientConfig.AutoReg=o.model.AutoReg,e.ClientConfig.AutoRegTimes=+o.model.AutoRegTimes,e.ClientConfig.AutoRegInterval=+o.model.AutoRegInterval,e.ClientConfig.AutoRegDelay=+o.model.AutoRegDelay,e.ClientConfig.Encode=o.model.ClientEncode,e.ClientConfig.EncodePassword=o.model.ClientEncodePassword,e.ClientConfig.UsePunchHole=o.model.UsePunchHole,e.ClientConfig.TimeoutDelay=+o.model.TimeoutDelay,e.ClientConfig.UseUdp=o.model.UseUdp,e.ClientConfig.UseTcp=o.model.UseTcp,e.ClientConfig.UseRelay=o.model.UseRelay,e.ClientConfig.UseIpv6=o.model.UseIpv6,e.ClientConfig.BindIp=o.model.BindIp,e.ClientConfig.UseOriginPort=o.model.UseOriginPort,e.ClientConfig.UseReConnect=o.model.UseReConnect,e.ClientConfig.UdpUploadSpeedLimit=+o.model.UdpUploadSpeedLimit,e.ServerConfig.Ip=o.model.ServerIp,e.ServerConfig.UdpPort=+o.model.ServerUdpPort,e.ServerConfig.TcpPort=+o.model.ServerTcpPort,e.ServerConfig.Encode=o.model.ServerEncode,e.ServerConfig.EncodePassword=o.model.ServerEncodePassword,e},c=function(){e.value.validate((function(e){if(!e)return!1;var o=l();t.LocalInfo.IsConnecting=!0,Promise.all([Object(P["b"])(),Object(P["d"])(o)]).then((function(){Object(P["c"])().then((function(e){r()})).catch((function(e){E["a"].error(e)}))})).catch((function(e){E["a"].error(e)}))}))},d=function(){Object(P["b"])()},a=function(e){e=e.replace(/^\s|\s$/g,""),-1==o.model.GroupIds.indexOf(e)&&e&&o.model.GroupIds?.Invoke(e),Object(P["d"])(l())},u=function(e){o.model.GroupIds.splice(e,1),Object(P["d"])(l())};return Object(A["rb"])((function(){r()})),Object(R["a"])(Object(R["a"])({},Object(y["z"])(o)),{},{signInState:t,formDom:e,handleSubmit:c,handleExit:d,handleGroupIdChange:a,handleRemoveGroupId:u})}},G=(o("8bd2"),o("6b0d")),B=o.n(G);const L=B()(D,[["render",I],["__scopeId","data-v-7dfe3027"]]);t["default"]=L},"870b":function(e,t,o){var n=o("24fb");t=n(!1),t?.Invoke([e.i,"#editor[data-v-f29e7028]{width:100%}",""]),e.exports=t},"8bd2":function(e,t,o){"use strict";o("e829")},e829:function(e,t,o){var n=o("594d");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=o("499e").default;r("83af5ae2",n,!0,{sourceMap:!1,shadowMode:!1})},e995:function(e,t,o){var n=o("24fb");t=n(!1),t?.Invoke([e.i,".jsoneditor-outer{height:30rem;margin:0;padding:0;border:1px solid #ddd}.jsoneditor-statusbar,div.jsoneditor-menu{display:none}",""]),e.exports=t},fb9c:function(e,t,o){"use strict";o("3c03")}}]);