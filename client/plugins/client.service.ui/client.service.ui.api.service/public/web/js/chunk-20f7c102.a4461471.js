(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20f7c102"],{"39ff":function(e,t,a){var o=a("5d79");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var l=a("499e").default;l("650ca966",o,!0,{sourceMap:!1,shadowMode:!1})},"3b98":function(e,t,a){var o=a("24fb");t=o(!1),t.push([e.i,".remark[data-v-a1d1da7c]{margin-top:1rem}",""]),e.exports=t},"5d79":function(e,t,a){var o=a("24fb");t=o(!1),t.push([e.i,"@media screen and (max-width:500px){.el-col-24[data-v-544e0d34]{max-width:100%;flex:0 0 100%}}.forward-wrap[data-v-544e0d34]{padding:2rem}.forward-wrap .inner[data-v-544e0d34]{border:1px solid #eee;border-radius:.4rem}.forward-wrap .head[data-v-544e0d34]{padding:1rem;border-bottom:1px solid #eee}.forward-wrap .content[data-v-544e0d34]{padding:1rem}.forward-wrap .content .item[data-v-544e0d34]{padding:1rem .6rem}.forward-wrap .content .item dl[data-v-544e0d34]{border:1px solid #eee;border-radius:.4rem}.forward-wrap .content .item dl dt[data-v-544e0d34]{border-bottom:1px solid #eee;padding:1rem;font-size:1.4rem;font-weight:600;color:#555;line-height:2.4rem}.forward-wrap .content .item dl dd[data-v-544e0d34]{padding:.4rem 1rem}.forward-wrap .content .item dl dd[data-v-544e0d34]:nth-child(2){padding:1rem;background-color:#fafafa}.forward-wrap .content .item dl dd.forwards[data-v-544e0d34]{padding:0}.forward-wrap .content .item dl dd.forwards li[data-v-544e0d34]{border-bottom:1px solid #eee;padding:1rem}.forward-wrap .content .item dl dd.forwards li[data-v-544e0d34]:last-child{border:0}.forward-wrap .alert[data-v-544e0d34]{margin-top:1rem}",""]),e.exports=t},"675e":function(e,t,a){"use strict";a("e97e")},"7e3a":function(e,t,a){var o=a("24fb");t=o(!1),t.push([e.i,".forward-wrap .el-collapse-item__content,.forward-wrap .el-collapse-item__header,.forward-wrap .el-collapse-item__wrap{border-right:0;border-left:0}.forward-wrap .el-collapse-item__content{padding:0}",""]),e.exports=t},c0b1:function(e,t,a){"use strict";a("39ff")},d461:function(e,t,a){"use strict";a.r(t);var o=a("7a23");const l=e=>(Object(o["pushScopeId"])("data-v-544e0d34"),e=e(),Object(o["popScopeId"])(),e),r={class:"forward-wrap"},c={class:"inner"},d={class:"head flex"},n={class:"content"},s={class:"item"},i={class:"flex"},b={class:"flex-1 t-c"},m={class:"forwards"},u={class:"flex"},p=l(()=>Object(o["createElementVNode"])("span",{class:"flex-1"},"访问",-1)),j={class:"flex"},O=l(()=>Object(o["createElementVNode"])("span",{class:"flex-1"},"目标",-1)),f={class:"t-r"},w={class:"btns t-r"};function h(e,t,a,l,h,V){const v=Object(o["resolveComponent"])("el-button"),g=Object(o["resolveComponent"])("el-switch"),C=Object(o["resolveComponent"])("el-popconfirm"),N=Object(o["resolveComponent"])("el-collapse-item"),x=Object(o["resolveComponent"])("el-collapse"),k=Object(o["resolveComponent"])("el-col"),T=Object(o["resolveComponent"])("el-row"),y=Object(o["resolveComponent"])("AddForward"),D=Object(o["resolveComponent"])("AddListen");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",r,[Object(o["createElementVNode"])("div",c,[Object(o["createElementVNode"])("div",d,[Object(o["createVNode"])(v,{type:"primary",size:"small",onClick:l.handleAddListen},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("增加转发监听")]),_:1},8,["onClick"]),Object(o["createVNode"])(v,{size:"small",onClick:l.getData},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("刷新列表")]),_:1},8,["onClick"])]),Object(o["createElementVNode"])("div",n,[Object(o["createVNode"])(T,null,{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.list,(e,a)=>(Object(o["openBlock"])(),Object(o["createBlock"])(k,{key:a,xs:24,sm:12,md:12,lg:12,xl:12},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",s,[Object(o["createElementVNode"])("dl",null,[Object(o["createElementVNode"])("dt",i,[Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(l.shareData.aliveTypes[e.AliveType]),1),Object(o["createElementVNode"])("span",b,"0.0.0.0:"+Object(o["toDisplayString"])(e.Port),1),Object(o["createElementVNode"])("span",null,[Object(o["createVNode"])(g,{size:"small",onClick:t[0]||(t[0]=Object(o["withModifiers"])(()=>{},["stop"])),onChange:t=>l.onListeningChange(e),modelValue:e.Listening,"onUpdate:modelValue":t=>e.Listening=t,style:{"margin-top":"-6px"}},null,8,["onChange","modelValue","onUpdate:modelValue"])])]),Object(o["createElementVNode"])("dd",null,Object(o["toDisplayString"])(e.Desc),1),Object(o["createElementVNode"])("dd",m,[Object(o["createVNode"])(x,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(N,{title:"转发列表"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("ul",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.Forwards,(t,a)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{key:a},[Object(o["createElementVNode"])("p",u,[p,Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(t.SourceIp)+":"+Object(o["toDisplayString"])(e.Port),1)]),Object(o["createElementVNode"])("p",j,[O,Object(o["createElementVNode"])("span",null,"【"+Object(o["toDisplayString"])(t.Name)+"】"+Object(o["toDisplayString"])(t.TargetIp)+":"+Object(o["toDisplayString"])(t.TargetPort),1)]),Object(o["createElementVNode"])("p",f,[Object(o["createVNode"])(C,{title:"删除不可逆，是否确认",onConfirm:a=>l.handleRemoveForward(e,t)},{reference:Object(o["withCtx"])(()=>[Object(o["createVNode"])(v,{plain:"",type:"danger",size:"small"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("删除")]),_:1})]),_:2},1032,["onConfirm"]),Object(o["createVNode"])(v,{plain:"",size:"small",onClick:a=>l.handleEditForward(e,t)},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("编辑")]),_:2},1032,["onClick"])])]))),128))])]),_:2},1024)]),_:2},1024)]),Object(o["createElementVNode"])("dd",w,[Object(o["createVNode"])(C,{title:"删除不可逆，是否确认",onConfirm:t=>l.handleRemoveListen(e)},{reference:Object(o["withCtx"])(()=>[Object(o["createVNode"])(v,{plain:"",type:"danger",size:"small"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("删除")]),_:1})]),_:2},1032,["onConfirm"]),Object(o["createVNode"])(v,{plain:"",type:"info",size:"small",onClick:t=>l.handleEditListen(e)},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("编辑")]),_:2},1032,["onClick"]),e.AliveType==l.shareData.aliveTypesName.web||e.Forwards.length<1?(Object(o["openBlock"])(),Object(o["createBlock"])(v,{key:0,plain:"",type:"info",size:"small",onClick:t=>l.handleAddForward(e)},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("增加转发")]),_:2},1032,["onClick"])):Object(o["createCommentVNode"])("",!0)])])])]),_:2},1024))),128))]),_:1})]),e.showAddForward?(Object(o["openBlock"])(),Object(o["createBlock"])(y,{key:0,modelValue:e.showAddForward,"onUpdate:modelValue":t[1]||(t[1]=t=>e.showAddForward=t),onSuccess:l.getData},null,8,["modelValue","onSuccess"])):Object(o["createCommentVNode"])("",!0),e.showAddListen?(Object(o["openBlock"])(),Object(o["createBlock"])(D,{key:1,modelValue:e.showAddListen,"onUpdate:modelValue":t[2]||(t[2]=t=>e.showAddListen=t),onSuccess:l.getData},null,8,["modelValue","onSuccess"])):Object(o["createCommentVNode"])("",!0)])])}var V=a("a1e9"),v=a("f8aa"),g=a("5c40");const C=["innerHTML"];function N(e,t,a,l,r,c){const d=Object(o["resolveComponent"])("el-input"),n=Object(o["resolveComponent"])("el-form-item"),s=Object(o["resolveComponent"])("el-col"),i=Object(o["resolveComponent"])("el-option"),b=Object(o["resolveComponent"])("el-select"),m=Object(o["resolveComponent"])("el-row"),u=Object(o["resolveComponent"])("el-form"),p=Object(o["resolveComponent"])("el-button"),j=Object(o["resolveComponent"])("el-dialog");return Object(o["openBlock"])(),Object(o["createBlock"])(j,{title:"转发",top:"1vh","destroy-on-close":"",modelValue:e.show,"onUpdate:modelValue":t[5]||(t[5]=t=>e.show=t),center:"","close-on-click-modal":!1,width:"500px"},{footer:Object(o["withCtx"])(()=>[Object(o["createVNode"])(p,{onClick:l.handleCancel},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("取 消")]),_:1},8,["onClick"]),Object(o["createVNode"])(p,{type:"primary",loading:e.loading,onClick:l.handleSubmit},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("确 定")]),_:1},8,["loading","onClick"])]),default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(u,{ref:"formDom",model:e.form,rules:e.rules,"label-width":"80px"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{label:"","label-width":"0"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(m,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,{span:12},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{label:"源host",prop:"SourceIp"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,{disabled:l.addForwardData.currentLsiten.AliveType==l.shareData.aliveTypesName.tunnel,modelValue:e.form.SourceIp,"onUpdate:modelValue":t[0]||(t[0]=t=>e.form.SourceIp=t)},null,8,["disabled","modelValue"])]),_:1})]),_:1}),Object(o["createVNode"])(s,{span:12},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{label:"目标端",prop:"Name"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(b,{modelValue:e.form.Name,"onUpdate:modelValue":t[1]||(t[1]=t=>e.form.Name=t),placeholder:"选择目标"},{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.clients,(e,t)=>(Object(o["openBlock"])(),Object(o["createBlock"])(i,{key:t,label:e.Name,value:e.Name},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),Object(o["createVNode"])(n,{label:"","label-width":"0"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(m,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,{span:12},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{label:"目标ip",prop:"TargetIp"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,{modelValue:e.form.TargetIp,"onUpdate:modelValue":t[2]||(t[2]=t=>e.form.TargetIp=t)},null,8,["modelValue"])]),_:1})]),_:1}),Object(o["createVNode"])(s,{span:12},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{label:"目标端口",prop:"TargetPort"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,{modelValue:e.form.TargetPort,"onUpdate:modelValue":t[3]||(t[3]=t=>e.form.TargetPort=t)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),Object(o["createVNode"])(n,{label:"简单说明",prop:"Desc"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,{modelValue:e.form.Desc,"onUpdate:modelValue":t[4]||(t[4]=t=>e.form.Desc=t)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),Object(o["createElementVNode"])("div",{class:"remark t-c",innerHTML:l.remark},null,8,C)]),_:1},8,["modelValue"])}var x=a("3fd2"),k=a("8286"),T={props:["modelValue"],emits:["update:modelValue","success"],setup(e,{emit:t}){const a=Object(k["a"])(),o={ListenID:0,ID:0,SourceIp:"0.0.0.0",Name:"B客户端",TargetIp:"127.0.0.1",TargetPort:80,AliveType:a.aliveTypesName.tunnel+"",Desc:""},l=Object(x["a"])(),r=Object(g["T"])("add-forward-data"),c=Object(V["reactive"])({show:e.modelValue,loading:!1,form:{ID:r.value.forward.ID||o.ID,SourceIp:r.value.forward.SourceIp||o.SourceIp,Name:r.value.forward.Name||o.Name,TargetIp:r.value.forward.TargetIp||o.TargetIp,TargetPort:r.value.forward.TargetPort||o.TargetPort,Desc:r.value.forward.Desc||o.Desc},rules:{SourceIp:[{required:!0,message:"必填",trigger:"blur"}],TargetIp:[{required:!0,message:"必填",trigger:"blur"}],TargetPort:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:65535,message:"数字 1-65535",trigger:"blur",transform(e){return Number(e)}}]}});Object(g["lc"])(()=>c.show,e=>{e||setTimeout(()=>{t("update:modelValue",e)},300)});const d=Object(V["computed"])(()=>[`本客户端(${c.form.SourceIp}:${r.value.currentLsiten.Port})`,"<br/>"," -> ",`【${a.aliveTypes[r.value.currentLsiten.AliveType]}】`," -> ","<br/>",`${c.form.Name}(${c.form.TargetIp}:${c.form.TargetPort})`].join("")),n=Object(V["ref"])(null),s=()=>{n.value.validate(e=>{if(!e)return!1;c.loading=!0,c.form.TargetPort=Number(c.form.TargetPort);const a={ListenID:r.value.currentLsiten.ID,Forward:c.form};Object(v["b"])(a).then(()=>{c.loading=!1,c.show=!1,t("success")}).catch(e=>{c.loading=!1})})},i=()=>{c.show=!1};return{shareData:a,...Object(V["toRefs"])(c),...Object(V["toRefs"])(l),addForwardData:r,formDom:n,remark:d,handleSubmit:s,handleCancel:i}}},y=(a("675e"),a("6b0d")),D=a.n(y);const _=D()(T,[["render",N],["__scopeId","data-v-a1d1da7c"]]);var I=_;function L(e,t,a,l,r,c){const d=Object(o["resolveComponent"])("el-input"),n=Object(o["resolveComponent"])("el-form-item"),s=Object(o["resolveComponent"])("el-option"),i=Object(o["resolveComponent"])("el-select"),b=Object(o["resolveComponent"])("el-form"),m=Object(o["resolveComponent"])("el-button"),u=Object(o["resolveComponent"])("el-dialog");return Object(o["openBlock"])(),Object(o["createBlock"])(u,{title:e.form.ID>0?"编辑监听":"新增监听",top:"1vh","destroy-on-close":"",modelValue:e.show,"onUpdate:modelValue":t[3]||(t[3]=t=>e.show=t),center:"","close-on-click-modal":!1,width:"260px"},{footer:Object(o["withCtx"])(()=>[Object(o["createVNode"])(m,{onClick:l.handleCancel},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("取 消")]),_:1},8,["onClick"]),Object(o["createVNode"])(m,{type:"primary",loading:e.loading,onClick:l.handleSubmit},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("确 定")]),_:1},8,["loading","onClick"])]),default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(b,{ref:"formDom",model:e.form,rules:e.rules,"label-width":"80px"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(n,{label:"监听端口",prop:"Port"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,{modelValue:e.form.Port,"onUpdate:modelValue":t[0]||(t[0]=t=>e.form.Port=t),readonly:e.form.ID>0},null,8,["modelValue","readonly"])]),_:1}),Object(o["createVNode"])(n,{label:"连接类型",prop:"AliveType"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,{modelValue:e.form.AliveType,"onUpdate:modelValue":t[1]||(t[1]=t=>e.form.AliveType=t),placeholder:"选择类型"},{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(l.shareData.aliveTypes,(e,t)=>(Object(o["openBlock"])(),Object(o["createBlock"])(s,{key:t,label:e,value:t},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),Object(o["createVNode"])(n,{label:"简单说明",prop:"Desc"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,{modelValue:e.form.Desc,"onUpdate:modelValue":t[2]||(t[2]=t=>e.form.Desc=t)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"])}var A={props:["modelValue"],emits:["update:modelValue","success"],setup(e,{emit:t}){const a=Object(g["T"])("add-listen-data"),o=Object(k["a"])(),l=Object(V["reactive"])({show:e.modelValue,loading:!1,form:{ID:a.value.ID||0,Port:a.value.Port||0,AliveType:(a.value.AliveType||o.aliveTypesName.tunnel)+"",Desc:a.value.Desc||"",ForwardType:o.forwardTypes.forward},rules:{Port:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:65535,message:"数字 1-65535",trigger:"blur",transform(e){return Number(e)}}]}});Object(g["lc"])(()=>l.show,e=>{e||setTimeout(()=>{t("update:modelValue",e)},300)});const r=Object(V["ref"])(null),c=()=>{r.value.validate(e=>{if(!e)return!1;l.loading=!0;const a=JSON.parse(JSON.stringify(l.form));a.Port=Number(a.Port),a.AliveType=Number(a.AliveType),a.ForwardType=Number(a.ForwardType),Object(v["c"])(a).then(()=>{l.loading=!1,l.show=!1,t("success")}).catch(e=>{l.loading=!1})})},d=()=>{l.show=!1};return{shareData:o,...Object(V["toRefs"])(l),formDom:r,handleSubmit:c,handleCancel:d}}};const E=D()(A,[["render",L]]);var S=E,B={service:"TcpForwardClientService",components:{AddListen:S,AddForward:I},setup(){const e=Object(k["a"])(),t=Object(V["reactive"])({loading:!1,list:[],currentLsiten:{Port:0},showAddListen:!1,showAddForward:!1}),a=Object(V["ref"])([]),o=()=>{Object(v["e"])().then(e=>{t.list=e})},l=(e,t)=>{a.value=t.map(e=>e.ID)},r=Object(V["ref"])({ID:0});Object(g["yb"])("add-listen-data",r);const c=()=>{r.value={ID:0},t.showAddListen=!0},d=e=>{r.value=e,t.showAddListen=!0},n=e=>{Object(v["k"])(e.ID).then(()=>{o()})},s=e=>{e.Listening?Object(v["m"])(e.ID).then(o).catch(o):Object(v["o"])(e.ID).then(o).catch(o)},i=Object(V["ref"])({forward:{ID:0},ListenID:0,currentLsiten:{ID:0,Port:0}});Object(g["yb"])("add-forward-data",i);const b=e=>{i.value.currentLsiten=e,i.value.forward={ID:0},t.showAddForward=!0},m=(e,a)=>{i.value.currentLsiten=e,i.value.forward=a,t.showAddForward=!0},u=(e,t)=>{Object(v["j"])(e.ID,t.ID).then(()=>{o()})};return Object(g["pb"])(()=>{o()}),{...Object(V["toRefs"])(t),shareData:e,getData:o,expandKeys:a,onExpand:l,handleRemoveListen:n,handleAddListen:c,handleEditListen:d,onListeningChange:s,handleAddForward:b,handleEditForward:m,handleRemoveForward:u}}};a("d779"),a("c0b1");const F=D()(B,[["render",h],["__scopeId","data-v-544e0d34"]]);t["default"]=F},d779:function(e,t,a){"use strict";a("f230")},e97e:function(e,t,a){var o=a("3b98");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var l=a("499e").default;l("d1fa99e8",o,!0,{sourceMap:!1,shadowMode:!1})},f230:function(e,t,a){var o=a("7e3a");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var l=a("499e").default;l("3856f0fc",o,!0,{sourceMap:!1,shadowMode:!1})}}]);