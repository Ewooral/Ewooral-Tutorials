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
                    <div class="row">
                      <div class="col-lg-4 col-md-4">
                        <div class="form-group mb-3">
                          <label>Start Date</label>
                          <date-picker v-model="startDate" :first-day-of-week="1" lang="en"
                                       v-validate="'required'"
                          />
                          <span v-show="vErrors.has('startDate')" class="help text-danger">{{ vErrors.first('startDate') }}</span>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-4">
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
                    <div v-if="accounttoaccounttransfiltered.length > 0">
                      <download-excel :data="this.accounttoaccounttransfiltered" class="text-success hidefromprint" style="font-weight: bold; cursor: pointer;">
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
                        :items="accounttoaccounttrans"
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
              <label>Mobile number</label>
              <input
                      class="form-control"
                      type="text"
                      v-model="viewTransaction.userid"
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
              <label>Transaction type </label>
              <input
                      class="form-control"
                      type="text"
                      v-model="viewTransaction.transactionType"
                      name="commissionWithCurrency"
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
export default {
  components:{
    DatePicker,
    CustomHeaderAlert,
    LottieLoader
  },
  data(){
    return{
      showLoader : false,
      message :'Account to account transaction',
      accounttoaccounttrans : [],
      accounttoaccounttransfiltered :[],
      viewTransaction : {
        valueDate : '',
        currencyIso :'',
        transAmount: '',
        sourceAccountNo: '',
        sourceAccountName: '',
        recipientAccountNo: '',
        recipientName: '',
        userid: '',
        payPartnerServiceName: '',
        paypartnerserviceid :'',
        transactionType: '',
        transTimes: '',
        transStatusSentToMerchantYesNo:'',
      },
      startDate:new Date(),
      endDate: new Date(),
      clients :{},
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
          label:"Source account number",
          key: "sourceAccount",
          sortable: true,
        },
        {
          label :"Recipient account number",
          key: "destinationAccount",
          sortable: true,
        },
        {
          label :"Amount",
          key: "Amount",
          sortable: true,
        },
        {
          label : "Transaction type",
          key: "transType",
          sortable: true,
        },
        {
          label: "Source account name",
          key: "sourceAccountName",
          sortable: true,
        },
        {
          label: "Recipient name",
          key: "destinationAccountName",
          sortable: true,
        },
        {
          label: "Transaction date time",
          key: "transTime",
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

              const request = new merchantmiddlewarecustomer.AcctToAcctTransRequestMessage()
              this.showLoader = true
              document.getElementById("image-loader").style.zIndex = "1";
              request.setMerchantid('')
              request.setCountrycode(this.$store.getters.getUserInfo.countryCode)
              request.setStartdate( Vue.moment(this.startDate).format('DD-MM-YYYY'))
              request.setEnddate(Vue.moment(this.endDate).format('DD-MM-YYYY'))


              this.clientsMiddleware.getAccountToAccountPeriodTrans(request, this.$store.getters.metadata , (err, res) => {
               this.showLoader = false
                document.getElementById("image-loader").style.zIndex = "0";
                if(err) {
                  console.log(" Error : ", err)
                }
               this.accounttoaccounttrans = []
                if(res) {

                   console.log(" Account to account :  ", res.getTranslistList())
                   console.log(" Account to account data :  ", res)
                  res.getTranslistList().forEach((data) => {
                    this.accounttoaccounttrans.push({
                      valueDate : data.getValuedate(),
                      sourceAccount : data.getSourceaccount(),
                      sourceAccountName : data.getSourceaccountname(),
                      transType : data.getTranstype(),
                      Amount : data.getAmount(),
                      destinationAccount : data.getDestinationaccount(),
                      destinationAccountName : data.getDestinationaccountname(),
                      transStatus : data.getTransstatus(),
                      userId : data.getUserid(),
                      batchNo : data.getBatchno(),
                      transTime : data.getTranstime()

                    })
                    this.accounttoaccounttransfiltered = this.accounttoaccounttrans
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
    ViewTransaction(data){
      try {

        this.viewTransaction.sourceAccountName = data.sourceAccountName
        this.viewTransaction.sourceAccountNo = data.sourceAccount
        this.viewTransaction.transAmount = data.Amount
        this.viewTransaction.transTimes = data.transTimes
        this.viewTransaction.paypartnerserviceid = data.paypartnerserviceid
        this.viewTransaction.payPartnerServiceName = data.payPartnerServiceName
        this.viewTransaction.recipientAccountNo = data.destinationAccount
        this.viewTransaction.recipientName = data.destinationAccountName
        this.viewTransaction.transTimes = data.transTimes
        this.viewTransaction.transactionType = data.transType
        this.viewTransaction.transAmountWithCurrency = data.Amount
        this.viewTransaction.valueDate = data.valueDate
        this.viewTransaction.userid = data.userId

      } catch (e) {
        console.log("Error : ", e)
      }

    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering

      this.accounttoaccounttransfiltered = filteredItems
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
  computed:{
    rows() {
      return this.accounttoaccounttrans.length;
    },
  },
  mounted() {

  },
  created() {

    this.clients = new merchantstrans.MerchantMoneyTransferForBusinessPortalSvcClient(grpcUrl.URL,null,null)
    this.clientsMiddleware = new merchantmiddlewarecustomer.MerchantMiddlewareCustomerSvcClient(grpcUrl.URL,null,null)
    this.$store.dispatch('setAppHeader', {
      title: "Account To Account Transactions",
      items: [
        {
          text: "Dashboard",
          href: "#",
        },
        {
          text: "Account To Account",
          href: "/business/accounttoaccount",
        },
      ],
    })
  }

}
</script>

<style scoped>

</style>