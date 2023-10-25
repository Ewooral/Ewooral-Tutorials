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
                                    Enter the otp sent to your email address
                                </p>
                                <p></p>
                            </div>

                            <form @submit.prevent="OtpVerification" >
                                <AlertMessage :variant="dangerSuccess" :message="responseMessage" v-if="responseMessage"/>
                                <div class="form-group mb-3">
                                    <label for="otpsent">Enter otp </label>
                                    <input
                                            class="form-control"
                                            type="password"
                                            id="otpsent"
                                            placeholder="Enter the otp sent to your email address"
                                            v-model="otpsent"
                                            v-validate="'required'"
                                            :class="{'is-invalid': vErrors.has('otpsent') }"
                                            name="otpsent"
                                    />
                                    <span v-show="vErrors.has('otpsent')" class="help text-danger">{{ vErrors.first('otpsent') }}</span>
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
    import AlertMessage from "../../../components/shared/AlertMessage";
    import Auth from "../../../components/register/Auth";
    import customerInfo from "../../../protos/Customer_grpc_web_pb";
    import constant from "../../../components/constant";
    export default {

        data(){
            return{
                showLoader : false,
                dangerSuccess:'',
                responseMessage:'',
                otpsent :'',
                clients :{}
            }
        },
        components:{
            Auth,
            AlertMessage
        } ,
        methods:{
            OtpVerification() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.responseMessage = '';
                        let request = new customerInfo.VerifyOTPRequestMessage();

                        request.setCustomerid(this.$store.getters.getUserEmailAddress.emailAddress)
                        request.setCountrycode(this.$store.getters.getCountrycode)
                        request.setOtpvalue(this.otpsent)
                        request.setLanguageid('en')
                        request.setPersonalbusinessvalue(2)
                        this.showLoader = true;
                        this.clients.verifyTransOTPNow(request,this.$store.getters.metadata, (err, res) => {
                            this.showLoader = false;
                            if(err){
                                console.log("Error ", err);
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
                                    console.log('Email : ' , this.$store.getters.getUserEmailAddress.emailAddress);
                                    this.$store.dispatch('saveEmailAddress',{
                                        emailAddress : this.$store.getters.getUserEmailAddress.emailAddress,
                                        otpsent : this.otpsent
                                    })
                                    // end

                                    this.$router.push('/business/forgotpassword').catch(() => { })
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
    }
</script>

<style scoped>

</style>