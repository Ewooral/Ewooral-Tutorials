(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b80c121c","chunk-2d213ca8"],{"0b00":function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e._self._c;return s("Auth",[s("b-overlay",{attrs:{show:e.showLoader,rounded:"sm"}},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-md-8 col-lg-6 col-xl-5"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body p-4"},[s("div",{staticClass:"text-center w-75 m-auto"},[s("div",{staticClass:"auth-logo"},[s("router-link",{staticClass:"logo logo-dark text-center",attrs:{to:"/"}},[s("span",{staticClass:"logo-lg"},[s("img",{attrs:{src:t("e347"),alt:"",height:"22"}})])]),s("router-link",{staticClass:"logo logo-light text-center",attrs:{to:"/"}},[s("span",{staticClass:"logo-lg"},[s("img",{attrs:{src:t("ea27"),alt:"",height:"22"}})])])],1),e.otpalreadysent?s("p",{staticClass:"text-muted mb-4 mt-3"},[e._v(" Verification code has already been sent to your email. Kindly enter it here! ")]):s("p",{staticClass:"text-muted mb-4 mt-3"},[e._v(" A verification code has been sent to your email. Please enter the code ")])]),s("form",{on:{submit:function(s){return s.preventDefault(),e.VerifyCustomer.apply(null,arguments)}}},[e.responseMessage?s("AlertMessage",{attrs:{variant:e.dangerSuccess,message:e.responseMessage}}):e._e(),s("div",{staticClass:"form-group mb-3"},[s("label",{attrs:{for:"verificationcode"}},[e._v(" Enter verification code")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.verificationcode,expression:"verificationcode"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.vErrors.has("verificationcode")},attrs:{type:"password",id:"verificationcode",placeholder:"Enter verification code",name:"verificationcode"},domProps:{value:e.verificationcode},on:{input:function(s){s.target.composing||(e.verificationcode=s.target.value)}}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.vErrors.has("verificationcode"),expression:"vErrors.has('verificationcode')"}],staticClass:"help text-danger"},[e._v(e._s(e.vErrors.first("verificationcode")))])]),s("div",{staticClass:"form-group mb-0 text-center"},[s("button",{staticClass:"btn btn-primary btn-block",attrs:{id:"bkcolor",type:"submit"}},[e._v(" Verify ")])])],1)])]),s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col-12 text-center"},[s("p"),s("p",{staticClass:"text-muted"},[e._v(" Didn't receive the code? "),s("a",{staticClass:"text-primary font-weight-medium ml-1",staticStyle:{cursor:"pointer"},on:{click:e.ResendVerificationCode}},[e._v("Resend")])])])])])])])],1)},i=[],r=(t("14d9"),t("fa41")),o=t("732b"),n=t.n(o),d=t("4d1b"),l=t("add3"),c={data(){return{showLoader:!1,dangerSuccess:"",responseMessage:"",verificationcode:"",emailaddress:"",clients:{},otpalreadysent:""}},components:{Auth:r["a"],AlertMessage:l["default"]},methods:{VerifyCustomer(){this.$validator.validateAll().then(e=>{if(e){this.showLoader=!0,this.responseMessage="",this.emailaddress=this.$store.getters.getUserEmailAddress.emailAddress,console.log("Email Address : ",this.emailaddress);let e=new n.a.CustomerTempVerifyOTRequestMessage;return e.setMobilenumber(""),e.setEmailaddress(this.$store.getters.getUserEmailAddress.emailAddress),e.setOtpvalue(this.verificationcode),e.setPersonalbusinessgroupvalue("2"),e.setLanguageid("en"),void this.clients.createCustomerVerifyOTP(e,this.$store.getters.metadata,(e,s)=>{this.showLoader=!1,s.getIssuccess()?(this.$store.dispatch("saveEmailAddress",{otpsent:this.verificationcode,emailAddress:this.emailaddress}),this.$router.push("/business/register").catch(()=>{})):(this.dangerSuccess="danger",this.responseMessage=s.getMessage())})}})},ResendVerificationCode(){try{let e=new n.a.CustomerTempOTRequestMessage;e.setEmailaddress(this.$store.getters.getUserEmailAddress.emailAddress),e.setPersonalbusinessgroupvalue("2"),e.getLanguageid("en"),this.showLoader=!0,this.clients.createCustomerGenerateOTP(e,{},(e,s)=>{this.showLoader=!1,e?console.log(" error : ",e):s.getIssuccess()?(this.dangerSuccess="success",this.responseMessage="Otp sent to your email"):(this.dangerSuccess="info",this.responseMessage=s.getMessage())})}catch(e){console.log(" error ",e.message)}}},mounted(){this.clients=new n.a.CustomerAccountClient(d["a"].URL,null,null)},created(){this.otpalreadysent=this.$store.getters.getUserEmailAddress.otpsent,this.emailAddress=this.$store.getters.getUserEmailAddress.emailAddress,""===this.$store.getters.getUserEmailAddress.emailAddress&&this.$router.push("/business/email").catch(()=>{})}},u=c,m=t("2877"),g=Object(m["a"])(u,a,i,!1,null,"5706d65a",null);s["default"]=g.exports},add3:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e._self._c;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[e.dismissed?e._e():s("b-alert",{attrs:{show:"",dismissible:"",variant:e.variant}},[e._v(e._s(e.message))])],1)])},i=[],r={props:{variant:{type:String},message:{type:String}},data(){return{dismissSecs:5,dismissCountDown:0,dismissed:!1}},methods:{dismissAlert(){setTimeout(()=>{this.dismissed=!0},1e4)}},mounted(){this.dismissAlert()}},o=r,n=t("2877"),d=Object(n["a"])(o,a,i,!1,null,"1be72a84",null);s["default"]=d.exports},ea27:function(e,s,t){e.exports=t.p+"img/logo-light.2b0f21ce.png"},fa41:function(e,s,t){"use strict";var a=function(){var e=this,s=e._self._c;return s("div",[s("div",{staticClass:"account-pages mt-5 mb-5"},[s("div",{staticClass:"container"},[e._t("default")],2)]),s("footer",{staticClass:"footer footer-alt"},[e._v(" "+e._s((new Date).getFullYear())+" © Eganow "),s("span",[e._v(e._s(e.$t("setting.version")))])])])},i=[],r=t("2877"),o={},n=Object(r["a"])(o,a,i,!1,null,null,null);s["a"]=n.exports}}]);
//# sourceMappingURL=chunk-b80c121c.c67ec997.js.map