<template>
    <div>
        <div class="row">
            <CustomHeaderAlert :message="message" />

            <div class="col-12">
                <div class="card">
                    <AlertMessage :variant="dangerSuccess" :message="responseMessageTable" v-if="responseMessageTable"/>
                    <div class="card-body">
                        <div style="float: right !important;">
                            <a v-b-modal.modal-lg class="btn btn-danger mb-2"
                            ><i class="mdi mdi-plus-circle mr-1"></i> create new user</a>
                        </div>

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
                                        'text-primary p-1' : `${data.item.UserStatus}` === 'PENDING'
                                      }" class="badge"> {{data.item.UserStatus}}</span>
                                    </template>
                                    <template #cell(actions)="data">
                                        <a class="text-success mr-2" style="cursor: pointer" @click="ApproveUser(data.item)"  > <i class="mdi mdi-check"></i> Approve</a>
                                        <a class="text-danger mr-2" style="cursor: pointer" @click="DisappoveUser(data.item)" > <i class="mdi mdi-cancel"></i> Disapprove</a>
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
                    title="Add new user"
                    title-class="font-18"
                    size="lg"
                    class="p-4"
                    hide-footer>
                <b-overlay :show="showLoaderAddUser" rounded="sm">
                    <form @submit.prevent="CreateNewUser" >
                        <AlertMessage :variant="dangerSuccess" :message="responseMessage" v-if="responseMessage"/>

                        <div class="row">
                            <div class="col-6">
                                <div class="form-group mb-3">
                                    <label>Enter first name</label>
                                    <input  name="firstname" type="text"
                                            class="form-control"
                                            placeholder="Enter first name"
                                            v-validate="'required'"
                                            :class="{'is-invalid': vErrors.has('firstname') }"
                                            v-model="addUser.firstname"
                                    />
                                    <span v-show="vErrors.has('firstname')" class="help text-danger">{{ vErrors.first('firstname') }}</span>
                                </div>

                            </div>
                            <div class="col-6">
                                <div class="form-group mb-3">
                                    <label>Enter last name</label>
                                    <input  name="lastname" type="text"
                                            class="form-control"
                                            placeholder="Enter last name"
                                            v-validate="'required'"
                                            :class="{'is-invalid': vErrors.has('lastname') }"
                                            v-model="addUser.lastname"
                                    />
                                    <span v-show="vErrors.has('lastname')" class="help text-danger">{{ vErrors.first('lastname') }}</span>
                                </div>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group mb-3">
                                    <label>Enter email address</label>
                                    <input  name="emailaddress" type="text"
                                            id="emailaddress"
                                            class="form-control"
                                            placeholder="Enter email address"
                                            v-validate="'required|email'"
                                            :class="{'is-invalid': vErrors.has('emailaddress') }"
                                            v-model="addUser.emailaddress"
                                    />
                                    <span v-show="vErrors.has('emailaddress')" class="help text-danger">{{ vErrors.first('emailaddress') }}</span>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-group mb-3">
                                    <label>Enter mobile number</label>
                                    <input  name="mobileNumber" type="text"
                                            class="form-control"
                                            placeholder="Enter mobile number"
                                            v-model="addUser.mobileNumber"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group mb-3">
                                    <label>Enter posting limit amount</label>
                                    <input  name="postingLimitAmount" type="text"
                                            class="form-control"
                                            placeholder="Posting limit amount"
                                            v-validate="'required'"
                                            :class="{'is-invalid': vErrors.has('postingLimitAmount') }"
                                            v-model="addUser.postingLimitAmount"
                                    />
                                    <span v-show="vErrors.has('postingLimitAmount')" class="help text-danger">{{ vErrors.first('postingLimitAmount') }}</span>
                                </div>

                            </div>
                            <div class="col-6">
                                <div class="form-group mb-3">
                                    <label>Enter authorization limit amount</label>
                                    <input  name="authLimitAmount" type="text"
                                            class="form-control"
                                            placeholder="Authorization limit amount"
                                            v-validate="'required'"
                                            :class="{'is-invalid': vErrors.has('authLimitAmount') }"
                                            v-model="addUser.authLimitAmount"
                                    />
                                    <span v-show="vErrors.has('authLimitAmount')" class="help text-danger">{{ vErrors.first('authLimitAmount') }}</span>
                                </div>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group mb-3">
                                    <label>Can user initiate transaction ?</label>
                                    <select class="custom-select" v-model="addUser.canInitiateTransYesNo" name="canInitiateTransYesNo" id="canInitiateTransYesNo" v-validate="'required'" >
                                        <option value="" selected> Initiate transaction</option>
                                        <option value="YES">YES</option>
                                        <option value="NO">NO</option>
                                    </select>
                                    <span v-show="vErrors.has('canInitiateTransYesNo')" class="help text-danger">{{ vErrors.first('canInitiateTransYesNo') }}</span>
                                </div>

                            </div>
                            <div class="col-6">
                                <div class="form-group mb-3">
                                    <label>Can user authorize transaction ?</label>
                                    <select class="custom-select" v-model="addUser.canAuthorizeTransYesNo" name="canAuthorizeTransYesNo" id="canAuthorizeTransYesNo" v-validate="'required'" >
                                        <option value="" selected> Authorize transaction</option>
                                        <option value="YES">YES</option>
                                        <option value="NO">NO</option>
                                    </select>
                                    <span v-show="vErrors.has('canAuthorizeTransYesNo')" class="help text-danger">{{ vErrors.first('canAuthorizeTransYesNo') }}</span>
                                </div>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="form-group mb-3">
                                    <label>Can user initiate customer service ?</label>
                                    <select class="custom-select" v-model="addUser.canInitiateCustomerService" name="canInitiateCustomerService" id="canInitiateCustomerService" v-validate="'required'" >
                                        <option value="" selected> Initiate customer service</option>
                                        <option value="YES">YES</option>
                                        <option value="NO">NO</option>
                                    </select>
                                    <span v-show="vErrors.has('canInitiateCustomerService')" class="help text-danger">{{ vErrors.first('canInitiateCustomerService') }}</span>
                                </div>

                            </div>
                            <div class="col-6">
                                <div class="form-group mb-3">
                                    <label>Can user authorize customer service ?</label>
                                    <select class="custom-select" v-model="addUser.canAuthorizeCustomerService" name="canAuthorizeCustomerService" id="canAuthorizeCustomerService" v-validate="'required'" >
                                        <option value="" selected> Authorize customer service</option>
                                        <option value="YES">YES</option>
                                        <option value="NO">NO</option>
                                    </select>
                                    <span v-show="vErrors.has('canAuthorizeCustomerService')" class="help text-danger">{{ vErrors.first('canAuthorizeCustomerService') }}</span>
                                </div>

                            </div>
                        </div>


                        <div class="form-group mb-0 text-center">
                            <button class="btn btn-primary btn-block" id="bkcolor" type="submit">
                                Submit
                            </button>
                        </div>

                    </form>
                </b-overlay>
            </b-modal>
            <!--   End Model   -->
        </div>

    </div>
</template>

<script>
import AlertMessage from "../../components/shared/AlertMessage";
import CustomHeaderAlert from "../../components/shared/CustomHeaderAlert";
import businessCustomer from "../../protos/Customer_grpc_web_pb"
import grpcUrl from "../../components/constant";
import SweetAlertConfig from "../../SwalConfig";
import SweetAlertWrapper from "../../sweetAlert";

export default {
  components :{
      AlertMessage,
      CustomHeaderAlert
  },
  data(){
    return{
        showLoaderAddUser : false,
        showLoader : false,
        showLoaderTable : false,
        message : 'Create, Authorize, Update and View Users',
        status :'',
        responseMessage :'',
        responseMessageTable :'',
        dangerSuccess : 'danger',
        customerClients :{},
        addUser :{
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

        CreateNewUser() {
            try {
                this.responseMessage = ''
                this.$validator.validateAll().then((result) => {
                    if (result) {
                         const request = new businessCustomer.BusinessUserMessage()

                        this.sweetAlert.showDialogYesOrNo(Object.assign(SweetAlertConfig, {
                            title :'Create new user ?',
                            text :'',
                            confirmButtonText : 'Yes, create'
                        }), () => {


                            request.setCustomerid(this.addUser.emailaddress)
                            request.setFirstname(this.addUser.firstname)
                            request.setSurnamelastname(this.addUser.lastname)
                            request.setPostinglimitamount(this.addUser.postingLimitAmount)
                            request.setCaninitiatetransyesno(this.addUser.canInitiateTransYesNo)
                            request.setCanauthorizetransyesno(this.addUser.canAuthorizeTransYesNo)
                            request.setAuthlimitamount(this.addUser.authLimitAmount)
                            request.setMobilenumber(this.addUser.mobileNumber)
                            request.setCaninitiatecustomerservice(this.addUser.canInitiateCustomerService)
                            request.setCanauthorizecustomerservice(this.addUser.canAuthorizeCustomerService)
                            request.setLanguageid(this.$store.getters.getUserInfo.languageId)

                            console.log(" request : ", request)
                            this.showLoaderAddUser = true;
                            this.customerClients.createOtherBusinessUser(request, this.$store.getters.metadata, (err,res) => {
                            this.showLoaderAddUser = false
                                if(err) {
                                    console.log(" Error : ", err)
                                    this.responseMessage = grpcUrl.serverError
                                }
                                console.log("Response : ", res)
                                if(res.getIssuccess()) {
                                    this.GetMerchantUsersByStatus()
                                    this.$bvModal.hide("modal-lg")
                                    this.sweetAlert.showMessage("Create new user ", res.getMessage())
                                }
                                else {
                                    this.responseMessage = res.getMessage()
                                }
                            })
                        })


                    }
                });
            }catch (e) {
                console.log(" Error : ", e)
            }
        },
        GetMerchantUsersByStatus(){

            try {
               const request = new businessCustomer.BizUserSearchRequestMessage()

                request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                request.setUserstatus("PENDING")

               this.showLoaderTable = true;
                this.customerClients.getAllOtherBusinessUserByCustomer(request, this.$store.getters.metadata, (err,res) => {
                    this.showLoaderTable = false
                    if(err) {
                        console.log("Error : ", err)
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
                console.log(" Error : ", e)
            }
        },
        ApproveUser(data) {

            try {

                this.sweetAlert.showDialogYesOrNo(Object.assign(SweetAlertConfig, {
                    title :' Approve user ?',
                    confirmButtonText : 'Yes, approve'
                }), () => {

                    const request = new businessCustomer.BizUserToApproveMessage()
                    console.log(" Dta : ", data)
                    request.setCustomerid(data.customerId)
                    request.setFirstname(data.firstName)
                    request.setLanguageid(data.languageId)

                    this.showLoaderTable = true
                    this.customerClients.approveNewOtherBusinessUser(request, this.$store.getters.metadata , (err,res) => {
                        this.showLoaderTable = false;
                        if(err) {
                            console.log( " Error : ", err)
                            this.responseMessageStatus = grpcUrl.serverError
                        }
                        console.log(" response : ", res)
                        if (res.getIssuccess()) {
                            this.GetMerchantUsersByStatus()
                            this.sweetAlert.showMessage("Approve User ", res.getMessage())
                        }
                        else {

                            this.responseMessageStatus = res.getMessage()
                        }
                    })
                })

            }catch (e) {
                console.log(" Error : ", e)
            }
        },
        DisappoveUser(data){

            try {

                this.sweetAlert.showDialogYesOrNo(Object.assign(SweetAlertConfig, {
                    title :' Disapprove user ?',
                    confirmButtonText : 'Yes, disapprove'
                }), () => {

                    const request = new businessCustomer.BizUserToApproveMessage()
                    console.log(" Dta : ", data)
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
                            this.GetMerchantUsersByStatus()
                            this.sweetAlert.showMessage("Disapprove User ", res.getMessage())
                        }
                        else {

                            this.responseMessageStatus = res.getMessage()
                        }
                    })
                })

            }catch (e) {
                console.log(" Data : ", e)
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
      this.GetMerchantUsersByStatus()
      this.$store.dispatch('setAppHeader', {
      title: "Create User",
      items: [
        {
          text: "Dashboard",
          href: "#",
        },
        {
          text: "Create User",
          href: "/merchant/createuser",
        },
      ],
    })
  }

}
</script>

<style scoped>

</style>