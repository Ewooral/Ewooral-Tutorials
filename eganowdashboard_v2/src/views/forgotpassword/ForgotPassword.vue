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
                                    Enter new password
                                </p>
                            </div>

                            <form @submit.prevent="ResetForgotPassword" >
                                <AlertMessage :variant="dangerSuccess" :message="responseMessage" v-if="responseMessage"/>
                                <div class="form-group mb-3">
                                    <label for="password">Enter new password</label>
                                    <input
                                            class="form-control"
                                            type="password"
                                            ref="password"
                                            id="password"
                                            placeholder="Enter new password"
                                            v-model="password"
                                            v-validate="'required'"
                                            :class="{'is-invalid': vErrors.has('password') }"
                                            name="password"
                                    />
                                    <span v-show="vErrors.has('password')" class="help text-danger">{{ vErrors.first('password') }}</span>
                                </div>
                                <div class="form-group mb-3">
                                    <label for="password">Confirm new password</label>
                                    <input
                                            class="form-control"
                                            type="password"
                                            id="confirmpassword"
                                            placeholder="Confirm password"
                                            v-model="confirmpassword"
                                            v-validate="'required|confirmed:password'"
                                            :class="{'is-invalid': vErrors.has('confirmpassword') }"
                                            name="password"
                                    />
                                    <span v-show="vErrors.has('confirmpassword')" class="help text-danger">{{ vErrors.first('confirmpassword') }}</span>
                                </div>
                                <div class="form-group mb-0 text-center">
                                    <button class="btn btn-primary btn-block" id="bkcolor" type="submit">
                                        Reset Password
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
    </Auth>
</template>

<script>
    import Auth from  '../../components/register/Auth'
    import AlertMessage from "../../components/shared/AlertMessage";
    import SweetAlertConfig from "../../SwalConfig";
    import customer from "../../protos/Customer_grpc_web_pb";
    import constant from "../../components/constant";
    import SweetAlertWrapper from "../../sweetAlert";
    import customerInfo from "../../protos/Customer_grpc_web_pb";
    export default {
        data() {
            return {
                showLoader : false,
                dangerSuccess:'',
                responseMessage:'',
                password :'',
                confirmpassword:'',
                clients :{}
            }
        },
        components :{
            Auth,
            AlertMessage
        },
        methods : {
            ResetForgotPassword(){

                try {
                    this.responseMessage = ''
                    this.$validator.validateAll().then((result) => {
                        if (result) {

                            this.sweetAlert.showDialogYesOrNo(Object.assign(SweetAlertConfig, {
                                title :' Reset password ?',
                                confirmButtonText : 'Yes, reset'
                            }), () => {

                                this.responseMessage = '';

                                let request = new customerInfo.CustomerPasswordResetRequestMessage();

                                request.setCustomerid(this.$store.getters.getUserEmailAddress.emailAddress);
                                request.setPassword(this.password);
                                request.setLanguageid(this.$store.getters.getUserInfo.languageId);
                                request.setPersonalbusinessgroupvalue(2);
                                request.setOtpvalue(this.$store.getters.getUserEmailAddress.otpsent)
                                request.setCountrycode(this.$store.getters.getUserInfo.getCountrycode);

                                this.showLoader = true;
                                this.clients.resetUserPassword_ForgotPassword(request,this.$store.getters.metadata, (err, res) => {
                                    this.showLoader = false;
                                    if(err){
                                        console.log("Error ", err);
                                        this.dangerSuccess = 'danger';
                                        this.responseMessage = constant.serverError;
                                    }
                                    else {
                                        //loginErrorCode
                                        console.log(" Response : ", res)
                                        if(!res.getIssuccess()){
                                            this.dangerSuccess = 'danger';
                                            this.responseMessage = res.getMessage();
                                        }
                                        else {
                                            // start Save email in action
                                            // this.$store.dispatch('saveEmailAddress',{
                                            //     emailAddress : this.emailaddress
                                            // })
                                            this.sweetAlert.showMessage("Password reset",  res.getMessage())
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
        created() {
            this.clients = new customer.CustomerAccountClient(constant.URL,null,null);
            this.sweetAlert = new SweetAlertWrapper()
        }
    }
</script>

<style scoped>

</style>