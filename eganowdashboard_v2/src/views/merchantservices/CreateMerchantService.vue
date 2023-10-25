<template>
    <div class="row">
      <CustomHeaderAlert :message="message" />
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
<!--            <h4 class="header-title mb-4">Tabs Bordered Justified</h4>-->
            <form @submit.prevent="CreateMerchantService"  ref="ClearMerchantsData">
            <b-tabs justified nav-class="nav-tabs nav-bordered" v-model="tabIndex">
              <b-tab title="Create Merchant Account" active>
                <form @submit.prevent="ValidateMerchantAccount" ref="ClearMerchantAccount" >
                  <div class="row">
                    <div class="col-lg-6">
                      <div>
                        <div class="form-group mb-3">
                          <label>Merchant symbol</label>
                          <input id="merchantSymbol" name="merchantSymbol" type="text"
                                 class="form-control" placeholder="merchant symbol: 6 digit alpha numeric. example : EGANOW"
                                 v-validate="'required|min:6|max:6'"
                                 :class="{'is-invalid': vErrors.has('merchantSymbol') }"
                                 v-model="merchantService.merchantSymbol"
                          />
                          <span v-show="vErrors.has('merchantSymbol')" class="help text-danger">{{ vErrors.first('merchantSymbol') }}</span>
                        </div>
                        <div class="form-group mb-3">
                          <label>Select regulator</label>
                          <select class="custom-select" v-model="merchantService.regulator" name="regulator" id="regulator" v-validate="'required'" >
                            <option :value="reg.getRegulatorid()" v-for="reg in regulators" :key="reg.getRegulatorid()">{{ reg.getRegulatorname() }}</option>
                          </select>
                          <span v-show="vErrors.has('regulator')" class="help text-danger">{{ vErrors.first('regulator') }}</span>
                        </div>
                        <div class="form-group mb-3">
                          <label>Issue date</label>
                          <date-picker v-model="merchantService.issueDate" :first-day-of-week="1" name="issueDate" lang="en"
                                       v-validate="'required'"
                          />
                          <span v-show="vErrors.has('issueDate')" class="help text-danger">{{ vErrors.first('issueDate') }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div>
                        <div class="form-group mb-3">
                          <label>Merchant name</label>
                          <input id="merchantName" type="text"
                                 name="merchantName" class="form-control" placeholder="Merchant name"
                                 v-validate="'required'"
                                 :class="{'is-invalid': vErrors.has('merchantName') }"
                                 v-model="merchantService.merchantName"
                          />
                          <span v-show="vErrors.has('merchantName')" class="help text-danger">{{ vErrors.first('merchantName') }}</span>
                        </div>

                        <div class="form-group mb-3">
                           <div class="row">
                             <div class="col-lg-6 col-md-6">
                               <label>License number</label>
                               <input id="licenseNo" type="text"
                                      name="licenseNo" class="form-control" placeholder="License number" v-validate="'required'"
                                      v-model="merchantService.licenseNo"
                                      :class="{'is-invalid': vErrors.has('licenseNo') }"
                               />
                               <span v-show="vErrors.has('licenseNo')" class="help text-danger">{{ vErrors.first('licenseNo') }}</span>
                             </div>
                             <div class="col-lg-6 col-md-6">
                               <label>TIN</label>
                               <input id="tin" type="text"
                                      name="tin" class="form-control" placeholder="TIN" v-validate="'required'"
                                      v-model="merchantService.tin"
                                      :class="{'is-invalid': vErrors.has('tin') }"
                               />
                               <span v-show="vErrors.has('tin')" class="help text-danger">{{ vErrors.first('tin') }}</span>
                             </div>
                           </div>

                        </div>
                        <div class="form-group mb-3">
                          <label>Expiry Date</label>
                          <date-picker v-model="merchantService.expiryDate" name="expiryDate" :first-day-of-week="1" lang="en"
                                       v-validate="'required'"
                          />
                          <span v-show="vErrors.has('expiryDate')" class="help text-danger">{{ vErrors.first('expiryDate') }}</span>
                        </div>
                        <button class="btn btn-primary" style="float: right;" id="bkcolor" type="submit">
                           Next
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </b-tab>
              <b-tab title="Add Service" :disabled=status v-model="status" >
                <div role="tablist">
                  <form @submit.prevent="ValidateService" ref="ClearServices">
                  <b-card no-body class="mb-0 custom-accordion collapse show">
                    <b-card-header header-tag="header" role="tab" id="changeOccordionHeaderBackgroudColor">
                      <h5 class="m-0 position-relative">
                        <a
                            v-b-toggle.accordion-1
                            class="text-reset"
                            href="javascript: void(0);"
                        >
                         Service
                          <i class="mdi mdi-chevron-down accordion-arrow"></i>
                        </a>
                      </h5>
                    </b-card-header>
                    <b-collapse
                        id="accordion-1"
                        visible
                        accordion="my-accordion"
                        role="tabpanel"
                    >
                      <b-card-body>
                          <div class="row">
                            <div class="col-lg-4 col-md-4">
                              <label>Service name</label>
                              <input id="servicename" name="servicename" type="text"
                                     class="form-control" placeholder="Enter service name"
                                     v-validate="'required'"
                                     :class="{'is-invalid': vErrors.has('servicename') }"
                                     v-model="addService.servicename"
                              />
                              <span v-show="vErrors.has('servicename')" class="help text-danger">{{ vErrors.first('servicename') }}</span>
                            </div>
                            <div class="col-lg-4 col-md-4">
                              <div>
                                <div class="form-group mb-3">
                                  <label>Select service type</label>
                                  <select class="custom-select" id="servicetype" name="servicetype"  v-model="addService.servicetype" @change="GetServiceCategoryTypeByServiceId(addService.servicetype)" v-validate="'required'">
                                    <option value="" selected>Select service type</option>
                                    <option :value="module.getEganowmoduleid()" v-for="(module,index) in Services" :key="index"> {{ module.getEganowmoduledesc() }} </option>
                                  </select>
                                  <span v-show="vErrors.has('servicetype')" class="help text-danger">{{ vErrors.first('servicetype') }}</span>
                                </div>
                                <div class="form-group mb-3">
                                  <div class="row">
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                              <div>
                                <div class="form-group mb-3">
                                  <label>Select service category</label>
                                  <select class="custom-select" id="serviceCategoryId" name="serviceCategoryId"  v-model="addService.serviceCategoryId" v-validate="'required'">
                                    <option value="" selected>Select service category type</option>
                                    <option :value="catId.getServicecategoryid()" v-for="(catId,index) in ServiceCategoryTypes" :key="index"> {{ catId.getServicecategoryname() }} </option>
                                  </select>
                                  <span v-show="vErrors.has('serviceCategoryId')" class="help text-danger">{{ vErrors.first('serviceCategoryId') }}</span>
                                </div>

                              </div>
                            </div>
                          </div>
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                  <b-card no-body class="mb-0 custom-accordion collapse show">
                    <b-card-header header-tag="header" role="tab" id="changeOccordionHeaderBackgroudColor">
                      <h5 class="m-0 position-relative">
                        <a
                            v-b-toggle.accordion-2
                            class="text-reset"
                            href="javascript: void(0);"
                        >
                          Settlement Accounts
                          <i class="mdi mdi-chevron-down accordion-arrow"></i>
                        </a>
                      </h5>
                    </b-card-header>
                    <b-collapse
                        id="accordion-2"
                        accordion="my-accordion"
                        role="tabpanel" >
                      <b-card-body>
                        <div class="row">
                          <div class="col-lg-6">
                            <div>
                              <div class="form-group mb-3">
                                <label>Settlement account type</label>
                                <multiselect
                                    name="settlementAcctType"
                                    v-model="addService.settlementAcctType"
                                    v-validate="'required'"
                                    :options="SettlementAccountTypeOptions"
                                    :class="{'is-invalid': vErrors.has('settlementAcctType') }"
                                />
                                <span v-show="vErrors.has('settlementAcctType')" class="help text-danger">{{ vErrors.first('settlementAcctType') }}</span>
                              </div>
                              <div class="form-group mb-3">
                                <label>Settlement account name</label>
                                <input id="settlementAcctName" type="text"
                                       name="settlementAcctName" class="form-control" placeholder="Settlement account name"
                                       v-validate="'required'"
                                       :class="{'is-invalid': vErrors.has('settlementAcctName') }"
                                       v-model="addService.settlementAcctName"
                                />
                                <span v-show="vErrors.has('settlementAcctName')" class="help text-danger">{{ vErrors.first('settlementAcctName') }}</span>
                              </div>
                              <div class="form-group mb-3">
                                <label>Settlement bank branch name</label>
                                <input id="settlementBankBranch" type="text"
                                       name="settlementBankBranch" class="form-control" placeholder="Settlement bank branch name"
                                       v-validate="'required'"
                                       :class="{'is-invalid': vErrors.has('settlementBankBranch') }"
                                       v-model="addService.settlementBankBranch"
                                />
                                <span v-show="vErrors.has('settlementBankBranch')" class="help text-danger">{{ vErrors.first('settlementBankBranch') }}</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div>
                              <div class="form-group mb-3">
                                <label>Settlement account number</label>
                                <input id="settlementAcctNo" type="text"
                                       name="settlementAcctNo" class="form-control" placeholder="Settlement account number"
                                       v-validate="'required'"
                                       :class="{'is-invalid': vErrors.has('settlementAcctNo') }"
                                       v-model="addService.settlementAcctNo"
                                />
                                <span v-show="vErrors.has('settlementAcctNo')" class="help text-danger">{{ vErrors.first('settlementAcctNo') }}</span>
                              </div>

                              <div class="form-group mb-3">
                                <label>Settlement bank name or wallet name</label>
                                <input id="settlementBankorwalletName" type="text"
                                       name="settlementBankorwalletName" class="form-control" placeholder="Settlement bank name"
                                       v-model="addService.settlementBankorwalletName"
                                       v-validate="'required'"
                                       :class="{'is-invalid': vErrors.has('settlementBankorwalletName') }"
                                />
                                 <span v-show="vErrors.has('settlementBankorwalletName')" class="help text-danger">{{ vErrors.first('settlementBankorwalletName') }}</span>
                              </div>
                              <div class="form-group mb-3">
                                <label>Available on eganow ?</label>
                                <multiselect
                                    name="availableOnEganow"
                                    v-model="addService.availableOnEganow"
                                    v-validate="'required'"
                                    :options="availableOnEganowOption"
                                    :class="{'is-invalid': vErrors.has('availableOnEganow') }"
                                />
                                 <span v-show="vErrors.has('availableOnEganow')" class="help text-danger">{{ vErrors.first('availableOnEganow') }}</span>
                              </div>

                              <button class="btn btn-primary" style="float: right;" id="bkcolor" type="submit">
                                Next
                              </button>
                            </div>
                          </div>
                        </div>
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                  </form>
                </div>
              </b-tab>
              <b-tab title="Add service Fees" :disabled=packageStatus v-model="status">
                <b-overlay :show="showLoader" rounded="sm">
                <form @submit.prevent="AddPackagesToList" ref="ClearPackageform">
                  <AlertMessage :variant="dangerSuccess" :message="responseMessage" v-if="responseMessage"/>
                  <div class="row">
                     <div class="col-lg-6">
                            <div>
                              <div class="form-group mb-3">
                                <label>Package name</label>
                                <input id="packageName" name="packageName" type="text"
                                       class="form-control" placeholder="Package name"
                                       v-validate="'required'"
                                       :class="{'is-invalid': vErrors.has('packageName') }"
                                       v-model="addPackage.packageName"
                                />
                                <span v-show="vErrors.has('packageName')" class="help text-danger">{{ vErrors.first('packageName') }}</span>
                              </div>
                            </div>
                      </div>
                      <div class="col-lg-6">
                          <div class="row">
                               <div class="col-lg-6">
                                 <div class="form-group mb-3">
                                   <label>Is package fee fixed ?</label>
                                   <select class="custom-select" v-model="addPackage.isPackageFeeFixed" name="isPackageFeeFixed" id="isPackageFeeFixed" v-validate="'required'" >
                                     <option value="" selected> Is package fee fixed</option>
                                     <option value="YES">YES</option>
                                     <option value="NO"> NO</option>
                                   </select>

                                   <span v-show="vErrors.has('isPackageFeeFixed')" class="help text-danger">{{ vErrors.first('isPackageFeeFixed') }}</span>
                                 </div>
                               </div>
                               <div class="col-lg-6">
                                 <div class="form-group mb-3">
                                   <label>Amount</label>
                                   <input id="amount" name="amount" type="text"
                                          class="form-control" placeholder="Amount"
                                          v-validate="'required|decimal'"
                                          :class="{'is-invalid': vErrors.has('amount') }"
                                          v-model="addPackage.amount"
                                   />
                                   <span v-show="vErrors.has('amount')" class="help text-danger">{{ vErrors.first('amount') }}</span>
                                 </div>
                               </div>

                          </div>
                      </div>
                    </div>
                  <button class="btn btn-primary btn-rounded" style="float: right;" id="bkcolor" type="submit">
                    Add
                  </button>
                </form>
                <div class="row mt-5">
                  <div class="col">
                        <div class="table-responsive mb-0" id="table">
                    <b-table
                        :items="tableData"
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
                        <a @click="DeleteFromPackageList(data.item)" style="cursor: pointer" class="text-danger mr-2"> <i class="mdi mdi-trash-can"></i></a>
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
                </b-overlay>
                <button class="btn btn-primary mt-3" @click="CreateMerchantService" style="float: right;" id="bkcolor" type="submit">
                  Submit
                </button>
              </b-tab>
            </b-tabs>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import DatePicker from "vue2-datepicker";
import merchants from '../../protos/MerchantAccount_grpc_web_pb';
import grpcUrl from '../../components/constant/index'
import Vue from "vue";
import SweetAlertWrapper from "../../sweetAlert";
import SweetAlertConfig from "../../SwalConfig";
import AlertMessage from "../../components/shared/AlertMessage";
import CustomHeaderAlert from "../../components/shared/CustomHeaderAlert";

export default {
  components: {
    Multiselect,
    DatePicker,
    AlertMessage,
    CustomHeaderAlert
  },
  data() {
    return {
      showLoader : false,
      message :"Create a merchant account",
      responseMessage:'',
      dangerSuccess : '',
      clients : {},
      regulators:[],
      tableData: [],
       packagesadded :[],
      tabIndex: 1,
      status: true,
      packageStatus : true,
      addServiceTab: '',
      addServiceFeeTab: '',
      merchantService: {
        merchantSymbol: '',
        merchantName: '',
        regulator: '',
        licenseNo: '',
        tin:'',
        issueDate: '',
        expiryDate: '',
      },
      Services :[],
      ServiceCategoryTypes: [],
      addService: {
        servicename:'',
        servicetype: '',
        serviceCategoryId: '',
        settlementAcctType: '',
        settlementAcctNo: '',
        settlementAcctName: '',
        settlementBankorwalletName: '',
        settlementBankBranch: '',
        availableOnEganow: '',
      },
      packageName: '',
      addPackage: {
        packageName: '',
        isPackageFeeFixed: '',
        amount: ''
      },
      typeOfServiceOption: [
        'Micorfinance',
        'Banking'
      ],
      SettlementAccountTypeOptions: [
        'BANK',
        'MOMO'
      ],
      allowDrCrOptions : [
         'CR',
         'DR'
      ],
      availableOnEganowOption: [
         'YES',
         'NO'
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: "id",
      sortDesc: false,
      tableFields: [
        {
          key: "id",
          sortable: true,
        },
        {
          label:"Package name",
          key: "packageName",
          sortable: true,
        },
        {
          label: "Package fee fixed ",
          key: "isPackageFeeFixedYesNo",
          sortable: true,
        },
        {
          label: "package amount",
          key: "packageFeeAmt",
          sortable: true,
        },
        {
          key:"actions",
          sortable: true,
        }
      ],
    }

  },
  computed: {
    rows() {
      return this.tableData.length;
    },
  },
  created() {
    this.sweetAlert = new SweetAlertWrapper()
    this.clients = new merchants.MerchantAccountSvcClient(grpcUrl.URL,null, null)

    this.GetRegulators();
    this.GetServicesOrEganowModules()
    this.$store.dispatch('setAppHeader',{
      title: "Create Merchant Service",
      items: [
        {
          text: "Dashboard",
          href: "#",
        },
        {
          text: "Create Merchant Service",
          href: "/merchant/createmerchantservice",
        },
      ],
    })
  },
  methods:{
    GetServicesOrEganowModules(){

           let request = new merchants.PayPartnerMerchantEmptyMessage()

           this.clients.getEganowModulesForMerchantsAll(request, this.$store.getters.metadata, (err, res) => {
              if(res){
                // console.log(" services : ", res.getModulelistList())
                 this.Services = res.getModulelistList()
              }
        })
    },
    GetServiceCategoryTypeByServiceId(moduleId){

      let request = new merchants.EganowModuleRequestMessage()
          request.setEganowmoduleid(moduleId)
      this.clients.getMerchantServiceCategoryPerModule(request, this.$store.getters.metadata, (err, res) => {

          if(res) {
            this.ServiceCategoryTypes = res.getServicecategorylistList()
          }
      })

    },

    ValidateMerchantAccount: async function(){

     // console.log(" Merchant data : " , this.merchantService)
      let validatedmerchantSymbol = await this.$validator.validate('merchantSymbol', this.merchantService.merchantSymbol);
      let validatedmerchantName = await this.$validator.validate('merchantName', this.merchantService.merchantName);
      let validatedregulator = await this.$validator.validate('regulator', this.merchantService.regulator);

      const selectedRegulator =  this.regulators.find(x => x.getRegulatorid() === this.merchantService.regulator)
     //  console.log(" Regulator name : ", selectedRegulator.getRegulatorname())

      if(selectedRegulator.getRegulatorname() === 'Not-Regulated'){
        if(validatedmerchantSymbol && validatedmerchantName && validatedregulator){
          this.status = false;
          return  setTimeout(() => this.tabIndex += this.tabIndex +1,1)
        }
      }

       if(selectedRegulator.getRegulatorname() !== 'Not-Regulated'){

         let validatedlicenseno = await this.$validator.validate('licenseNo', this.merchantService.licenseNo);
         let validatedissueDate = await this.$validator.validate('issueDate', this.merchantService.issueDate);
         let validatedexpiryDate = await this.$validator.validate('expiryDate', this.merchantService.expiryDate);

         if(validatedmerchantSymbol && validatedmerchantName && validatedregulator && validatedlicenseno && validatedissueDate && validatedexpiryDate){
           this.status = false;
           return  setTimeout(() => this.tabIndex += this.tabIndex +1,1)
         }
       }

    },

    GetRegulators(){
      let request = new merchants.PayPartnerMerchantCountryMessage();
        request.setLanguageid(this.$store.getters.getUserInfo.languageId)
        request.setCountrycode(this.$store.getters.getUserInfo.countryCode)
        console.log("country code : ",this.$store.getters.getUserInfo.countryCode)
       this.clients.getPayRegulators(request, this.$store.getters.metadata, (err , res) => {
          if(err){
            console.log("regulators error : ", err)
          }
          else {

            this.regulators = res.getRegulatorslistList()  //regulatorsList
          }
         return;
       })
    },
    ValidateService: async function(){

      let validatedservicename = await this.$validator.validate('servicename', this.addService.servicename);
      let validatedservice = await this.$validator.validate('servicetype', this.addService.servicetype);
      let validatedservicecatId = await this.$validator.validate('serviceCategoryId', this.addService.serviceCategoryId);
      let validatedsettlementAcctType = await this.$validator.validate('settlementAcctType', this.addService.settlementAcctType);
      let validatedsettlementAcctNo = await this.$validator.validate('settlementAcctNo', this.addService.settlementAcctNo);
      let validatedsettlementAcctName = await this.$validator.validate('settlementAcctName', this.addService.settlementAcctName);
      let validatedsettlementBankorwalletName = await this.$validator.validate('settlementBankorwalletName', this.addService.settlementBankorwalletName);
      let validatedsettlementBankBranch = await this.$validator.validate('settlementBankBranch', this.addService.settlementBankBranch);
      let validatedavailableOnEganow = await this.$validator.validate('availableOnEganow', this.addService.availableOnEganow);

      if(validatedservicename && validatedservice && validatedservicecatId && validatedsettlementAcctType && validatedsettlementAcctNo && validatedsettlementAcctName && validatedsettlementBankorwalletName &&
          validatedsettlementBankBranch && validatedavailableOnEganow) {

        this.packageStatus = false;
        setTimeout(() => this.tabIndex += this.tabIndex +2,1)
      }
    },
    AddPackagesToList: async function(){

      try {

        let validatedpackageName = await this.$validator.validate('packageName', this.addPackage.packageName);
        let validatedisPackageFeeFixed = await this.$validator.validate('isPackageFeeFixed', this.addPackage.isPackageFeeFixed);
        let validatedamount = await this.$validator.validate('amount', this.addPackage.amount);

        if(validatedpackageName && validatedisPackageFeeFixed && validatedamount) {

          this.tableData.push({ id: this.tableData.length+1 , packageName: this.addPackage.packageName, isPackageFeeFixedYesNo :this.addPackage.isPackageFeeFixed, packageFeeAmt :this.addPackage.amount})
          this.addPackage = ''
        }


      }
      catch (e) {
        console.log(" Package error :" ,e.message())
      }


    },
    DeleteFromPackageList(data){
      this.sweetAlert.showDialogYesOrNo(Object.assign(SweetAlertConfig, {
        confirmButtonText : 'Yes, delete it!'
      }), () => {
        const dataIndex = this.tableData.indexOf(data)
        console.log(" data : ",this.tableData.indexOf(data))
        this.tableData.splice(dataIndex,1)
      })

    },
    ClearControls() {

      try {
           this.merchantService = ''
           this.addService = ''
           this.addPackage = ''
      } catch (e) {
         console.log(" Error : ", e)
      }
    },
    CreateMerchantService(){
      console.log(" table data : " , this.tableData)

      this.sweetAlert.showDialogYesOrNo(Object.assign(SweetAlertConfig, {
        title :'Create Merchant ?',
        confirmButtonText : 'Yes, create it!'
      }), () => {

        let request = new merchants.PayPartnerMerchantWithServiceAndPackageRequestMessage();

        request.setPaypartnersymbol(this.merchantService.merchantSymbol)
        request.setPaypartnername(this.merchantService.merchantName)
        request.setLicenseno(this.merchantService.licenseNo)
        request.setTin(this.merchantService.tin)
        request.setRegulatorid(this.merchantService.regulator)
        request.setIssuedate(Vue.moment(this.merchantService.issueDate).format('YYYY-MM-DD').toString())
        request.setExpirydate(Vue.moment(this.merchantService.expiryDate).format('YYYY-MM-DD').toString())
        request.setServicecategoryid(this.addService.serviceCategoryId)
        request.setPaypartnerservicename(this.addService.servicename)
        request.setSettlementacctno(this.addService.settlementAcctNo)
        request.setSettlementacctname(this.addService.settlementAcctName)
        request.setSettlementaccounttypebankormomo(this.addService.settlementAcctType)
        request.setSettlementbankbranchname(this.addService.settlementBankBranch)
        request.setSettlementbankcode("BANK001")
        request.setSettlementbankorwalletname(this.addService.settlementBankorwalletName)
        request.setLanguageid('en')
        request.setAvailableoneganowyesno(this.addService.availableOnEganow)
        request.setCountrycode(this.$store.getters.getUserInfo.countryCode)
        // console.log(" packages : " , this.tableData)
        let custpackageList = [];

        let requestPackage = new merchants.PayPartnerServicesPackagesRequestMessage()
        this.tableData.forEach((event) => {
          requestPackage.setIspackagefeefixedyesno(event.isPackageFeeFixedYesNo)
          requestPackage.setPackagename(event.packageName)
          requestPackage.setPackagefeeamt(event.packageFeeAmt)
          requestPackage.setPaypartnerserviceid(this.addService.serviceCategoryId)
          custpackageList.push(requestPackage);
        })
        request.setPackagesList(custpackageList)
          this.showLoader = true;
          console.log(" Merchanrt request : ", request)
        this.clients.createMerchantApplicationWithOneServiceAndPackages(request, this.$store.getters.metadata, (err , res) => {
          this.showLoader = false;
          if (err) {
            this.showLoader = false;
            console.log("regulators error : ", err)
          } else {
            console.log(res)
            if (res.getIssuccess()) {
              this.$refs.ClearPackageform.reset()
              this.ClearControls()
               setTimeout(() => this.tabIndex -= this.tabIndex,1)
              this.sweetAlert.showMessage("Create merchant", res.getMessage())
            } else {
              console.log(" data not saved : ", res.getMessage())
              this.dangerSuccess = 'danger'
              this.responseMessage = res.getMessage();
              //this.tableData = []
              //this.$refs.ClearMerchantsData.reset()
            }
          }

        })
      })
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