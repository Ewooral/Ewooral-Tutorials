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
                  Enter new password
                </p>
              </div>

              <form @submit.prevent="ChangePassword" >
                <AlertMessage :variant="dangerSuccess" :message="responseMessage" v-if="responseMessage"/>
                <div class="form-group mb-3">
                  <label for="password">Enter new password</label>
                  <input
                          class="form-control"
                          type="password"
                          id="password"
                          placeholder="Enter new password"
                          v-model="password"
                          v-validate="'required'"
                          :class="{'is-invalid': vErrors.has('password') }"
                          name="emailaddress"
                  />
                  <span v-show="vErrors.has('password')" class="help text-danger">{{ vErrors.first('password') }}</span>
                </div>
                <div class="form-group mb-3">
                  <label for="password">Enter new password</label>
                  <input
                      class="form-control"
                      ref="password"
                      type="password"
                      id="confirmpassword"
                      placeholder="Confirm password"
                      v-model="confirmpassword"
                      v-validate="'required|confirmed:password'"
                      :class="{'is-invalid': vErrors.has('confirmpassword') }"
                      name="emailaddress"
                  />
                  <span v-show="vErrors.has('confirmpassword')" class="help text-danger">{{ vErrors.first('confirmpassword') }}</span>
                </div>
                <div class="form-group mb-0 text-center">
                  <router-link to="/">
                    <button class="btn btn-outline-primary"  style="float: left;"  type="submit">
                      Back to dashbard
                    </button>
                  </router-link>

                  <button class="btn btn-primary pull-right" style="float: right;" id="bkcolor" type="submit">
                    Change Password
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

import horizontal from "../layouts/horizontal";
import constant from '../../components/constant/index';
import customerInfo from '../../protos/Customer_grpc_web_pb';
import AlertMessage from "../../components/shared/AlertMessage";
import SweetAlertWrapper from "../../sweetAlert";
import SweetAlertConfig from "../../SwalConfig";

export default {
  data(){
    return{
      showLoader : false,
      dangerSuccess:'',
      responseMessage:'',
      password :'',
      confirmpassword:'',
      clients :{}
    }
  },
  components:{
    AlertMessage,
    horizontal
  } ,
  methods:{
    ChangePassword(){

      try {
        this.responseMessage = ''
        this.$validator.validateAll().then((result) => {
          if (result) {

            this.sweetAlert.showDialogYesOrNo(Object.assign(SweetAlertConfig, {
              title :' Change password ?',
              confirmButtonText : 'Yes, change!'
            }), () => {

              this.responseMessage = '';

             let request = new customerInfo.CustomerPasswordResetRequestMessage();
             // request.setCountrycode(this.$store.getters.getUserInfo.getCountrycode);
             // request.setCustomerid(this.$store.getters.getUserInfo.emailAddress);
             // request.setLanguageid(this.$store.getters.getUserInfo.languageId);
             // request.setSecurityquestionnumber(this.$store.getters.getSecurityQuestionData.securityqtnnumber);
             // request.setSecurityanswer(this.$store.getters.getResetPasswordData.anstoqtn)
             // request.setUsersixdigitpin(this.$store.getters.getResetPasswordData.pin)
             // request.setNewpassword(this.password)

              request.setCustomerid(this.$store.getters.getUserInfo.emailAddress);
              request.setPassword(this.password);
              request.setLanguageid(this.$store.getters.getUserInfo.languageId);
              request.setPersonalbusinessgroupvalue(2);
              request.setOtpvalue(this.$store.getters.getUserEmailAddress.otpsent)
              request.setCountrycode(this.$store.getters.getUserInfo.getCountrycode);


              this.showLoader = true;
              this.clients.resetUserPassword_ForgotPassword(request,this.$store.getters.metadata, (err, res) => {
                this.showLoader = false;
                if(err){
                  this.dangerSuccess = 'danger';
                  this.responseMessage = constant.serverError;
                }
                else {
                  //loginErrorCode
                  if(!res.getIssuccess()){
                    this.dangerSuccess = 'danger';
                    this.responseMessage = res.getMessage();
                  }
                  else {
                    // start Save email in action
                    // this.$store.dispatch('saveEmailAddress',{
                    //   emailAddress : this.emailaddress
                    // })
                    this.sweetAlert.showMessage("Change password",  res.getMessage())
                    // end
                    this.$router.push('/business/login').catch(() => { })
                  }
                }

              });

            })



            return;
          }
        });


      }catch (e) {
        console.log(" Error : ", e)
      }


    }
  },
  mounted() {
    this.clients = new customerInfo.CustomerAccountClient(constant.URL,null,null);
  },
  created() {
    this.sweetAlert = new SweetAlertWrapper()
  }
}
</script>

<style scoped>

</style>

