<template>
  <div>
<!--    <b-overlay :show="showLoader" rounded="sm">-->
    <div class="image-loader"  id="image-loader" >
      <lottie-loader :loading="showLoader" />
    </div>
    <div class="content">
      <div class="row ">
        <CustomHeaderAlert :message="message" />
        <div class="col-lg-12 content">
          <div class="row">
            <div class="col">
              <div class="card">
                <div class="card-body">
                  <form @submit.prevent="SearchTransaction">
                    <AlertMessage :variant="dangerSuccess" :message="responseMessage" v-if="responseMessage"/>
                    <div class="row">
                      <div class="col-lg-3 col-md-3">
                        <div class="form-group mb-3">
                          <div class="row ">
                            <label>Transaction type</label>
                            <select class="custom-select" v-model="transactionType" name="transactionType" id="transactionType" v-validate="'required'" >
                              <option value="" selected> Select transaction type</option>
                              <option value="COLLECTION">Collection</option>
                              <option value="PAYOUT"> Payout</option>
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
      <!--    </b-overlay>-->
      <div class="row">
        <div class="col-12">
          <div class="card">

            <div class="card-body">
              <div class="row">
                <div class="col-2">
                  <h4 class="header-title">Search result</h4>
                </div>
                <div class="col-4 text-right">

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
                    <div v-if="listOfFilteredAccounttransactions.length > 0">
                      <download-excel :data="this.listOfFilteredAccounttransactions" class="text-success hidefromprint" style="font-weight: bold; cursor: pointer;">
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
              <b-overlay :show="showLoaderForTable" rounded="sm">
                <div class="table-responsive mb-0" id="table">
                  <b-table style="color: #000000 !important;"
                           :items="listOfAccounttransactions"
                           :fields="tableFields"
                           responsive="sm"
                           :per-page="perPage"
                           :current-page="currentPage"
                           :sort-by.sync="sortBy"
                           :sort-desc.sync="sortDesc"
                           :filter="filter"
                           :filter-included-fields="filterOn"
                           :bordered="true"
                           :striped="true"
                           :hover="hover"
                           @filtered="onFiltered"
                  >
                    <template #cell(eganowTranStatus)="data">
                  <span :class="{
                    'text-success p-1': `${data.item.eganowTranStatus}` === 'SUCCESSFUL',
                    'text-danger p-1': `${data.item.eganowTranStatus}` ==='FAILED',
                    'text-primary p-1' : `${data.item.eganowTranStatus}` === 'PENDING'
                  }" class="badge"> {{data.item.eganowTranStatus}}</span>
                    </template>
                    <template #cell(merchantStatus)="data">
                  <span :class="{
                    'text-success p-1': `${data.item.merchantStatus}` === 'CONFIRMED',
                    'text-danger p-1': `${data.item.merchantStatus}` ==='FAILED',
                    'text-primary p-1' : `${data.item.merchantStatus}` === 'PENDING'
                  }" class="badge"> {{data.item.merchantStatus}}</span>
                    </template>
                    <template #cell(actions)="data">
                      <a v-b-modal.modal-lg class="text-secondary mr-2" style="cursor: pointer" @click="ViewTransaction(data.item)"  > <i class="mdi mdi-eye"></i> View</a>
                      <a class="text-danger mr-2" style="cursor: pointer" @click="RetryTransaction(data.item)" v-if="data.item.merchantStatus === 'PENDING' || data.item.merchantStatus ==='READ' && data.item.eganowTranStatus !== 'PENDING'"> <i class="mdi mdi-format-list-bulleted"></i> Retry</a>
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
            title="View transactions"
            title-class="font-18"
            body-class="p-4"
            size="lg"
    >

      <div class="row">

        <div class="col-6">
          <div class="form-group mb-3">
            <label>Source account name </label>
            <input
                    class="form-control"
                    type="text"
                    v-model="viewTransaction.sourceAccountName"
                    name="sourceAccountName"
                    readonly
            />
          </div>
          <div class="form-group mb-3">
            <label>Recipient account name </label>
            <input
                    class="form-control"
                    type="text"
                    v-model="viewTransaction.recipientName"
                    name="recipientName"
                    readonly
            />
          </div>
          <div class="form-group mb-3">
            <label>Transaction amount</label>
            <input
                    class="form-control"
                    type="text"
                    v-model="viewTransaction.transAmountWithCurrency"
                    name="transAmountWithCurrency"
                    readonly
            />
          </div>
          <div class="form-group mb-3">
            <label>Transaction status </label>
            <input
                    class="form-control"
                    type="text"
                    v-model="viewTransaction.eganowTranStatus"
                    name="payPartnerServiceName"
                    readonly
            />
          </div>
          <div class="form-group mb-3">
            <label>Transaction date</label>
            <input
                    class="form-control"
                    type="text"
                    v-model="viewTransaction.transTimes"
                    name="transTimes"
                    readonly
            />
          </div>
        </div>
        <div class="col-6">
          <div class="form-group mb-3">
            <label>Source account number </label>
            <input
                    class="form-control"
                    type="text"
                    v-model="viewTransaction.sourceAccountNo"
                    name="sourceAccountNo"
                    readonly
            />
          </div>
          <div class="form-group mb-3">
            <label>Recipient account number </label>
            <input
                    class="form-control"
                    type="text"
                    v-model="viewTransaction.recipientAccountNo"
                    name="recipientAccountNo"
                    readonly
            />
          </div>
          <div class="form-group mb-3">
            <label>Commission </label>
            <input
                    class="form-control"
                    type="text"
                    v-model="viewTransaction.commissionWithCurrency"
                    name="commissionWithCurrency"
                    readonly
            />
          </div>
          <div class="form-group mb-3">
            <label>Merchant status </label>
            <input
                    class="form-control"
                    type="text"
                    v-model="viewTransaction.gatewayTranStatus"
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

import DatePicker from "vue2-datepicker";
import merchantstrans from '../../protos/MerchantMoneyTransferForBusinessPortal_grpc_web_pb'
import merchantservices from '../../protos/MerchantAccount_grpc_web_pb'
import grpcUrl from "../../components/constant";
import Vue from "vue";
import CustomHeaderAlert from "../../components/shared/CustomHeaderAlert";
import SweetAlertConfig from "../../SwalConfig";
import SweetAlertWrapper from "../../sweetAlert";
import LottieLoader from "../../components/LottieLoader";
//import AlertMessage from "../../components/shared/AlertMessage";

export default {
  components:{
    DatePicker,
    CustomHeaderAlert,
    LottieLoader
   // AlertMessage
  },
  data(){
    return{
      message :'Account transactions ',
      dangerSuccess : 'danger',
      showLoader : false,
      showLoaderForTable : false,
      responseMessage :'',
      clients:{},
      viewTransaction : {
         valueDate : '',
         currencyIso :'',
         transAmount: '',
         sourceAccountNo: '',
         sourceAccountName: '',
         recipientAccountNo: '',
         recipientName: '',
         commissionAmt: '',
        payPartnerServiceName: '',
        paypartnerserviceid :'',
        eganowTranStatus: '',
        transactionType: '',
        transTimes: '',
        transStatusSentToMerchantYesNo:'',
        gatewayTranStatus: '',
        transAmountWithCurrency :'',
        commissionWithCurrency :''

      },
      serviceClients : {},
      listOfAccounttransactions :[],
      listOfFilteredAccounttransactions :[],
      transactionType:'',
      serviceId:'',
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
          label:"Source account number",
          key: "sourceAccountNo",
          sortable: true,
        },
        {
          label :"Recipient account number",
          key: "recipientAccountNo",
          sortable: true,
        },
        {
          label :"Amount",
          key: "transAmount",
          sortable: true,
        },
        {
          label :"Commission",
          key: "commissionAmt",
          sortable: true,
        },
        {
          label : "Eganow status",
          key: "eganowTranStatus",
          sortable: true,
        },
        {
          label: "Merchant status",
          key: "merchantStatus",
          sortable: true,
        },
        {
          label: "Transaction type",
          key: "merchantCollectionOrPayout",
          sortable: true,
        },
        {
          label: "Source account name",
          key: "sourceAccountName",
          sortable: true,
        },
        {
          label: "Recipient name",
          key: "recipientName",
          sortable: true,
        },
        {
          label: "Transaction date time",
          key: "transTimes",
          sortable: true,
        },
        {
          label: "Service name",
          key: "payPartnerServiceName",
          sortable: true,
        },
        {
          label: "Transaction ref no.",
          key: "journalreferrenceno",
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
            const request = new merchantstrans.MerchantServiceTransRequestMessage();
            this.showLoader = true;
            if(this.showLoader){
              document.getElementById("image-loader").style.zIndex = "1";
            }
            request.setPartnerserviceid(this.serviceId)
            request.setCollectionorpayout(this.transactionType)
            request.setFromdate(Vue.moment(this.startDate).format('DD-MM-YYYY'))
            request.setTodate(Vue.moment(this.endDate).format('DD-MM-YYYY'))
            request.setCountrycode(this.$store.getters.getUserInfo.countryCode)

            this.clients.getMerchantServiceAccountTrans(request,this.$store.getters.metadata, (error, res) => {
              this.showLoader = false;
              document.getElementById("image-loader").style.zIndex = "0";
              if(error){
                console.log(" error : ", error)
                this.responseMessage = grpcUrl.serverError
              }

              if(res){
                this.listOfAccounttransactions = []
                // console.log(" Transaction list : ", res.getTranslistList())
               res.getTranslistList().forEach((data) => {
                   this.listOfAccounttransactions.push({
                     valueDate : data.getValuedate(),
                     currencyISO : data.getCurrencyiso(),
                     transAmount : grpcUrl.formatMoney(data.getTransamount(),data.getCurrencyiso()),
                     commissionAmt : data.getCommissionamt(),
                     merchantCollectionOrPayout : data.getMerchantcollectionorpayout(),
                     payPartnerServiceName : data.getPaypartnerservicename(),
                     merchantTransRefNoInMerchantSystem : data.getMerchanttransrefnoinmerchantsystem(),
                     sourceAccountNo : data.getSourceaccountno(),
                     journalreferrenceno : data.getEganowtransrefno(),
                     sourceAccountName : data.getSourceaccountname(),
                     recipientAccountNo : data.getRecipientaccountno(),
                     recipientName : data.getRecipientname(),
                     gatewayTranStatus : data.getGatewaytranstatus(),
                     merchantStatus : data.getTransstatussenttomerchantpendingconfirmed(),
                     eganowTranStatus : data.getEganowtranstatus(),
                     transTimes : data.getTranstimes()
                   })
               })
                this.listOfFilteredAccounttransactions = this.listOfAccounttransactions
              }
            })
            // GetMerchantServiceAccountTrans
          }catch (e) {
            this.responseMessage = grpcUrl.serverError
            console.log(" Error : ", e)
          }
          return;
        }
      });
    },
    RetryTransaction(data){
        try {

          this.sweetAlert.showDialogYesOrNo(Object.assign(SweetAlertConfig, {
            title :'Retry transaction ?',
            confirmButtonText : 'Yes, retry'
          }), () => {

            let request = new merchantstrans.MerchantTransRetryRequestMessage()

            request.setLanguageid(this.$store.getters.getUserInfo.languageId)
            request.setPaypartnerserviceid(this.serviceId)
            request.setPaypartnerservicecountrycode(this.$store.getters.getUserInfo.countryCode)
            request.setJournalreferrenceno(data.journalreferrenceno)
             let col_pay = this.transactionType === "COLLECTION" ? "1" :"2"
            request.setCollection1Payout2(col_pay)

             this.showLoaderForTable = true
            this.clients.merchantTranRetryOnBusinessPortal(request, this.$store.getters.metadata, (err,res) => {
              this.showLoaderForTable = false
                if(err) {
                  console.log(" Error : ", err)
                }
                if(res.getIssuccess()) {
                   this.SearchTransaction()
                   this.sweetAlert.showMessage("Account transaction ", res.getMessage())

                }
                else{
                  console.log("Acct retry trans : " , res.getMessage())
                  this.responseMessage = res.getMessage()
                }

            })

          })
        }catch (e) {
           console.log(" Error : ", e)
        }
    },
    ViewTransaction(data){
       try {
          console.log(" Journal ref no : ", data.journalreferrenceno)
         this.viewTransaction.sourceAccountName = data.sourceAccountName
         this.viewTransaction.sourceAccountNo = data.sourceAccountNo
         this.viewTransaction.currencyIso = data.currencyISO
         this.viewTransaction.commissionAmt = data.commissionAmt
         this.viewTransaction.eganowTranStatus = data.eganowTranStatus
         this.viewTransaction.gatewayTranStatus = data.gatewayTranStatus
         this.viewTransaction.paypartnerserviceid = data.paypartnerserviceid
         this.viewTransaction.payPartnerServiceName = data.payPartnerServiceName
         this.viewTransaction.recipientAccountNo = data.recipientAccountNo
         this.viewTransaction.recipientName = data.recipientName
         this.viewTransaction.transTimes = data.transTimes
         this.viewTransaction.transactionType = data.transactionType
         this.viewTransaction.transAmountWithCurrency =  data.transAmount
         this.viewTransaction.commissionWithCurrency = data.currencyISO +" "+ data.commissionAmt
         this.viewTransaction.valueDate = data.valueDate
       } catch (e) {
         console.log("Error : ", e)
       }

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
    onFiltered(filteredItems) {
      //this.listOfFilteredAccounttransactions = []
      console.log(" filter using filter : ", this.filter)
      console.log(" filter data : ", filteredItems)
      this.listOfFilteredAccounttransactions = filteredItems
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
  computed:{
    rows() {
      return this.listOfFilteredAccounttransactions.length;
    },
  },
  mounted() {
    //CustomerLastNTransRequestMessage

  },
  created() {
    this.clients = new merchantstrans.MerchantMoneyTransferForBusinessPortalSvcClient(grpcUrl.URL,null, null)
    this.serviceClients = new merchantservices.MerchantAccountSvcClient(grpcUrl.URL,null,null)
    this.sweetAlert = new SweetAlertWrapper()
    this.GetMerchantSevicesByLangIdCountryCode()

    this.$store.dispatch('setAppHeader', {
      title: "Account Transaction",
      items: [
        {
          text: "Dashboard",
          href: "#",
        },
        {
          text: "Account Transaction",
          href: "/business/accounttransaction",
        },
      ],
    })
  }

}
</script>

<style>

</style>