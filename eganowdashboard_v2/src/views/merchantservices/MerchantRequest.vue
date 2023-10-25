<template>
    <div>
        <b-overlay :show="showLoader" rounded="sm">
            <CustomHeaderAlert :message="message" />
            <form @submit.prevent="PostMerchantAccountRequest" >
                <div class="col-lg-12">
                    <h2 class="text-center mb-3"> Request merchant account form</h2>
                    <div class="container col-lg-5">
                        <div class="card">
                            <div class="card-body">
                                <AlertMessage :variant="dangerSuccess" :message="responseMessage" v-if="responseMessage"/>
                               <div class="col-lg-12">
                                   <div class="form-group mb-3 mr-2">
                                       <div class="row">
                                           <label>Nature of business</label>
                                           <input
                                                   class="form-control"
                                                   type="text"
                                                   id="natureofbusiness"
                                                   v-model="merchant.natureofbusiness"
                                                   v-validate="'required'"
                                                   :class="{'is-invalid': vErrors.has('natureofbusiness') }"
                                                   name="natureofbusiness"

                                           />
                                           <span v-show="vErrors.has('natureofbusiness')" class="help text-danger">{{ vErrors.first('natureofbusiness') }}</span>
                                       </div>
                                   </div>

                                   <div class="form-group mb-3 ">
                                       <div class="row">
                                           <label>Do you require collection service ?</label>
                                               <select class="custom-select" v-model="merchant.CollectionServiceYesNo"  name="CollectionServiceYesNo" id="CollectionServiceYesNo" v-validate="'required'" >
                                                   <option value="YES" selected> YES</option>
                                                   <option value="NO">NO</option>
                                               </select>
                                           <span v-show="vErrors.has('CollectionServiceYesNo')" class="help text-danger">{{ vErrors.first('CollectionServiceYesNo') }}</span>
                                       </div>

                                   </div>

                                   <div class="form-group mb-3 ">
                                       <div class="row">
                                           <label>Do you require payout service ?</label>
                                           <select class="custom-select" v-model="merchant.PayoutServiceYesNo"  name="PayoutServiceYesNo" id="PayoutServiceYesNo" v-validate="'required'" >
                                               <option value="YES" selected> YES</option>
                                               <option value="NO">NO</option>
                                           </select>
                                           <span v-show="vErrors.has('PayoutServiceYesNo')" class="help text-danger">{{ vErrors.first('PayoutServiceYesNo') }}</span>
                                       </div>

                                   </div>
                                   <div class="form-group mb-3 ">
                                       <div class="row">
                                           <label>Do you require api integration ?</label>
                                           <select class="custom-select" v-model="merchant.ApiRequiredYesNo"  name="PayoutServiceYesNo" id="ApiRequiredYesNo" v-validate="'required'" >
                                               <option value="YES" selected> YES</option>
                                               <option value="NO">NO</option>
                                           </select>
                                           <span v-show="vErrors.has('ApiRequiredYesNo')" class="help text-danger">{{ vErrors.first('ApiRequiredYesNo') }}</span>
                                       </div>

                                   </div>
                                   <div class="form-group mb-3">
                                       <div class="row">
                                           <button class="btn btn-outline-primary" type="submit">Submit</button>
                                       </div>
                                   </div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </b-overlay>
    </div>
</template>

<script>
    import CustomHeaderAlert from "../../components/shared/CustomHeaderAlert";
    import merchantstrans from "../../protos/MerchantMoneyTransferForBusinessPortal_grpc_web_pb";
    import grpcUrl from "../../components/constant";
    import constant from "../../components/constant";
    import SweetAlertConfig from "../../SwalConfig";
    import SweetAlertWrapper from "../../sweetAlert";
    export default {
        name: "MerchantRequest",
        data()  {
            return {
                message : 'Merchant Account Request',
                merchantTransactions : {},
                showLoader : false,
                dangerSuccess : 'danger',
                responseMessage : '',
                merchant : {
                    natureofbusiness: '',
                    CollectionServiceYesNo:'',
                    PayoutServiceYesNo : '',
                    ApiRequiredYesNo :''
                }
            }
        },
        components : {
            CustomHeaderAlert
        },
        methods : {
            PostMerchantAccountRequest() {
                try {
                    this.$validator.validateAll().then((result) => {
                        if (result) {
                            this.responseMessage = '';
                            let request = new merchantstrans.MerchantBizCollecRequestMessage();
                            this.sweetAlert.showDialogYesOrNo(Object.assign(SweetAlertConfig, {
                                title: 'Request merchant account ',
                                text: 'Request merchant account ? ',
                                confirmButtonText: 'Yes, Request'
                            }), () => {

                                request.setNatureofbusiness(this.merchant.natureofbusiness)
                                request.setCollectionserviceyesno(this.merchant.CollectionServiceYesNo)
                                request.setPayoutserviceyesno(this.merchant.PayoutServiceYesNo)
                                request.setApirequiredyesno(this.merchant.ApiRequiredYesNo)
                                request.setRequeststatus('PENDING')
                                request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                                this.showLoader = true;
                                //console.log("request : ", request)
                                this.merchantTransactions.createMerchantBizCollecRequest(request, this.$store.getters.metadata, (err, res) => {
                                    this.showLoader = false;
                                    if (err) {
                                        console.log("error : ", err)
                                        this.dangerSuccess = 'danger';
                                        this.responseMessage = constant.serverError;
                                    } else {
                                        if (!res.getIssuccess()) {
                                            this.dangerSuccess = 'danger';
                                            this.responseMessage = res.getMessage();
                                        } else {
                                            this.sweetAlert.showMessage("Account Request ", res.getMessage())
                                            this.merchant = {}
                                        }
                                    }

                                });

                                return;
                            })
                        }
                    });
                }catch (e) {
                    console.log(e)
                }
            }
        },
        created() {
            this.merchantTransactions = new merchantstrans.MerchantMoneyTransferForBusinessPortalSvcClient(grpcUrl.URL,null, null)
            this.sweetAlert = new SweetAlertWrapper()
            this.$store.dispatch('setAppHeader', {
                title: "Merchant Account Request",
                items: [
                    {
                        text: "Dashboard",
                        href: "#",
                    },
                    {
                        text: "Request Merchant Request",
                        href: "#",
                    },
                ],
            })
        }
    }
</script>

<style scoped>

</style>