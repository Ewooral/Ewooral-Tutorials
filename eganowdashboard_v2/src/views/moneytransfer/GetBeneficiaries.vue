<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <b-overlay :show="showLoader" rounded="sm">
                                    <form @submit.prevent="GetBeneficiaryListByCountryCodeAndGroupCode">
                                        <div class="row mb-3">
                                            <div class="col-lg-5 col-md-5">
                                                <label>Select Country </label>
                                                <multiselect
                                                        id="countrycode"
                                                        name="countrycode"
                                                        v-model="searchben.countrycode"
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

                                            <div class="col-lg-5 col-md-5">

                                                <label>Select account type </label>
                                                <multiselect

                                                        name="country"
                                                        v-model="searchben.groupcode"
                                                        v-validate="'required'"
                                                        :options="listofsourceaccounttypes"
                                                        :searchable="true"
                                                        @select="GetGroupCodeByCountryCode($event)"
                                                        :class="{'is-invalid': vErrors.has('country') }" >
                                                    <template slot="singleLabel" slot-scope="props" class="p-0 m-0">
                                                        <span class="option__title pl-1">{{ props.option.getAppname() }}</span>
                                                    </template>
                                                    <template slot="option" slot-scope="{ option }" class="h-25 w-25">
                                                        {{ option.getAppname() }}
                                                    </template>
                                                </multiselect>
                                                <span v-show="vErrors.has('customerStatus')" class="help text-danger">{{ vErrors.first('customerStatus') }}</span>
                                            </div>
                                            <div class="col-lg-2 col-md-2">
                                                <div class="form-group mb-3">
                                                    <label class="mb-3"></label>
                                                    <button class="btn btn-primary btn-block" id="bkcolor" type="submit" >
                                                        Get benficiaries
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
                        <div style="float: right !important;">
                            <a v-b-modal.modal-lg class="btn btn-danger mb-2"
                            ><i class="mdi mdi-plus-circle mr-1"></i> Add Recipient</a>
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
                        <div class="table-responsive mb-0" id="table">
                            <b-table
                                    :items="beneficiariesList"
                                    :fields="tableFields"
                                    :striped="striped"
                                    responsive="sm"
                                    :per-page="perPage"
                                    :current-page="currentPage"
                                    :sort-by.sync="sortBy"
                                    :sort-desc.sync="sortDesc"
                                    :filter="filter"
                                    :filter-included-fields="filterOn"
                                    @filtered="onFiltered"
                            >


                                <template #cell(logourl)="data">
                                    <img
                                            :src="data.item.logourl"
                                            alt="contact-img"
                                            title="contact-img"
                                            class="avatar-sm rounded-circle img-thumbnail"
                                    />
                                </template>

                                <template #cell(actions)="data">
                                    <a class="text-danger mr-2" style="cursor: pointer" @click="DeleteBeneficairy(data.item)"> <i class="mdi mdi-trash-can"></i> Delete</a>
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
            <!--    Start modal    -->
            <b-modal
                    id="modal-lg"
                    title="Add recipient"
                    title-class="font-18"
                    class="p-4"
                    hide-footer>
                <b-overlay :show="showLoaderAddben" rounded="sm">
                    <form @submit.prevent="AddBeneficiary" >
                        <AlertMessage :variant="dangerSuccess" :message="responseMessage" v-if="responseMessage"/>
                        <div class="form-group mb-3">
                            <label>Select country</label>
                            <multiselect
                                    id="countryname"
                                    name="countryname"
                                    v-model="addben.countryname"
                                    v-validate="'required'"
                                    :options="OperatingCountries"
                                    :searchable="true"
                                    @select="GetCountryCodeForSelectedCountry($event)"
                                    :class="{'is-invalid': vErrors.has('countryname') }" >
                                <template slot="singleLabel" slot-scope="props" class="p-0 m-0">
                                    <img style="width: 20px !important; height: 20px !important; padding: 0px !important; margin: 0px !important;" :src="props.option.getCountryflagurl()" alt=""><span class="option__desc">
                                    <span class="option__title pl-1">{{ props.option.getCountryname() }}</span></span>
                                </template>
                                <template slot="option" slot-scope="{ option }" class="h-25 w-25">
                                    <img style="width: 30px !important; height: 30px !important;" :src="option.getCountryflagurl()"> {{ option.getCountryname() }}
                                </template>
                            </multiselect>
                            <span v-show="vErrors.has('countryname')" class="help text-danger">{{ vErrors.first('countryname') }}</span>
                        </div>
                        <div class="form-group mb-3">
                            <label>Select account type</label>
                            <multiselect
                                    id="countrytype"
                                    name="accounttype"
                                    v-model="addben.accounttype"
                                    v-validate="'required'"
                                    :options="AccountTypes"
                                    :searchable="true"
                                    @select="GetAccountProvidersBySelectedAccountType($event)"
                                    :class="{'is-invalid': vErrors.has('accounttype') }" >
                                <template slot="singleLabel" slot-scope="props" class="p-0 m-0">
                             <span class="option__desc">
                                   <span class="option__title pl-1">{{ props.option.getAppname() }}</span>
                             </span>
                                </template>
                                <template slot="option" slot-scope="{ option }" class="h-25 w-25">
                                    {{ option.getAppname() }}
                                </template>

                            </multiselect>
                            <span v-show="vErrors.has('accounttype')" class="help text-danger">{{ vErrors.first('accounttype') }}</span>
                        </div>
                        <div class="form-group mb-3">
                            <label>Select account provider</label>
                            <multiselect
                                    name="accountprovider"
                                    v-model="addben.accountprovider"
                                    v-validate="'required'"
                                    :options="AccountProviders"
                                    :searchable="true"
                                    @select="GetPaypartnerServiceId($event)"
                                    :class="{'is-invalid': vErrors.has('accountprovider') }" >
                                <template slot="singleLabel" slot-scope="props" class="p-0 m-0">
                             <span class="option__desc">
                                 <img style="width: 20px !important; height: 20px !important; padding: 0px !important; margin: 0px !important;" :src="props.option.getLogourl()" alt="">
                                 <span class="option__desc">
                                   <span class="option__title pl-1">{{ props.option.getPaypartnerservicename() }}</span>
                                 </span>
                             </span>
                                </template>
                                <template slot="option" slot-scope="{ option }" class="h-25 w-25">
                                    <img style="width: 30px !important; height: 30px !important;" :src="option.getLogourl()">  {{ option.getPaypartnerservicename() }}
                                </template>

                            </multiselect>
                            <span v-show="vErrors.has('accountprovider')" class="help text-danger">{{ vErrors.first('accountprovider') }}</span>
                        </div>
                        <div class="row" v-if="accountstatus === 'Mobile Money'">
                            <div class="col-lg-4 col-md-4">
                                <div class="form-group mb-3">
                                    <label>Country code</label>
                                    <input  name="countrydialcode" type="text" readonly
                                            class="form-control"
                                            v-validate="'required'"
                                            :class="{'is-invalid': vErrors.has('countrydialcode') }"
                                            v-model="addben.countrydialcode"
                                    />
                                    <span v-show="vErrors.has('countrydialcode')" class="help text-danger">{{ vErrors.first('countrydialcode') }}</span>
                                </div>
                            </div>
                            <div class="col-lg-8 col-md-8">
                                <div class="form-group mb-3">
                                    <label>Mobile number</label>
                                    <input  name="mobilenooraccountnumber" type="text" @change="GetCustomernamebyMobileNo(addben.accountormobileno)"
                                            class="form-control"
                                            v-validate="'required|min:'+addben.minlengthofmobileno+'|max:'+addben.maxlengthofmobileno"
                                            :class="{'is-invalid': vErrors.has('accountormobileno') }"
                                            v-model="addben.accountormobileno"
                                    />
                                    <span v-show="vErrors.has('accountormobileno')" class="help text-danger">{{ vErrors.first('accountormobileno') }}</span>

                                </div>

                            </div>
                        </div>
                        <div class="form-group mb-3" v-if="accountstatus !== 'Mobile Money'">
                            <label>Enter account number</label>

                            <input  name="accountormobileno" type="text"
                                    class="form-control"
                                    placeholder="Account number"
                                    v-validate="'required'"
                                    :class="{'is-invalid': vErrors.has('accountormobileno') }"
                                    v-model="addben.accountormobileno"
                            />
                            <span v-show="vErrors.has('accountormobileno')" class="help text-danger">{{ vErrors.first('accountormobileno') }}</span>


                        </div>
                        <div class="form-group mb-3">
                            <label>Account name</label>
                            <b-overlay :show="showLoaderCustomerName" rounded="sm">
                                <input  type="text"
                                        name="accountname" class="form-control" placeholder="account name"
                                        v-validate="'required'"

                                        :class="{'is-invalid': vErrors.has('accountname') }"
                                        v-model="addben.accountname"
                                />
                                <span v-show="vErrors.has('accountname')" class="help text-danger">{{ vErrors.first('accountname') }}</span>
                            </b-overlay>
                        </div>

                        <div class="form-group mb-0 text-center">
                            <button class="btn btn-primary btn-block" id="bkcolor" type="submit">
                                Submit
                            </button>
                        </div>

                    </form>
                </b-overlay>
            </b-modal>
        </div>
    </div>

</template>

<script>
import moneytransfer from '../../protos/EganowMoneyTransfer_grpc_web_pb'
import Constant from '../../components/constant/index'
import commons from "../../protos/CommonData_grpc_web_pb";
import grpcUrl from "../../components/constant";
import Multiselect from "vue-multiselect";
import SweetAlertConfig from "../../SwalConfig";
import SweetAlertWrapper from "../../sweetAlert";
//import AlertMessage from "../../components/shared/AlertMessage";
import moneyTransfer from "../../protos/EganowMoneyTransfer_grpc_web_pb";

export default {
    data(){
        return{
            AllCountries : [],
            striped : true,
            listofsourceaccounttypes : [],
            showLoaderAddben : false,
            addben : {
               countryname :'',
               countrycode :'',
               accounttype:'',
               accountprovider :'',
               paypartnerserviceid :'',
               accountormobileno :'',
               accountname :'',
               countrydialcode:'',
               groupcode :'',
                minlengthofmobileno :'',
                maxlengthofmobileno : ''
            },

            searchben : {
               countrycode :'',
               groupcode : ''
            },
            accountstatus : '',
            showLoader : false,
            showLoaderCustomerName : false,
            dangerSuccess: 'danger',
            responseMessage:'',
            clients : {},
            getbenlistGroupCode :'',
            getbenlistCountryCode:'',
            addbeforegetbenlist :'',
            commonclients :{},
            beneficiariesList : [],
            OperatingCountries : [],
            AccountTypes : [],
            AccountProviders :[],
            startDate:'',
            endDate:'',
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
                    label:"Logo",
                    key: "logourl",
                    sortable: true,
                },
                {
                    label:"Account number / Mobile number",
                    key: "displayAccountNo",
                    sortable: true,
                },
                {
                    label: "Account name",
                    key: "beneficiaryAccountName",
                    sortable: true,
                },
                {
                    key: "actions",
                    sortable: true,
                }
            ],
        }
    },
    components :{
      Multiselect,
        //AlertMessage
    },
    methods : {
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
        GetPaymentTypeForSenderBySelectedCountryCode(selectedsourcecountry){
            try {
                 //console.log(" Selected Country : ", selectedsourcecountry.getCountrycode())
                 this.searchben.countrycode = selectedsourcecountry.getCountrycode()
                 this.addben.countrycode = selectedsourcecountry.getCountrycode()
                 //console.log(" Search country code : ", this.searchben.countrycode)
                this.GetSendersAccountTypeListByCountryCode(selectedsourcecountry.getCountrycode())

            }catch (e) {
                console.log("Error : ", e)
            }
        },
        GetSendersAccountTypeListByCountryCode(countryCode) {
            try {
                const request = new commons.CountryRequestMessage()
                request.setCountrycode(countryCode)
                request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                this.showsourceCountryLoader = true
                this.commonclients.getPaymentTypeForSourceAccountsForSelectedCountry(request, this.$store.getters.metadata, (err,res) => {
                    this.showsourceCountryLoader = false
                    if(err) {
                        console.log(" Error : ", err)
                    }
                    if(res) {
                        this.listofsourceaccounttypes = []
                        this.listofsourceaccounttypes = res.getPaymenttypeslistList()
                    }
                })

                console.log(" Country code ")
            }catch (e) {
                console.log("Error : ", e)
            }
        },
        GetSenderCountryList() {
            let request = new commons.EmptyCommonDataMessage()

            this.commonclients.getSenderAllCountries(request, this.$store.getters.metadata, (err,res) => {

                if(res) {
                    this.AllCountries = res.getCountrylistList()
                }
            })
        },
        GetBeneficiaryListByCountryCodeAndGroupCode() {

            try {
                 const request = new moneytransfer.BeneficiaryListByPayPartnerRequestMessage()
                  console.log(" Country code :",this.searchben.countrycode )
                //this.addben.groupcode
                 console.log(" Add status : " , this.addbeforegetbenlist)
                 if(this.addbeforegetbenlist === 'add') {
                     this.getbenlistGroupCode = this.addben.groupcode
                     this.getbenlistCountryCode =this.addben.countrycode
                 }
                 else {
                     this.getbenlistGroupCode = this.searchben.groupcode.getPaypartnergroupid()
                     this.getbenlistCountryCode =this.searchben.countrycode.getCountrycode()
                 }
                 request.setCountrycode(this.getbenlistCountryCode)
                 request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                 request.setPaypartnergroupcode(this.getbenlistGroupCode)

                 this.showLoader = true
                this.clients.getCustomerBeficiaryListByPayPartnerId(request, this.$store.getters.metadata, (err,res) => {
                 this.showLoader = false
                    if(err) {
                        console.log(" Error : ", err)
                    }
                    if(res) {
                 this.beneficiariesList = []
                        res.getBeneficiarylistList().forEach((data) => {
                            this.beneficiariesList.push({
                                beneficiaryAccountName : data.getBeneficiaryaccountname(),
                                beneficiaryAccountNo : data.getBeneficiaryaccountno(),
                                displayAccountNo : data.getDisplayaccountno(),
                                payPartnerId : data.getPaypartnerid(),
                                payPartnerTypeId : data.getPaypartnertypeid(),
                                payPartnerName : data.getPaypartnername(),
                                payPartnerSymbol : data.getPaypartnersymbol(),
                                CurrencyIso : data.getCurrencyiso(),
                                CountryCode : data.getCountrycode(),
                                BankInstitutionName : data.getBankinstitutionname(),
                                BankInstitutionCode : data.getBankinstitutioncode(),
                                BankBranchName : data.getBankbranchname(),
                                BankBranchCode : data.getBankbranchcode(),
                                logourl : data.getLogourl()

                            })
                        })
                    }
                })

            } catch (e) {
                console.log("Error : ", e)
            }
        },
        GetCustomernamebyMobileNo(number) {
            try {

                if(this.addben.groupcode === 1) {
                    if(this.addben.minlengthofmobileno >= number.length) {
                        const request = new moneyTransfer.MerchantCustomerAccountNoRequestMessage()
                        request.setCountrycode(this.addben.countrycode)
                        request.setCustomeracctno(this.addben.countrydialcode+""+number)
                        request.setMerchantserviceid(this.addben.paypartnerserviceid)
                        request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                        console.log(" Customer number : ", this.addben.countrydialcode+""+number)
                        this.showLoaderCustomerName = true
                        this.clients.getMerchantCustomerKyc(request,this.$store.getters.metadata, (err,res) => {
                            this.showLoaderCustomerName = false
                            if(err) {
                                console.log(" Customer KYC erro : ", err)
                            }

                            if(res.getIssuccess()) {
                                console.log(" Customer name : ", res.getCustomername())
                                this.addben.accountname = res.getCustomername()
                            }
                        })
                    }
                }

            }catch (e) {
                this.showLoaderCustomerName = false
                console.log(" Error : ", e)
            }

        },
        AddBeneficiary() {
             try {
                 console.log("data : ", this.addben)
                 this.searchben.groupcode = 1;
                 this.searchben.countrycode = 'TEST'
                 this.$validator.validateAll().then((result) => {
                         if (result) {

                             this.sweetAlert.showDialogYesOrNo(Object.assign(SweetAlertConfig, {
                                 confirmButtonText : 'Yes, add'
                             }), () => {


                                 const request = new moneytransfer.CustomerBeneficiaryAcctRequestMessage();
                                 request.setCountrycode(this.addben.countrycode)
                                 request.setCustomerid(this.$store.getters.getUserInfo.customerId)
                                 console.log(" Customer number : ", this.addben.countrydialcode +""+this.addben.accountormobileno)
                                  console.log("Group code : ", this.addben.groupcode)
                                 request.setBeneficiaryaccountno( this.accountstatus === "Mobile Money" ? this.addben.countrydialcode +""+this.addben.accountormobileno : this.addben.accountormobileno)
                                 request.setBeneficiaryaccountname(this.addben.accountname)
                                 request.setPaypartnergroupcode(this.addben.groupcode)
                                 request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                                 console.log(" Service number : ", this.addben.paypartnerserviceid)
                                 request.setPaypartnerserviceid(this.addben.paypartnerserviceid)
                                 this.showLoaderAddben = true
                                 this.clients.addCustomerBeneficiaryAccount(request, this.$store.getters.metadata, (err,res) => {
                                     this.showLoaderAddben = false
                                     if(err) {
                                         console.log(" Error : ", err)
                                     }

                                     if(res.getIssuccess()) {
                                         this.$bvModal.hide("modal-lg")
                                         this.addbeforegetbenlist ='add'

                                         this.GetBeneficiaryListByCountryCodeAndGroupCode()
                                         this.sweetAlert.showMessage("Beneficiary ", res.getMessage())
                                     }
                                     else {
                                         this.responseMessage = res.getMessage()
                                     }
                                 } )

                             })

                         }
                 });

             }catch (e) {
                 console.log(" Error : ", e)
             }
        },
        GetPaypartnerServiceId(selectedAccountprovider) {
           console.log(" my data : ", this.addben)
             this.addben.paypartnerserviceid = selectedAccountprovider.getPaypartnerserviceid()
        },
        GetBeneficiaryCountryList() {
             try {

                 let request = new commons.EmptyCommonDataMessage()

                 this.commonclients.getReceivingOperatingCountries(request, this.$store.getters.metadata, (err,res) => {

                     if(res) {
                         this.OperatingCountries = res.getCountrylistList()
                     }

                 })
             }catch (e) {
                 console.log("Error : ", e)
             }
        },
        GetRecipientAccountType(countrycode) {

            try {
                let request = new commons.CountryRequestMessage()

                request.setCountrycode(countrycode)
                request.setLanguageid(this.$store.getters.getUserInfo.languageId)

                this.commonclients.getPaymentTypeForBeneficiaryAccountsForSelectedCountry(request,this.$store.getters.metadata, (err , res) => {

                    if(res) {

                        this.AccountTypes = res.getPaymenttypeslistList();
                        this.AllAccountProviders = res.getPaymenttypesandsvclistList();
                    }
                })

            } catch (e) {
                console.log(" error : ", e)
            }

        },
        DeleteBeneficairy(data){
            console.log(" Beneficiary id : ", data.displayAccountNo)
            try {
                this.sweetAlert.showDialogYesOrNo(Object.assign(SweetAlertConfig, {
                    title :'Remove beneficiary account ?',
                    confirmButtonText : 'Yes, remove'
                }), () => {

                    const request = new commons.DeleteAccountMessage();
                    request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                    request.setAccountnumber(data.beneficiaryAccountNo)
                    request.setSource1orbeneficiary2("2")

                    this.showLoaderTable = true
                    this.commonclients.deleteCustomerPaymentAndBeneficiaryAccount(request, this.$store.getters.metadata, (err,res) => {
                        this.showLoaderTable = false
                        if(err) {
                            console.log(" Error : ", err)
                        }
                        if(res.getIssuccess()) {
                             this.GetBeneficiaryListByCountryCodeAndGroupCode()
                             this.sweetAlert.showMessage("Payment account ", res.getMessage())
                        }
                        else {

                            this.responseMessage = res.getMessage()
                        }
                    } )

                })
            }catch (e){
                this.showLoaderTable = false
                console.log("Delete source account Error : ", e)
            }
        },
        GetCountryCodeForSelectedCountry(countrySelected) {
            this.addben.country = countrySelected.getCountryname()
            console.log(" Country name : ", this.addben.country)
            this.addben.countrycode = countrySelected.getCountrycode()
            this.addben.countrydialcode =countrySelected.getCountrydialcode()

            this.GetRecipientAccountType(countrySelected.getCountrycode())
            this.addben.minlengthofmobileno = countrySelected.getMobilenominlen() - countrySelected.getCountrydialcode().length
            this.addben.maxlengthofmobileno = countrySelected.getMobilenomaxlen() - countrySelected.getCountrydialcode().length
           // console.log(" Min length : ", + this.addben.minlengthofmobileno)
        },
        GetAccountProvidersBySelectedAccountType(accounttypeSelected) {

            try {

                this.accountstatus = accounttypeSelected.getAppname()
                this.addben.accounttype = accounttypeSelected.getAppname()
                this.addben.groupcode = accounttypeSelected.getPaypartnergroupid()
                 console.log(" Group code : ",accounttypeSelected.getPaypartnergroupid())
                this.AccountProviders = []
                this.AccountProviders = this.AllAccountProviders.filter( x => x.getPaypartnergroupid() === accounttypeSelected.getPaypartnergroupid())
                 console.log(" All provivers : ",  this.AccountProviders)
            }catch (e) {
                console.log(" Error : ", e)
            }
        },
        GetGroupCodeByCountryCode(selectedCountry){

             try {
                 console.log(" Selected country : ", selectedCountry)
                 this.searchben.groupcode = selectedCountry.getPaypartnergroupid()
                 console.log(" Group code : ", selectedCountry.getPaypartnergroupid())

             }catch (e) {
                 console.log("Error : ", e)
             }
        }
    },
    computed:{
        rows() {
            return this.beneficiariesList.length;
        },
    },
  created() {
   this.clients = new moneytransfer.EganowMoneyTransferSvcClient(Constant.URL, null,null)
      this.commonclients = new commons.CommonDataSvcClient(grpcUrl.URL,null,null)
      this.GetSenderCountryList()
      this.sweetAlert = new SweetAlertWrapper()
      //this.GetBeneficiariesByCustomerID()
      this.GetBeneficiaryCountryList()
    this.$store.dispatch('setAppHeader', {
      title: "Get beneficiaries",
      items: [
        {
          text: "Dashboard",
          href: "#",
        },
        {
          text: "Get beneficiaries",
          href: "#",
        },
      ],
    })
  }
}
</script>

<style scoped>

</style>