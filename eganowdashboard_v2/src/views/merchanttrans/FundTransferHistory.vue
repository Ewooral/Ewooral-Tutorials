<template>
    <!--  <b-overlay :show="showLoader" rounded="sm">-->
    <div>
        <div class="image-loader"  id="image-loader" >
            <lottie-loader :loading="showLoader" />
        </div>
        <div>
            <div class="row consent">
                <CustomHeaderAlert :message="message" />
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <form @submit.prevent="SearchTransaction">
                                        <AlertMessage :variant="dangerSuccess" :message="responseMessage" v-if="responseMessage"/>
                                        <div class="row">
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
                                            <div class="col-lg-3 col-md-3">
                                                <div class="form-group mb-3">
                                                    <label>Start Date</label>
                                                    <date-picker v-model="startDate" :first-day-of-week="1" lang="en"
                                                                 v-validate="'required'"
                                                    />
                                                    <span v-show="vErrors.has('startDate')" class="help text-danger">{{ vErrors.first('startDate') }}</span>
                                                </div>
                                            </div>
                                            <div class="col-lg-3 col-md-3">
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
                                        <div v-if="fundtransferHistoryFiltered.length > 0">
                                            <download-excel :data="this.fundtransferHistoryFiltered" class="text-success hidefromprint" style="font-weight: bold; cursor: pointer;">
                                                Export to excel
                                            </download-excel>
                                        </div>

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
                            <div class="table-responsive mb-0" id="table">
                                <b-table
                                        :items="fundtransferHistory"
                                        :fields="tableFields"
                                        responsive="sm"
                                        :per-page="perPage"
                                        :current-page="currentPage"
                                        :sort-by.sync="sortBy"
                                        :sort-desc.sync="sortDesc"
                                        :filter="filter"
                                        :bordered="true"
                                        :striped="true"
                                        :filter-included-fields="filterOn"
                                        @filtered="onFiltered"
                                >
                                    <template #cell(actions)="data">
                                        <a v-b-modal.modal-lg class="text-success mr-2" style="cursor: pointer" @click="ViewTransaction(data.item)" > <i class="mdi mdi-eye"></i> View</a>
                                    </template>
                                </b-table>
                            </div>
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
            <!-- start View transaction model      -->
            <b-modal
                    id="modal-lg"
                    title="View transactions"
                    title-class="font-18"
                    body-class="p-4"
                    size="lg"
            >

                <div class="row">

                    <div class="col-6">
                        <div class="form-group mb-3">
                            <label>Narration </label>
                            <input
                                    class="form-control"
                                    type="text"
                                    v-model="viewTransaction.narration"
                                    name="narration"
                                    readonly
                            />
                        </div>
                        <div class="form-group mb-3">
                            <label>Transaction status </label>
                            <input
                                    class="form-control"
                                    type="text"
                                    v-model="viewTransaction.transStatus"
                                    name="transStatus"
                                    readonly
                            />
                        </div>
                        <div class="form-group mb-3">
                            <label>Currency </label>
                            <input
                                    class="form-control"
                                    type="text"
                                    v-model="viewTransaction.currency"
                                    name="transAmount"
                                    readonly
                            />
                        </div>
                        <div class="form-group mb-3">
                            <label>Transaction type</label>
                            <input
                                    class="form-control"
                                    type="text"
                                    v-model="viewTransaction.cashOrTransferType"
                                    name="cashOrTransferType"
                                    readonly
                            />
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="form-group mb-3">
                            <label>Initiated By</label>
                            <input
                                    class="form-control"
                                    type="text"
                                    v-model="viewTransaction.initiatedBy"
                                    name="initiatedBy"
                                    readonly
                            />
                        </div>
                        <div class="form-group mb-3">
                            <label> Authorization status </label>
                            <input
                                    class="form-control"
                                    type="text"
                                    v-model="viewTransaction.authStatus"
                                    name="authStatus"
                                    readonly
                            />
                        </div>
                        <div class="form-group mb-3">
                            <label>Transaction amount </label>
                            <input
                                    class="form-control"
                                    type="text"
                                    v-model="viewTransaction.transAmount"
                                    name="transAmount"
                                    readonly
                            />
                        </div>
                        <div class="form-group mb-3">
                            <label>Value date </label>
                            <input
                                    class="form-control"
                                    type="text"
                                    v-model="viewTransaction.valueDate"
                                    name="gatewayTranStatus"
                                    readonly
                            />
                        </div>
                    </div>
                </div>


            </b-modal>
            <!--  End  View transaction model     -->
        </div>
    </div>

    <!--  </b-overlay>-->
</template>

<script>

    import DatePicker from "vue2-datepicker";
    import merchantstrans from '../../protos/MerchantMoneyTransferForBusinessPortal_grpc_web_pb'
    import merchantmiddlewarecustomer from '../../protos/MerchantMiddlewareCustomer_grpc_web_pb'
    import grpcUrl from "../../components/constant";
    import CustomHeaderAlert from "../../components/shared/CustomHeaderAlert";
    import LottieLoader from "../../components/LottieLoader";

    import Vue from "vue";
    import merchantservices from "../../protos/MerchantAccount_grpc_web_pb";
    export default {
        components:{
            DatePicker,
            CustomHeaderAlert,
            LottieLoader
        },
        data(){
            return{
                showLoader : false,
                serviceId :'',
                responseMessage:'',
                servicesOptions:[],
                message :'Account to account transaction',
                fundtransferHistory : [],
                fundtransferHistoryFiltered:[],
                viewTransaction : {
                    valueDate : '',
                    currency :'',
                    transAmount: '',
                    narration: '',
                     authStatus: '',
                    cashOrTransferType: '',
                    initiatedBy: '',
                    authId: '',
                    makerId: '',
                    transStatus :'',
                    transactionType: '',
                },
                startDate:new Date(),
                endDate: new Date(),
                clients :{},
                serviceClients:{},
                clientsMiddleware :{},
                totalRows: 1,
                currentPage: 1,
                perPage: 10,
                pageOptions: [10, 25, 50, 100],
                filter: null,
                filterOn: [],
                sortBy: "value_date",
                sortDesc: false,
                tableFields: [
                    {
                        label:"Value date",
                        key: "valueDate",
                        sortable: true,
                    },
                    {
                        label:"Narration",
                        key: "narration",
                        sortable: true,
                    },
                    {
                        label :"Transaction status",
                        key: "transStatus",
                        sortable: true,
                    },
                    {
                        label :"Authorization status",
                        key: "authStatus",
                        sortable: true,
                    },
                    {
                        label :"Currency",
                        key: "currency",
                        sortable: true,
                    },
                    {
                        label :"Amount",
                        key: "amount",
                        sortable: true,
                    },
                    {
                        label : "Transaction type",
                        key: "transType",
                        sortable: true,
                    },
                    {
                        label: "Initiated by",
                        key: "initiatedBy",
                        sortable: true,
                    },
                    // {
                    //     label: "Recipient name",
                    //     key: "destinationAccountName",
                    //     sortable: true,
                    // },
                    {
                        label: "Authorized by",
                        key: "authId",
                        sortable: true,
                    },
                    {
                        key: "actions",
                        sortable: true,
                    },
                ],
            }
        },
        methods:{
            SearchTransaction(){
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        try {

                            const request = new merchantstrans.MerchantFundTransferHistoryRequestMessage()
                            this.showLoader = true
                            document.getElementById("image-loader").style.zIndex = "1";
                            request.setMerchantserviceid(this.serviceId)
                            request.setPaypartnerservicecountrycode(this.$store.getters.getUserInfo.countryCode)
                            request.setCountrycode(this.$store.getters.getUserInfo.countryCode)
                            request.setFromdate( Vue.moment(this.startDate).format('DD-MM-YYYY'))
                            request.setTodate(Vue.moment(this.endDate).format('DD-MM-YYYY'))
                            console.log(" Request : ", request)

                            this.clients.merchantServiceInternalFundHistory(request, this.$store.getters.metadata , (err, res) => {
                                this.showLoader = false
                                document.getElementById("image-loader").style.zIndex = "0";
                                if(err) {
                                    console.log(" Error : ", err)
                                }
                                this.fundtransferHistory = []
                                if(res) {

                                    console.log(" Fund transfer history :  ", res.getFundtranslistList())
                                    console.log(" Fund transfer history data :  ", res)
                                    res.getFundtranslistList().forEach((data) => {
                                        this.fundtransferHistory.push({
                                            valueDate : data.getValuedatestr(),
                                            narration : data.getTransnarration(),
                                            amount : data.getTransamount(),
                                            transType : data.getCashortransfertype(),
                                            transStatus : data.getTransstatus(),
                                            initiatedBy : data.getTransinitiatedby(),
                                            authId : data.getAuthid(),
                                            authStatus : data.getAuthstatus(),
                                            currency : data.getCurrencyiso()

                                        })
                                        this.fundtransferHistoryFiltered = this.fundtransferHistory
                                    })
                                }

                            })

                        }catch (e) {
                            this.showLoader = false
                            console.log("error : ", e.message)
                        }

                        return;
                    }
                });
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
                            // console.log(" service : ", this.servicesOptions)
                        }
                    })

                }catch (e) {
                    console.log(e.message)
                }
            },
            ViewTransaction(data){
                try {

                    this.viewTransaction.valueDate = data.valueDate
                    this.viewTransaction.narration = data.narration
                    this.viewTransaction.transAmount = data.amount
                    this.viewTransaction.authStatus = data.authStatus
                    this.viewTransaction.cashOrTransferType = data.transType
                    this.viewTransaction.transStatus = data.transStatus
                    this.viewTransaction.authId = data.authId
                     this.viewTransaction.currency = data.currency
                    // this.viewTransaction.transTimes = data.transTimes
                    this.viewTransaction.transactionType = data.transType
                    this.viewTransaction.initiatedBy = data.initiatedBy
                    // this.viewTransaction.valueDate = data.valueDate
                    // this.viewTransaction.userid = data.userId

                } catch (e) {
                    console.log("Error : ", e)
                }

            },
            onFiltered(filteredItems) {
                // Trigger pagination to update the number of buttons/pages due to filtering

                this.fundtransferHistoryFiltered = filteredItems
                this.totalRows = filteredItems.length;
                this.currentPage = 1;
            },

        },
        computed:{
            rows() {
                return this.fundtransferHistory.length;
            },
        },
        mounted() {

        },
        created() {
            this.serviceClients = new merchantservices.MerchantAccountSvcClient(grpcUrl.URL,null,null)
            this.clients = new merchantstrans.MerchantMoneyTransferForBusinessPortalSvcClient(grpcUrl.URL,null,null)
            this.clientsMiddleware = new merchantmiddlewarecustomer.MerchantMiddlewareCustomerSvcClient(grpcUrl.URL,null,null)
            this.GetMerchantSevicesByLangIdCountryCode();
            this.$store.dispatch('setAppHeader', {
                title: "Fund transfer history",
                items: [
                    {
                        text: "Dashboard",
                        href: "#",
                    },
                    {
                        text: "Fund transfer history",
                        href: "/business/fundtransferhistory",
                    },
                ],
            })
        }

    }
</script>

<style scoped>

</style>