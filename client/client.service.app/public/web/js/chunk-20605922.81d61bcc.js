(window["webpackJsonp"]=window["webpackJsonp"]||[])?.Invoke([["chunk-20605922"],{1276:function(e,t,n){"use strict";var r=n("2ba4"),a=n("c65b"),c=n("e330"),o=n("d784"),l=n("44e7"),i=n("825a"),u=n("1d80"),d=n("4840"),s=n("8aa5"),b=n("50c4"),f=n("577e"),m=n("dc4a"),O=n("4dae"),j=n("14c3"),p=n("9263"),h=n("9f7f"),g=n("d039"),x=h.UNSUPPORTED_Y,V=4294967295,N=Math.min,w=[]?.Invoke,C=c(/./.exec),v=c(w),k=c("".slice),_=!g((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));o("split",(function(e,t,n){var c;return c="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var c=f(u(this)),o=void 0===n?V:n>>>0;if(0===o)return[];if(void 0===e)return[c];if(!l(e))return a(t,c,e,o);var i,d,s,b=[],m=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),j=0,h=new RegExp(e.source,m+"g");while(i=a(p,h,c)){if(d=h.lastIndex,d>j&&(v(b,k(c,j,i.index)),i.length>1&&i.index<c.length&&r(w,b,O(i,1)),s=i[0].length,j=d,b.length>=o))break;h.lastIndex===i.index&&h.lastIndex++}return j===c.length?!s&&C(h,"")||v(b,""):v(b,k(c,j)),b.length>o?O(b,0,o):b}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:a(t,this,e,n)}:t,[function(t,n){var r=u(this),o=void 0==t?void 0:m(t,e);return o?a(o,t,r,n):a(c,f(r),t,n)},function(e,r){var a=i(this),o=f(e),l=n(c,a,o,r,c!==t);if(l.done)return l.value;var u=d(a,RegExp),m=a.unicode,O=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(x?"g":"y"),p=new u(x?"^(?:"+a.source+")":a,O),h=void 0===r?V:r>>>0;if(0===h)return[];if(0===o.length)return null===j(p,o)?[o]:[];var g=0,w=0,C=[];while(w<o.length){p.lastIndex=x?0:w;var _,P=j(p,x?k(o,w):o);if(null===P||(_=N(b(p.lastIndex+(x?w:0)),o.length))===g)w=s(o,w,m);else{if(v(C,k(o,g,w)),C.length===h)return C;for(var I=1;I<=P.length-1;I++)if(v(C,P[I]),C.length===h)return C;w=g=_}}return v(C,k(o,g)),C}]}),!_,x)},"3b7d":function(e,t,n){var r=n("7a35");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("499e").default;a("fd3e5710",r,!0,{sourceMap:!1,shadowMode:!1})},"7a35":function(e,t,n){var r=n("24fb");t=r(!1),t?.Invoke([e.i,".socks5-wrap[data-v-adad964e]{padding:2rem}.inner[data-v-adad964e]{border:1px solid #ddd;padding:1rem;border-radius:.4rem}.alert[data-v-adad964e],.inner[data-v-adad964e]{margin-bottom:1rem}@media screen and (max-width:768px){.el-col[data-v-adad964e]{margin-top:.6rem}}",""]),e.exports=t},"9f6a":function(e,t,n){"use strict";n.r(t);n("b0c0");var r=n("7a23"),a=function(e){return Object(r["pushScopeId"])("data-v-adad964e"),e=e(),Object(r["popScopeId"])(),e},c={class:"socks5-wrap"},o={class:"inner"},l={class:"title t-c"},i={class:"form"},u={class:"w-100"},d={class:"w-100"},s={class:"w-100"},b={class:"w-100 t-c"},f=Object(r["createTextVNode"])("确 定"),m=Object(r["createTextVNode"])("配置插件"),O={class:"inner"},j={class:"title t-c"},p=a((function(){return Object(r["createElementVNode"])("span",null,"组网列表",-1)})),h=Object(r["createTextVNode"])("刷新列表"),g={key:0,style:{color:"green"}},x={key:1},V=Object(r["createTextVNode"])("重装其网卡");function N(e,t,n,a,N,w){var C=Object(r["resolveComponent"])("el-alert"),v=Object(r["resolveComponent"])("el-input"),k=Object(r["resolveComponent"])("el-tooltip"),_=Object(r["resolveComponent"])("el-form-item"),P=Object(r["resolveComponent"])("el-col"),I=Object(r["resolveComponent"])("el-option"),E=Object(r["resolveComponent"])("el-select"),S=Object(r["resolveComponent"])("el-row"),y=Object(r["resolveComponent"])("el-checkbox"),B=Object(r["resolveComponent"])("el-button"),L=Object(r["resolveComponent"])("ConfigureModal"),T=Object(r["resolveComponent"])("el-form"),z=Object(r["resolveComponent"])("el-table-column"),U=Object(r["resolveComponent"])("el-table");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",c,[Object(r["createElementVNode"])("div",o,[Object(r["createElementVNode"])("h3",l,Object(r["toDisplayString"])(e.$route.meta.name),1),Object(r["createVNode"])(C,{class:"alert",type:"warning","show-icon":"",closable:!1,title:"虚拟网卡组网，可将在线客户端组合成一个网络，然后通过客户端ip直接访问，暂时仅windows",description:"需要管理员运行，否则无法添加虚拟网卡"}),Object(r["createElementVNode"])("div",i,[Object(r["createVNode"])(T,{ref:"formDom",model:a.state.form,rules:a.state.rules,"label-width":"80px"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(_,{label:"","label-width":"0"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",u,[Object(r["createVNode"])(S,{gutter:10},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(P,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(_,{label:"代理端口",prop:"SocksPort"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k,{class:"box-item",effect:"dark",content:"代理端口，无所谓，填写一个未被占用的端口即可",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(v,{modelValue:a.state.form.SocksPort,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.state.form.SocksPort=e})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(P,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(_,{label:"buffersize",prop:"BufferSize"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(v,{modelValue:a.state.form.BufferSize,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.state.form.BufferSize=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(r["createVNode"])(P,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(_,{label:"目标端",prop:"TargetName"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k,{class:"box-item",effect:"dark",content:"当遇到不存在的ip时，目标端应该选择谁，为某个客户端",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(E,{modelValue:a.state.form.TargetName,"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.state.form.TargetName=e}),placeholder:"选择目标"},{default:Object(r["withCtx"])((function(){return[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(a.targets,(function(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])(I,{key:t,label:e.label,value:e.Name},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})])]})),_:1}),Object(r["createVNode"])(_,{label:"","label-width":"0"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",d,[Object(r["createVNode"])(S,{gutter:10},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(P,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(_,{"label-width":"0",prop:"Enable"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k,{class:"box-item",effect:"dark",content:"不开启，则只修改配置信息，不安装虚拟网卡",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(y,{modelValue:a.state.form.Enable,"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.state.form.Enable=e}),label:"开启网卡"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(P,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(_,{"label-width":"0",prop:"ProxyAll"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k,{class:"box-item",effect:"dark",content:"是否由虚拟网卡代理所有，暂不可用",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(y,{disabled:"",modelValue:a.state.form.ProxyAll,"onUpdate:modelValue":t[4]||(t[4]=function(e){return a.state.form.ProxyAll=e}),label:"代理所有"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(P,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(_,{"label-width":"0",prop:"ConnectEnable"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k,{class:"box-item",effect:"dark",content:"作为被访问端时，是否允许访问",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(y,{modelValue:a.state.form.ConnectEnable,"onUpdate:modelValue":t[5]||(t[5]=function(e){return a.state.form.ConnectEnable=e}),label:"允许访问"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})])]})),_:1}),Object(r["createVNode"])(_,{"label-width":"0"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",s,[Object(r["createVNode"])(S,{gutter:10},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(P,{xs:12,sm:8,md:8,lg:8,xl:8},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(_,{label:"本机IP",prop:"IP"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k,{class:"box-item",effect:"dark",content:"当前客户端的虚拟网卡ip，各个客户端之间设置不一样的ip，相同网段即可",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(v,{modelValue:a.state.form.IP,"onUpdate:modelValue":t[6]||(t[6]=function(e){return a.state.form.IP=e})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(P,{xs:12,sm:8,md:8,lg:8,xl:8},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(_,{label:"局域网段",prop:"LanIPs"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k,{class:"box-item",effect:"dark",content:"当前客户端的局域网段，各个客户端之间设置不一样的网段即可，192.168.x.0酱紫，为空不启用，多个网段用英文逗号间隔",placement:"top-start"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(v,{modelValue:a.state.form.LanIPs,"onUpdate:modelValue":t[7]||(t[7]=function(e){return a.state.form.LanIPs=e})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})])]})),_:1}),Object(r["createVNode"])(_,{"label-width":"0"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",b,[Object(r["createVNode"])(B,{type:"primary",loading:a.state.loading,onClick:a.handleSubmit,class:"m-r-1"},{default:Object(r["withCtx"])((function(){return[f]})),_:1},8,["loading","onClick"]),Object(r["createVNode"])(L,{className:"VeaClientConfigure"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(B,null,{default:Object(r["withCtx"])((function(){return[m]})),_:1})]})),_:1})])]})),_:1})]})),_:1},8,["model","rules"])])]),Object(r["createElementVNode"])("div",O,[Object(r["createElementVNode"])("h3",j,[p,Object(r["createVNode"])(B,{type:"primary",size:"small",loading:a.state.loading,onClick:a.handleUpdate},{default:Object(r["withCtx"])((function(){return[h]})),_:1},8,["loading","onClick"])]),Object(r["createElementVNode"])("div",null,[Object(r["createVNode"])(U,{size:"small",border:"",data:a.showClients,style:{width:"100%"}},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(z,{prop:"Name",label:"客户端"},{default:Object(r["withCtx"])((function(e){return[e.row.Connected?(Object(r["openBlock"])(),Object(r["createElementBlock"])("strong",g,Object(r["toDisplayString"])(e.row.Name),1)):(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",x,Object(r["toDisplayString"])(e.row.Name),1))]})),_:1}),Object(r["createVNode"])(z,{prop:"veaIp",label:"虚拟ip"},{default:Object(r["withCtx"])((function(e){return[Object(r["createElementVNode"])("p",null,[Object(r["createElementVNode"])("strong",null,Object(r["toDisplayString"])(e.row.veaIp.IP),1)]),(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.row.veaIp.LanIPs,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("p",{key:e,style:{color:"#999"}},Object(r["toDisplayString"])(e),1)})),128))]})),_:1}),Object(r["createVNode"])(z,{prop:"todo",label:"操作"},{default:Object(r["withCtx"])((function(e){return[Object(r["createVNode"])(B,{size:"small",loading:a.state.loading,onClick:function(t){return a.handleResetVea(e.row)},class:"m-r-1"},{default:Object(r["withCtx"])((function(){return[V]})),_:2},1032,["loading","onClick"])]})),_:1})]})),_:1},8,["data"])])])])}n("d81d"),n("a9e3"),n("d3b7"),n("159b"),n("e9c4"),n("4de4"),n("a15b"),n("ac1f"),n("1276");var w=n("a1e9"),C=n("97af"),v=function(){return Object(C["b"])("vea/get")},k=function(e){return Object(C["b"])("vea/set",e)},_=function(){return Object(C["b"])("vea/list")},P=function(e){return Object(C["b"])("vea/reset",e)},I=function(){return Object(C["b"])("vea/update")},E=n("5c40"),S=n("3ef4"),y=n("3fd2"),B=n("8286"),L=n("9709"),T=n("49f5"),z={components:{ConfigureModal:T["a"]},setup:function(){var e=Object(y["a"])(),t=Object(L["a"])(),n=Object(B["a"])(),r=Object(w["c"])((function(){return e.clients.map((function(e){return{Name:e.Name,label:e.Name}}))})),a=Object(w["p"])({loading:!1,form:{Enable:!1,ProxyAll:!1,TargetName:"",IP:"",LanIPs:"",SocksPort:5415,BufferSize:8192,ConnectEnable:!1},rules:{BufferSize:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1024,max:65536,message:"数字 1k-64k",trigger:"blur",transform:function(e){return Number(e)}}],SocksPort:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:65535,message:"数字 1-65535",trigger:"blur",transform:function(e){return Number(e)}}],IP:[{required:!0,message:"必填",trigger:"blur"}]},veaClients:{}}),c=Object(w["r"])(null),o=Object(w["c"])((function(){return e.clients.forEach((function(e){e.veaIp=JSON.parse(JSON.stringify(a.veaClients[e.Id]||{IP:"",LanIPs:[]})),e.veaIp.LanIPs=e.veaIp.LanIPs.filter((function(e){return e.length>0}))})),e.clients})),l=function(){v().then((function(e){a.form.Enable=e.Enable,a.form.ProxyAll=e.ProxyAll,a.form.TargetName=e.TargetName,a.form.IP=e.IP,a.form.LanIPs=e.LanIPs.join(","),a.form.SocksPort=e.SocksPort,a.form.BufferSize=e.BufferSize,a.form.ConnectEnable=e.ConnectEnable}))},i=0,u=function e(){C["d"].connected?_().then((function(t){a.veaClients=t,i=setTimeout(e,1e3)})):(a.veaClients={},i=setTimeout(e,1e3))};Object(E["rb"])((function(){b(),l(),u()})),Object(E["wb"])((function(){clearTimeout(i)}));var d=function(){c.value.validate((function(e){if(!e)return!1;a.loading=!0;var t=JSON.parse(JSON.stringify(a.form));t.SocksPort=Number(t.SocksPort),t.BufferSize=Number(t.BufferSize),t.LanIPs=t.LanIPs.split(",").filter((function(e){return e.length>0})),k(t).then((function(e){a.loading=!1,t.IsPac&&savePac(),S["a"].success("操作成功！")})).catch((function(e){a.loading=!1}))}))},s=function(e){a.loading=!0,P({id:e.Id}).then((function(e){a.loading=!1,e?S["a"].success("成功"):S["a"].error("失败")})).catch((function(){a.loading=!1,S["a"].error("失败")}))},b=function(){I().then((function(){S["a"].success("已更新")}))};return{targets:r,shareData:n,signInState:t,state:a,showClients:o,formDom:c,handleSubmit:d,handleResetVea:s,handleUpdate:b}}},U=(n("ee78"),n("6b0d")),D=n.n(U);const A=D()(z,[["render",N],["__scopeId","data-v-adad964e"]]);t["default"]=A},ee78:function(e,t,n){"use strict";n("3b7d")}}]);