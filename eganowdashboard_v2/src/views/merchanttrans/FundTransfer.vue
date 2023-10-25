<template>
    <div>
        <div class="image-loader"  id="image-loader" >
            <lottie-loader :loading="showLoader" />
        </div>
        <div class="content">
            <div class="row">
                <CustomHeaderAlert :message="message" />
                <div class="col-lg-12">
                    <b-overlay :show="showLoader" rounded="sm">
                        <div class="row">
                            <div class="col">
                                <div class="card">
                                    <div class="card-body">
                                        <form @submit.prevent="SearchPendingFundTransfer">
                                            <div class="row">
                                                <div class="col-lg-5 col-md-5">
                                                    <div class="form-group mb-3">
                                                        <label>Select Service</label>
                                                        <select class="custom-select" v-model="searchfundtransfer.serviceid" name="serviceid" id="serviceid" v-validate="'required'" >
                                                            <option value="" selected> Select service</option>
                                                            <option :value="serv.getPaypartnerserviceid()" v-for="serv in servicesOptions" :key="serv.getPaypartnerserviceid()">{{ serv.getPaypartnerservicename().toUpperCase() }}</option>
                                                        </select>
                                                        <span v-show="vErrors.has('serviceid')" class="help text-danger">{{ vErrors.first('serviceid') }}</span>
                                                    </div>
                                                </div>
                                                <div class="col-lg-2 col-md-2">
                                                    <div class="form-group mb-3">
                                                        <label for=""></label>
                                                        <br />
                                                        <button class="btn btn-primary btn-block" id="bkcolor" type="submit" style="margin-top: 9px;" >
                                                            Search
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-overlay>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <AlertMessage :variant="dangerSuccess" :message="responseMessageStatus" v-if="responseMessageStatus"/>
                        <div class="card-body">
                            <div style="float: right !important;">
                                <a v-b-modal.modal-lg class="btn btn-danger mb-2"
                                ><i class="mdi mdi-plus-circle mr-1"></i> Initiate new fund transfer transaction</a>
                            </div>

                            <h4 class="header-title">Search result</h4>
                            <p class="text-muted font-13 mb-4"></p>
                            <div class="row mb-md-2">
                                <div class="col-sm-12 col-md-6">
                                    <div id="tickets-table_length" class="dataTables_length">
                                        <label class="d-inline-flex align-items-center">
                                            Show&nbsp;
                                            <b-form-select
                                                    v-model="perPage"
                                                    size="sm"
                                                    :options="pageOptions"
                                            ></b-form-select
                                            >&nbsp;entries
                                        </label>
                                    </div>
                                </div>
                                <!-- Search -->
                                <div class="col-sm-12 col-md-6">
                                    <div
                                            id="tickets-table_filter"
                                            class="dataTables_filter text-md-right"
                                    >
                                        <label class="d-inline-flex align-items-center">
                                            Search:
                                            <b-form-input
                                                    v-model="filter"
                                                    type="search"
                                                    placeholder="Search..."
                                                    class="form-control form-control-sm ml-2"
                                            ></b-form-input>
                                        </label>
                                    </div>
                                </div>
                                <!-- End search -->
                            </div>
                            <!-- Table -->
                            <b-overlay :show="showLoaderTable" rounded="sm">
                                <div class="table-responsive mb-0" id="table">
                                    <b-table style="color: #000000 !important;"
                                             :items="listOfFundTransferTransactions"
                                             :fields="tableFields"
                                             responsive="sm"
                                             :per-page="perPage"
                                             :current-page="currentPage"
                                             :sort-by.sync="sortBy"
                                             :sort-desc.sync="sortDesc"
                                             :filter="filter"
                                             :filter-included-fields="filterOn"
                                             @filtered="onFiltered"
                                    >

                                        <template #cell(actions)="data">
                                            <a class="text-success mr-2" style="cursor: pointer" @click="ApproveFundTransfer(data.item)" v-if="data.item.transStatus === 'PENDING'" > <i class="mdi mdi-check"></i> Approve</a>
                                            <a class="text-danger mr-2" style="cursor: pointer" @click="DisapproveFundTransfer(data.item)" > <i class="mdi mdi-cancel"></i> Disapprove</a>
                                        </template>

                                    </b-table>
                                </div>
                            </b-overlay>
                            <div class="row">
                                <div class="col">
                                    <div
                                            class="dataTables_paginate paging_simple_numbers float-right"
                                    >
                                        <ul class="pagination pagination-rounded mb-0">
                                            <!-- pagination -->
                                            <b-pagination
                                                    v-model="currentPage"
                                                    :total-rows="rows"
                                                    :per-page="perPage"
                                            ></b-pagination>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--    Start modal    -->
                <b-modal
                        id="modal-lg"
                        title="Add fund transfer"
                        title-class="font-18"
                        class="p-4"
                        hide-footer>
                    <b-overlay :show="showLoaderAddfundtransfer" rounded="sm">
                        <form @submit.prevent="AddFundTransfer" >
                            <AlertMessage :variant="dangerSuccess" :message="responseMessage" v-if="responseMessage"/>
                            <div class="form-group mb-3">
                                <label>Select service</label>
                                <select class="custom-select" v-model="addfundtransfer.service" name="service" id="service" v-validate="'required'" >
                                    <option value="" selected> Select service</option>
                                    <option :value="serv.getPaypartnerserviceid()" v-for="serv in servicesOptions" :key="serv.getPaypartnerserviceid()">{{ serv.getPaypartnerservicename().toUpperCase() }}</option>
                                </select>
                                <span v-show="vErrors.has('service')" class="help text-danger">{{ vErrors.first('service') }}</span>
                            </div>
                            <div class="form-group mb-3">
                                <label>Select transaction type</label>
                                <select class="custom-select" v-model="addfundtransfer.addtranstype" name="addtranstype" v-validate="'required'"  @change="PassTransTypeDataToNarration()">
                                    <option value="" selected> Select transaction type</option>
                                    <option value="TRANSFER_COLLECTION_TO_PAYOUT">TRANSFER COLLECTION TO PAYOUT</option>
                                    <option value="TRANSFER_PAYOUT_TO_COLLECTION"> TRANSFER PAYOUT TO COLLECTION</option>
                                    <option value="TRANSFER_MERCHANT_FEE_TO_COLLECTION"> TRANSFER MERCHANT FEE TO COLLECTION</option>
                                    <option value="TRANSFER_MERCHANT_FEE_TO_PAYOUT"> TRANSFER MERCHANT FEE TO PAYOUT</option>
                                </select>
                                <span v-show="vErrors.has('addtranstype')" class="help text-danger">{{ vErrors.first('addtranstype') }}</span>
                            </div>
                            <div class="form-group mb-3">
                                <label>Enter transaction amount </label>
                                <input  name="amount" type="text"
                                        class="form-control"
                                        placeholder="Transaction amount"
                                        v-validate="'required'"
                                        :class="{'is-invalid': vErrors.has('amount') }"
                                        v-model="addfundtransfer.amount"
                                />
                                <span v-show="vErrors.has('amount')" class="help text-danger">{{ vErrors.first('amount') }}</span>

                            </div>
                            <div class="form-group mb-3">
                                <label> Transaction narration </label>
                                <textarea v-model="addfundtransfer.narration" class="form-control" id="narration" v-validate="'required'" :class="{'is-invalid': vErrors.has('narration') }" name="narration" :maxlength="500" rows="3"></textarea>
                                <span v-show="vErrors.has('narration')" class="help text-danger">{{ vErrors.first('narration') }}</span>

                            </div>



                            <div class="form-group mb-0 text-center">
                                <button class="btn btn-primary btn-block" id="bkcolor" type="submit">
                                    Submit
                                </button>
                            </div>

                        </form>
                    </b-overlay>
                </b-modal>
                <!--   End Model         -->
            </div>
        </div>

    </div>
</template>

<script>
    import CustomHeaderAlert from "../../components/shared/CustomHeaderAlert";
    import merchantservices from "../../protos/MerchantAccount_grpc_web_pb";
    import merchantmoneytransfer from "../../protos/MerchantMoneyTransferForBusinessPortal_grpc_web_pb";
    import grpcUrl from "../../components/constant";
    import AlertMessage from "../../components/shared/AlertMessage";
    import SweetAlertConfig from "../../SwalConfig";
    import SweetAlertWrapper from "../../sweetAlert";
    import LottieLoader from "../../components/LottieLoader";
    export default {
       data() {
           return {
               message : 'Add fund transfer and get all transfer record',
               showLoader : false,
               showLoaderTable : false,
               showLoaderAddfundtransfer : false,
               responseMessageStatus : '',
               dangerSuccess :  'danger',
               currencyiso:'',
               responseMessage : '',
               serviceClients :{},
               merchantClients :{},
               servicesOptions :[],
               listOfFundTransferTransactions :[],
               addfundtransfer :{
                  service :'',
                   addtranstype :'',
                   narration:'',
                   amount :'',
                   currencyISO :''
               },
               searchfundtransfer : {
                   serviceid :'',
                   transtype :'',
               },
               totalRows: 1,
               currentPage: 1,
               perPage: 10,
               pageOptions: [10, 25, 50, 100],
               filter: null,
               filterOn: [],
               sortBy: "makeDate",
               sortDesc: false,
               tableFields: [
                   {
                       label:"Post date",
                       key: "makeDate",
                       sortable: true,
                   },
                   {
                       label:"Trans type",
                       key: "cashOrTransferType",
                       sortable: true,
                   },
                   {
                       label: "Trans amount",
                       key: "transAmount",
                       sortable: true,
                   },
                   {
                       label: "Status",
                       key: "transStatus",
                       sortable: true,
                   },
                   {
                       label: "Created by",
                       key: "makerId",
                       sortable: true,
                   },
                   {
                       key: "actions",
                       sortable: true,
                   },
               ],
           }
       },
        components : {
          CustomHeaderAlert,
            AlertMessage,
            LottieLoader
        },
        methods : {
            SearchPendingFundTransfer(){
                try {

                    const request = new merchantmoneytransfer.MerchantFundTransferPendingRequestMessage();
                    this.showLoader = true;
                    document.getElementById("image-loader").style.zIndex = "1";
                     request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                     request.setPaypartnerservicecountrycode(this.$store.getters.getUserInfo.countryCode)
                     request.setPaypartnerserviceid(this.searchfundtransfer.serviceid)

                     this.merchantClients.getMerchantServiceFundTransferPendingTransactions(request, this.$store.getters.metadata, (err,res) => {
                      this.showLoader = false

                         document.getElementById("image-loader").style.zIndex = "0";
                         if(err) {
                             console.log(" Error : ", err)
                         }

                         if(res) {
                             this.listOfFundTransferTransactions = []
                             console.log(" Response : ", res.getTranslistList())
                             res.getTranslistList().forEach((data) => {
                                 this.listOfFundTransferTransactions.push({
                                     payPartnerServiceId :   data.getPaypartnerserviceid(),
                                     currensyIso : data.getCurrencyiso(),
                                     transAmount : grpcUrl.formatMoney(data.getTransamount(),data.getCurrencyiso()),
                                     makeDate : data.getMakedate(),
                                     cashOrTransferType : data.getCashortransfertype(),
                                     transStatus : data.getTransstatus(),
                                     makerId : data.getMakerid(),
                                     countryCode : data.getCountrycode(),
                                     journalRefNo : data.getJournalrefno()
                                 })
                             })
                         }
                     })
                        console.log("hello ")
                }catch (e) {
                    console.log(" Error : ",e)
                }
            },
            PassTransTypeDataToNarration(){

                try {
                    console.log(" Data : ")
                    this.addfundtransfer.narration = this.addfundtransfer.addtranstype.replace(/_/g, " ");
                }catch (e) {
                    console.log(" Error : ", e)
                }
            },
            ApproveFundTransfer(data) {

                try {
                    console.log( " Approve : ", data.journalRefNo)
                     this.responseMessageStatus = ''
                    this.sweetAlert.showDialogYesOrNo(Object.assign(SweetAlertConfig, {
                        title :'Approve fund transfer ?',
                        confirmButtonText : 'Yes, approve'
                    }), () => {

                        const request = new merchantmoneytransfer.MerchantFundTransferApprovalRequestMessage()

                        request.setPaypartnerserviceid(data.payPartnerServiceId)
                        request.setPaypartnerservicecountrycode(data.countryCode)
                        request.setJournalreferrenceno(data.journalRefNo)
                        request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                          console.log(" Request : ", request)
                        this.showLoaderTable = true
                        this.merchantClients.merchantServiceInternalFundTransferApproval(request, this.$store.getters.metadata , (err,res) => {
                         this.showLoaderTable = false;
                            if(err) {
                                console.log( " Error : ", err)
                                this.responseMessageStatus = grpcUrl.serverError
                            }
                            console.log(" response : ", res)
                            if (res.getIssuccess()) {
                                console.log(" Service id before :",  this.searchfundtransfer.serviceid)

                                this.searchfundtransfer.serviceid = data.payPartnerServiceId
                                console.log(" Service id after: ",  this.searchfundtransfer.serviceid)
                                this.SearchPendingFundTransfer()
                                this.sweetAlert.showMessage("Fund transfer ", res.getMessage())
                            }
                            else {

                                this.responseMessageStatus = res.getMessage()
                            }
                        })
                    })

                }catch (e) {
                    console.log( " Error : ", e)
                }
            },
            DisapproveFundTransfer(data){

                try {
                    console.log( " Disapprove : ", data.journalRefNo)

                    this.sweetAlert.showDialogYesOrNo(Object.assign(SweetAlertConfig, {
                        title :'Disapprove ',
                        confirmButtonText : 'Yes, disapprove'
                    }), () => {

                        const request = new merchantmoneytransfer.MerchantInternalFundTransferInitRequestMessage()

                        request.setPaypartnerserviceid(this.addfundtransfer.service)
                        request.setCashortransfertype(this.addfundtransfer.addtranstype)
                        request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                        request.setMobileorweborussd("WEB")
                        request.setTransamount(this.addfundtransfer.amount)
                        request.setTransnarration(this.addfundtransfer.narration)
                        request.setPaypartnerservicecountrycode(this.$store.getters.getUserInfo.countryCode)
                        console.log(" Request fund transfer : ", request)
                        this.showLoaderAddfundtransfer = true
                        this.merchantClients.merchantServiceInternalFundTransfer(request, this.$store.getters.metadata , (err,res) => {
                            this.showLoaderAddfundtransfer = false

                            if(err) {
                                console.log( " Error : ", err)
                            }

                            if (res.getIssuccess()) {
                                this.sweetAlert.showMessage("Fund transfer ", res.getMessage())
                            }
                            else {

                                this.responseMessage = res.getMessage()
                            }
                        })
                    })

                }catch (e) {
                    console.log(" Error : ", e)
                }
            },

           async AddFundTransfer(){

                try {

                    let validated_service = await this.$validator.validate('service', this.addfundtransfer.service);
                    let validated_transtype = await this.$validator.validate('addtranstype', this.addfundtransfer.addtranstype);
                    let validated_narration = await this.$validator.validate('narration', this.addfundtransfer.narration);
                    let validated_amount = await this.$validator.validate('amount', this.addfundtransfer.amount);

                    if(validated_service && validated_transtype && validated_narration && validated_amount){

                        this.sweetAlert.showDialogYesOrNo(Object.assign(SweetAlertConfig, {
                            title :'Post transaction ?',
                            text :'',
                            confirmButtonText : 'Yes, add'
                        }), () => {

                            const request = new merchantmoneytransfer.MerchantInternalFundTransferInitRequestMessage()

                            request.setPaypartnerserviceid(this.addfundtransfer.service)
                            request.setCashortransfertype(this.addfundtransfer.addtranstype)
                            request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                            request.setMobileorweborussd("WEB")
                            request.setTransamount(this.addfundtransfer.amount)
                            request.setTransnarration(this.addfundtransfer.narration)
                            request.setPaypartnerservicecountrycode(this.$store.getters.getUserInfo.countryCode)
                                     console.log(" Request fund transfer : ", request)
                            this.showLoaderAddfundtransfer = true
                            this.merchantClients.merchantServiceInternalFundTransfer(request, this.$store.getters.metadata , (err,res) => {
                                this.showLoaderAddfundtransfer = false

                                if(err) {
                                    console.log( " Error : ", err)
                                }

                                if (res.getIssuccess()) {
                                    this.$bvModal.hide("modal-lg")
                                    this.searchfundtransfer.serviceid = this.addfundtransfer.service
                                    this.SearchPendingFundTransfer()
                                    this.sweetAlert.showMessage("Fund transfer ", res.getMessage())

                                }
                                else {

                                    this.responseMessage = res.getMessage()
                                }
                            })
                        })

                    }



                }catch (e) {
                    console.log(" Error : ",e)
                }

            },
            onFiltered(filteredItems) {
                // Trigger pagination to update the number of buttons/pages due to filtering
                this.totalRows = filteredItems.length;
                this.currentPage = 1;
            },

            GetMerchantSevicesByLangIdCountryCode(){
                try {
                    const request = new merchantservices.PayPartnerMerchantCountryMessage();
                    //this.currencyiso = this.$store.getters.getUserInfo.currencyISO
                    request.setLanguageid(this.$store.getters.getUserInfo.languageId) // en
                    request.setCountrycode(this.$store.getters.getUserInfo.countryCode)
                    this.showLoader = true
                    this.serviceClients.getMerchantServices(request, this.$store.getters.metadata, (err, res) => {
                    this.showLoader = false
                        if(err){
                            console.log("Error : ", err)
                        }
                        if(res) {
                            this.servicesOptions = res.getServicelistList()
                            // console.log(" service : ", this.servicesOptions)
                        }
                    })

                }catch (e) {
                    console.log(e.message)
                }
            },
        },
        computed:{
            rows() {
                return this.listOfFundTransferTransactions.length;
            },
        },
        created() {
            this.serviceClients = new merchantservices.MerchantAccountSvcClient(grpcUrl.URL,null,null)
            this.merchantClients = new merchantmoneytransfer.MerchantMoneyTransferForBusinessPortalSvcClient(grpcUrl.URL,null,null)
            this.sweetAlert = new SweetAlertWrapper()
            this.GetMerchantSevicesByLangIdCountryCode()
            this.$store.dispatch('setAppHeader', {
                title: "Fund Transfer",
                items: [
                    {
                        text: "Dashboard",
                        href: "#",
                    },
                    {
                        text: "Fund transfer",
                        href: "#",
                    },
                ],
            })
        }
    }
</script>

<style scoped>

</style>