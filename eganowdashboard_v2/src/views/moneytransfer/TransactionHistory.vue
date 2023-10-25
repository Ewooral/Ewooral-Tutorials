<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <b-overlay :show="showLoader" rounded="sm">
                  <form @submit.prevent="GetAccountStatementByCountryCode">
                    <div class="row mb-3">
                      <div class="col-lg-6 col-md-6">
                        <label>Select Country </label>
                        <multiselect
                                id="countrycode"
                                name="countrycode"
                                v-model="countrycode"
                                v-validate="'required'"
                                :options="AllCountries"
                                :searchable="true"
                                @select="GetPaymentTypeForSenderBySelectedCountryCode($event)"
                                :class="{'is-invalid': vErrors.has('country') }" >
                          <template slot="singleLabel" slot-scope="props" class="p-0 m-0">
                            <img style="width: 20px !important; height: 20px !important; padding: 0px !important; margin: 0px !important;" :src="props.option.getCountryflagurl()" alt=""><span class="option__desc">
                                                                   <span class="option__title pl-1">{{ props.option.getCountryname() }}</span></span>
                          </template>
                          <template slot="option" slot-scope="{ option }" class="h-25 w-25">
                            <img style="width: 30px !important; height: 30px !important;" :src="option.getCountryflagurl()"> {{ option.getCountryname() }}
                          </template>
                        </multiselect>
                        <span v-show="vErrors.has('customerStatus')" class="help text-danger">{{ vErrors.first('customerStatus') }}</span>
                      </div>
                      <div class="col-lg-3 col-md-3">
                        <div class="form-group mb-3">
                          <label class="mb-3"></label>
                          <button class="btn btn-primary btn-block" id="bkcolor" type="submit" >
                            Get account statement
                          </button>
                        </div>
                      </div>

                    </div>
                  </form>
                </b-overlay>
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
            <div class="table-responsive mb-0" id="table">
              <b-table
                      :items="accounttransactions"
                      :striped="striped"
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
                <template #cell(transStatus)="data">
                              <span :class="{
                                'text-success p-1': `${data.item.transStatus}` === 'SUCCESSFUL',
                                'text-danger p-1': `${data.item.transStatus}` ==='FAILED',
                                'text-primary p-1' : `${data.item.transStatus}` === 'PENDING'
                              }" class="badge"> {{data.item.transStatus}}</span>
                </template>

                <template #cell(senderLogo)="data">
                  <img
                          :src="data.item.senderLogo"
                          alt="contact-img"
                          title="contact-img"
                          class="avatar-sm rounded-circle img-thumbnail"
                  />
                </template>

                <template #cell(beneficiaryLogo)="data">
                  <img
                          :src="data.item.beneficiaryLogo"
                          alt="contact-img"
                          title="contact-img"
                          class="avatar-sm rounded-circle img-thumbnail"
                  />
                </template>


<!--                <template #cell(actions)>-->
<!--                  <a  class="text-danger mr-2" style="cursor: pointer"> <i class="mdi mdi-check"></i> Details</a>-->
<!--                </template>-->

              </b-table>
            </div>
            <div class="row">
              <div class="col-md-12 col-sm-6">
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

</template>

<script>

  import moneytransfer from '../../protos/EganowMoneyTransfer_grpc_web_pb'
  import Constant from "../../components/constant";
  import Multiselect from "vue-multiselect";
  import commons from "../../protos/CommonData_grpc_web_pb";
  import grpcUrl from "../../components/constant";

  export default {
    data(){
      return{
        showLoader : false,
        countrycode:'',
        AllCountries : [],
        accounttransactions :[],
        clients :{},
        commonclients : {},
        startDate:'',
        endDate:'',
        striped: true,
        totalRows: 1,
        currentPage: 1,
        perPage: 10,
        pageOptions: [10, 25, 50, 100],
        filter: null,
        filterOn: [],
        sortBy: "beneficiaryAccountNo",
        sortDesc: false,
        tableFields: [
          {
            label: "Value date",
            key: "valueDate",
            sortable: true,
          },
          {
            label: "Trans type",
            key: "transType",
            sortable: true,
          },
          {
            label: "From",
            key: "senderLogo",
            sortable: true,
          },
          {
            label: "Currency",
            key: "transCurrencyIso",
            sortable: true,
          },
          {
            label: "Amount",
            key: "transAmount",
            sortable: true,
            tdClass:"text-right"
          },
          {
            label: "Fees",
            key: "feeAmount",
            sortable: true,
            tdClass:"text-right"
          },
          {
            label: "Total amount",
            key: "totalAmount",
            sortable: true,
            tdClass:"text-right"
          },
          {
            label: "Sender account name",
            key: "senderAccountName",
            sortable: true,
          },
          {
            label: "Sender account number",
            key: "senderAccountNo",
            sortable: true,
          },
          {
            label: "Trans status",
            key: "transStatus",
            sortable: true,
          },
          {
            label: "To Logo",
            key: "beneficiaryLogo",
            sortable: true,
          },
          {
            label:"Beneficiary account name",
            key: "beneficiaryAccountName",
            sortable: true,
          },
          {
            label: "Beneficiary account number",
            key: "beneficiaryAccountNo",
            sortable: true,
          },
          {
            label: "Reference",
            key: "narration",
            sortable: true,
          },
        ],
      }
    },
    components : {
      Multiselect
    },
    methods : {
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length;
        this.currentPage = 1;
      },
      GetAccountStatementByCountryCode() {

        try {

          this.accounttransactions = []
          const request = new moneytransfer.CustTransRequestMessage()
          request.setCountrycode(this.countrycode.getCountrycode())
          request.setLanguageid(this.$store.getters.getUserInfo.languageId)
          request.setTopn(150)
          this.showLoader = true
          this.clients.getCustomerEganowTransactions(request, this.$store.getters.metadata, (err,res) => {
            this.showLoader = false
            if(err) {
              console.log( " Error : ",err)
            }

            if(res) {

              res.getTranslistList().forEach((data) => {
                this.accounttransactions.push({
                  valueDate : data.getValuedate(),
                  transType : data.getCashinout(),
                  senderLogo : data.getSenderlogourl(),
                  transCurrencyIso : data.getTranscurrencyiso(),
                  transAmount :  grpcUrl.formatMoneyWithoutCurrency(data.getTransamount()),
                  feeAmount : grpcUrl.formatMoneyWithoutCurrency(data.getFeeamount()),
                  totalAmount : grpcUrl.formatMoneyWithoutCurrency(data.getTotalamount()) ,
                  transStatus : data.getTransstatus(),
                  senderAccountName : data.getSenderaccountname(),
                  senderAccountNo : data.getSenderaccountno(),
                  beneficiaryLogo : data.getBeneficiarylogourl(),
                  beneficiaryAccountName : data.getBeneficiaryaccountname(),
                  beneficiaryAccountNo : data.getBeneficiaryaccountno(),
                  narration : data.getTransactionnarration(),
                })
              })
            }
          })


        }catch (e) {
          console.log( " Error : ", e)
        }
      },
      GetPaymentTypeForSenderBySelectedCountryCode(selectedsourcecountry){
        try {

          this.countrycode = selectedsourcecountry.getCountrycode()

        }catch (e) {
          console.log("Error : ", e)
        }
      },
      GetOperatingCountryList() {
        let request = new commons.EmptyCommonDataMessage()

        this.commonclients.getReceivingOperatingCountries(request, this.$store.getters.metadata, (err,res) => {

          if(res) {
            this.AllCountries = res.getCountrylistList()
          }
        })
      },
    },
    computed:{
      rows() {

        return this.accounttransactions.length;
      },
    },
    created() {

      this.clients = new moneytransfer.EganowMoneyTransferSvcClient(Constant.URL, null,null)
      this.commonclients = new commons.CommonDataSvcClient(Constant.URL,null,null)
      this.GetOperatingCountryList()
      this.$store.dispatch('setAppHeader', {
        title: "Transaction history",
        items: [
          {
            text: "Dashboard",
            href: "#",
          },
          {
            text: "Transaction history",
            href: "#",
          },
        ],
      })
    }
  }
</script>

<style scoped>

</style>