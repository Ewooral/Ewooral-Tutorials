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
              <p class="text-muted mb-4 mt-3">
                Enter your email address. A verification code will be sent to your email
              </p>
            </div>

            <form @submit.prevent="SendOtpToEmailAddress" >
               <AlertMessage :variant="dangerSuccess" :message="responseMessage" v-if="responseMessage"/>
              <div class="form-group mb-3">
                <label for="emailaddress">Email address</label>
                <input
                    class="form-control"
                    type="email"
                    id="emailaddress"
                    placeholder="Enter your email"
                    v-model="emailaddress"
                    v-validate="'required|email'"
                    :class="{'is-invalid': vErrors.has('emailaddress') }"
                    name="emailaddress"
                />
                <span v-show="vErrors.has('emailaddress')" class="help text-danger">{{ vErrors.first('emailaddress') }}</span>
              </div>
              <div class="form-group mb-0 text-center">
                <button class="btn btn-primary btn-block" id="bkcolor" type="submit">
                  Submit
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
              Already have account?
              <router-link
                  to="/business/login"
                  class="text-primary font-weight-medium ml-1"
              >Sign In</router-link
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
import Auth from "./Auth";
import constant from '../constant/index';
import customerInfo from '../../protos/Customer_grpc_web_pb';
import AlertMessage from "../shared/AlertMessage";
export default {
  data(){
    return{
      showLoader : false,
      dangerSuccess:'',
      responseMessage:'',
      emailaddress :'',
      clients :{}
    }
  },
  components:{
    Auth,
    AlertMessage
  } ,
  methods:{
    SendOtpToEmailAddress(){
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.responseMessage = '';
           let request = new customerInfo.CustomerTempOTRequestMessage();
           request.setEmailaddress(this.emailaddress);
           request.setPersonalbusinessgroupvalue("2");
           request.setMobilenumber("")
           request.setLanguageid("en");
           request.setCountrycode("");
            this.showLoader = true;
            console.log(" Email address request : ", request)

          this.clients.createCustomerGenerateOTP(request,this.$store.getters.metadata, (err, res) => {
             this.showLoader = false;
            if(err){
              console.log("Error ", err);
              this.dangerSuccess = 'danger';
              this.responseMessage = constant.serverError;
            }
            else {
              //loginErrorCode

              if(!res.getIssuccess()){
                // Check if opt is already sent registrationErrorCode
                console.log(" daataa : ", res)
                 if(res.getRegistrationerrorcode() === "OTPSENT"){
                   this.$store.dispatch('saveEmailAddress',{
                     emailAddress : this.emailaddress,
                     otpsent : 'OTPSENT'
                   })
                   this.$router.push('/business/verify').catch(() => { })
                 }
                this.dangerSuccess = 'danger';
                this.responseMessage = res.getMessage();
                console.log('Email : ' , this.emailaddress);
              }
              else {
                // start Save email in action
                this.$store.dispatch('saveEmailAddress',{
                  emailAddress : this.emailaddress
                })
                // end
                this.$router.push('/business/verify').catch(() => { })
              }
            }

           });

          return;
        }
      });
    }
  },
  mounted() {
    console.log("mounted");
     this.clients = new customerInfo.CustomerAccountClient(constant.URL,null,null);
  },
  created() {
    console.log("created");
  }
}
</script>

<style scoped>

</style>