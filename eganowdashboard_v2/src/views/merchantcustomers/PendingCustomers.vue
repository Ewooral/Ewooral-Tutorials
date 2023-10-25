<template>
<!--  <b-overlay :show="showLoader" rounded="sm">-->
  <div>
    <div class="image-loader"  id="image-loader" >
      <lottie-loader :loading="showLoader" />
    </div>
    <div class="row">
      <CustomHeaderAlert :message="message" />
      <div class="col-lg-12">
        <div class="row">
          <div class="col">
            <div class="card">
              <!-- start Pending customer table -->
              <div class="card-body">
                <AlertMessage :variant="dangerSuccess" :message="responseMessage" v-if="responseMessage"/>

                <form @submit.prevent="GetPendingCustomers
">
                  <div class="row">
                    <div class="col-lg-3 col-md-3">
                      <div class="form-group mb-3">
                        <button class="btn btn-primary btn-block" id="bkcolor" type="submit" >
                          Get pending customers
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
                      <div v-if="listOfFilteredPendingCustomers.length > 0">
                        <download-excel :data="this.listOfFilteredPendingCustomers" class="text-success hidefromprint" style="font-weight: bold; cursor: pointer;">
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
                          :items="pendingCustomers"
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
                      <a v-b-modal.modal-responsive  class="text-primary mr-2" @click="ViewPendingCustomer(data.item)"> <i class="mdi mdi-eye"></i> View</a>
                      <a class="text-success mr-2" style="cursor: pointer" @click="ApproveCustomer(data.item)"> <i class="mdi mdi-check"></i> Approve</a>
                      <a class="text-danger mr-2" style="cursor: pointer" @click="DisapproveCustomer(data.item)"> <i class="mdi mdi-trash-can"></i> Disapprove</a>
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

      <!-- start View Pending customer model      -->
      <b-modal
              id="modal-responsive"
              title="View pending customer"
              title-class="font-18"
              body-class="p-4"
      >
        <div class="form-group mb-3">
          <label>Account name </label>
          <input
                  class="form-control"
                  type="text"
                  v-model="viewCustomer.accountname"
                  name="accountname"
                  readonly
          />
        </div>
        <div class="form-group mb-3">
          <label>Account number</label>
          <input
                  class="form-control"
                  type="text"
                  v-model="viewCustomer.accountnumber"
                  name="accountnumber"
                  readonly
          />
        </div>
        <div class="form-group mb-3">
          <label> Mobile number </label>
          <input
                  class="form-control"
                  type="text"
                  v-model="viewCustomer.mobilenumber"
                  name="mobileNumber"
                  readonly
          />
        </div>
        <div class="form-group mb-3">
          <label> Date created </label>
          <input
                  class="form-control"
                  type="text"
                  v-model="viewCustomer.createddate"
                  name="createddate"
                  readonly
          />
        </div>
      </b-modal>
      <!--  End  View Pending customer model     -->
    </div>
  </div>

<!--  </b-overlay>-->
</template>

<script>
import SweetAlertWrapper from "../../sweetAlert";
import SweetAlertConfig from '../../SwalConfig'
import customerService from "../../protos/MerchantMiddlewareCustomer_grpc_web_pb";
import grpcUrl from "../../components/constant";
import CustomHeaderAlert from "../../components/shared/CustomHeaderAlert";
import AlertMessage from "../../components/shared/AlertMessage";
import LottieLoader from "../../components/LottieLoader";
//import Vue from "vue";

export default {
  components: {
    CustomHeaderAlert,
    AlertMessage,
    LottieLoader
  },
  data() {
    return {
      showLoader : false,
      listOfFilteredPendingCustomers : [],
      message :"List of all customers awaiting approvals to perform transactions",
      dangerSuccess :'danger',
      responseMessage :'',
      clients :{},
      viewCustomer :{
         accountnumber:'',
         mobilenumber :'',
         accountname :'',
         cid:'',
         userId: '',
        createddate :''
      },
      pendingCustomers: [],
      listsofCustomers :[],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: "mobileNumber",
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
  methods:{
    GetPendingCustomers(){
       try {
         this.pendingCustomers = []
         this.showLoader = true
         document.getElementById("image-loader").style.zIndex = "1";
         const request = new customerService.UsersByCIDRequestMessage();
         request.setCountrycode(this.$store.getters.getUserInfo.countryCode)
         request.setSubscriptionstatus("PENDING")
         console.log("request for pending customers : ", request)
         this.clients.getUsersByMerchantId(request, this.$store.getters.metadata, (err, res) => {
          this.showLoader = false
           document.getElementById("image-loader").style.zIndex = "0";
           document.getElementById("image-loader").style.display ="hidden"
           if(err){
             console.log(" error : ", err)
           }
           console.log(" res : ", res)
           if(res) {

              console.log("list of customer : ", res.getUserslistList())
             res.getUserslistList().forEach((data) => {
                  this.pendingCustomers.push({
                    accountNumber : data.getAccountnumber(),
                    customerNameAtRegistration : data.getCustomernameatregistration(),
                    mobileNumber : data.getMobilenumber(),
                    makeDateTime : data.getMakedatetime(),
                    userId : data.getUserid(),
                    cID : data.getCid()
                  })
               })
               this.listOfFilteredPendingCustomers = this.pendingCustomers
             // console.log(" PENDING CUSTOMER  : ", res.getUserslistList())
           }
         })

       }catch (e) {
         console.log(" error : ", e.message)
       }
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.listOfFilteredPendingCustomers = filteredItems
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    ApproveCustomer(data){
       console.log("data ", data.cID)
      this.sweetAlert.showDialogYesOrNo(Object.assign(SweetAlertConfig, {
        title :'Approve Customer ?',
        confirmButtonText : 'Yes, authorize'
      }), () => {

        const request = new customerService.MerchantCustomerIdRequestMessage();
         request.setCid(data.cID)
         request.setCustomername(data.customerNameAtRegistration)
         request.setMerchantcustomeruserid(data.userId)
         request.setMobileno(data.mobileNumber)
          this.showLoader = true
         this.clients.authorizeRegistredCustomer(request, this.$store.getters.metadata, (err,res) => {
          this.showLoader = false
            if(err) {
              console.log(" Error : ", err)
            }

            if(res.getIssuccess()) {
              console.log( " Response : ", res.getIssuccess())
              this.GetPendingCustomers()
              this.sweetAlert.showMessage("Customers ", res.getMessage())
            }
            else {

               this.responseMessage = res.getMessage()
            }
         } )

      })
    },
    DisapproveCustomer(data){

      try {

        console.log("data ", data.cID)
        this.sweetAlert.showDialogYesOrNo(Object.assign(SweetAlertConfig, {
          title :'Disapprove Customer ?',
          confirmButtonText : 'Yes, disapprove'
        }), () => {

           const request = new customerService.MerchantCustomerIdRequestMessage();
          request.setCid(data.cID)
          request.setCustomername(data.customerNameAtRegistration)
          request.setMerchantcustomeruserid(data.userId)
          request.setMobileno(data.mobileNumber)
          this.showLoader = true
          this.clients.disapproveRegistredCustomer(request, this.$store.getters.metadata, (err,res) => {
            this.showLoader = false
            if(err) {
              this.responseMessage = grpcUrl.serverError
            }

            if(res.getIssuccess()) {
              this.GetPendingCustomers()
              this.sweetAlert.showMessage("Customers ", res.getMessage())
            }
            else {

              this.responseMessage = res.getMessage()
            }
          } )

        })
        console.log(" sdfsdf :", data)

      }catch (e) {
         console.log(" Error : ", e)
      }
    },
    ViewPendingCustomer(data) {
      this.viewCustomer.accountname = data.customerNameAtRegistration
      this.viewCustomer.accountnumber = data.accountNumber
      this.viewCustomer.mobilenumber = data.mobileNumber
      this.viewCustomer.createddate = data.makeDateTime
    }
  },
  computed:{
    rows() {
      return this.listOfFilteredPendingCustomers.length;
    },
  },
  mounted() {
    // Set the initial number of items
     this.totalRows = this.listOfFilteredPendingCustomers.length;
  },
  created() {
    this.clients = new customerService.MerchantMiddlewareCustomerSvcClient(grpcUrl.URL,null,null)
    this.sweetAlert = new SweetAlertWrapper()
     console.log(" pending")
   // this.GetPendingCustomers()
    this.$store.dispatch('setAppHeader', {
       title:'Pending Customers',
      items: [
        {
          text: "Dashboard",
          href: "#",
        },
        {
          text: "Pending Customers",
          href: "/merchant/pendingcustomers",
        },
      ]
    })
  }
}
</script>

<style scoped>

</style>