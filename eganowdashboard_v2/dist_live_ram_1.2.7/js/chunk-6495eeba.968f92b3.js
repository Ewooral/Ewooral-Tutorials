(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6495eeba","chunk-2d213ca8"],{"701b":function(s,e,t){"use strict";t.r(e);var a=function(){var s=this,e=s._self._c;return e("Auth",[e("b-overlay",{attrs:{show:s.showLoader,rounded:"sm"}},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-8 col-lg-6 col-xl-5"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body p-4"},[e("div",{staticClass:"text-center w-75 m-auto"},[e("div",{staticClass:"auth-logo"},[e("router-link",{staticClass:"logo logo-dark text-center",attrs:{to:"/"}},[e("span",{staticClass:"logo-lg"},[e("img",{attrs:{src:t("e347"),alt:"",height:"22"}})])]),e("router-link",{staticClass:"logo logo-light text-center",attrs:{to:"/"}},[e("span",{staticClass:"logo-lg"},[e("img",{attrs:{src:t("ea27"),alt:"",height:"22"}})])])],1),e("p",{staticClass:"text-muted mb-4 mt-3"},[s._v(" Enter Your Registered Email Address ")]),e("p")]),e("form",{on:{submit:function(e){return e.preventDefault(),s.EmailVerification.apply(null,arguments)}}},[s.responseMessage?e("AlertMessage",{attrs:{variant:s.dangerSuccess,message:s.responseMessage}}):s._e(),e("div",{staticClass:"form-group mb-3"},[e("label",{attrs:{for:"emailaddress"}},[s._v("Email address")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.emailaddress,expression:"emailaddress"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",class:{"is-invalid":s.vErrors.has("emailaddress")},attrs:{type:"email",id:"emailaddress",placeholder:"Enter your email",name:"emailaddress"},domProps:{value:s.emailaddress},on:{input:function(e){e.target.composing||(s.emailaddress=e.target.value)}}}),e("span",{directives:[{name:"show",rawName:"v-show",value:s.vErrors.has("emailaddress"),expression:"vErrors.has('emailaddress')"}],staticClass:"help text-danger"},[s._v(s._s(s.vErrors.first("emailaddress")))])]),e("div",{staticClass:"form-group mb-0 text-center"},[e("button",{staticClass:"btn btn-primary btn-block",attrs:{id:"bkcolor",type:"submit"}},[s._v(" Submit ")])])],1)])]),e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col-12 text-center"},[e("p"),e("p",{staticClass:"text-muted"},[s._v(" Already have account? "),e("router-link",{staticClass:"text-primary font-weight-medium ml-1",attrs:{to:"/business/login"}},[s._v("Sign In")])],1)])])])])])],1)},i=[],r=(t("14d9"),t("add3")),o=t("fa41"),l=t("732b"),n=t.n(l),d=t("4d1b"),c={data(){return{showLoader:!1,dangerSuccess:"",responseMessage:"",emailaddress:"",clients:{}}},components:{Auth:o["a"],AlertMessage:r["default"]},methods:{EmailVerification(){this.$validator.validateAll().then(s=>{if(s){this.responseMessage="";let s=new n.a.OTRequestMessage;return s.setCustomermobilenooremail(this.emailaddress),s.setCountrycode(this.$store.getters.getCountrycode),s.setLanguageid("en"),s.setPersonalbusinessvalue(2),this.showLoader=!0,void this.clients.generateOTPBeforeLogin(s,this.$store.getters.metadata,(s,e)=>{this.showLoader=!1,s?(console.log("Error ",s),this.dangerSuccess="danger",this.responseMessage=d["a"].serverError):e.getIssuccess()?(console.log("Email : ",this.emailaddress),this.$store.dispatch("saveEmailAddress",{emailAddress:this.emailaddress}),this.$router.push("/business/fp/verifyotp").catch(()=>{})):(this.dangerSuccess="danger",this.responseMessage=e.getMessage())})}})}},mounted(){console.log("mounted"),this.clients=new n.a.CustomerAccountClient(d["a"].URL,null,null)}},u=c,m=t("2877"),g=Object(m["a"])(u,a,i,!1,null,"18cd9b9d",null);e["default"]=g.exports},add3:function(s,e,t){"use strict";t.r(e);var a=function(){var s=this,e=s._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[s.dismissed?s._e():e("b-alert",{attrs:{show:"",dismissible:"",variant:s.variant}},[s._v(s._s(s.message))])],1)])},i=[],r={props:{variant:{type:String},message:{type:String}},data(){return{dismissSecs:5,dismissCountDown:0,dismissed:!1}},methods:{dismissAlert(){setTimeout(()=>{this.dismissed=!0},1e4)}},mounted(){this.dismissAlert()}},o=r,l=t("2877"),n=Object(l["a"])(o,a,i,!1,null,"1be72a84",null);e["default"]=n.exports},ea27:function(s,e,t){s.exports=t.p+"img/logo-light.2b0f21ce.png"},fa41:function(s,e,t){"use strict";var a=function(){var s=this,e=s._self._c;return e("div",[e("div",{staticClass:"account-pages mt-5 mb-5"},[e("div",{staticClass:"container"},[s._t("default")],2)]),e("footer",{staticClass:"footer footer-alt"},[s._v(" "+s._s((new Date).getFullYear())+" © Eganow "),e("span",[s._v(s._s(s.$t("setting.version")))])])])},i=[],r=t("2877"),o={},l=Object(r["a"])(o,a,i,!1,null,null,null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-6495eeba.968f92b3.js.map