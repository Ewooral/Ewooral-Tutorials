<template>
    <div>
<!--        <b-overlay :show="showLoader" rounded="sm">-->
            <div class="image-loader"  id="image-loader" >
                <lottie-loader :loading="showLoader" />
            </div>
        <div class="content">
            <div class="row">
                <CustomHeaderAlert :message="message" />
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <form @submit.prevent="SearchGlStatementTransaction">
                                        <AlertMessage :variant="dangerSuccess" :message="responseMessage" v-if="responseMessage"/>
                                        <div class="row">
                                            <div class="col-lg-3 col-md-3">
                                                <div class="form-group mb-3">
                                                    <div class="row">
                                                        <label>Transaction type</label>
                                                        <select class="custom-select" v-model="transactionType" name="transactionType" id="transactionType" v-validate="'required'" >
                                                            <option value="" selected> Select transaction type</option>
                                                            <option value="COLLECTION">Collection</option>
                                                            <option value="PAYOUT"> Payout</option>
                                                            <option value="COMMISSION"> Commission</option>
                                                        </select>

                                                        <span v-show="vErrors.has('transactionType')" class="help text-danger">{{ vErrors.first('transactionType') }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-md-3">
                                                <div class="form-group mb-3">
                                                    <label>Services</label>
                                                    <select class="custom-select" v-model="serviceId" name="serviceId" id="serviceId" v-validate="'required'" >
                                                        <option value="" selected> Select service</option>
                                                        <option :value="serv.getPaypartnerserviceid()" v-for="serv in servicesOptions" :key="serv.getPaypartnerserviceid()">{{ serv.getPaypartnerservicename() }}</option>
                                                    </select>
                                                    <span v-show="vErrors.has('serviceId')" class="help text-danger">{{ vErrors.first('serviceId') }}</span>
                                                </div>
                                            </div>
                                            <div class="col-lg-2 col-md-2">
                                                <div class="form-group mb-3">
                                                    <label>Start Date</label>
                                                    <date-picker v-model="startDate" :first-day-of-week="1" lang="en"
                                                                 v-validate="'required'"
                                                    />
                                                    <span v-show="vErrors.has('startDate')" class="help text-danger">{{ vErrors.first('startDate') }}</span>
                                                </div>
                                            </div>
                                            <div class="col-lg-2 col-md-2">
                                                <div class="form-group mb-3">
                                                    <label>End Date</label>
                                                    <date-picker v-model="endDate" :first-day-of-week="1" lang="en"
                                                                 v-validate="'required'"
                                                    />
                                                    <span v-show="vErrors.has('endDate')" class="help text-danger">{{ vErrors.first('endDate') }}</span>
                                                </div>
                                            </div>
                                            <div class="col-lg-2 col-md-2">
                                                <div class="form-group mb-3">
                                                    <label ></label>
                                                    <br />
                                                    <button class="btn btn-primary btn-block" id="bkcolor" type="submit" style="margin-top: 8px;" >
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
                </div>
            </div>
            <!--        </b-overlay>-->
            <div class="row">
                <div class="col-12">
                    <div class="card">

                        <div class="card-body">
                            <div class="row">
                                <div class="col-2">
                                    <h4 class="header-title">Search result</h4>
                                </div>
                                <div class="col-4">

                                </div>
                            </div>


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
                                        <download-excel :data="this.listOfFilteredglstaements" class="text-success hidefromprint" style="font-weight: bold; cursor: pointer;">
                                            Export to excel
                                        </download-excel>
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
                            <b-overlay :show="showLoaderForTable" rounded="sm">
                                <div class="table-responsive mb-0" id="table">
                                    <b-table style="color: #000000 !important;"
                                             :items="listOfglStatments"
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
                                        <template #cell(DRCR)="data">
                                      <span :class="{
                                        'text-success p-1': `${data.item.DRCR}` === 'CR',
                                        'text-danger p-1': `${data.item.DRCR}` ==='DR'
                                      }" class="badge"> {{data.item.DRCR}}</span>
                                        </template>
                                        <template #cell(actions)="data">
                                            <a v-b-modal.modal-lg class="text-secondary mr-2" style="cursor: pointer" @click="ViewTransaction(data.item)"  > <i class="mdi mdi-eye"></i> View</a>
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
            </div>
        </div>

        <!-- start View transaction model      -->
        <b-modal
                id="modal-lg"
                title="View transaction statement"
                title-class="font-18"
                body-class="p-4"
                size="lg"
        >

            <div class="row">

                <div class="col-6">
                    <div class="form-group mb-3">
                        <label>Account name </label>
                        <input
                                class="form-control"
                                type="text"
                                v-model="viewTransaction.AccountName"
                                name="sourceAccountName"
                                readonly
                        />
                    </div>
                    <div class="form-group mb-3">
                        <label>Account number</label>
                        <input
                                class="form-control"
                                type="text"
                                v-model="viewTransaction.Narration"
                                name="recipientName"
                                readonly
                        />
                    </div>
                    <div class="form-group mb-3">
                        <label>Transaction amount</label>
                        <input
                                class="form-control"
                                type="text"
                                v-model="viewTransaction.TransAmount"
                                name="transAmountWithCurrency"
                                readonly
                        />
                    </div>
                    <div class="form-group mb-3">
                        <label>Balance </label>
                        <input
                                class="form-control"
                                type="text"
                                v-model="viewTransaction.Balance"
                                name="payPartnerServiceName"
                                readonly
                        />
                    </div>
                    <div class="form-group mb-3">
                        <label>Credit Or Debit</label>
                        <input
                                class="form-control"
                                type="text"
                                v-model="viewTransaction.DrCr"
                                name="transTimes"
                                readonly
                        />
                    </div>
                </div>
                <div class="col-6">
                    <div class="form-group mb-3">
                        <label>Main or Reversal </label>
                        <input
                                class="form-control"
                                type="text"
                                v-model="viewTransaction.MainOrReversal"
                                name="sourceAccountNo"
                                readonly
                        />
                    </div>
                    <div class="form-group mb-3">
                        <label>Reference number </label>
                        <input
                                class="form-control"
                                type="text"
                                v-model="viewTransaction.EganowTransRefNo"
                                name="recipientAccountNo"
                                readonly
                        />
                    </div>
                    <div class="form-group mb-3">
                        <label> Merchant reference number </label>
                        <input
                                class="form-control"
                                type="text"
                                v-model="viewTransaction.MerchantTransRefNoInMerchantSystem"
                                name="commissionWithCurrency"
                                readonly
                        />
                    </div>
                    <div class="form-group mb-3">
                        <label>Main or fee or transfer </label>
                        <input
                                class="form-control"
                                type="text"
                                v-model="viewTransaction.MainOrFeeOrTransfer"
                                name="gatewayTranStatus"
                                readonly
                        />
                    </div>
                    <div class="form-group mb-3">
                        <label>Value date </label>
                        <input
                                class="form-control"
                                type="text"
                                v-model="viewTransaction.valueDate"
                                name="valueDate"
                                readonly
                        />
                    </div>
                </div>
            </div>


        </b-modal>
        <!--  End  View transaction model     -->
    </div>
</template>

<script>
    import CustomHeaderAlert from "../../components/shared/CustomHeaderAlert";
    //import grpcUrl from "../../components/constant";
    import AlertMessage from "../../components/shared/AlertMessage";
    import DatePicker from "vue2-datepicker";
    import merchantstrans from "../../protos/MerchantMoneyTransferForBusinessPortal_grpc_web_pb";
    import grpcUrl from "../../components/constant";
    import merchantservices from "../../protos/MerchantAccount_grpc_web_pb";
    import LottieLoader from "../../components/LottieLoader";
    import Vue from "vue";
    export default {
       data(){
           return {

               viewTransaction : {
                   valueDate : '',
                   AccountName : '',
                   DrCr : '',
                   TransAmount : '',
                   Balance: '',
                   MainOrReversal : '',
                   EganowTransRefNo : '',
                   MerchantTransRefNoInMerchantSystem : '',
                   MainOrFeeOrTransfer : '',
                   Narration:'',
                   Tid :''
               },
               message :'Lists of gl statements ',
               dangerSuccess :'danger',
               responseMessage :'',
               serviceId:'',
               transactionType :'',
               showLoader : false,
               showLoaderForTable : false,
               listOfFilteredglstaements : [],
               listOfglStatments :[],
               clients:{},
               startDate:new Date(),
               endDate: new Date(),
               servicesOptions:[],
               totalRows: 1,
               currentPage: 1,
               perPage: 10,
               pageOptions: [10, 25, 50, 100],
               filter: null,
               filterOn: [],
               sortBy: "valueDate",
               sortDesc: false,
               tableFields: [
                   {
                       label:"Value date",
                       key: "valueDate",
                       sortable: true,
                   },
                   {
                       label :"Narration",
                       key: "Narration",
                       sortable: true,
                   },
                   {
                       label :"Credit or Debit",
                       key: "DRCR",
                       sortable: true,
                   },
                   {
                       label :"Trans Amount",
                       key: "TransAmount",
                       sortable: true,
                   },
                   {
                       label :"Balance",
                       key: "Balance",
                       sortable: true,
                   },
                   {
                       label: "Main or Fee or Transfer",
                       key: "MainOrFeeOrTransfer",
                       sortable: true,
                   },
                   {
                       label:"Main or Reversal",
                       key: "MainOrReversal",
                       sortable: true,
                   },
                   {
                       label:"Eganow RefNo",
                       key: "EganowTransRefNo",
                       sortable: true,
                   },
                   {
                       label:"Merchant RefNo",
                       key: "MerchantTransRefNoInMerchantSystem",
                       sortable: true,
                   },
                   // {
                   //     label:"Merchant RefNo",
                   //     key: "MerchantTransRefNoInMerchantSystem",
                   //     sortable: true,
                   // },
                   {
                       key: "actions",
                       sortable: true,
                   },
               ],
           }
       },
        components :{
            CustomHeaderAlert,
            AlertMessage,
            DatePicker,
            LottieLoader
        },
        methods : {
            SearchGlStatementTransaction(){
                try {
                     let request = new merchantstrans.MerchantServiceTransRequestMessage()
                    this.showLoader = true
                    document.getElementById("image-loader").style.zIndex = "1";

                    request.setCollectionorpayout(this.transactionType)
                     request.setCountrycode(this.$store.getters.getUserInfo.countryCode)
                     request.setFromdate(Vue.moment(this.startDate).format('DD-MM-YYYY'))
                     request.setTodate(Vue.moment(this.endDate).format(('DD-MM-YYYY')))
                     request.setPartnerserviceid(this.serviceId)

                    // console.log(" Request : ", request) //clients

                     this.clients.getMerchantServiceAccountStatement(request, this.$store.getters.metadata, (err, res) => {
                     this.showLoader = false;
                         document.getElementById("image-loader").style.zIndex = "0";

                         if(err) {
                             console.log(err)
                         }

                         if(res) {
                             console.log(" Response  : ", res.getStatementlistList())
                              this.listOfglStatments = []
                               res.getStatementlistList().forEach((data) => {
                                   this.listOfglStatments.push({
                                       valueDate : Vue.moment(data.getValuedate()).format('DD/MM/YYYY') ,
                                       AccountName : data.getAccountname(),
                                       TransAmount : grpcUrl.formatMoney(data.getTransamount(),data.getCurrencyiso()),
                                       Balance : grpcUrl.formatMoney(data.getBalance(),data.getCurrencyiso()),
                                       DRCR : data.getDrcr(),
                                       CurrencyIso : data.getCurrencyiso(),
                                       Narration : data.getTransnarration(),
                                       MainOrFeeOrTransfer : data.getMainorfeeortransfer(),
                                       EganowTransRefNo : data.getEganowtransrefno(),
                                       MainOrReversal : data.getMainOrReversal(),
                                       Tid : data.getTid(),
                                       MerchantTransRefNoInMerchantSystem : data.getMerchanttransrefnoinmerchantsystem()
                                   })
                               })
                             this.listOfFilteredglstaements = this.listOfglStatments;
                         }
                     })

                }catch (e) {
                    console.log(e)
                }

            },
            onFiltered(filteredItems) {
                console.log(" filter data : ", filteredItems)
                this.listOfFilteredglstaements = filteredItems
                // Trigger pagination to update the number of buttons/pages due to filtering
                this.totalRows = filteredItems.length;
                this.currentPage = 1;
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
                        }
                    })

                }catch (e) {
                    console.log(e.message)
                }
            },
            ViewTransaction(data) {
                  try {
                     // console.log(data)
                      this.viewTransaction.valueDate = data.valueDate;
                      this.viewTransaction.AccountName = data.AccountName;
                      this.viewTransaction.Narration = data.Narration;
                      this.viewTransaction.EganowTransRefNo = data.EganowTransRefNo;
                      this.viewTransaction.MainOrReversal = data.MainOrReversal;
                      this.viewTransaction.MainOrFeeOrTransfer = data.MainOrFeeOrTransfer;
                      this.viewTransaction.DrCr = data.DRCR;
                      this.viewTransaction.TransAmount = data.TransAmount;
                      this.viewTransaction.Balance = data.Balance;
                      this.viewTransaction.MerchantTransRefNoInMerchantSystem = data.MerchantTransRefNoInMerchantSystem;
                      // this.viewTransaction.valueDate = data.valueDate;
                      
                  }catch (e) {
                      console.log(e)
                  }
            }
        },
        computed:{
            rows() {
                return this.listOfFilteredglstaements.length;
            },
        },
        created() {
            this.clients = new merchantstrans.MerchantMoneyTransferForBusinessPortalSvcClient(grpcUrl.URL,null, null)
            this.serviceClients = new merchantservices.MerchantAccountSvcClient(grpcUrl.URL,null,null)
             this.GetMerchantSevicesByLangIdCountryCode(),
                 this.$store.dispatch('setAppHeader', {
                     title: "Gl Statements",
                     items: [
                         {
                             text: "Dashboard",
                             href: "#",
                         },
                         {
                             text: "Account Statements",
                             href: "/business/glstatement",
                         },
                     ],
                 })
        }
    }
</script>

<style >

</style>