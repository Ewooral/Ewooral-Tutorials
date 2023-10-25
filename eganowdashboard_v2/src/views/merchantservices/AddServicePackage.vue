<template>
    <div class="row">
      <CustomHeaderAlert :message="message" />
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <form @submit.prevent="CreatepackageService"  ref="ClearSearvicePackages">
            <b-tabs justified nav-class="nav-tabs nav-bordered" v-model="tabIndex">
              <b-tab title="Add Service"  active >
                <div role="tablist">
                  <form @submit.prevent="ValidateService">
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
                                    <option value="" selected>Select service</option>
                                    <option :value="module.getEganowmoduleid()" v-for="(module,index) in Services" :key="index"> {{ module.getEganowmoduledesc() }} </option>
                                  </select>
                                  <span v-show="vErrors.has('service')" class="help text-danger">{{ vErrors.first('service') }}</span>
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
              <b-tab title="Add services fees" :disabled=packageStatus v-model="status">

                <form @submit.prevent="AddPackagesToList" ref="ClearPackagesFiled">
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
                            <multiselect
                                name="isPackageFeeFixed"
                                v-model="addPackage.isPackageFeeFixed"
                                v-validate="'required'"
                                :options="allowDrCrOptions"
                                :class="{'is-invalid': vErrors.has('isPackageFeeFixed') }"
                            />
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
                          <a @click="DeleteFromPackageList(data.item)" style="cursor: pointer" class="text-danger mr-2"> <i class="mdi mdi-trash-can"></i> </a>
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

                <button class="btn btn-primary mt-3" style="float: right;" id="bkcolor" type="submit">
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
import merchants from '../../protos/MerchantAccount_grpc_web_pb';
import grpcUrl from "../../components/constant";
import SweetAlertConfig from "../../SwalConfig";
import AlertMessage from "../../components/shared/AlertMessage";
import SweetAlertWrapper from "../../sweetAlert";
import CustomHeaderAlert from "../../components/shared/CustomHeaderAlert";

export default {
  components: {
    Multiselect,
    AlertMessage,
    CustomHeaderAlert
  },
  data() {
    return {
      message :"Create a service and packages",
      tableData: [],
      tabIndex: 1,
      status: true,
      Services:[],
      packageStatus : true,
      dangerSuccess:'',
      responseMessage :'',
      clients : {},
      ServiceCategoryTypes:[],
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
      addPackage: {
        packageName: '',
        isPackageFeeFixed: '',
        amount: ''
      },
      allowDrCrOptions: [
        'YES',
        'NO'
      ],
      SettlementAccountTypeOptions: [
        'BANK',
        'MOMO'
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
    console.log(" lid : ",this.$store.getters.getUserInfo.languageId)
    this.sweetAlert = new SweetAlertWrapper()
    this.clients = new merchants.MerchantAccountSvcClient(grpcUrl.URL,null, null)

    this.GetServicesOrEganowModules()

    this.$store.dispatch('setAppHeader', {
      title: "Add Service Package",
      items: [
        {
          text: "Dashboard",
          href: "#",
        },
        {
          text: "Add Service Package",
          href: "/merchant/addservicepackage",
        },
      ],
    })
  },
  methods: {
    ValidateService : async function() {

      let validatedservicename = await this.$validator.validate('servicename', this.addService.servicename);
      let validatedservice = await this.$validator.validate('servicetype', this.addService.servicetype);
      let validatedservicecatId = await this.$validator.validate('serviceCategoryId', this.addService.serviceCategoryId);
      let validatedsettlementAcctType = await this.$validator.validate('settlementAcctType', this.addService.settlementAcctType);
      let validatedsettlementAcctNo = await this.$validator.validate('settlementAcctNo', this.addService.settlementAcctNo);
      let validatedsettlementAcctName = await this.$validator.validate('settlementAcctName', this.addService.settlementAcctName);
      let validatedsettlementBankorwalletName = await this.$validator.validate('settlementBankorwalletName', this.addService.settlementBankorwalletName);
      let validatedsettlementBankBranch = await this.$validator.validate('settlementBankBranch', this.addService.settlementBankBranch);
      let validatedavailableOnEganow = await this.$validator.validate('availableOnEganow', this.addService.availableOnEganow);

      console.log(" status : ", validatedservicename +' '+ validatedservice +' '+validatedservicecatId +'' +validatedsettlementAcctType +' '+validatedsettlementAcctNo+ ''+validatedsettlementAcctName+''+ validatedsettlementBankorwalletName+''+
          validatedsettlementBankBranch +' '+validatedavailableOnEganow)
      if(validatedservicename && validatedservice && validatedservicecatId && validatedsettlementAcctType && validatedsettlementAcctNo && validatedsettlementAcctName && validatedsettlementBankorwalletName &&
          validatedsettlementBankBranch && validatedavailableOnEganow) {

        this.packageStatus = false;
        setTimeout(() => this.tabIndex += this.tabIndex + 1,1)
      }
    },
    AddPackagesToList : async function() {

      let validatedpackageName = await this.$validator.validate('packageName', this.addPackage.packageName);
      let validatedisPackageFeeFixed = await this.$validator.validate('isPackageFeeFixed', this.addPackage.isPackageFeeFixed);
      let validatedamount = await this.$validator.validate('packageName', this.addPackage.amount);

      if (validatedpackageName && validatedisPackageFeeFixed && validatedamount) {

        this.tableData.push({
          id: this.tableData.length + 1,
          packageName: this.addPackage.packageName,
          isPackageFeeFixedYesNo: this.addPackage.isPackageFeeFixed,
          packageFeeAmt: this.addPackage.amount
        })
        console.log(" clear:")
        this.addPackage = ''
        this.$refs.ClearPackagesFiled.reset();
      }

    },

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
    DeleteFromPackageList(data){

      this.sweetAlert.showDialogYesOrNo(Object.assign(SweetAlertConfig, {
                confirmButtonText : 'Yes, delete it!'
              }), () => {
              const dataIndex = this.tableData.indexOf(data)
              console.log(" data : ",this.tableData.indexOf(data))
              this.tableData.splice(dataIndex,1)
        })
    },
    CreatepackageService() {


      this.sweetAlert.showDialogYesOrNo(Object.assign(SweetAlertConfig, {
        confirmButtonText : 'Yes, create it!'
      }), () => {

        let request = new merchants.MerchantServiceWithPackagesRequestMessage();

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


        this.clients.createMerchantServiceAndPackages(request, this.$store.getters.metadata, (err , res) => {
          if (err) {
            console.log("regulators error : ", err)
          } else {
            console.log(res)
            if (res.getIssuccess()) {
              this.sweetAlert.showMessage("Create merchant", res.getMessage())
              this.$refs.ClearSearvicePackages.reset()
            } else {
              console.log(" data not saved : ", res)
              this.dangerSuccess = 'danger'
              this.responseMessage = res.getMessage();
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