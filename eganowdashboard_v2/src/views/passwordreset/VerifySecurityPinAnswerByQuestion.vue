<template>
  <horizontal>
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
<!--                A verification code has been sent to your email. Please enter the code-->
                  Kindly provide the answer to the security question
              </p>
            </div>

            <form @submit.prevent="VerifySecurityAnswerAndPasswordProvidedForQuestion" >
              <AlertMessage :variant="dangerSuccess" :message="responseMessage" v-if="responseMessage"/>
              <div class="form-group mb-3">
                <label for="answertoquestion">{{getSecurityquestion[0].toUpperCase() + getSecurityquestion.slice(1)}}</label>
                <input
                        class="form-control"
                        type="text"
                        id="answertoquestion"
                        placeholder="Enter answer to the question"
                        v-model="answertoquestion"
                        v-validate="'required'"
                        :class="{'is-invalid': vErrors.has('answertoquestion') }"
                        name="answertoquestion"
                />
                <span v-show="vErrors.has('answertoquestion')" class="help text-danger">{{ vErrors.first('answertoquestion') }}</span>
              </div>
              <div class="form-group mb-3" data-password="true">
                <label for="password"> Enter your password </label>
                <div class="input-group input-group-merge">
                  <input
                          class="form-control"
                          :type="[showPassword ? 'text' : 'password']"
                          id="password"
                          placeholder="Enter your password"
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
                <span v-show="vErrors.has('pin')" class="help text-danger">{{ vErrors.first('pin') }}</span>
              </div>
              <div class="form-group mb-0 text-center">
                <router-link to="/">
                  <button class="btn btn-outline-primary"  style="float: left;"  type="submit">
                    Back to dashbard
                  </button>
                </router-link>
                <button class="btn btn-primary pull-right" style="float: right;" id="bkcolor" type="submit">
                  Submit
                </button>
              </div>
            </form>

          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->

        <!-- end row -->
      </div>
      <!-- end col -->
    </div>
    </b-overlay>
  </horizontal>
</template>

<script>
import customerInfo from "../../protos/Customer_grpc_web_pb";
import constant from "../../components/constant";
import horizontal from "../layouts/horizontal";
import AlertMessage from "../../components/shared/AlertMessage";
export default {
  data(){
    return{
      responseMessage:'',
      otp:'',
      showLoader: false,
      showPassword : false,
      dangerSuccess:'',
      answertoquestion:'',
      getSecurityquestion:'',
      getSecurityQtnNumber:'',
      password:'',
      clients:{}
    }
  },
  components:{
    horizontal,
    AlertMessage
  },
  methods:{
    VerifySecurityAnswerAndPasswordProvidedForQuestion(){
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.showLoader = true;
          this.responseMessage = '';
          let request = new customerInfo.ValidateAnswerAndPasswordRequestMessage();

           request.setCountrycode(this.$store.getters.getUserInfo.countryCode);
           request.setCustomerid(this.$store.getters.getUserInfo.emailAddress);
           request.setSecurityquestionnumber(this.getSecurityQtnNumber);
           request.setSecurityanswer(this.answertoquestion);
           request.setPassword(this.password);
           request.setLanguageid(this.$store.getters.getUserInfo.languageId)

              console.log("request : ", request)

          this.clients.validateCustomerSecurityAnswerAndPassword(request, {}, (err,res) =>{
            this.showLoader = false;
            if(res.getIssuccess()){
              this.$store.dispatch('PasswordResetData', {
                pin : this.password,
                anstoqtn : this.answertoquestion
              })
              this.$router.push('/business/pinreset').catch(() => { })
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
    GetSecurityQuestionByUserData() {

          this.responseMessage = '';
          let request = new customerInfo.CustomerToGetSecurityQuestionForVerificationRequestMessage();

          request.setCustomerid(this.$store.getters.getUserInfo.emailAddress)
          request.setCountrycode(this.$store.getters.getUserInfo.countryCode)
          request.setLanguageid(this.$store.getters.getUserInfo.languageId)

          this.showLoader = true;
          this.clients.getCustomerSecurityQuestionForVerification(request,{}, (err, res) => {
            this.showLoader = false;
            if(err){
              this.dangerSuccess = 'danger';
              this.responseMessage = constant.serverError;
            }
            else {
              if(!res.getIssuccess()){
                this.dangerSuccess = 'danger';
                this.responseMessage = res.getMessage();
              }
              else {
                 // save security question
                this.$store.dispatch('saveSecurityQtnNumberAndQuestion', {
                  securityqtn : res.getSecurityquestion(),
                  securityqtnnumber : res.getSecurityquestionnumber()
                })
              }
            }

          });

          return;

    }
  },
  mounted() {
    this.clients = new customerInfo.CustomerAccountClient(constant.URL,null,null);
    this.getSecurityQtnNumber =  this.$store.getters.getSecurityQuestionData.securityqtnnumber;
    this.getSecurityquestion =  this.$store.getters.getSecurityQuestionData.securityqtn;
    this.GetSecurityQuestionByUserData();
  },
  created() {

  }
}
</script>

<style scoped>
button:hover {
  background: #0078D4;
}
</style>