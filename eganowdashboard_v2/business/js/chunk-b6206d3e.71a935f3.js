(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b6206d3e","chunk-2d0cfea3"],{"666c":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-lg-12 col-md-12"},[s("b-alert",{attrs:{show:"",variant:"info p-2"}},[s("i",{staticClass:"mdi mdi-alert-circle-outline"}),t._v(" "+t._s(t.message)+" ")])],1)},a=[],n={props:{message:{type:String}}},r=n,c=s("2877"),o=Object(c["a"])(r,i,a,!1,null,"0db46fb9",null);e["default"]=o.exports},b72b:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("CustomHeaderAlert",{attrs:{message:t.message}}),s("div",{staticClass:"col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("SidePanel",{on:{menuClicked:t.menuClicked}}),s("div",{staticClass:"inbox-rightbar"},[s("div",{staticClass:"row justify-content-md-between align-items-md-center"},[s("div",{staticClass:"col-12"},["chat"===t.servicename?s("div",[s("GroupChat")],1):t._e(),"pay"===t.servicename?s("div",[s("Payments")],1):t._e(),"contributor"===t.servicename?s("div",[s("Contributors")],1):t._e(),"settings"===t.servicename?s("div",[s("Settings")],1):t._e(),"cashout"===t.servicename?s("div",[s("Cashout")],1):t._e()])])])],1)])])],1)},a=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"inbox-leftbar"},[s("b-button",{attrs:{block:"",variant:"danger"},on:{click:function(e){t.showModal=!0}}},[t._v("Project details")]),s("div",{staticClass:"mail-list mt-4"},[s("a",{class:{"text-danger":"pay"===t.servicename},staticStyle:{cursor:"pointer"},on:{click:t.Pay}},[s("i",{staticClass:"ri-align-justify align-bottom mr-2 "}),t._v("Pay")]),s("a",{class:{"text-danger":"contributor"===t.servicename},staticStyle:{cursor:"pointer"},on:{click:t.Contributors}},[s("i",{staticClass:"ri-file-list-2-line align-bottom mr-2"}),t._v("Contributors")]),s("a",{class:{"text-danger":"chat"===t.servicename},staticStyle:{cursor:"pointer"},on:{click:t.Chat}},[s("i",{staticClass:"ri-mail-unread-fill align-bottom mr-2"}),t._v("Chat")]),s("a",{class:{"text-danger":"cashout"===t.servicename},staticStyle:{cursor:"pointer"},on:{click:t.Cashout}},[s("i",{staticClass:"ri-store-3-fill align-bottom mr-2"}),t._v("Cash out")]),s("a",{class:{"text-danger":"settings"===t.servicename},staticStyle:{cursor:"pointer"},on:{click:t.Settings}},[s("i",{staticClass:"ri-settings-3-fill align-bottom mr-2"}),t._v("Settings")])])],1)},r=[],c={name:"SidePanel",data:function(){return{servicename:"",projectname:""}},methods:{Pay:function(){this.servicename="pay",this.$emit("menuClicked","pay")},Contributors:function(){this.servicename="contributor",this.$emit("menuClicked","contributor")},Chat:function(){this.servicename="chat",this.$emit("menuClicked","chat")},Cashout:function(){this.servicename="cashout",this.$emit("menuClicked","cashout")},Settings:function(){this.servicename="settings",this.$emit("menuClicked","settings")}},created:function(){this.projectname=this.$store.getters.GetProjectName.projectname,this.Pay()}},o=c,l=s("2877"),u=Object(l["a"])(o,n,r,!1,null,"16667f9c",null),m=u.exports,d=s("b6fc"),h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v(" Group payment ")])])}],f={name:"Payments"},b=f,p=Object(l["a"])(b,h,v,!1,null,"2b9fcf32",null),C=p.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("Settings")])])}],y={name:"Settings"},$=y,k=Object(l["a"])($,_,g,!1,null,"09d7ccf9",null),j=k.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("Cash out")])])}],P={name:"Cashout"},w=P,E=Object(l["a"])(w,x,S,!1,null,"ac61517e",null),G=E.exports,O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("Contributors ")])])}],D={name:"Contributors"},H=D,N=Object(l["a"])(H,O,A,!1,null,"4c1baaea",null),J=N.exports,M=s("666c"),Y={name:"GroupServices",data:function(){return{message:"You can perform all this in a group",servicename:"",dataDisplay:[]}},components:{Payments:C,SidePanel:m,GroupChat:d["default"],Contributors:J,Settings:j,Cashout:G,CustomHeaderAlert:M["default"]},methods:{menuClicked:function(t){this.servicename=t}},computed:{rows:function(){return this.dataDisplay.length}},created:function(){this.$store.dispatch("setAppHeader",{title:"Projects",items:[{text:"Dashboard",href:"#"},{text:this.$store.getters.GetGroupName.groupname,href:"#"},{text:this.$store.getters.GetProjectName.projectname,href:"#"}]})}},q=Y,z=Object(l["a"])(q,i,a,!1,null,"3b621a1f",null);e["default"]=z.exports}}]);
//# sourceMappingURL=chunk-b6206d3e.71a935f3.js.map