(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b6206d3e","chunk-2d0cfea3"],{"666c":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-12 col-md-12"},[e("b-alert",{attrs:{show:"",variant:"info p-2"}},[e("i",{staticClass:"mdi mdi-alert-circle-outline"}),t._v(" "+t._s(t.message)+" ")])],1)},a=[],r={props:{message:{type:String}}},n=r,c=s("2877"),o=Object(c["a"])(n,i,a,!1,null,"0db46fb9",null);e["default"]=o.exports},b72b:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("CustomHeaderAlert",{attrs:{message:t.message}}),e("div",{staticClass:"col-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("SidePanel",{on:{menuClicked:t.menuClicked}}),e("div",{staticClass:"inbox-rightbar"},[e("div",{staticClass:"row justify-content-md-between align-items-md-center"},[e("div",{staticClass:"col-12"},["chat"===t.servicename?e("div",[e("GroupChat")],1):t._e(),"pay"===t.servicename?e("div",[e("Payments")],1):t._e(),"contributor"===t.servicename?e("div",[e("Contributors")],1):t._e(),"settings"===t.servicename?e("div",[e("Settings")],1):t._e(),"cashout"===t.servicename?e("div",[e("Cashout")],1):t._e()])])])],1)])])],1)},a=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"inbox-leftbar"},[e("b-button",{attrs:{block:"",variant:"danger"},on:{click:function(e){t.showModal=!0}}},[t._v("Project details")]),e("div",{staticClass:"mail-list mt-4"},[e("a",{class:{"text-danger":"pay"===t.servicename},staticStyle:{cursor:"pointer"},on:{click:t.Pay}},[e("i",{staticClass:"ri-align-justify align-bottom mr-2"}),t._v("Pay")]),e("a",{class:{"text-danger":"contributor"===t.servicename},staticStyle:{cursor:"pointer"},on:{click:t.Contributors}},[e("i",{staticClass:"ri-file-list-2-line align-bottom mr-2"}),t._v("Contributors")]),e("a",{class:{"text-danger":"chat"===t.servicename},staticStyle:{cursor:"pointer"},on:{click:t.Chat}},[e("i",{staticClass:"ri-mail-unread-fill align-bottom mr-2"}),t._v("Chat")]),e("a",{class:{"text-danger":"cashout"===t.servicename},staticStyle:{cursor:"pointer"},on:{click:t.Cashout}},[e("i",{staticClass:"ri-store-3-fill align-bottom mr-2"}),t._v("Cash out")]),e("a",{class:{"text-danger":"settings"===t.servicename},staticStyle:{cursor:"pointer"},on:{click:t.Settings}},[e("i",{staticClass:"ri-settings-3-fill align-bottom mr-2"}),t._v("Settings")])])],1)},n=[],c={name:"SidePanel",data(){return{servicename:"",projectname:""}},methods:{Pay(){this.servicename="pay",this.$emit("menuClicked","pay")},Contributors(){this.servicename="contributor",this.$emit("menuClicked","contributor")},Chat(){this.servicename="chat",this.$emit("menuClicked","chat")},Cashout(){this.servicename="cashout",this.$emit("menuClicked","cashout")},Settings(){this.servicename="settings",this.$emit("menuClicked","settings")}},created(){this.projectname=this.$store.getters.GetProjectName.projectname,this.Pay()}},o=c,l=s("2877"),u=Object(l["a"])(o,r,n,!1,null,"16667f9c",null),m=u.exports,d=s("b6fc"),h=function(){var t=this;t._self._c;return t._m(0)},v=[function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v(" Group payment ")])])}],f={name:"Payments"},b=f,p=Object(l["a"])(b,h,v,!1,null,"2b9fcf32",null),C=p.exports,_=function(){var t=this;t._self._c;return t._m(0)},g=[function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("Settings")])])}],y={name:"Settings"},k=y,j=Object(l["a"])(k,_,g,!1,null,"09d7ccf9",null),x=j.exports,S=function(){var t=this;t._self._c;return t._m(0)},P=[function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("Cash out")])])}],w={name:"Cashout"},$=w,G=Object(l["a"])($,S,P,!1,null,"ac61517e",null),O=G.exports,A=function(){var t=this;t._self._c;return t._m(0)},D=[function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("Contributors ")])])}],H={name:"Contributors"},N=H,J=Object(l["a"])(N,A,D,!1,null,"4c1baaea",null),M=J.exports,Y=s("666c"),q={name:"GroupServices",data(){return{message:"You can perform all this in a group",servicename:"",dataDisplay:[]}},components:{Payments:C,SidePanel:m,GroupChat:d["default"],Contributors:M,Settings:x,Cashout:O,CustomHeaderAlert:Y["default"]},methods:{menuClicked(t){this.servicename=t}},computed:{rows(){return this.dataDisplay.length}},created(){this.$store.dispatch("setAppHeader",{title:"Projects",items:[{text:"Dashboard",href:"#"},{text:this.$store.getters.GetGroupName.groupname,href:"#"},{text:this.$store.getters.GetProjectName.projectname,href:"#"}]})}},z=q,B=Object(l["a"])(z,i,a,!1,null,"3b621a1f",null);e["default"]=B.exports}}]);
//# sourceMappingURL=chunk-b6206d3e.b8bd8cda.js.map