<template>
    <div class="row">
      <CustomHeaderAlert :message="message" />
      <div class="col-lg-12">
        <div class="row">
          <div class="col">
            <div class="card">
              <!-- start Pending customer table -->
              <div class="card-body">
                <form @submit.prevent="GetActiveOrPinResettingCustomers">
                  <div class="row">
                    <div class="col-lg-3 col-md-3">
                      <div class="row">
                        <label>Customer Status</label>
                        <multiselect
                            name="customerStatus"
                            v-model="customerStatus"
                            v-validate="'required'"
                            :options="customerStatusvalues"
                            :class="{'is-invalid': vErrors.has('customerStatus') }"
                        />
                        <span v-show="vErrors.has('customerStatus')" class="help text-danger">{{ vErrors.first('customerStatus') }}</span>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-2">
                      <label class="mb-3"></label>
                      <div class="form-group mb-3">
                        <button class="btn btn-primary btn-block" id="bkcolor" type="submit" >
                          Get customers
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
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
                      :items="activePinResettingCustomers"
                      :fields="tableFields"
                      responsive="sm"
                      :per-page="perPage"
                      :current-page="currentPage"
                      :sort-by.sync="sortBy"
                      :sort-desc.sync="sortDesc"
                      :filter="filter"
                      :filter-included-fields="filterOn"
                      @filtered="onFiltered">
                      <template #cell(actions)="data">
                        <a class="text-danger mr-2" style="cursor: pointer" @click="TerminateCustomer(data.item)"> <i class="mdi mdi-trash-can"></i> Terminate</a>
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
      </div>
    </div>

</template>

<script>

import Multiselect from "vue-multiselect";
import CustomHeaderAlert from "../../components/shared/CustomHeaderAlert";
import customerService from "../../protos/MerchantMiddlewareCustomer_grpc_web_pb";
import grpcUrl from "../../components/constant";
import SweetAlertConfig from "../../SwalConfig";
import SweetAlertWrapper from "../../sweetAlert";

export default {
  components:{
    Multiselect,
    CustomHeaderAlert
  },
  data(){
    return{
      message : "Place to terminate active customers",
      clients :{},
      activePinResettingCustomers:[],
      customerStatus:'',
      customerStatusvalues:[
        'ACTIVE',
        'PIN RESETTING'
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: "account_number",
      sortDesc: false,
      tableFields: [
        {
          label: "Account number",
          key: "accountNumber",
          sortable: true,
        },
        {
          label :"Account name",
          key: "customerNameAtRegistration",
          sortable: true,
        },
        {
          label: "Mobile number",
          key: "mobileNumber",
          sortable: true,
        },
        {
          label: "Date created",
          key: "makeDateTime",
          sortable: true,
        },
        {
          key: "actions",
          sortable: true,
        },
      ],
    }
  },
  computed:{
    rows() {
      return this.activePinResettingCustomers.length;
    },
  },
  mounted() {
    // Set the initial number of items
   // this.totalRows = this.items.length;
  },
  created() {
    this.clients = new customerService.MerchantMiddlewareCustomerSvcClient(grpcUrl.URL,null,null)
    this.GetActiveOrPinResettingCustomers()
    this.sweetAlert = new SweetAlertWrapper()
    this.$store.dispatch('setAppHeader', {
      title: "Termination Request",
      items: [
        {
          text: "Dashboard",
          href: "#",
        },
        {
          text: "Termination Request",
          href: "/merchant/terminate",
        },
      ],
    })
  },
  methods:{
    GetActiveOrPinResettingCustomers(){
      try {
        this.activePinResettingCustomers = []
        const request = new customerService.UsersByCIDRequestMessage();
        // console.log(" country code : ", this.$store.getters.getUserInfo.countryCode)
        // console.log(" status : ", this.customerStatus == null ? "" : this.customerStatus)
        request.setCountrycode(this.$store.getters.getUserInfo.countryCode)
        request.setSubscriptionstatus(this.customerStatus === "" ? "ACTIVE" : this.customerStatus)
        this.customerStatus = "ACTIVE"

        this.clients.getUsersByMerchantId(request, this.$store.getters.metadata, (err, res) => {

          if(err){
            console.log(" error : ", err)
          }
          if(res) {
            res.getUserslistList().forEach((data) => {
              this.activePinResettingCustomers.push({
                accountNumber : data.getAccountnumber(),
                customerNameAtRegistration : data.getCustomernameatregistration(),
                mobileNumber : data.getMobilenumber(),
                makeDateTime : data.getMakedatetime(),
                userId : data.getUserid(),
                cID : data.getCid()
              })
            })


          }
        })


      }catch (e) {
        console.log(" error : ", e.message)
      }
    },
    TerminateCustomer(data) {

       try {

         this.sweetAlert.showDialogYesOrNo(Object.assign(SweetAlertConfig, {
           confirmButtonText : 'Yes, terminate'
         }), () => {

           const request = new customerService.MerchantCustomerTerminateServiceMessage();
           request.setMobileno(data.mobileNumber)
           request.setCid(data.cID)
           request.setTerminationstatus("PENDING")

           this.clients.merchantCustomerTerminateServiceRequest(request, this.$store.getters.metadata, (err,res) => {

             if(err) {
               console.log(" Error : ", err)
             }

             if(res.getIssuccess()) {
               console.log( " Response : ", res.getIssuccess())
               console.log( " Pay partner : ", res.getPaypartnerid())
               //payPartnerId
               this.GetActiveOrPinResettingCustomers()
               this.sweetAlert.showMessage("Terminate customer ", res.getMessagesuccessfulorfailed())
             }
             else {

               this.responseMessage = res.getMessagesuccessfulorfailed()
             }
           } )

         })

       }catch (e) {
         console.log(" Error : ", e.message)
       }
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  }
}
</script>

<style scoped>

</style>