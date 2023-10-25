<template>
  <Auth>
<!--    <b-overlay :show="showLoader" rounded="sm">-->

         <div class="image-loader"  id="image-loader" >
             <lottie-loader :loading="showLoader" />
         </div>
         <div class="row justify-content-center content" >
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
                                 {{ $t('login.title') }}
                             </p>
                         </div>

                         <form @submit.prevent="UserLogin" >

                             <!--                  <b-alert show dismissible variant="danger" v-if="responseMessage"> {{responseMessage}}</b-alert>-->
                             <AlertMessage :variant="dangerSuccess" :message="responseMessage" v-if="responseMessage"/>

                             <div class="form-group mb-3">
                                 <label for="emailaddress">    {{ $t('login.emailaddress') }}</label>
                                 <input
                                         class="form-control"
                                         type="email"
                                         id="emailaddress"
                                         :placeholder="$t('login.enter_emailaddress')"
                                         v-model="emailaddress"
                                         v-validate="'required|email'"
                                         :class="{'is-invalid': vErrors.has('emailaddress') }"
                                         name="emailaddress"
                                 />
                                 <span v-show="vErrors.has('emailaddress')" class="help text-danger">{{ vErrors.first('emailaddress') }}</span>
                             </div>

                             <div class="form-group mb-3" data-password="true">
                                 <label for="password">{{ $t('login.password') }}</label>
                                 <div class="input-group input-group-merge">
                                     <input
                                             :type="[showPassword ? 'text' : 'password']"
                                             id="password"
                                             class="form-control"
                                             :placeholder="$t('login.enter_password')"
                                             v-model="password"
                                             v-validate="'required'"
                                             :class="{'is-invalid': vErrors.has('password') }"
                                             name="password"
                                     />
                                     <div class="input-group-append" data-password="false">
                                         <div class="input-group-append" data-password="true">

                            <span class="input-group-text"  @click="showPassword = !showPassword">
                               <i class="fa" :class="[showPassword ? 'fa-eye' : 'fa-eye-slash']" aria-hidden="true"></i>
                            </span>
                                         </div>
                                     </div>
                                 </div>
                                 <span v-show="vErrors.has('password')" class="help text-danger">{{ vErrors.first('password') }}</span>
                             </div>

                             <div class="form-group mb-3">
                                 <div class="custom-control custom-checkbox">
                                     <input
                                             type="checkbox"
                                             class="custom-control-input"
                                             id="checkbox-signin"
                                     />
                                     <label class="custom-control-label" for="checkbox-signin"
                                     >{{ $t('login.remember_me') }}</label
                                     >
                                 </div>
                             </div>

                             <div class="form-group mb-0 text-center">
                                 <button class="btn btn-primary btn-block" id="bkcolor" type="submit"   clientid="61769ecd22b2a3001bee9769"  flowId="6176a04f22b2a3001beea0f0" metadata="">
                                     {{ $t('login.login') }}
                                 </button>


                                 <!--                <mati-button-->
                                 <!--                    clientid="61769ecd22b2a3001bee9769"-->
                                 <!--                    flowId="6176a04f22b2a3001beea0f0"-->
                                 <!--                    metadata=""-->
                                 <!--                />-->
                             </div>
                         </form>

                     </div>
                     <!-- end card-body -->
                 </div>
                 <!-- end card -->

                 <div class="row mt-3">
                     <div class="col-12 text-center">
                         <p>
                             <router-link to="/business/fp/enteremail" class="text-muted ml-1"
                             >{{ $t('login.forget_password') }}</router-link
                             >
                         </p>
                         <p class="text-muted">
                             {{ $t('login.dont_have_account') }}
                             <router-link style="cursor:pointer"
                                          to="/business/email"
                                          class="text-primary font-weight-medium ml-1"
                             >  {{ $t('login.sign_up') }}</router-link
                             >
                         </p>
                     </div>
                     <!-- end col -->
                 </div>
                 <!-- end row -->
             </div>
             <!-- end col -->
         </div>


    <!-- end row -->
<!--    </b-overlay>-->
  </Auth>
</template>


<script>
import Auth from '@/components/register/Auth'
import AlertMessage from "../../components/shared/AlertMessage";
import customer from '../../protos/Customer_grpc_web_pb'
import grpcUrl from '../../components/constant/index'
import 'vue-toastr-2/dist/vue-toastr-2.min.css'
import LottieLoader from '../../components/LottieLoader.vue';
//import LottieAnimation from 'lottie-web-vue'
export default {
  components:{
    Auth,
    AlertMessage,
      LottieLoader

  },
  data(){
    return{
      showPassword : false,
      showLoader: false,
      dangerSuccess:'',
      responseMessage:'',
      clients:{},
      emailaddress :'',
      password :'',
    }
  },
  methods:{

      // showPassword(){
      //       this.showPassword = true
      // },

    UserLogin(){
      this.$validator.validateAll().then((result) => {
        if (result) {
           // this.$router.push('/').catch(() => { })
            this.showLoader = true;
            if(this.showLoader) {
                document.getElementById("image-loader").style.zIndex = "1";
            }
          this.responseMessage = '';
          console.log('email : ', this.emailaddress)
          let request = new customer.LoginRequestMessage();

           request.setCustomerid(this.emailaddress);
           request.setMobileorweb("WEB");
           request.setPersonalbusinessgroupvalue("2");
           request.setPasswordorpin(this.password);
           request.setLanguageid("en");
           request.setPassword1orpin2orhpin3option(1)


           this.clients.loginUserBusiness(request,this.$store.getters.metadata, (err, res) => {
             this.showLoader = false;
               document.getElementById("image-loader").style.zIndex = "-1";
             if(err){
               console.log("Error ", err);
               this.dangerSuccess = 'danger';
               this.responseMessage = grpcUrl.serverError;
             }
  //           console.log(" res : ", res);
             if(!res.getIssuccess()){
              // this.$toastr.error(res.getMessage(), 'Error');
                this.dangerSuccess = 'danger';
                this.responseMessage = res.getMessage();
               console.log("message : ", res.getMessage())
             }
             else {
                 //##### Save user info to store
                this.$store.dispatch('saveJWT', {
                  jwt : res.getUserjwttoken(),
                  firstName : res.getFirstname(),
                  businessName : res.getBusinessname(),
                  emailAddress: res.getEmailaddress(),
                  lastName : res.getLastname(),
                  languageId : res.getLanguageid(),
                  countryCode : res.getCountrycode(),
                  customerId : res.getCustomerid(),
                  mobileNumber : res.getMobilenumber(),
                  kycDataStatus : res.getKycdataenc(),
                  customerProfilePicImageUrl : res.getCustomerprofilepicimageurl()//customerProfilePicImageUrl
                })
               if(this.$store.getters.getUserInfo.jwt !== ''){

                    this.$router.push('/').catch(() => { })
               }
             }
          });
          return;
        }
      });
    }
  },
  mounted() {
   this.clients = new customer.CustomerAccountClient(grpcUrl.URL,null,null);

      if(this.$store.getters.getUserEmailAddress.emailAddress != null){
          this.emailaddress = this.$store.getters.getUserEmailAddress.emailAddress;
      }

  },
  created() {
      if(this.$store.getters.getUserEmailAddress.emailAddress != null) {
          this.emailaddress = this.$store.getters.getUserEmailAddress.emailAddress;
      }

  }

}
</script>

<style>

    .image-loader {
        left: 0 !important;
        position: fixed !important;
        top: 0 !important;
        height: 100% !important;
        width: 100% !important;
        /*transform: translate(-50%, -50%);*/
    }

.content {
    position: relative !important;
    z-index: 0 !important;
}
</style>