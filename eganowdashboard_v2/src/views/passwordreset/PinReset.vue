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
              Enter new Pin
            </p>
          </div>

          <form @submit.prevent="ResetPin" >
            <AlertMessage :variant="dangerSuccess" :message="responseMessage" v-if="responseMessage"/>
            <div class="form-group mb-3">
              <label for="pin">Enter new pin</label>
              <input ref="pin"
                  class="form-control"
                  type="password"
                  id="pin"
                  placeholder="Enter new pin"
                  v-model="pin"
                  v-validate="'required|length:6'"
                  :class="{'is-invalid': vErrors.has('pin') }"
                  name="pin"
              />
              <span v-show="vErrors.has('pin')" class="help text-danger">{{ vErrors.first('pin') }}</span>
            </div>
            <div class="form-group mb-3">
              <label for="confirmPin">Enter new pin</label>
              <input
                  class="form-control"
                  type="password"
                  id="confirmPin"
                  placeholder="Confirm pin"
                  v-model="confirmPin"
                  v-validate="'required|confirmed:pin'"
                  :class="{'is-invalid': vErrors.has('confirmPin') }"
                  name="confirmPin"
              />
              <span v-show="vErrors.has('confirmPin')" class="help text-danger">{{ vErrors.first('confirmPin') }}</span>
            </div>
            <div class="form-group mb-0 text-center">
              <router-link to="/">
                <button class="btn btn-outline-primary"  style="float: left;"  type="submit">
                  Back to dashbard
                </button>
              </router-link>

              <button class="btn btn-primary pull-right" style="float: right;" id="bkcolor" type="submit">
                Reset Pin
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
import SweetAlertWrapper from "../../sweetAlert";
import AlertMessage from '../../components/shared/AlertMessage'

export default {
  data(){
    return{
      showLoader: false,
      responseMessage:'',
       pin:'',
      confirmPin:'',
      clients:{}
    }
  },
  components:{
    horizontal,
    AlertMessage
  },
  methods:{
    ResetPin(){
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.responseMessage = '';
          let request = new customerInfo.CustomerPINResetRequestMessageOld();
          request.setCustomerid(this.$store.getters.getUserInfo.emailAddress);
          request.setPin(this.pin);
          request.setLanguageid(this.$store.getters.getUserInfo.languageId);
          request.setOtpvalue(this.$store.getters.getUserEmailAddress.otpsent);
          request.setCountrycode(this.$store.getters.getUserInfo.countryCode);
          request.setPersonalbusinessgroupvalue(2)
          // request.setSecurityanswer(this.$store.getters.getResetPasswordData.anstoqtn)
          // request.setSecurityquestionnumber(this.$store.getters.getSecurityQuestionData.securityqtnnumber)
          console.log("pin reset request : ", request)
          this.showLoader = true;
          //const metadata = { 'authorization': 'Bearer ' + this.$store.getters.getUserInfo.jwt }
          console.log("jee : ", this.$store.getters.metadata)
          this.clients.resetUserPIN_ForgotPIN(request, this.$store.getters.metadata, (err, res) => {
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
                this.sweetAlert.showMessage("Pin reset", res.getMessage())
                this.$router.push('/').catch(() => { })
              }
            }

          });

          return;
        }
      });
    }
  },
  created() {
    this.sweetAlert = new SweetAlertWrapper()
  },
  mounted() {
    this.clients = new customerInfo.CustomerAccountClient(constant.URL,null,null);
  }
}
</script>

<style scoped>
button:hover {
    background: #0078D4;
  }
</style>