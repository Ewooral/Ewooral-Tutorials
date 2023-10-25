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
<!--                  A verification code has been sent to your email. Please enter the code-->
                   Kindly answer the security question.
                </p>
              </div>

              <form @submit.prevent="VerifyCustomerOtp" >
                <AlertMessage :variant="dangerSuccess" v-if="responseMessage" :message="responseMessage" />
                  <div class="form-group mb-3">
                      <label for="answertoquestion">{{getSecurityquestion}}</label>
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
                  <label for="pin"> Enter your pin </label>
                  <div class="input-group input-group-merge">
                  <input
                      class="form-control"
                      :type="[showPassword ? 'text' : 'password']"
                      id="pin"
                      placeholder="Enter your 6 digit pin"
                      v-model="pin"
                      v-validate="'required'"
                      :class="{'is-invalid': vErrors.has('pin') }"
                      name="pin"
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
                <router-link
                    to="/login"
                    class="text-primary font-weight-medium ml-1"
                >Resend</router-link
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
  </horizontal>
</template>

<script>
// import Auth from  '../../components/register/Auth'
import horizontal from "../layouts/horizontal";
import constant from '../../components/constant/index';
import customerInfo from '../../protos/Customer_grpc_web_pb';
import AlertMessage from "../../components/shared/AlertMessage";

export default {
  data(){
    return{
      showPassword : false,
      showLoader: false,
      dangerSuccess:'',
      responseMessage:'',
      answertoquestion:'',
      pin:'',
      emailaddress:'',
      getSecurityquestion : '',
      getSecurityQtnNumber :'',
      clients:{}
    }
  },
  components:{
      horizontal,
    AlertMessage
  },
  methods:{
    VerifyCustomerOtp(){
      try {
          this.$validator.validateAll().then((result) => {
              if (result) {
                  this.showLoader = true;
                  this.responseMessage = '';
                  this.emailaddress = this.$store.getters.getUserEmailAddress.emailAddress;
                  let request = new customerInfo.ValidateAnswerAndPinRequestMessage();

                  request.setCountrycode(this.$store.getters.getUserInfo.getCountrycode);
                  request.setCustomerid(this.$store.getters.getUserEmailAddress.emailAddress);
                  request.setSecurityquestionnumber(this.getSecurityQtnNumber);
                  request.setSecurityanswer(this.answertoquestion);
                  request.setCustomersixdigitpin(this.pin);
                  request.setLanguageid(this.$store.getters.getUserInfo.languageId);
                  this.showLoader = true;
                  this.clients.validateCustomerSecurityAnswerAndSixDigitPin(request, {}, (err,res) =>{
                      this.showLoader = false;
                      if(res.getIssuccess()){
                          this.$store.dispatch('PasswordResetData', {
                              pin : this.pin,
                              anstoqtn : this.answertoquestion
                          })
                          this.$router.push('/business/resetpassword').catch(() => { })
                      }
                      else {
                          this.dangerSuccess = 'danger';
                          this.responseMessage = res.getMessage();
                      }

                      if(err) {
                          console.log("error password : ", err)
                      }
                  });
                  return;
              }
          });
      } catch (e) {
        console.log("exception : ", e)
      }
    }
  },
  mounted() {
    this.clients = new customerInfo.CustomerAccountClient(constant.URL,null,null)
    this.getSecurityQtnNumber =  this.$store.getters.getSecurityQuestionData.securityqtnnumber;
    this.getSecurityquestion =  this.$store.getters.getSecurityQuestionData.securityqtn;
  }
}
</script>


<style scoped>

</style>