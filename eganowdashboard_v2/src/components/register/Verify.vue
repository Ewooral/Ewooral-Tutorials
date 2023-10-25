<template>
   <Auth>
     <b-overlay :show="showLoader" rounded="sm">
     <div class="row justify-content-center">
       <div class="col-md-8 col-lg-6 col-xl-5">
         <div class="card">
           <div class="card-body p-4">
             <div class="text-center w-75 m-auto">
               <div class="auth-logo">
                 <router-link to="/" class="logo logo-dark text-center">
                  <span class="logo-lg">
                    <img src="@/assets/images/logo.svg" alt height="22" />
                  </span>
                 </router-link>

                 <router-link to="/" class="logo logo-light text-center">
                  <span class="logo-lg">
                    <img src="@/assets/images/logo-light.png" alt height="22" />
                  </span>
                 </router-link>
               </div>
               <p class="text-muted mb-4 mt-3" v-if="otpalreadysent">
<!--                 A verification code has been sent to your email. Please enter the code-->
                Verification code has already been sent to your email. Kindly enter it here!
               </p>
               <p class="text-muted mb-4 mt-3" v-else>
                 A verification code has been sent to your email. Please enter the code
                 <!-- Verification code has already been sent to your email. Kindly enter it  -->
               </p>
             </div>

             <form @submit.prevent="VerifyCustomer" >
               <AlertMessage :variant="dangerSuccess" v-if="responseMessage" :message="responseMessage" />
               <div class="form-group mb-3">
                 <label for="verificationcode"> Enter verification code</label>
                 <input
                     class="form-control"
                     type="password"
                     id="verificationcode"
                     placeholder="Enter verification code"
                     v-model="verificationcode"
                     v-validate="'required'"
                     :class="{'is-invalid': vErrors.has('verificationcode') }"
                     name="verificationcode"
                 />
                 <span v-show="vErrors.has('verificationcode')" class="help text-danger">{{ vErrors.first('verificationcode') }}</span>
               </div>
               <div class="form-group mb-0 text-center">
                 <button class="btn btn-primary btn-block" id="bkcolor" type="submit">
                   Verify
                 </button>
               </div>
             </form>

           </div>
           <!-- end card-body -->
         </div>
         <!-- end card -->

         <div class="row mt-3">
           <div class="col-12 text-center">
             <p>

             </p>
             <p class="text-muted">
               Didn't receive the code?
               <a @click="ResendVerificationCode" style="cursor: pointer"
                   class="text-primary font-weight-medium ml-1"
               >Resend</a
               >
             </p>
           </div>
           <!-- end col -->
         </div>
         <!-- end row -->
       </div>
       <!-- end col -->
     </div>
     </b-overlay>
   </Auth>
</template>

<script>
import Auth from './Auth'
import customerInfo from '../../protos/Customer_grpc_web_pb'
import constant from '../constant/index';
import AlertMessage from "../shared/AlertMessage";

export default {
  data(){
    return{
      showLoader: false,
      dangerSuccess:'',
      responseMessage:'',
      verificationcode:'',
      emailaddress:'',
      clients:{},
      otpalreadysent:''
    }
  },
  components:{
    Auth,
    AlertMessage
  },
  methods:{
    VerifyCustomer(){
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.showLoader = true;
          this.responseMessage = '';
           this.emailaddress = this.$store.getters.getUserEmailAddress.emailAddress;
           console.log("Email Address : " , this.emailaddress);
           let request = new customerInfo.CustomerTempVerifyOTRequestMessage();

            request.setMobilenumber("")
            request.setEmailaddress(this.$store.getters.getUserEmailAddress.emailAddress)
            request.setOtpvalue(this.verificationcode);
            request.setPersonalbusinessgroupvalue("2");
            request.setLanguageid("en")

            this.clients.createCustomerVerifyOTP(request, this.$store.getters.metadata, (err,res) =>{
              this.showLoader = false;
                if(res.getIssuccess()){
                   this.$store.dispatch("saveEmailAddress",{
                       otpsent : this.verificationcode,
                       emailAddress : this.emailaddress
                   })
                  this.$router.push('/business/register').catch(() => { })
                }
                else {
                  this.dangerSuccess = 'danger';
                   this.responseMessage = res.getMessage();
                }
          });
          return;
        }
      });
    },
    ResendVerificationCode(){
      try {
        let request = new customerInfo.CustomerTempOTRequestMessage();
          request.setEmailaddress(this.$store.getters.getUserEmailAddress.emailAddress)
          request.setPersonalbusinessgroupvalue("2");
          request.getLanguageid("en");
           this.showLoader = true
          this.clients.createCustomerGenerateOTP(request,{}, (err, res) => {
            this.showLoader = false
            if(err){
              console.log(" error : " , err)
            }
            else{
              if(res.getIssuccess()){
                 this.dangerSuccess = 'success'
                 this.responseMessage = 'Otp sent to your email'
              }
              else{
                 this.dangerSuccess ='info'
                this.responseMessage = res.getMessage()
              }
            }
          })
      }
      catch (e) {
         console.log(" error " , e.message)
      }
    }
  },
  mounted() {
    this.clients = new customerInfo.CustomerAccountClient(constant.URL,null,null)
  },
  created() {
    this.otpalreadysent = this.$store.getters.getUserEmailAddress.otpsent
      this.emailAddress = this.$store.getters.getUserEmailAddress.emailAddress
    if(this.$store.getters.getUserEmailAddress.emailAddress === ''){
      this.$router.push('/business/email').catch(() => { })
    }
  }
}
</script>

<style scoped>

</style>