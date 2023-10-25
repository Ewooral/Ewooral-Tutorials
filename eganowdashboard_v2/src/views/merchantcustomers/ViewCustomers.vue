<template>
<!--  <b-overlay :show="showLoader" rounded="sm">-->
  <div>
    <div class="image-loader"  id="image-loader" >
      <lottie-loader :loading="showLoader" />
    </div>
    <div class="row">
      <CustomHeaderAlert :message="headertext"/>
      <div class="col-lg-12">
        <div class="row">
          <div class="col">
            <div class="card">
              <AlertMessage :variant="dangerSuccess" :message="responseMessage" v-if="responseMessage"/>
              <!-- start Pending customer table -->
              <div class="card-body">
                <form @submit.prevent="GetCustomersByStatus">
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
                    <div class="col-lg-3 col-md-3">
                      <label class="mb-3"></label>
                      <div class="form-group mb-3">
                        <button class="btn btn-primary btn-block" id="bkcolor" type="submit" >
                          Get customers
                        </button>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <label class="mb-3"></label>
                      <div class="form-group mb-3  text-right">
                        <b-button class="mdi mdi-help-circle mr-1 text-primary"   id="tooltip-left-button" variant="light"> help</b-button>
                        <b-tooltip target="tooltip-left-button" placement="left">
                          Can view active customers and customers yet to be approved (i.e pending customers)
                        </b-tooltip>
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
                      <div v-if="listOfFilteredCustomers.length > 0">
                        <download-excel :data="this.listOfFilteredCustomers" class="text-success hidefromprint" style="font-weight: bold; cursor: pointer;">
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
                          :items="customersbystatus"
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
                      <a v-b-modal.modal-responsive class="text-primary mr-2" @click="ViewCustomer(data.item)"> <i class="mdi mdi-eye"></i> View</a>
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

      <!-- start View  customer model      -->
      <b-modal
              id="modal-responsive"
              title="View pending or active customer"
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
      <!--  End  View  customer model     -->
    </div>
  </div>

<!--  </b-overlay>-->
</template>

<script>
import Multiselect from "vue-multiselect";
import customerService from '../../protos/MerchantMiddlewareCustomer_grpc_web_pb'
import grpcUrl from "../../components/constant";
import CustomHeaderAlert from "../../components/shared/CustomHeaderAlert";
import AlertMessage from "../../components/shared/AlertMessage";
import LottieLoader from "../../components/LottieLoader";

export default {
  components:{
    Multiselect,
    CustomHeaderAlert,
    AlertMessage,
    LottieLoader
  },
  clients:{},
  data(){
    return{
      showLoader : false,
      status : true,
      dangerSuccess :'danger',
      listOfFilteredCustomers : [],
      responseMessage :'',
      headertext : 'Can view active customers and customers yet to be approved (i.e pending customers)',
      customerStatus:'',
      customerStatusvalues:[
         'PENDING',
         'ACTIVE'
      ],
      viewCustomer :{
        accountnumber:'',
        mobilenumber :'',
        accountname :'',
        cid:'',
        userId: '',
        createddate :''
      },
      customersbystatus:[],
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
  methods:{

    GetCustomersByStatus() {
      try {
        this.customersbystatus = []
        this.showLoader = true
        document.getElementById("image-loader").style.zIndex = "1";
        const request = new customerService.UsersByCIDRequestMessage();
        // console.log(" country code : ", this.$store.getters.getUserInfo.countryCode)
        // console.log(" status : ", this.customerStatus == null ? "" : this.customerStatus)
        request.setCountrycode(this.$store.getters.getUserInfo.countryCode)
        request.setSubscriptionstatus(this.customerStatus === "" ? "ACTIVE" : this.customerStatus)

        this.clients.getUsersByMerchantId(request, this.$store.getters.metadata, (err, res) => {
          this.showLoader = false
          document.getElementById("image-loader").style.zIndex = "0";
          document.getElementById("image-loader").style.display ="hidden"
          if(err){
            console.log(" error : ", err)
          }
          if(res) {
            res.getUserslistList().forEach((data) => {
              this.customersbystatus.push({
                accountNumber : data.getAccountnumber(),
                customerNameAtRegistration : data.getCustomernameatregistration(),
                mobileNumber : data.getMobilenumber(),
                makeDateTime : data.getMakedatetime(),
                userId : data.getUserid(),
                cID : data.getCid()
              })
            })
             this.listOfFilteredCustomers = this.customersbystatus
            // console.log(" PENDING CUSTOMER  : ", res.getUserslistList())
          }
          else  {
            this.responseMessage = grpcUrl.serverError
          }
        })


      }catch (e) {
        console.log(" error : ", e.message)
      }
    },
    ViewCustomer(data) {
      try {
        this.viewCustomer.accountname = data.customerNameAtRegistration
        this.viewCustomer.accountnumber = data.accountNumber
        this.viewCustomer.mobilenumber = data.mobileNumber
        this.viewCustomer.createddate = data.makeDateTime
      }catch (e) {
        console.log(e.message)
      }

    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
       this.listOfFilteredCustomers = filteredItems
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },

  },
  created() {
    this.clients = new customerService.MerchantMiddlewareCustomerSvcClient(grpcUrl.URL,null,null)
   // this.GetCustomersByStatus()
    this.$store.dispatch('setAppHeader', {
      title: "View Customers",
      items: [
        {
          text: "Dashboard",
          href: "#",
        },
        {
          text: "View Customers",
          href: "/merchant/viewcustomers",
        },
      ],
    })
  },
  computed:{
    rows() {
      return this.listOfFilteredCustomers.length;
    },
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.listOfFilteredCustomers.length;
  }
}
</script>

<style scoped>

</style>