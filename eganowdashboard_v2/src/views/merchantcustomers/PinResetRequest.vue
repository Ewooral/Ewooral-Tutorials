<template>
    <b-overlay :show="showLoader" rounded="sm">
    <div class="row">
        <CustomHeaderAlert :message="message" />
      <div class="col-lg-12">
        <div class="row">
          <div class="col">
            <div class="card">
              <!-- start Pending customer table -->
                <AlertMessage :variant="dangerSuccess" :message="responseMessage" v-if="responseMessage"/>

                <div class="card-body">
                <form @submit.prevent="GetCustomerThatRequestPinReset">
                  <div class="row">
                    <div class="col-lg-2 col-md-2">
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
                        <div v-if="listOfFilteredCustomersRequestedForPinReset.length > 0">
                            <download-excel :data="this.listOfFilteredCustomersRequestedForPinReset" class="text-success hidefromprint" style="font-weight: bold; cursor: pointer;">
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
                      :items="pinresetresuestcustomers"
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
                        <a v-b-modal.modal-responsive  class="text-primary mr-2" @click="ViewCustomerPinResetRequest(data.item)"> <i class="mdi mdi-eye"></i> View</a>
                        <a @click="ApproveCustomerPinRequest(data.item)" class="text-success mr-2" style="cursor: pointer"> <i class="mdi mdi-check"></i> Approve</a>
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

        <!-- start View  pin reset model      -->
        <b-modal
                id="modal-responsive"
                title="View customer pin reset"
                title-class="font-18"
                body-class="p-4"
        >
            <div class="form-group mb-3">
                <label>Customer name </label>
                <input
                        class="form-control"
                        type="text"
                        v-model="viewcustomer.customername"
                        name="customername"
                        readonly
                />
            </div>
            <div class="form-group mb-3">
                <label>Mobile number</label>
                <input
                        class="form-control"
                        type="text"
                        v-model="viewcustomer.mobilenumber"
                        name="mobilenumber"
                        readonly
                />
            </div>
            <div class="form-group mb-3">
                <label>Request status</label>
                <input
                        class="form-control"
                        type="text"
                        v-model="viewcustomer.requestStatus"
                        name="requestStatus"
                        readonly
                />
            </div>
            <div class="form-group mb-3">
                <label> Requested date </label>
                <input
                        class="form-control"
                        type="text"
                        v-model="viewcustomer.requestdate"
                        name="requestdate"
                        readonly
                />
            </div>
            <div class="form-group mb-3">
                <label> TID </label>
                <input
                        class="form-control"
                        type="text"
                        v-model="viewcustomer.tid"
                        name="tid"
                        readonly
                />
            </div>
        </b-modal>
        <!--  End  View  pin reset model     -->
    </div>
    </b-overlay>
</template>

<script>
import CustomHeaderAlert from "../../components/shared/CustomHeaderAlert";
import customerService from "../../protos/MerchantMiddlewareCustomer_grpc_web_pb";
import grpcUrl from "../../components/constant";
import SweetAlertWrapper from "../../sweetAlert";
import SweetAlertConfig from "../../SwalConfig";
import AlertMessage from "../../components/shared/AlertMessage";

export default {
  components: {
   CustomHeaderAlert,
      AlertMessage
  },
  data() {
    return {
        showLoader : false,
        listOfFilteredCustomersRequestedForPinReset : [],
       message : "Customers that want to reset their pins",
      clients :{},
        dangerSuccess :'danger',
        responseMessage :'',
        viewcustomer: {
            tid:'',
            customername :'',
            mobilenumber:'',
            requestdate:'',
            requestStatus:''
        },
      pinresetresuestcustomers:[],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: "tid",
      sortDesc: false,
      tableFields: [
        {
          key: "tid",
          sortable: true,
        },
        {
          label:"Customer name",
          key: "customerName",
          sortable: true,
        },
        {
          label: "Mobile number",
          key: "mobileNo",
          sortable: true,
        },
         {
              label: "Request status",
              key: "requestStatus",
              sortable: true,
         },
        {
          label: "Requested date",
          key: "requestDate",
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
    GetCustomerThatRequestPinReset(){
        try {
            this.pinresetresuestcustomers = []
            const request = new customerService.UsersByCIDRequestMessage();
            request.setCountrycode(this.$store.getters.getUserInfo.countryCode)
            request.setSubscriptionstatus("PENDING")

            console.log(" Request : ", request)
               // Pin reset request
            this.showLoader = true
            this.clients.getMerchantCustomerPINChangeRequest(request, this.$store.getters.metadata, (err, res) => {
             this.showLoader = false
                if(err){
                    console.log(" error : ", err)
                }
                // console.log(" res : ", res)
                if(res) {

                    res.getCustlistList().forEach((data) => {
                        this.pinresetresuestcustomers.push({
                            tid : data.getTid(),
                            mobileNo : data.getMobileno(),
                            requestStatus : data.getRequeststatus(),
                            customerName : data.getCustomername(),
                            requestDate : data.getRequestdate(),
                            cID : data.getCid()
                        })
                    })
                 this.listOfFilteredCustomersRequestedForPinReset = this.pinresetresuestcustomers
                }
            })

        }catch (e) {
            console.log(" error : ", e.message)
        }
    },
      ApproveCustomerPinRequest(data) {
           try {
               this.sweetAlert.showDialogYesOrNo(Object.assign(SweetAlertConfig, {
                   confirmButtonText : 'Yes, approve'
               }), () => {

                   const request = new customerService.MerchantCustomerPINChangeApproveMessage();
                   request.setTid(data.tid)
                   request.setCid(data.cID)
                   request.setSubscriptionstatus("APPROVED")
                   request.setApproveordisapprove("APPROVED")
                   request.setMobileno(data.mobileNo)
                   this.showLoader = true
                   this.clients.merchantCustomerPINChangeApproval(request, this.$store.getters.metadata, (err,res) => {
                    this.showLoader = false
                       if(err) {
                           console.log(" Error : ", err)
                       }

                       if(res.getIssuccess()) {
                           console.log( " Response : ", res.getIssuccess())
                           this.GetCustomerThatRequestPinReset()
                           this.sweetAlert.showMessage("Pin reset approval ", res.getMessagesuccessfulorfailed())
                       }
                       else {
                             console.log(" pin reset error : ", res.getMessage())
                           this.responseMessage = res.getMessage()
                       }
                   } )

               })
           }catch (e) {
               console.log(" Error : ", e.getMessage())
           }
      },
      ViewCustomerPinResetRequest(data) {

        try {

            this.viewcustomer.customername = data.customerName
            this.viewcustomer.mobilenumber = data.mobileNo
            this.viewcustomer.requestStatus = data.requestStatus
            this.viewcustomer.tid = data.tid
            this.viewcustomer.requestdate = data.requestDate
        }catch (e) {
            console.log("Error : ", e.getMessage())
        }

      },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
        this.listOfFilteredCustomersRequestedForPinReset = filteredItems
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
  computed:{
    rows() {
      return this.listOfFilteredCustomersRequestedForPinReset.length;
    },
  },
  mounted() {
    // Set the initial number of items
    //this.totalRows = this.items.length;
  },
  created() {

      this.clients = new customerService.MerchantMiddlewareCustomerSvcClient(grpcUrl.URL,null,null)
      this.sweetAlert = new SweetAlertWrapper()
       this.GetCustomerThatRequestPinReset()
      this.$store.dispatch('setAppHeader', {
      title: "Customer Pin Request Approval",
      items: [
        {
          text: "Dashboard",
          href: "#",
        },
        {
          text: "Pin Reset Request",
          href: "/merchant/pinrequest",
        },
      ],
    })
  }
}
</script>

<style scoped>

</style>