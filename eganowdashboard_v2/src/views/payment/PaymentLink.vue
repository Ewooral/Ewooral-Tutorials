<template>
    <div>
<!--        <b-overlay :show="showLoader" rounded="sm">-->
        <div class="image-loader"  id="image-loader" >
            <lottie-loader :loading="showLoader" />
        </div>
        <div class="content">
            <CustomHeaderAlert :message="message" />
            <form @submit.prevent="PostCollectionTransactionThroughPaymentLinkInitialData" >
                <div class="col-lg-12">
                    <div class="container col-lg-6">
                        <div class="card">
                            <div class="card-body">
                                <AlertMessage :variant="dangerSuccess" :message="responseMessage" v-if="responseMessage"/>
                                <div class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group mb-3 mr-2">
                                            <div class="row">
                                                <label>Transaction type</label>
                                                <input
                                                        class="form-control"
                                                        type="text"
                                                        id="transactionType"
                                                        v-model="transactionType"
                                                        v-validate="'required'"
                                                        :class="{'is-invalid': vErrors.has('transactionType') }"
                                                        name="transactionType"
                                                        readonly="readonly"
                                                />
                                                <span v-show="vErrors.has('transactionType')" class="help text-danger">{{ vErrors.first('transactionType') }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group mb-3">
                                            <div class="row">
                                                <label>Services</label>
                                                <!--                                    <select class="custom-select" v-model="serviceId" @change="GetSelectedServiceData($event)" name="serviceId" id="serviceId" v-validate="'required'" >-->
                                                <!--                                        <option value="" selected> Select service</option>-->
                                                <!--                                        <option :value="serv.getPaypartnerserviceid()" v-for="serv in servicesOptions" :key="serv.getPaypartnerserviceid()" >{{ serv.getPaypartnerservicename() }}</option>-->
                                                <!--                                    </select>-->
                                                <multiselect
                                                        id="serviceId"
                                                        name="serviceId"
                                                        v-model="serviceId"
                                                        v-validate="'required'"
                                                        :options="servicesOptions"
                                                        @select="GetSelectedServiceData($event)"
                                                        :searchable="true"
                                                        :class="{'is-invalid': vErrors.has('serviceId') }" >
                                                    <template slot="singleLabel" slot-scope="props" class="p-0 m-0">
                                                        <span class="option__title pl-1">{{ props.option.getPaypartnerservicename() }}</span>
                                                    </template>
                                                    <template slot="option" slot-scope="{ option }" class="h-25 w-25">
                                                        {{ option.getPaypartnerservicename() }}
                                                    </template>
                                                </multiselect>
                                                <span v-show="vErrors.has('serviceId')" class="help text-danger">{{ vErrors.first('serviceId') }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                                <h3> Generate link with transaction information</h3>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4">
                                        <div class="form-group mb-3 mr-2" id="expandCurrencySelect">
                                            <div class="row">
                                                <label> Currency</label>
                                                <multiselect
                                                        id="currency"
                                                        name="currency"
                                                        v-model="linkWithTransactionInfo.currency"
                                                        v-validate="'required'"
                                                        :options="CurrencyList"
                                                        :searchable="true"
                                                        :class="{'is-invalid': vErrors.has('currency') }" >
                                                    <template slot="singleLabel" slot-scope="props" class="p-0 m-0">
                                                        <img style="width: 20px !important; height: 20px !important; padding: 0px !important; margin: 0px !important;" :src="props.option.getCountryflagurl()" alt=""><span class="option__desc">
                                        <span class="option__title pl-1">{{ props.option.getCurrencyiso() }}</span></span>
                                                    </template>
                                                    <template slot="option" slot-scope="{ option }" class="h-25 w-25">
                                                        <img style="width: 30px !important; height: 30px !important;" :src="option.getCountryflagurl()"> {{ option.getCurrencyiso() }}
                                                    </template>
                                                </multiselect>
                                                <span v-show="vErrors.has('currency')" class="help text-danger">{{ vErrors.first('currency') }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="form-group mb-3">
                                            <div class="row">
                                                <label>Transaction amount</label>
                                                <input id="transAmount" name="transAmount" type="text"
                                                       class="form-control" placeholder="Transaction amount"
                                                       v-validate="'required|numeric'" :class="{'is-invalid': vErrors.has('transAmount') }"
                                                       v-model="linkWithTransactionInfo.transAmount"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group mb-3 mr-2">
                                            <div class="row">
                                                <label>Can user change transaction amount ? </label>
                                                <select class="custom-select" v-model="linkWithTransactionInfo.changeTransAmount" name="changeTransAmount" v-validate="'required'" >
                                                    <option value=""> Select change amount</option>
                                                    <option value="YES">YES</option>
                                                    <option value="NO" selected>NO</option>
                                                </select>
                                                <span v-show="vErrors.has('changeTransAmount')" class="help text-danger">{{ vErrors.first('changeTransAmount') }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group mb-3">
                                            <div class="row">
                                                <label>Select type of payment link </label>
                                                <select class="custom-select" v-model="linkWithTransactionInfo.onetimeorgeneral" name="onetimeorgeneral" v-validate="'required'" >
                                                    <option value=""> Select type of payment link</option>
                                                    <option value="GENERALPAYMENTLINK">MULTIPLE USE</option>
                                                    <option value="ONETIMEPAYMENTLINK " selected>ONE TIME USE</option>
                                                </select>
                                                <span v-show="vErrors.has('onetimeorgeneral')" class="help text-danger">{{ vErrors.first('onetimeorgeneral') }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!--                            <div class="col-lg-12 col-md-12">-->
                                    <!--                                -->
                                    <!--                            </div>-->
                                    <div class="col-lg-12">
                                        <div class="form-group mb-3">
                                            <div class="row">
                                                <label for="narration">Narration</label>
                                                <input
                                                        class="form-control"
                                                        type="text"
                                                        id="narration"
                                                        placeholder="Narration"
                                                        v-model="linkWithTransactionInfo.narration"
                                                        v-validate="'required'"
                                                        :class="{'is-invalid': vErrors.has('narration') }"
                                                        name="narration"
                                                />
                                                <span v-show="vErrors.has('narration')" class="help text-danger">{{ vErrors.first('narration') }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group mb-3">
                                            <div class="row">
                                                <label for="noOfDaysTheLinkShdExpire">Enter the number of days the link will expire</label>
                                                <input
                                                        class="form-control"
                                                        type="number"
                                                        id="noOfDaysTheLinkShdExpire"
                                                        placeholder="Number of days the link will expire"
                                                        v-model="linkWithTransactionInfo.noOfDaysTheLinkShdExpire"
                                                        v-validate="'required|numeric'"
                                                        :class="{'is-invalid': vErrors.has('noOfDaysTheLinkShdExpire') }"
                                                        name="noOfDaysTheLinkShdExpire"
                                                />
                                                <span v-show="vErrors.has('noOfDaysTheLinkShdExpire')" class="help text-danger">{{ vErrors.first('noOfDaysTheLinkShdExpire') }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <button class="btn btn-primary mb-3 ml-auto" id="bkcolor" type="submit" >
                                        Generate link
                                    </button>
                                </div>

                                <div class="row"  v-if="generatedLink">
                                    <div class="col-lg-10 col-md-10">
                                        <div class="form-group mb-3">
                                            <div class="row">
                                                <input id="generatedLink" name="generatedLink" type="text"
                                                       class="form-control"
                                                       v-model="generatedLink"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 col-md-2">
                                        <div class="form-group mb-3">
                                            <div class="row">
                                                <button class="btn btn-outline-primary" @click.prevent="copyUrl(generatedLink)">{{btnCopyTextValue}}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>

                </div>
            </form>
        </div>

<!--        </b-overlay>-->
    </div>
</template>

<script>
    import CustomHeaderAlert from "../../components/shared/CustomHeaderAlert";
    import merchantservices from "../../protos/MerchantAccount_grpc_web_pb";
    import merchantstrans from '../../protos/MerchantMoneyTransferForBusinessPortal_grpc_web_pb'
    import grpcUrl from "../../components/constant";
    import commonDataClient from "../../protos/CommonData_grpc_web_pb";
    import constant from "../../components/constant";
    import Multiselect from "vue-multiselect";
    import LottieLoader from "../../components/LottieLoader";
    export default {
        components : {
            CustomHeaderAlert,
            Multiselect,
            LottieLoader
        },
        data() {
            return {
                btnCopyTextValue : 'Copy',
                showLoader : false,
                generatedLink:'',
                message : 'Generate payment link',
                transactionType : 'COLLECTION',
                countrydialcode : '',
                countryCode:'',
                serviceClients : {},
                merchantTransactions:{},
                commonClient:{},
                servicesOptions :[],
                serviceId :'',
                responseMessage :'',
                AllCountries :[],
                CurrencyList :[],
                selectedCountryText: [],
                dangerSuccess:'danger',
                linkWithTransactionInfo : {
                    narration:'',
                    transAmount:'',
                    changeTransAmount:'',
                    currency :'',
                    currencyIso :'',
                    countryCode:'',
                    onetimeorgeneral:'',
                    noOfDaysTheLinkShdExpire:''
                }
            }
        },
        methods : {
            GetSelectedServiceData(selected) {
                 console.log(" Data : ", selected)
                this.linkWithTransactionInfo.currencyIso = selected.getCurrencyiso()
                this.linkWithTransactionInfo.countryCode = selected.getCountrycode()
                this.linkWithTransactionInfo.currency = this.CurrencyList.filter(x => x.getCountrycode() === selected.getCountrycode())
            },
         GetMerchantSevicesByLangIdCountryCode(){
                try {
                    const request = new merchantservices.PayPartnerMerchantCountryMessage();
                    request.setLanguageid(this.$store.getters.getUserInfo.languageId) // en
                    request.setCountrycode(this.$store.getters.getUserInfo.countryCode)

                    this.serviceClients.getMerchantServices(request, this.$store.getters.metadata, (err, res) => {
                        if(err){
                            console.log("Error : ", err)
                        }
                        if(res) {
                            this.servicesOptions = res.getServicelistList()
                            console.log(" Service info : ", res.getServicelistList())
                        }
                    })

                }catch (e) {
                    console.log(e.message)
                }
            },
            PostCollectionTransactionThroughPaymentLinkInitialData() {
                try {
                    this.$validator.validateAll().then((result) => {
                        if (result) {
                            this.responseMessage = '';
                            this.showLoader = true;
                            document.getElementById("image-loader").style.zIndex = "1";
                            let request = new merchantstrans.MechantPaymentByLinkInitailTransDataRequestMessage();

                            request.setBeneficiarypaypartnerserviceid(this.serviceId.getPaypartnerserviceid())
                            request.setBeneficiarytranscurrecyiso(this.linkWithTransactionInfo.currencyIso)
                            request.setBeneficiarycountrycode(this.linkWithTransactionInfo.countryCode)
                            request.setTransamount(this.linkWithTransactionInfo.transAmount)
                            request.setTransnarration(this.linkWithTransactionInfo.narration)
                            request.setCanuserchangeamountyesno(this.linkWithTransactionInfo.changeTransAmount)
                            request.setPaymenlinktype(this.linkWithTransactionInfo.onetimeorgeneral)
                            request.setNoofdaystoexpire(this.linkWithTransactionInfo.noOfDaysTheLinkShdExpire)
                            request.setLanguageid(this.$store.getters.getUserInfo.languageId)

                            console.log("request : ", request)
                            this.merchantTransactions.postCollectionMerchantTransactionThroughPaymentLinkInitialData(request,this.$store.getters.metadata, (err, res) => {
                                this.showLoader = false;
                                document.getElementById("image-loader").style.zIndex = "-1";
                                if(err){
                                    console.log("error : ", err)
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
                                        // aes
                                        this.$store.dispatch('saveAesData', {
                                            transRefNo : res.getPaymentbylinktransrefno(),
                                            countryCode : this.linkWithTransactionInfo.currency
                                        })

                                        const encryptedText = this.$CryptoJS.AES.encrypt(res.getPaymentbylinktransrefno()+ ":" + this.linkWithTransactionInfo.countryCode, this.$store.getters.getAesData.key).toString()
                                        const routeData = this.$router.resolve({name: 'My-payment', params: {id: encryptedText}});
                                        this.generatedLink =window.location.origin + routeData.href;


                                    }
                                }

                            });

                            return;
                        }
                    });
                }  catch (e) {
                    console.log(e)
                }
            },
            // GetListOfOperatingCountries(){
            //     let request = new commonDataClient.EmptyCommonDataMessage();
            //     this.commonClient.getReceivingOperatingCountries(request,{} , async (err,res) => {
            //         this.listOfCountries = await res.getCountrylistList()
            //         for(let i = 0; i < this.listOfCountries.length; i++) {
            //             this.listOfCountryNamesAndImage.push(this.listOfCountries[i].getCountryflagurl() +' '+ this.listOfCountries[i].getCountryname());
            //         }
            //     })
            // },
            GetSenderCountryList() {
                let request = new commonDataClient.EmptyCommonDataMessage()

                this.commonClient.getSenderAllCountries(request, this.$store.getters.metadata, (err,res) => {

                    if(res) {
                        this.AllCountries = res.getCountrylistList()
                    }
                })
            },
            GetCurrenciesByCountryCode() {
                  let request  = new commonDataClient.SendingAmountRequestMessage()

                request.setLanguageid(this.$store.getters.getUserInfo.languageId) // en
                request.setBeneficiarycountrycode(this.$store.getters.getUserInfo.countryCode)

                this.commonClient.getCurrenciesForSendingAmount(request, this.$store.getters.metadata, (err,res) => {
                      if(err) {
                          console.log('Error : ', err)
                      }
                     if(res) {
                         console.log( " Currency response : ", res.getCurrencylistList())
                         this.CurrencyList = res.getCurrencylistList()
                     }
                })

            },
            async copyUrl(urlText) {
               await navigator.clipboard.writeText(urlText);
                this.btnCopyTextValue = 'Copied'
            },
            GetSelectedCountryInfo(selectedCountry) {
                this.countrydialcode = selectedCountry.getCountrydialcode()
                this.countryCode = selectedCountry.getCountrycode()
            },
            TakeawayZeroFromMobileNumberStarting(mobileNo){

                try {
                    if(mobileNo.startsWith('0')){
                        this.linkWithTransactionInfo.mobileNumber = mobileNo.slice(1)
                    }
                }catch (e){
                    console.log("Error :  ", e)
                }

            },
            GenerateLinkWithTransactionInofrmation(){
                 try {
                     const encryptedText = this.$CryptoJS.AES.encrypt("1", "Eganow1sHere@").toString()
                     const routeData = this.$router.resolve({name: 'My-payment', params: {id: encryptedText}});
                      this.generatedLink =window.location.origin + routeData.href;
                     // this.$router.push({name: 'My-payment', params: {id: encryptedText}})
                      console.log(" router link : ",routeData.href)
                     const decryptedText = this.$CryptoJS.AES.decrypt(encryptedText, "Eganow1sHere@").toString(this.$CryptoJS.enc.Utf8)
                       console.log(" decrypted value : ", decryptedText)
                    //   window.open(routeData.href, '_blank');
                 }catch (e) {
                     console.log(e)
                 }
            }
        },
        created() {
            this.serviceClients = new merchantservices.MerchantAccountSvcClient(grpcUrl.URL,null,null)
            this.commonClient = new commonDataClient.CommonDataSvcClient(constant.URL,null,null);
            this.merchantTransactions = new merchantstrans.MerchantMoneyTransferForBusinessPortalSvcClient(grpcUrl.URL,null, null)
            this.GetMerchantSevicesByLangIdCountryCode();
          //  this.GetSenderCountryList();
            this.GetCurrenciesByCountryCode();
            this.$store.dispatch('setAppHeader', {
                title: "Account Transaction",
                items: [
                    {
                        text: "Dashboard",
                        href: "#",
                    },
                    {
                        text: "Generate payment link",
                        href: "/merchant/payment-link",
                    },
                ],
            })
        }
    }
</script>

<style>
  .card-header {
      background-color: #fff !important;
  }
  #expandCurrencySelect .multiselect__content-wrapper {
      width: 34.5rem !important;
  }
</style>