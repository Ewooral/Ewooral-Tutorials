(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f988d2f0","chunk-2d213ca8"],{"615b":function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("Auth",[a("b-overlay",{attrs:{show:e.showLoader,rounded:"sm"}},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-8 col-lg-6 col-xl-5"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body p-4"},[a("div",{staticClass:"text-center w-75 m-auto"},[a("div",{staticClass:"auth-logo"},[a("router-link",{staticClass:"logo logo-dark text-center",attrs:{to:"/"}},[a("span",{staticClass:"logo-lg"},[a("img",{attrs:{src:t("e347"),alt:"",height:"22"}})])]),a("router-link",{staticClass:"logo logo-light text-center",attrs:{to:"/"}},[a("span",{staticClass:"logo-lg"},[a("img",{attrs:{src:t("ea27"),alt:"",height:"22"}})])])],1),a("p",{staticClass:"text-muted mb-4 mt-3"},[e._v(" Enter your email address. A verification code will be sent to your email ")])]),a("form",{on:{submit:function(s){return s.preventDefault(),e.SendOtpToEmailAddress.apply(null,arguments)}}},[e.responseMessage?a("AlertMessage",{attrs:{variant:e.dangerSuccess,message:e.responseMessage}}):e._e(),a("div",{staticClass:"form-group mb-3"},[a("label",{attrs:{for:"emailaddress"}},[e._v("Email address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.emailaddress,expression:"emailaddress"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",class:{"is-invalid":e.vErrors.has("emailaddress")},attrs:{type:"email",id:"emailaddress",placeholder:"Enter your email",name:"emailaddress"},domProps:{value:e.emailaddress},on:{input:function(s){s.target.composing||(e.emailaddress=s.target.value)}}}),a("span",{directives:[{name:"show",rawName:"v-show",value:e.vErrors.has("emailaddress"),expression:"vErrors.has('emailaddress')"}],staticClass:"help text-danger"},[e._v(e._s(e.vErrors.first("emailaddress")))])]),a("div",{staticClass:"form-group mb-0 text-center"},[a("button",{staticClass:"btn btn-primary btn-block",attrs:{id:"bkcolor",type:"submit"}},[e._v(" Submit ")])])],1)])]),a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"col-12 text-center"},[a("p"),a("p",{staticClass:"text-muted"},[e._v(" Already have account? "),a("router-link",{staticClass:"text-primary font-weight-medium ml-1",attrs:{to:"/business/login"}},[e._v("Sign In")])],1)])])])])])],1)},r=[],i=t("fa41"),l=t("4d1b"),o=t("732b"),n=t.n(o),d=t("add3"),c={data:function(){return{showLoader:!1,dangerSuccess:"",responseMessage:"",emailaddress:"",clients:{}}},components:{Auth:i["a"],AlertMessage:d["default"]},methods:{SendOtpToEmailAddress:function(){var e=this;this.$validator.validateAll().then((function(s){if(s){e.responseMessage="";var t=new n.a.CustomerTempOTRequestMessage;return t.setEmailaddress(e.emailaddress),t.setPersonalbusinessgroupvalue("2"),t.setMobilenumber(""),t.getLanguageid("en"),e.showLoader=!0,void e.clients.createCustomerGenerateOTP(t,{},(function(s,t){e.showLoader=!1,s?(console.log("Error ",s),e.dangerSuccess="danger",e.responseMessage=l["a"].serverError):t.getIssuccess()?(console.log("Email : ",e.emailaddress),e.$store.dispatch("saveEmailAddress",{emailAddress:e.emailaddress}),e.$router.push("/business/verify").catch((function(){}))):("OTPSENT"===t.getRegistrationerrorcode()&&(e.$store.dispatch("saveEmailAddress",{emailAddress:e.emailaddress,otpsent:"OTPSENT"}),e.$router.push("/business/verify").catch((function(){}))),e.dangerSuccess="danger",e.responseMessage=t.getMessage(),console.log("Email : ",e.emailaddress))}))}}))}},mounted:function(){console.log("mounted"),this.clients=new n.a.CustomerAccountClient(l["a"].URL,null,null)},created:function(){console.log("created")}},u=c,m=t("2877"),g=Object(m["a"])(u,a,r,!1,null,"55847a5e",null);s["default"]=g.exports},add3:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-12"},[t("b-alert",{attrs:{show:"",dismissible:"",variant:e.variant}},[e._v(e._s(e.message))])],1)])},r=[],i={props:{variant:{type:String},message:{type:String}}},l=i,o=t("2877"),n=Object(o["a"])(l,a,r,!1,null,"3b3ceb91",null);s["default"]=n.exports},ea27:function(e,s,t){e.exports=t.p+"img/logo-light.2b0f21ce.png"},fa41:function(e,s,t){"use strict";var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("div",{staticClass:"account-pages mt-5 mb-5"},[t("div",{staticClass:"container"},[e._t("default")],2)]),t("footer",{staticClass:"footer footer-alt"},[e._v(" "+e._s((new Date).getFullYear())+" © Eganow ")])])},r=[],i=t("2877"),l={},o=Object(i["a"])(l,a,r,!1,null,null,null);s["a"]=o.exports}}]);
//# sourceMappingURL=chunk-f988d2f0.15e0e29d.js.map