<template>
      <div>
          <div class="row">
              <CustomHeaderAlert :message="message" />
          </div>
          <b-overlay :show="showLoaderExistingAccount" rounded="sm">
          <div class="row">

              <div class="col-12">
                    <div class="card">
                        <form @submit.prevent="GetExistingSourceAccount">
                        <div class="m-2">
                            <button class="btn btn-primary" id="bkcolor" type="submit" >
                                Get payment account
                            </button>
                        </div>
                        </form>
                    </div>
              </div>
          </div>
          </b-overlay>
          <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12">
                  <div class="card">
                      <div class="card-body">

                          <div class="col-md-6 col-sm-12 text-right" style="float: right !important;">
                              <a v-b-modal.payment-account class="btn btn-danger mb-2">
                                  <i class="mdi mdi-plus-circle mr-1"></i> Add payment account
                              </a>
                          </div>
                      <div class="col-md-6 col-sm-12">
                          <h4 class="header-title ">Search result</h4>
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
                                  </div>
                              </div>
                              <!-- Search -->
                              <div class="col-sm-12 col-md-6">
                                  <div
                                          id="tickets-table_filter"
                                          class="dataTables_filter text-md-right"
                                  >
                                      <label class="d-inline-flex align-items-center">
                                          Search :
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
                              <b-table
                                      :items="sourceaccountList"
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

                                  <template #cell(logourl)="data">
                                      <img
                                              :src="data.item.logourl"
                                              alt="contact-img"
                                              title="contact-img"
                                              class="avatar-sm rounded-circle img-thumbnail"
                                      />
                                  </template>
                                  <template #cell(status)="data">
                                      <span :class="{
                                        'text-success p-1': `${data.item.status}` === 'ACTIVE',
                                        'text-primary p-1' : `${data.item.status}` === 'PENDING'
                                      }" class="badge"> {{data.item.status}}</span>
                                  </template>

                                  <template #cell(actions)="data">
                                      <a class="text-danger mr-2" style="cursor: pointer" @click="DeleteSourceAccount(data.item)"> <i class="mdi mdi-trash-can"></i> Remove</a>
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
<!--                  Start modal-->
              <b-modal
                      id="payment-account"
                      title="Add payment account"
                      title-class="font-18"
                      class="p-4"
                      hide-footer>
                  <b-overlay :show="showLoader" rounded="sm">
                      <form @submit.prevent="AddSourceAccount" >
                          <AlertMessage :variant="dangerSuccess" :message="responseMessage" v-if="responseMessage"/>
                          <div class="form-group mb-3">
                              <label>Select country</label>
                              <multiselect
                                      id="countryname"
                                      name="countryname"
                                      v-model="sourcedata.countryname"
                                      v-validate="'required'"
                                      :options="AllCountries"
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
                                      v-model="sourcedata.accounttype"
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
                                      v-model="sourcedata.accountprovider"
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
                                              v-model="sourcedata.countrydialcode"
                                      />
                                      <span v-show="vErrors.has('countrydialcode')" class="help text-danger">{{ vErrors.first('countrydialcode') }}</span>
                                  </div>
                              </div>
                              <div class="col-lg-8 col-md-8">
                                  <div class="form-group mb-3">
                                      <label>Mobile number</label>
                                      <input  name="mobilenooraccountnumber" type="text" @change="GetCustomernamebyMobileNo(sourcedata.accountormobileno)"
                                              class="form-control"
                                              v-validate="'required|min:'+sourcedata.minlengthofmobileno+'|max:'+sourcedata.maxlengthofmobileno"
                                              :class="{'is-invalid': vErrors.has('accountormobileno') }"
                                              v-model="sourcedata.accountormobileno"
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
                                      v-model="sourcedata.accountormobileno"
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
                                          v-model="sourcedata.accountname"
                                  />
                                  <span v-show="vErrors.has('accountname')" class="help text-danger">{{ vErrors.first('accountname') }}</span>
                              </b-overlay>
                          </div>
                          <div class="row" v-if="accountstatus === 'Payment Card'">
                               <div class="col-md-4 col-sm-12">
                                   <div class="form-group mb-3">
                                       <label>Month</label>
                                       <select class="custom-select" v-model="paymentcard.month" name="month" id="month" v-validate="'required'" >
                                           <option value="" selected> Month (MM)</option>
                                           <option value="01">January</option>
                                           <option value="02"> February</option>
                                           <option value="03"> March</option>
                                           <option value="04"> April</option>
                                           <option value="05"> May</option>
                                           <option value="06"> June</option>
                                           <option value="07"> July</option>
                                           <option value="08"> August</option>
                                           <option value="09"> September</option>
                                           <option value="10"> October</option>
                                           <option value="11"> November</option>
                                           <option value="12"> December</option>
                                       </select>
                                       <span v-show="vErrors.has('month')" class="help text-danger">{{ vErrors.first('month') }}</span>
                                   </div>
                               </div>
                               <div class="col-md-4 col-sm-12">
                                   <div class="form-group mb-3">
                                       <label>Year</label>
                                       <select class="custom-select" v-model="paymentcard.year" name="year" id="year" v-validate="'required'" >
                                           <option value="" selected>Year</option>

                                           <option v-for="year in years" :value="year" :key="year"> {{year}}</option>
                                       </select>
                                       <span v-show="vErrors.has('year')" class="help text-danger">{{ vErrors.first('year') }}</span>
                                   </div>
                               </div>
                               <div class="col-md-4 col-sm-12">
                                   <div class="form-group mb-3">
                                       <label>Cvv</label>
                                       <input  type="text"
                                               name="Cvv" class="form-control" placeholder="Cvv"
                                               v-validate="'required|min:3|max:3'"
                                               v-model="paymentcard.cvv"
                                               :class="{'is-invalid': vErrors.has('cvv') }"
                                       />
                                       <span v-show="vErrors.has('cvv')" class="help text-danger">{{ vErrors.first('cvv') }}</span>
                                   </div>
                               </div>
                          </div>


                          <div class="form-group mb-3" v-if="otpmessage">
                              <label >{{otpmessage}}</label>

                                  <input  type="text"
                                          name="otp" class="form-control" placeholder="enter otp"
                                          v-validate="'required'"

                                          :class="{'is-invalid': vErrors.has('otp') }"
                                          v-model="sourcedata.otp"
                                  />
                                  <span v-show="vErrors.has('otp')" class="help text-danger">{{ vErrors.first('otp') }}</span>
                          </div>

                          <div class="form-group mb-0 text-center">
                              <button class="btn btn-primary btn-block" id="bkcolor" type="submit">
                                  Submit
                              </button>
                          </div>

                      </form>
                  </b-overlay>
              </b-modal>

              <b-modal
                      id="card-verification"
                      size="lg"
                      title=""
                      title-class="font-18"
                      hide-footer>

                  <div class="col-lg-12">
                      <div class="row">
                          <div class="col-lg-12">
                              <div class="row" style="height: 26rem !important; ">
                                  <div class="col-12"  v-html="cardResponse.redirectOtpurl" >
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>
              </b-modal>
          </div>
      </div>
</template>

<script>

    import moneytransfer from '../../protos/EganowMoneyTransfer_grpc_web_pb'
    import Constant from '../../components/constant/index'
    import grpcUrl from "../../components/constant";
    import Multiselect from "vue-multiselect";
    import commons from "../../protos/CommonData_grpc_web_pb";
    import SweetAlertWrapper from "../../sweetAlert";
    import moneyTransfer from "../../protos/EganowMoneyTransfer_grpc_web_pb";
    import SweetAlertConfig from "../../SwalConfig";

    export default {
      data() {
          return {
              striped : true,
              responseMessage : '',
              otpmessage :'',
              message : 'Manage payment accounts',
              sourceaccountList : [],
              showLoaderExistingAccount : false,
              clients : {},
              commonclients : {},
              showLoader : false,
              showLoaderCustomerName : false,
              showLoaderTable : false,
              dangerSuccess: 'danger',
              listofsourceaccounttypes : [],
              AllCountries : [],
              AccountProviders :[],
              AccountTypes : [],
              accountstatus : '',
               sourcedata :{
                   countryname :'',
                   accounttype :'',
                   countrycode :'',
                   accountprovider :'',
                   paypartnerserviceid :'',
                   accountormobileno :'',
                   accountname :'',
                   countrydialcode:'',
                   groupcode :'',
                   currencyiso: '',
                   otp:'',
                   minlengthofmobileno :'',
                   maxlengthofmobileno : ''

               },
              paymentcard : {
                month:'',
                year:'',
                cvv:''
              },
              cardResponse :{
                  redirectOtpurl : ''
              },
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
                      label:"Logo ",
                      key: "logourl",
                      sortable: true,
                  },
                  {
                      label:"Account number",
                      key: "displaysourceno",
                      sortable: true,
                  },
                  {
                      label: "Account name",
                      key: "sourceaccountname",
                      sortable: true,
                  },
                  {
                      label: "Currency",
                      key: "currencyiso",
                      sortable: true,
                  },
                  {
                      label: "Status",
                      key: "status",
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
          Multiselect
        },
        methods : {
            GetSenderCountryList() {
                let request = new commons.EmptyCommonDataMessage()

                this.commonclients.getSenderAllCountries(request, this.$store.getters.metadata, (err,res) => {

                    if(res) {
                        this.AllCountries = res.getCountrylistList()
                    }
                })
            },
            GetPaypartnerServiceId(selectedAccountprovider) {
                console.log(" my data : ", this.sourcedata)
                this.sourcedata.paypartnerserviceid = selectedAccountprovider.getPaypartnerserviceid()
            },
            GetAccountProvidersBySelectedAccountType(accounttypeSelected) {

                try {


                    this.accountstatus = accounttypeSelected.getAppname()
                     console.log(" Selected account ype : ", this.accountstatus)
                    this.sourcedata.accounttype = accounttypeSelected.getAppname()
                    this.sourcedata.groupcode = accounttypeSelected.getPaypartnergroupid()
                    console.log(" Group code : ",accounttypeSelected.getPaypartnergroupid())
                    this.AccountProviders = []
                    this.AccountProviders = this.AllAccountProviders.filter( x => x.getPaypartnergroupid() === accounttypeSelected.getPaypartnergroupid())

                }catch (e) {
                    console.log(" Error : ", e)
                }
            },
            DeleteSourceAccount(data){

                try {
                    this.sweetAlert.showDialogYesOrNo(Object.assign(SweetAlertConfig, {
                        title :'Remove payment account ?',
                        confirmButtonText : 'Yes, remove'
                    }), () => {

                        const request = new commons.DeleteAccountMessage();
                        request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                        request.setAccountnumber(data.sourceaccountno)
                        request.setSource1orbeneficiary2("1")

                        this.showLoaderTable = true
                        this.commonclients.deleteCustomerPaymentAndBeneficiaryAccount(request, this.$store.getters.metadata, (err,res) => {
                            this.showLoaderTable = false
                            if(err) {
                                console.log(" Error : ", err)
                            }
                            if(res.getIssuccess()) {
                                this.GetExistingSourceAccount()
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

                try {
                    this.sourcedata.country = countrySelected.getCountryname()
                    console.log(" Country name : ", this.sourcedata.country)
                    this.sourcedata.countrycode = countrySelected.getCountrycode()
                    this.sourcedata.countrydialcode =countrySelected.getCountrydialcode()
                    this.sourcedata.currencyiso = countrySelected.getCurrencyiso()

                    this.GetAccountTypes(countrySelected.getCountrycode())
                    this.sourcedata.minlengthofmobileno = countrySelected.getMobilenominlen() - countrySelected.getCountrydialcode().length
                    this.sourcedata.maxlengthofmobileno = countrySelected.getMobilenomaxlen() - countrySelected.getCountrydialcode().length
                    // console.log(" Min length : ", + this.addben.minlengthofmobileno)
                }catch (e) {
                     console.log( " Error : ", e)
                }

            },
            GetExistingSourceAccount(){

                 try {
                     this.showLoaderExistingAccount = true
                      this.GetExistingCustomerListByCustomerId()
                     this.showLoaderExistingAccount = false
                 } catch (e) {
                     console.log(" Existing account :", e)
                 }
            },
            GetCustomernamebyMobileNo(number) {
                try {
                    console.log(" group code : ", this.sourcedata.groupcode)
                    if(this.sourcedata.groupcode === 1) {
                        if(this.sourcedata.minlengthofmobileno >= number.length) {
                            const request = new moneyTransfer.MerchantCustomerAccountNoRequestMessage()
                            request.setCountrycode(this.sourcedata.countrycode)
                            request.setCustomeracctno(this.sourcedata.countrydialcode+""+number)
                            request.setMerchantserviceid(this.sourcedata.paypartnerserviceid)
                            request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                            console.log(" Customer number : ", this.sourcedata.countrydialcode+""+number)
                            this.showLoaderCustomerName = true
                            this.clients.getMerchantCustomerKyc(request,this.$store.getters.metadata, (err,res) => {
                                this.showLoaderCustomerName = false
                                if(err) {
                                    console.log(" Customer KYC erro : ", err)
                                }

                                if(res.getIssuccess()) {
                                    this.sourcedata.otp = ''
                                    this.GeneratePaymentAccountOtp()
                                    this.sourcedata.accountname = res.getCustomername()
                                }
                            })
                        }
                    }

                }catch (e) {
                    this.showLoaderCustomerName = false
                    console.log(" Error : ", e)
                }

            },
            GetAccountTypes(countrycode) {

                try {
                    let request = new commons.CountryRequestMessage()

                    request.setCountrycode(countrycode)
                    request.setLanguageid(this.$store.getters.getUserInfo.languageId)

                    this.commonclients.getPaymentTypeForSourceAccountsForSelectedCountry(request,this.$store.getters.metadata, (err , res) => {

                        if(res) {

                            this.AccountTypes = res.getPaymenttypeslistList();
                            this.AllAccountProviders = res.getPaymenttypesandsvclistList();
                        }
                    })

                } catch (e) {
                    console.log(" error : ", e)
                }

            },
            GeneratePaymentAccountOtp(){

                try {

                    const request = new commons.OTPTransRequestMessage()

                    request.setMobilenoorbankormerchantaccountno(this.sourcedata.countrydialcode+""+this.sourcedata.accountormobileno)
                    request.setPaypartnerserviceid(this.sourcedata.paypartnerserviceid)
                    request.setPaypartnergroupcode(this.sourcedata.groupcode)
                    request.setCountrycode(this.sourcedata.countrycode)
                    request.setLanguageid(this.$store.getters.getUserInfo.languageId)

                    this.showLoaderCustomerName = true
                    this.commonclients.createOTPForAddingSourceAccountNo(request, this.$store.getters.metadata, (err, res) => {
                        this.showLoaderCustomerName = false
                        if (err) {
                            console.log(" Error : ", err)
                        }

                        if (res.getIssuccess() || res.getRegistrationerrorcode() === 'OTPSENT') {
                           this.otpmessage = res.getMessage();
                        }
                        else {
                            this.responseMessageMomo = res.getMessage()
                        }

                    })

                } catch(e) {
                    console.log(" Error : ", e)
                }
            },
            AddSourceAccount(){

                try {

                    this.$validator.validateAll().then((result) => {
                            if (result) {


                                this.sweetAlert.showDialogYesOrNo(Object.assign(SweetAlertConfig, {
                                    title: 'Add payment account ?',
                                    confirmButtonText: 'Yes, add'
                                }), () => {
                                   console.log(" group code : ",this.sourcedata.groupcode)
                                    if(this.sourcedata.groupcode === 3) {
                                      const cardRequest = new moneyTransfer.CustomerSourceAcctCardRequestMessage();
                                      cardRequest.setMobileorweb("WEB")
                                      cardRequest.setCountrycode(this.sourcedata.countrycode)
                                      cardRequest.setCvv(this.paymentcard.cvv)
                                      cardRequest.setNameoncard(this.sourcedata.accountname)
                                      cardRequest.setExpirydatemonth(parseInt(this.paymentcard.month))
                                      cardRequest.setExpirydateyear(parseInt(this.paymentcard.year.toString().substr(-2)))
                                      cardRequest.setCardnumber(this.sourcedata.accountormobileno)
                                      cardRequest.setLanguageid(this.$store.getters.getUserInfo.languageId)
                                        this.showLoader = true
                                        this.clients.addCustomerCardSourceAccount(cardRequest, this.$store.getters.metadata, (err, res) => {

                                            this.showLoader = false
                                            if (err) {
                                                console.log(" Error : ", err)
                                            }
                                            if (res.getIssuccess()) {
                                                console.log(" Source account added : ", res.getMessage())

                                                this.$bvModal.hide("modal-lg")
                                                this.cardResponse.redirectOtpurl = res.getRedirectotpurl()
                                                this.cardResponse.redirectOtpurl.replace(/"/g, '\\"')
                                                console.log("Card redirected url  : ",res.getRedirectotpurl())

                                                setTimeout(() => {
                                                    var e = document.getElementById("redirectTo3ds1Form");

                                                    if (e) {

                                                        e.submit();
                                                        if (e.parentNode !== null) {
                                                            e.parentNode.removeChild(e);
                                                        } }
                                                }, 500)
                                                this.$bvModal.show('card-verification')

                                                this.GetExistingCustomerListByCustomerId()
                                                this.showsourceGenerateOtpLoader = false

                                             //   this.sweetAlert.showMessage("Payment account ", res.getMessage())

                                            } else {
                                                this.responseMessage = res.getMessage()
                                            }

                                        })
                                    }

                                    else{


                                        const request = new moneyTransfer.CustomerSourceAcctRequestMessage()

                                        request.setCountrycode(this.sourcedata.countrycode)
                                        request.setCurrencyiso(this.sourcedata.currencyiso)
                                        request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                                        request.setOtpvalue(this.sourcedata.otp)
                                        request.setPaypartnerserviceid(this.sourcedata.paypartnerserviceid)
                                        request.setSourceaccountno(this.sourcedata.countrydialcode + "" + this.sourcedata.accountormobileno)
                                        request.setSourceaccountname(this.sourcedata.accountname)
                                        request.setPaypartnergroupcode(this.sourcedata.groupcode)

                                        // console.log("  adding payment request : ", request)
                                        this.showLoader = true
                                        this.clients.addCustomerMomoBankAndMerchantSourceAccount(request, this.$store.getters.metadata, (err, res) => {
                                            this.showLoader = false
                                            if (err) {
                                                console.log(" Error : ", err)
                                            }
                                            if (res.getIssuccess()) {
                                                console.log(" Source account added : ", res.getMessage())
                                                this.$bvModal.hide("modal-lg")
                                                this.GetExistingCustomerListByCustomerId()
                                                this.showsourceGenerateOtpLoader = false

                                                this.sweetAlert.showMessage("Payment account ", res.getMessage())

                                            } else {
                                                this.responseMessage = res.getMessage()
                                            }
                                        })
                                    }


                                })
                            }
                    });

                }catch (e) {
                    console.log(" Error : ", e)
                }
            },
            GetExistingCustomerListByCustomerId() {

                 try {

                     const request = new moneytransfer.CustomerExistingSourceAccountsRequestMessage();
                       request.setCustomerid(this.$store.getters.getUserInfo.customerId)
                     this.clients.getCustomerExistingSourceAccountListForView(request, this.$store.getters.metadata, (err, res) => {

                         if(err) {
                             console.log("From server source payment list Error : ", err)
                         }

                         if(res) {
                             this.sourceaccountList = [];
                              res.getCustexistingaccountsList().forEach((data) => {

                                   this.sourceaccountList.push({
                                       sourceaccountno : data.getSourceaccountno(),
                                       sourceaccountname : data.getSourceaccountname(),
                                       currencyiso : data.getCurrencyiso(),
                                       displaysourceno : data.getDisplaysourceaccountno(),
                                       paypartnerid : data.getPaypartnerid(),
                                       paypartnerserviceid : data.getPaypartnerserviceid(),
                                       paypartnerservicename : data.getPaypartnerservicename(),
                                       paypartnerTtypeid : data.getPaypartnertypeid(),
                                       logourl : data.getLogourl(),
                                       status : data.getSourceaccountstatus()
                                   })
                              })
                         }

                     })


                 }catch (e) {
                     console.log(" Manage source list Error : ", e)
                 }
            },
            onFiltered(filteredItems) {
                // Trigger pagination to update the number of buttons/pages due to filtering
                this.totalRows = filteredItems.length;
                this.currentPage = 1;
            }
        },
        created() {

            this.clients = new moneytransfer.EganowMoneyTransferSvcClient(Constant.URL, null,null)
            this.commonclients = new commons.CommonDataSvcClient(grpcUrl.URL,null,null)
            this.GetSenderCountryList()
            this.GetExistingCustomerListByCustomerId()
            this.sweetAlert = new SweetAlertWrapper()
            this.$store.dispatch('setAppHeader', {
                title: "Manage source account",
                items: [
                        {
                            text: "Dashboard",
                            href: "#",
                        },
                        {
                            text: "Manage payment account",
                            href: "#",
                        },
                ],
            })
        },
        computed:{
            rows() {
                return this.sourceaccountList.length;
            },
            years () {
                const year = new Date().getFullYear() +10
                return Array.from({length: year - new Date().getFullYear()}, (value, index) => new Date().getFullYear() + index)
            },
        }
    }
</script>

<style >
    #redirectTo3ds1AcsSimple {
        height: 100%;
    }
</style>