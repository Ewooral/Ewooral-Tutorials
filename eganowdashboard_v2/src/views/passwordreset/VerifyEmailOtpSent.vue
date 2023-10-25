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
                                   A verification code has been sent to your email. Please enter the code
<!--                                    Kindly answer the security question.-->
                                </p>
                            </div>

                            <form @submit.prevent="VerifyCustomerOtp" >
                                <AlertMessage :variant="dangerSuccess" v-if="responseMessage" :message="responseMessage" />
                                <div class="form-group mb-3" data-password="true">
                                    <label for="pin"> Enter otp </label>
                                    <div class="input-group input-group-merge">
                                        <input
                                                class="form-control"
                                                :type="[showPassword ? 'text' : 'password']"
                                                id="pin"
                                                placeholder="Enter your 6 digit pin"
                                                v-model="otpsent"
                                                v-validate="'required'"
                                                :class="{'is-invalid': vErrors.has('otpsent') }"
                                                name="otpsent"
                                        />
                                        <div class="input-group-append" data-password="false">
                                            <div class="input-group-append" data-password="true">

                            <span class="input-group-text"  @click="showPassword = !showPassword">
                               <i class="fa" :class="[showPassword ? 'fa-eye' : 'fa-eye-slash']" aria-hidden="true"></i>
                            </span>
                                            </div>
                                        </div>
                                    </div>
                                    <span v-show="vErrors.has('otpsent')" class="help text-danger">{{ vErrors.first('otpsent') }}</span>
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
<!--                                <router-link-->
<!--                                        to="/login"-->
<!--                                        class="text-primary font-weight-medium ml-1"-->
<!--                                >Resend</router-link-->
<!--                                >-->

                                <a href="#" class="text-primary font-weight-medium ml-1" onclick="EmailVerification()">Resend</a>
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
    import horizontal from "../layouts/horizontal";
    import constant from '../../components/constant/index';
    import customerInfo from '../../protos/Customer_grpc_web_pb';
    import AlertMessage from "../../components/shared/AlertMessage";
    import commonData from "../../protos/CommonData_grpc_web_pb";

    export default {
        data(){
            return{
                showPassword : false,
                showLoader: false,
                dangerSuccess:'',
                responseMessage:'',
                answertoquestion:'',
                otpsent:'',
                emailaddress:'',
                clients:{}
            }
        },
        components:{
            horizontal,
            AlertMessage
        },
        methods:{
            EmailVerification() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.responseMessage = '';
                        let request = new commonData.LanguageRequestMessage();
                        request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                        this.showLoader = true;
                        this.commonClient.generateTransOTPNow(request,this.$store.getters.metadata, (err, res) => {
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
                                this.$router.push('/business/verifyotp').catch(() => { })
                            }

                        });

                        return;
                    }
                });
            },
            VerifyCustomerOtp(){
                try {
                    this.$validator.validateAll().then((result) => {
                        if (result) {
                            this.showLoader = true;
                            this.responseMessage = '';
                            let request = new customerInfo.VerifyOTPRequestMessage();

                            request.setCustomerid(this.$store.getters.getUserInfo.emailAddress)
                            request.setCountrycode(this.$store.getters.getCountrycode)
                            request.setOtpvalue(this.otpsent)
                            request.setLanguageid('en')
                            request.setPersonalbusinessvalue(2)
                            this.showLoader = true;
                            this.clients.verifyTransOTPNow(request, this.$store.getters.metadata, (err,res) =>{
                                this.showLoader = false;
                                if(res.getIssuccess()){

                                    this.$store.dispatch('saveEmailAddress',{
                                        emailAddress : this.$store.getters.getUserInfo.emailAddress,
                                        otpsent : this.otpsent
                                    })

                                    if(this.$store.getters.getPinOrPassword.pinORpassword === 'PASSWORD')
                                        this.$router.push('/business/changepassword').catch(() => { })
                                    else
                                        this.$router.push('/business/changepin').catch(() => { })
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