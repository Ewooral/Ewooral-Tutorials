<template>
    <div class="row">
        <CustomHeaderAlert :message="message" />

        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <form @submit.prevent="GetActiveMerchantUsers">
                        <div class="row">
                            <div class="col-lg-3 col-md-3">
                                <div class="form-group mb-3">
                                    <button class="btn btn-primary btn-block" id="bkcolor" type="submit" >
                                        Get authorized users
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
<!--                    <h4 class="header-title">Search result</h4>-->
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
                    <b-overlay :show="showLoaderTable" rounded="sm">
                        <div class="table-responsive mb-0" id="table">
                            <b-table style="color: #000000 !important;"
                                     :items="listOfAllUsers"
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
                                <template #cell(UserStatus)="data">
                                      <span :class="{
                                        'text-success p-1' : `${data.item.UserStatus}` === 'ACTIVE'
                                      }" class="badge"> {{data.item.UserStatus}}</span>
                                </template>
                                <template #cell(actions)="data">
                                    <a v-b-modal.modal-lg class="text-secondary mr-2" style="cursor: pointer" @click="ViewUser(data.item)"  > <i class="mdi mdi-eye"></i> View</a>
                                    <a class="text-danger mr-2" style="cursor: pointer" @click="DeleteUser(data.item)"  > <i class="mdi mdi-trash-can"></i> Delete</a>
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
        <!--    Start modal    -->
        <b-modal
                id="modal-lg"
                title="View merchant user"
                title-class="font-18"
                size="lg"
                class="p-4"
                >


                    <div class="row">
                        <div class="col-6">
                            <div class="form-group mb-3">
                                <label> First name</label>
                                <input  name="firstname" type="text"
                                        class="form-control"
                                        placeholder="Enter first name"
                                        readonly
                                        v-model="viewUser.firstname"
                                />

                            </div>

                        </div>
                        <div class="col-6">
                            <div class="form-group mb-3">
                                <label> Last name</label>
                                <input  name="lastname" type="text"
                                        class="form-control"
                                        placeholder="Enter last name"
                                        readonly
                                        v-model="viewUser.lastname"
                                />

                            </div>

                        </div>
                    </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group mb-3">
                                    <label>Email address</label>
                                    <input  name="emailaddress" type="text"
                                            class="form-control"
                                            placeholder="Enter mobile number"
                                            readonly
                                            v-model="viewUser.emailaddress"
                                    />

                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group mb-3">
                                    <label> Mobile number</label>
                                    <input  name="mobileNumber" type="text"
                                            class="form-control"
                                            placeholder="Enter mobile number"
                                            readonly
                                            v-model="viewUser.mobileNumber"
                                    />

                                </div>
                            </div>
                        </div>

                    <div class="row">
                        <div class="col-6">
                            <div class="form-group mb-3">
                                <label> Posting limit amount</label>
                                <input  name="postingLimitAmount" type="text"
                                        class="form-control"
                                        placeholder="Posting limit amount"
                                        readonly
                                        v-model="viewUser.postingLimitAmount"
                                />
                            </div>

                        </div>
                        <div class="col-6">
                            <div class="form-group mb-3">
                                <label>Authorization limit amount</label>
                                <input  name="authLimitAmount" type="text"
                                        class="form-control"
                                        placeholder="Authorization limit amount"
                                        readonly
                                        v-model="viewUser.authLimitAmount"
                                />
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group mb-3">
                                <label>Can user initiate transaction ?</label>
                                <input  name="postingLimitAmount" type="text"
                                        class="form-control"
                                        readonly
                                        v-model="viewUser.canInitiateTransYesNo"
                                />
                            </div>

                        </div>
                        <div class="col-6">
                            <div class="form-group mb-3">
                                <label>Can user authorize transaction ?</label>
                                <input  name="postingLimitAmount" type="text"
                                        class="form-control"
                                        placeholder=""
                                        readonly
                                        v-model="viewUser.canAuthorizeTransYesNo"
                                />
                            </div>

                        </div>
                    </div>
            <div class="row">
                <div class="col-6">
                    <div class="form-group mb-3">
                        <label>Can user initiate transaction ?</label>
                        <input  name="postingLimitAmount" type="text"
                                class="form-control"
                                readonly
                                v-model="viewUser.canInitiateTransYesNo"
                        />
                    </div>

                </div>
                <div class="col-6">
                    <div class="form-group mb-3">
                        <label>Can user authorize transaction ?</label>
                        <input  name="postingLimitAmount" type="text"
                                class="form-control"
                                placeholder=""
                                readonly
                                v-model="viewUser.canAuthorizeTransYesNo"
                        />
                    </div>

                </div>
            </div>


        </b-modal>
        <!--   End Model   -->
    </div>

</template>

<script>

import businessCustomer from "../../protos/Customer_grpc_web_pb";
import CustomHeaderAlert from "../../components/shared/CustomHeaderAlert";
import grpcUrl from "../../components/constant";
import SweetAlertConfig from "../../SwalConfig";
import SweetAlertWrapper from "../../sweetAlert";

export default {
  components :{
      CustomHeaderAlert
  },

  data(){
    return{
        showLoaderTable : '',
        viewUser : {
            mobileNumber : '',
            emailaddress :'',
            firstname:'',
            lastname :'',
            postingLimitAmount :'',
            authLimitAmount :'',
            canInitiateTransYesNo :'',
            canAuthorizeTransYesNo :'',
            canInitiateCustomerService :'',
            canAuthorizeCustomerService :''
        },
        message : 'View authorized merchant users ',
        listOfAllUsers :[],
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
                label:"First name",
                key: "firstName",
                sortable: true,
            },
            {
                label:"Last name",
                key: "lastName",
                sortable: true,
            },
            {
                label :"Mobile number",
                key: "mobileNumber",
                sortable: true,
            },
            {
                label :"Email address",
                key: "customerId",
                sortable: true,
            },
            {
                label :"Posting limit amount",
                key: "postingLimitAmount",
                sortable: true,
            },
            {
                label :"Amount to authorize",
                key: "authLimitAmount",
                sortable: true,
            },
            {
                label : "Status",
                key: "UserStatus",
                sortable: true,
            },
            {
                label: "Created by",
                key: "MakeId",
                sortable: true,
            },
            {
                label: "Date created",
                key: "MakeDate",
                sortable: true,
            },
            {
                key: "actions",
                sortable: true,
            },
        ],
    }
  },
    methods : {
        ViewUser(data) {

            try {

                this.viewUser.mobileNumber = data.mobileNumber
                this.viewUser.emailaddress = data.customerId
                this.viewUser.canAuthorizeTransYesNo = data.canAuthorizeTransYesNo
                this.viewUser.canInitiateTransYesNo = data.canInitiateTransYesNo
                this.viewUser.canAuthorizeCustomerService = data.canAuthorizeCustomerService
                this.viewUser.canInitiateCustomerService = data.canInitiateCustomerService
                this.viewUser.postingLimitAmount = data.postingLimitAmount
                this.viewUser.authLimitAmount = data.authLimitAmount
                this.viewUser.firstname = data.firstName
                this.viewUser.lastname = data.lastName

            }catch (e) {
                console.log(" Error : ",e)
            }
        },
        DeleteUser(data){

            try {

                this.sweetAlert.showDialogYesOrNo(Object.assign(SweetAlertConfig, {
                    title :' Delete user ?',
                    confirmButtonText : 'Yes, delete'
                }), () => {

                    const request = new businessCustomer.BizUserToApproveMessage()
                    request.setCustomerid(data.customerId)
                    request.setFirstname(data.firstName)
                    request.setLanguageid(data.languageId)

                    this.showLoaderTable = true
                    this.customerClients.disapproveApproveOtherBusinessUser(request, this.$store.getters.metadata , (err,res) => {
                        this.showLoaderTable = false;
                        if(err) {
                            console.log( " Error : ", err)
                            this.responseMessageStatus = grpcUrl.serverError
                        }
                        console.log(" response : ", res)
                        if (res.getIssuccess()) {
                            this.GetActiveMerchantUsers()
                            this.sweetAlert.showMessage("Delete User ", res.getMessage())
                        }
                        else {

                            this.responseMessageStatus = res.getMessage()
                        }
                    })
                })

            }catch (e) {
                console.log(" Error : ",e)
            }
        },
        GetActiveMerchantUsers(){

            try {
                const request = new businessCustomer.BizUserSearchRequestMessage()

                request.setUserstatus("ACTIVE")
                request.setLanguageid(this.$store.getters.getUserInfo.languageId)

                this.showLoaderTable = true;
                this.customerClients.getAllOtherBusinessUserByCustomer(request, this.$store.getters.metadata, (err,res) => {
                    this.showLoaderTable = false
                    if(err) {
                        console.log("Error one : ", err)
                    }

                    if(res) {
                        console.log(" Response : ", res.getUserlistList())
                        this.listOfAllUsers = []
                        res.getUserlistList().forEach((data) => {
                            this.listOfAllUsers.push({
                                mobileNumber : data.getMobilenumber(),
                                firstName : data.getFirstname(),
                                lastName : data.getSurnamelastname(),
                                postingLimitAmount : data.getPostinglimitamount(),
                                authLimitAmount : data.getAuthlimitamount(),
                                canInitiateTransYesNo : data.getCaninitiatetransyesno(),
                                canAuthorizeTransYesNo : data.getCanauthorizetransyesno(),
                                UserStatus : data.getUserstatus(),
                                MakeId : data.getMakeid(),
                                AuthId : data.getAuthid(),
                                MakeDate : data.getMakedate(),
                                AuthDate : data.getAuthdate(),
                                languageId : data.getLanguageid(),
                                customerId : data.getCustomerid()

                            })
                        })
                    }
                })

            }catch (e) {
                console.log(" Error type : ", e)
            }
        },
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
    },
    computed:{
        rows() {
            return this.listOfAllUsers.length;
        },
    },
  created() {
      this.customerClients = new businessCustomer.CustomerAccountClient(grpcUrl.URL,null,null)
      this.sweetAlert = new SweetAlertWrapper()
      this.GetActiveMerchantUsers()
    this.$store.dispatch('setAppHeader',{
      title: "View Users",
      items: [
        {
          text: "Dashboard",
          href: "#",
        },
        {
          text: "VIew Users",
          href: "/merchant/viewuser",
        },
      ],
    })
  }

}
</script>

<style scoped>

</style>