<template>
    <div class="row">
      <CustomHeaderAlert :message="message" />
      <div class="col-lg-12">
        <div class="row">
          <div class="col">
            <div class="card">
              <!-- start Pending customer table -->
              <div class="card-body">
                <form @submit.prevent="GetPendingCustomersToTerminate">
                  <div class="row">
                    <div class="col-lg-3 col-md-3">
                      <div class="form-group mb-3">
                        <button class="btn btn-primary btn-block" id="bkcolor" type="submit" >
                          Get pending termination requests
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
                      :items="customerpendingterminationapproval"
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
                      <a v-b-modal.modal-responsive  class="text-primary mr-2" @click="ViewTerminationCustomer(data.item)"> <i class="mdi mdi-eye"></i> View</a>
                      <a @click="ApproveCustomerTermination(data.item)" class="text-success mr-2" style="cursor: pointer"> <i class="mdi mdi-check"></i> Approve</a>
                      <a @click="DisApproveCustomerTermination(data.item)" class="text-danger mr-2" style="cursor: pointer"> <i class="mdi mdi-trash-can"></i> Disapprove</a>

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
              title="View customer pending termination"
              title-class="font-18"
              body-class="p-4"
      >
        <div class="form-group mb-3">
          <label>Account name </label>
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
      <!--  End  View  customer model     -->
    </div>
</template>

<script>
import CustomHeaderAlert from "../../components/shared/CustomHeaderAlert";
import customerService from "../../protos/MerchantMiddlewareCustomer_grpc_web_pb";
import grpcUrl from "../../components/constant";
import SweetAlertWrapper from "../../sweetAlert";
import SweetAlertConfig from "../../SwalConfig";

export default {
  components: {
    CustomHeaderAlert
  },
  data() {
    return {
      message :"Approve customers to be terminated",
      clients :{},
      customerpendingterminationapproval :[],
      viewcustomer :{
         tid:'',
        customername :'',
        mobilenumber:'',
        requestdate:''
      },
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: "mobileNo",
      sortDesc: false,
      tableFields: [
        {
          label: "TID",
          key: "tid",
          sortable: true,
        },
        {
          label :"Customer name",
          key: "customername",
          sortable: true,
        },
        {
          label: "Mobile number",
          key: "mobileNo",
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
    GetPendingCustomersToTerminate(){
      try {
        this.customerpendingterminationapproval = []
        const request = new customerService.UsersByCIDRequestMessage();
        request.setCountrycode(this.$store.getters.getUserInfo.countryCode)
        request.setSubscriptionstatus("PENDING")

        this.clients.getMerchantCustomerTerminateServiceRequest(request, this.$store.getters.metadata, (err, res) => {

          if(err){
            console.log(" error : ", err)
          }
          if(res) {
            res.getCustlistList().forEach((data) => {
              this.customerpendingterminationapproval.push({
                mobileNo : data.getMobileno(),
                cid : data.getCid(),
                customername : data.getCustomername(),
                makerId : data.getMakerid(),
                requestDate : data.getRequestdate(),
                tid : data.getTid()
              })
            })


          }
        })


      }catch (e) {
        console.log(" error : ", e.message)
      }
    },
    ApproveCustomerTermination(data){

      try {

        this.sweetAlert.showDialogYesOrNo(Object.assign(SweetAlertConfig, {
          title : 'Approve termination ?',
          confirmButtonText : 'Yes, approve'
        }), () => {

          const request = new customerService.MerchantCustomerPINChangeApproveMessage();
          request.setTid(data.tid)
          request.setMobileno(data.mobileNo)
          request.setCid(data.cid)
          request.setSubscriptionstatus("")
          request.setApproveordisapprove("APPROVED")

          this.clients.merchantCustomerTerminateServiceRequestApproval(request, this.$store.getters.metadata, (err,res) => {

            if(err) {
              console.log(" Error : ", err)
            }

            if(res.getIssuccess()) {
              //payPartnerId
              this.GetPendingCustomersToTerminate()
              this.sweetAlert.showMessage("Termination approval ", res.getMessagesuccessfulorfailed())
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
    DisApproveCustomerTermination(data) {
      try {

        this.sweetAlert.showDialogYesOrNo(Object.assign(SweetAlertConfig, {
          title :'Disapprove termination ?',
          confirmButtonText : 'Yes, disapprove'
        }), () => {

          const request = new customerService.MerchantCustomerPINChangeApproveMessage();
          request.setTid(data.tid)
          request.setMobileno(data.mobileNo)
          request.setCid(data.cid)
          request.setSubscriptionstatus("")
          request.setApproveordisapprove("DISAPPROVED")

          this.clients.merchantCustomerTerminateServiceRequestApproval(request, this.$store.getters.metadata, (err,res) => {

            if(err) {
              console.log(" Error : ", err)
            }

            if(res.getIssuccess()) {
              //payPartnerId
              this.GetPendingCustomersToTerminate()
              this.sweetAlert.showMessage("Termination approval ", res.getMessagesuccessfulorfailed())
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
    ViewTerminationCustomer(data) {
       this.viewcustomer.customername = data.customername
      this.viewcustomer.mobilenumber = data.mobileNo
      this.viewcustomer.tid = data.tid
       this.viewcustomer.requestdate = data.requestDate
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
  computed:{
    rows() {
      return this.customerpendingterminationapproval.length;
    },
  },
  mounted() {
    // Set the initial number of items
    // this.totalRows = this.items.length;
  },
  created() {
    this.clients = new customerService.MerchantMiddlewareCustomerSvcClient(grpcUrl.URL,null,null)
    this.sweetAlert = new SweetAlertWrapper()
    this.GetPendingCustomersToTerminate()
    this.$store.dispatch('setAppHeader',{
      title : 'Approve Termination',
      items : [
        {
          text: "Dashboard",
          href: "#",
        },
        {
          text: "Approve Termination",
          href: "/merchant/terminate",
        },
      ]
    })
  }
}
</script>

<style scoped>

</style>