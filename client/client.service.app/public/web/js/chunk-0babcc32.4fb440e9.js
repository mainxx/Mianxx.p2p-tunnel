(window["webpackJsonp"]=window["webpackJsonp"]||[])?.Invoke([["chunk-0babcc32"],{"1a37":function(e,t,o){var n=o("e995");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var c=o("499e").default;c("ebddeaf6",n,!0,{sourceMap:!1,shadowMode:!1})},"29ac":function(e,t,o){"use strict";o("ffe4")},3476:function(e,t,o){"use strict";o.r(t);o("b0c0");var n=o("7a23"),c=function(e){return Object(n["pushScopeId"])("data-v-451cd8b2"),e=e(),Object(n["popScopeId"])(),e},a={class:"socks5-wrap"},r={class:"title t-c"},l={class:"form"},u={class:"w-100"},d={class:"w-100"},i={class:"w-100 t-c",style:{"line-height":"1.8rem"}},s=c((function(){return Object(n["createElementVNode"])("p",null,"自动设置代理有可能失败，可以手动配置系统代理“使用设置脚本”",-1)})),b=Object(n["createTextVNode"])("预置pac规则文件地址 "),f=Object(n["createTextVNode"])("自定义pac规则文件地址 "),m={class:"w-100 t-c"},j=Object(n["createTextVNode"])("确 定"),O=Object(n["createTextVNode"])("客户端配置"),p=Object(n["createTextVNode"])("服务端配置"),h={class:"w-100"};function V(e,t,o,c,V,C){var N=Object(n["resolveComponent"])("el-alert"),w=Object(n["resolveComponent"])("el-input"),x=Object(n["resolveComponent"])("el-form-item"),g=Object(n["resolveComponent"])("el-col"),v=Object(n["resolveComponent"])("el-option"),_=Object(n["resolveComponent"])("el-select"),E=Object(n["resolveComponent"])("el-row"),k=Object(n["resolveComponent"])("el-checkbox"),P=Object(n["resolveComponent"])("el-tooltip"),S=Object(n["resolveComponent"])("el-button"),I=Object(n["resolveComponent"])("ConfigureModal"),y=Object(n["resolveComponent"])("el-form");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",a,[Object(n["createElementVNode"])("h3",r,Object(n["toDisplayString"])(e.$route.meta.name),1),Object(n["createVNode"])(N,{class:"alert",type:"warning","show-icon":"",closable:!1,title:"socks5代理，如果服务端开启，则也可以代理到服务端",description:"适用于ftp双通道"}),Object(n["createElementVNode"])("div",l,[Object(n["createVNode"])(y,{ref:"formDom",model:c.state.form,rules:c.state.rules,"label-width":"80px"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(x,{label:"","label-width":"0"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",u,[Object(n["createVNode"])(E,{gutter:10},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(g,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(x,{label:"监听端口",prop:"ListenPort"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(w,{modelValue:c.state.form.ListenPort,"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.state.form.ListenPort=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(n["createVNode"])(g,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(x,{label:"buffersize",prop:"BufferSize"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(w,{modelValue:c.state.form.BufferSize,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.state.form.BufferSize=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(n["createVNode"])(g,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(x,{label:"目标端",prop:"TargetName"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(_,{modelValue:c.state.form.TargetName,"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.state.form.TargetName=e}),placeholder:"选择目标"},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(c.targets,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(v,{key:t,label:e.label,value:e.Name},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})])]})),_:1}),Object(n["createVNode"])(x,{label:"","label-width":"0"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",d,[Object(n["createVNode"])(E,{gutter:10},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(g,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(x,{"label-width":"0",prop:"ListenEnable"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(P,{class:"box-item",effect:"dark",content:"不勾选表示关闭socks5监听",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(k,{modelValue:c.state.form.ListenEnable,"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.state.form.ListenEnable=e}),label:"开启监听"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(g,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(x,{"label-width":"0",prop:"ConnectEnable"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(P,{class:"box-item",effect:"dark",content:"作为目标端时，是否允许被访问",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(k,{modelValue:c.state.form.ConnectEnable,"onUpdate:modelValue":t[4]||(t[4]=function(e){return c.state.form.ConnectEnable=e}),label:"允许访问"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(g,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(x,{"label-width":"0",prop:"IsPac"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(P,{class:"box-item",effect:"dark",content:"勾选则设置系统代理，不勾选则需要自己设置",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(k,{modelValue:c.state.form.IsPac,"onUpdate:modelValue":t[5]||(t[5]=function(e){return c.state.form.IsPac=e}),label:"设置系统代理"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(g,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(x,{"label-width":"0",prop:"IsCustomPac"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(P,{class:"box-item",effect:"dark",content:"自定义pac还是使用预制的pac规则",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(k,{modelValue:c.state.form.IsCustomPac,"onUpdate:modelValue":t[6]||(t[6]=function(e){return c.state.form.IsCustomPac=e}),label:"自定义pac"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})])]})),_:1}),Object(n["createVNode"])(x,{"label-width":"0"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",i,[s,Object(n["createElementVNode"])("p",null,[b,Object(n["createElementVNode"])("strong",null,Object(n["toDisplayString"])(c.state.localtion)+"/socks.pac",1)]),Object(n["createElementVNode"])("p",null,[f,Object(n["createElementVNode"])("strong",null,Object(n["toDisplayString"])(c.state.localtion)+"/socks-custom.pac",1)])])]})),_:1}),Object(n["createVNode"])(x,{"label-width":"0"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",m,[Object(n["createVNode"])(S,{type:"primary",loading:c.state.loading,onClick:c.handleSubmit,class:"m-r-1"},{default:Object(n["withCtx"])((function(){return[j]})),_:1},8,["loading","onClick"]),Object(n["createVNode"])(I,{className:"Socks5ClientConfigure"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(S,null,{default:Object(n["withCtx"])((function(){return[O]})),_:1})]})),_:1}),Object(n["createVNode"])(I,{className:"Socks5ServerConfigure"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(S,null,{default:Object(n["withCtx"])((function(){return[p]})),_:1})]})),_:1})])]})),_:1}),Object(n["createVNode"])(x,{"label-width":"0",class:"hidden-xs-only",style:{"margin-bottom":"0"}},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",h,[Object(n["createVNode"])(w,{modelValue:c.state.pac,"onUpdate:modelValue":t[7]||(t[7]=function(e){return c.state.pac=e}),rows:16,type:"textarea",placeholder:"写pac内容",resize:"none"},null,8,["modelValue"])])]})),_:1})]})),_:1},8,["model","rules"])])])}o("99af"),o("d81d"),o("a9e3"),o("e9c4");var C=o("a1e9"),N=o("97af"),w=function(){return Object(N["b"])("socks5/get")},x=function(e){return Object(N["b"])("socks5/set",e)},g=function(){return Object(N["b"])("socks5/getpac")},v=function(e){return Object(N["b"])("socks5/setpac",e)},_=o("5c40"),E=o("3ef4"),k=o("3fd2"),P=o("8286"),S=o("49f5"),I={components:{ConfigureModal:S["a"]},setup:function(){var e=Object(k["a"])(),t=Object(P["a"])(),o={},n=function(){w().then((function(e){o=e,l.form.ListenEnable=o.ListenEnable,l.form.ListenPort=o.ListenPort,l.form.BufferSize=o.BufferSize,l.form.ConnectEnable=o.ConnectEnable,l.form.IsCustomPac=o.IsCustomPac,l.form.IsPac=o.IsPac,l.form.TargetName=o.TargetName}))},c=function(){g().then((function(e){l.pac=e}))},a=function(){v({IsCustom:l.form.IsCustomPac,Pac:l.pac}).then((function(){}))};Object(_["rb"])((function(){n(),c()}));var r=Object(C["c"])((function(){return[{Name:"",label:"服务器"}].concat(e.clients.map((function(e){return{Name:e.Name,label:e.Name}})))})),l=Object(C["p"])({loading:!1,pac:"",localtion:window.location.origin,form:{ListenEnable:!1,ListenPort:5412,ConnectEnable:!1,IsPac:!1,IsCustomPac:!1,BufferSize:8192,TargetName:""},rules:{ListenPort:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:65535,message:"数字 1-65535",trigger:"blur",transform:function(e){return Number(e)}}],BufferSize:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:1048576,message:"数字 1-1048576",trigger:"blur",transform:function(e){return Number(e)}}]}}),u=Object(C["r"])(null),d=function(){u.value.validate((function(e){if(!e)return!1;l.loading=!0;var t=JSON.parse(JSON.stringify(o));t.ListenEnable=l.form.ListenEnable,t.ListenPort=+l.form.ListenPort,t.BufferSize=+l.form.BufferSize,t.ConnectEnable=l.form.ConnectEnable,t.IsCustomPac=l.form.IsCustomPac,t.IsPac=l.form.IsPac,t.TargetName=l.form.TargetName,x(t).then((function(){l.loading=!1,t.IsPac&&a(),E["a"].success("操作成功！")})).catch((function(e){l.loading=!1}))}))};return{targets:r,shareData:t,state:l,formDom:u,handleSubmit:d}}},y=(o("29ac"),o("6b0d")),L=o.n(y);const B=L()(I,[["render",V],["__scopeId","data-v-451cd8b2"]]);t["default"]=B},"3c03":function(e,t,o){var n=o("870b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var c=o("499e").default;c("14cf0b9e",n,!0,{sourceMap:!1,shadowMode:!1})},"49f5":function(e,t,o){"use strict";var n=o("7a23"),c=function(e){return Object(n["pushScopeId"])("data-v-f29e7028"),e=e(),Object(n["popScopeId"])(),e},a=Object(n["createTextVNode"])("配置"),r=c((function(){return Object(n["createElementVNode"])("div",{class:"t-c w-100"},"无内容，或配置失败，为未注册或未拥有配置权限",-1)})),l=Object(n["createTextVNode"])("取 消"),u=Object(n["createTextVNode"])("确 定");function d(e,t,o,c,d,i){var s=Object(n["resolveComponent"])("el-button"),b=Object(n["resolveComponent"])("el-input"),f=Object(n["resolveComponent"])("el-form-item"),m=Object(n["resolveComponent"])("el-form"),j=Object(n["resolveComponent"])("el-dialog");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createElementVNode"])("span",{onClick:t[0]||(t[0]=function(){return c.handleEdit&&c.handleEdit.apply(c,arguments)})},[Object(n["renderSlot"])(e.$slots,"default",{},(function(){return[Object(n["createVNode"])(s,{size:"small"},{default:Object(n["withCtx"])((function(){return[a]})),_:1})]}),!0)]),Object(n["createVNode"])(j,{title:"配置",modelValue:e.showAdd,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.showAdd=t}),center:"","close-on-click-modal":!1,"append-to-body":"",width:"80rem"},{footer:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(s,{onClick:t[2]||(t[2]=function(t){return e.showAdd=!1})},{default:Object(n["withCtx"])((function(){return[l]})),_:1}),Object(n["createVNode"])(s,{type:"primary",loading:e.loading,onClick:c.handleSubmit},{default:Object(n["withCtx"])((function(){return[u]})),_:1},8,["loading","onClick"])]})),default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(m,{ref:"formDom",model:e.form,rules:e.rules,"label-width":"0"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{label:"",prop:"Content","label-width":"0"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(b,{type:"textarea",modelValue:e.form.Content,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.form.Content=t}),autosize:{minRows:10,maxRows:30}},null,8,["modelValue"])]})),_:1}),Object(n["createVNode"])(f,{label:"","label-width":"0"},{default:Object(n["withCtx"])((function(){return[r]})),_:1})]})),_:1},8,["model","rules"])]})),_:1},8,["modelValue"])],64)}var i=o("5530"),s=o("a1e9"),b=o("dd69"),f=o("3ef4"),m={props:["className"],emits:["success"],setup:function(e,t){var o=t.emit,n=Object(s["p"])({loading:!1,showAdd:!1,showEditor:!1,form:{ClassName:e.className,Content:""},rules:{}}),c=function(){n.showAdd=!0,n.showEditor=!1,Object(b["a"])(n.form.ClassName).then((function(e){n.form.Content=e}))},a=Object(s["r"])(null),r=function(){a.value.validate((function(e){if(!e)return!1;n.loading=!0,Object(b["c"])(n.form.ClassName,n.form.Content).then((function(e){e?f["a"].error(e):(n.loading=!1,n.showAdd=!1,f["a"].success("已保存"),o("success"))})).catch((function(e){f["a"].error(e),n.loading=!1}))}))};return Object(i["a"])(Object(i["a"])({},Object(s["z"])(n)),{},{formDom:a,handleEdit:c,handleSubmit:r})}},j=(o("fb9c"),o("56d2"),o("6b0d")),O=o.n(j);const p=O()(m,[["render",d],["__scopeId","data-v-f29e7028"]]);t["a"]=p},"56d2":function(e,t,o){"use strict";o("1a37")},"5e53":function(e,t,o){var n=o("24fb");t=n(!1),t?.Invoke([e.i,".socks5-wrap[data-v-451cd8b2]{padding:2rem}.alert[data-v-451cd8b2]{margin-bottom:1rem}.form[data-v-451cd8b2]{border:1px solid #eee;padding:2rem;border-radius:.4rem}@media screen and (max-width:768px){.el-col[data-v-451cd8b2]{margin-top:.6rem}}",""]),e.exports=t},"870b":function(e,t,o){var n=o("24fb");t=n(!1),t?.Invoke([e.i,"#editor[data-v-f29e7028]{width:100%}",""]),e.exports=t},e995:function(e,t,o){var n=o("24fb");t=n(!1),t?.Invoke([e.i,".jsoneditor-outer{height:30rem;margin:0;padding:0;border:1px solid #ddd}.jsoneditor-statusbar,div.jsoneditor-menu{display:none}",""]),e.exports=t},fb9c:function(e,t,o){"use strict";o("3c03")},ffe4:function(e,t,o){var n=o("5e53");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var c=o("499e").default;c("16db7513",n,!0,{sourceMap:!1,shadowMode:!1})}}]);