<template>
     <div class="row">
         <div class="col-md-8 col-sm-12 offset-md-2">
         <b-overlay :show="showLoader" rounded="sm">
             <div class="row justify-content-center">
                 <div class="col-md-12 col-lg-12 col-xl-12 col-sm-12">
                     <div class="card">
                         <div class="card-body">
                              <h3> {{ $t('send_moeny_labels.send_money') }}  </h3>
                             <form-wizard shape="tab" :finish-button-text="`Confirm & pay - ${preview.totalamount}`"  color="rgb(0, 120, 212)" ref="ClearMoneyTransferData" @on-complete="TransferMoney"  >
                                 <tab-content icon="mdi mdi-account-circle"  title="Beneficiary & Source account" :before-change="validateRecipientAndSourceData">
                                     <div class="row" ref="firstTabForm">
                                         <div class="col-lg-12">
                                                 <AlertMessage :variant="dangerSuccess" :message="responseMessageVisaCard" v-if="responseMessageVisaCard"/>
                                         </div>
                                         <div class="col-lg-6 col-sm-12 pt-2" id="benStyle">
                                             <div>
                                                 <div class="form-group mb-3">
                                                     <label>{{ $t('send_moeny_labels.select_recipient_country') }}</label>
                                                         <multiselect
                                                                 id="country"
                                                                 name="country"
                                                                 v-model="recipient.country"
                                                                 v-validate="'required'"
                                                                 :options="OperatingCountries"
                                                                 :searchable="true"
                                                                  @select="GetCountryCodeForSelectedCountry($event)"
                                                                 :class="{'is-invalid': vErrors.has('country') }" >
                                                             <template slot="singleLabel" slot-scope="props" class="p-0 m-0">
                                                                 <img style="width: 20px !important; height: 20px !important; padding: 0px !important; margin: 0px !important;" :src="props.option.getCountryflagurl()" alt=""><span class="option__desc">
                                                                   <span class="option__title pl-1">{{ props.option.getCountryname() }}</span></span>
                                                             </template>
                                                             <template slot="option" slot-scope="{ option }" class="h-25 w-25">
                                                                 <img style="width: 30px !important; height: 30px !important;" :src="option.getCountryflagurl()"> {{ option.getCountryname() }}
                                                             </template>
                                                         </multiselect>
                                                     <span v-show="vErrors.has('country')" class="help text-danger">{{ vErrors.first('country') }}</span>
                                                 </div>
                                                 <div class="form-group mb-3">
                                                     <label> {{ $t('send_moeny_labels.select_receipient_account_type')}}</label>
                                                     <multiselect
                                                             id="countrytype"
                                                             name="accounttype"
                                                             v-model="recipient.accounttype"
                                                             v-validate="'required'"
                                                             :options="AccountTypes"
                                                             :searchable="true"
                                                             @select="GetAccountProvidersBySelectedAccountType($event)"
                                                             :class="{'is-invalid': vErrors.has('accounttype') }" >
                                                         <template slot="tag" slot-scope="props" class="p-0 m-0">
                                                             <img style="width: 20px !important; height: 20px !important; padding: 0px !important; margin: 0px !important;" :src="props.option.getPaypartnergroupurl()" alt="">
                                                             <span class="option__desc">
                                                                   <span class="option__title pl-1">{{ props.option.getAppname()}}</span>
                                                             </span>
                                                         </template>
                                                         <template slot="option" slot-scope="{ option }" class="h-25 w-25">
                                                             <img style="width: 30px !important; height: 30px !important;" :src="option.getPaypartnergroupurl()"> {{ option.getAppname() }}
                                                         </template>

                                                     </multiselect>
                                                     <span v-show="vErrors.has('accounttype')" class="help text-danger">{{ vErrors.first('accounttype') }}</span>
                                                 </div>
                                                 <div class="form-group mb-3">
                                                     <label> {{ $t('send_moeny_labels.select_recipient_account_provider')}}</label>
                                                     <multiselect
                                                             name="accountprovider"
                                                             v-model="recipient.accountprovider"
                                                             v-validate="'required'"
                                                             :options="AccountProviders"
                                                             :searchable="true"
                                                             @select="GetBeneficiariesMerchantServiceId($event)"
                                                             :class="{'is-invalid': vErrors.has('accountprovider') }" >
                                                         <template slot="singleLabel" slot-scope="props" class="p-0 m-0">
                                                             <img style="width: 20px !important; height: 20px !important; padding: 0px !important; margin: 0px !important;" :src="props.option.getLogourl()" alt="">
                                                             <span class="option__desc">
                                                                   <span class="option__title pl-1">{{ props.option.getPaypartnerservicename() }}</span>
                                                             </span>
                                                         </template>
                                                         <template slot="option" slot-scope="{ option }" class="h-25 w-25">
                                                             <img style="width: 30px !important; height: 30px !important;" :src="option.getLogourl()">  {{ option.getPaypartnerservicename() }}
                                                         </template>

                                                     </multiselect>
<!--                                                     <span v-show="vErrors.has('accountprovider')" class="help text-danger">{{ vErrors.first('accountprovider') }}</span>-->
                                                 </div>
                                                 <div class="row" v-if="accountstatus === 'Mobile Money' && checkifprovideriseganow === false">
                                                     <div class="col-lg-4 col-md-12">
                                                         <div class="form-group mb-3">
                                                             <label> {{ $t('send_moeny_labels.country_code')}}</label>
                                                             <input  name="countrycode" type="text" readonly
                                                                     class="form-control"
                                                                     v-validate="'required'"
                                                                     :class="{'is-invalid': vErrors.has('countrycode') }"
                                                                     v-model="recipient.countrydialcode"
                                                             />
<!--                                                             <span v-show="vErrors.has('countrycode')" class="help text-danger">{{ vErrors.first('countrycode') }}</span>-->
                                                         </div>
                                                     </div>
                                                     <div class="col-lg-8 col-md-12">
                                                         <div class="form-group mb-3">
                                                             <label> {{ $t('send_moeny_labels.mobile_number')}} <span class="ml-3" v-if="showlinkTogetBeneficiaries"><a v-b-modal.recipient-list href="#" class="text-primary" size="sm" style="float: right;" @click="GetCustomerBeneficiaryListBySelectedProvider">Get recipient</a></span></label>
                                                             <input  name="mobilenooraccountnumber" type="text" @change="GetCustomernamebyMobileNo(recipient.mobilenooraccountnumber)"
                                                                    class="form-control"
                                                                    :class="{'is-invalid': vErrors.has('mobilenooraccountnumber') }"
                                                                     v-validate="'required|min:'+recipient.minlengthofmobileno+'|max:'+recipient.maxlengthofmobileno+1"
                                                                     v-model="recipient.mobilenooraccountnumber"
                                                             />
<!--                                                             <span v-show="vErrors.has('mobilenooraccountnumber')" class="help text-danger">{{ vErrors.first('mobilenooraccountnumber') }}</span>-->
                                                         </div>

                                                     </div>
                                                 </div>
                                                 <div class="form-group mb-3" v-if="accountstatus !== 'Mobile Money' &&  checkifprovideriseganow === false" >
                                                     <label>{{ $t('send_moeny_labels.enter_account_number')}}</label>
                                                     <input  name="mobilenooraccountnumber" type="text"
                                                             class="form-control"
                                                             v-validate="'required'"
                                                             :class="{'is-invalid': vErrors.has('mobilenooraccountnumber') }"
                                                             v-model="recipient.mobilenooraccountnumber"
                                                     />
                                                     <span v-show="vErrors.has('mobilenooraccountnumber')" class="help text-danger">{{ vErrors.first('mobilenooraccountnumber') }}</span>
                                                 </div>
                                                 <div class="form-group mb-3" v-if="providereganow === 'eganow' && checkifprovideriseganow === true">
                                                     <label>{{ $t('send_moeny_labels.eganow_account_number')}} <span class="ml-5" v-if="showlinkTogetBeneficiaries"><a v-b-modal.recipient-list href="#" class="text-primary text-right"  @click="GetCustomerBeneficiaryListBySelectedProvider">Get recipient</a></span></label>
                                                     <input  name="mobilenooraccountnumber" type="text"
                                                             class="form-control"

                                                             v-model="recipient.eganowaccountno"
                                                     />
                                                 </div>

                                                 <div class="form-group mb-3">
                                                     <label>{{ $t('send_moeny_labels.recipient_account_name')}} </label>
                                                     <b-overlay :show="showLoaderCustomerName" rounded="sm">
                                                         <input  type="text"
                                                                 name="accountname" class="form-control" placeholder="account name"
                                                                 v-validate="'required'"

                                                                 :class="{'is-invalid': vErrors.has('accountname') }"
                                                                 v-model="recipient.accountname"
                                                         />
                                                     </b-overlay>
                                                     <!--                                                     <span v-show="vErrors.has('accountname')" class="help text-danger">{{ vErrors.first('accountname') }}</span>-->
                                                 </div>
                                                 <div class="row">
                                                     <div class="col-12">
                                                         <div class="form-group" v-if="exchangeRate">
                                                             <label>{{ $t('send_moeny_labels.exchange_rate')}} : <span style="color: #a92222;">{{ source.currencyiso }} 1  = {{ recipient.currencyiso}} {{ exchangeRate}} </span></label>
                                                         </div>
                                                     </div>
                                                     <div class="col-lg-5 col-sm-12">
                                                         <div class="form-group mb-3" id="expandSelect">
                                                             <label>{{ $t('send_moeny_labels.sending_currency')}}</label>
                                                             <multiselect
                                                                     id="sendingamountcurrency"
                                                                     name="sendingamountcurrency"
                                                                     v-model="source.sendingamountcurrency"
                                                                     v-validate="'required'"
                                                                     :options="AllCountries"
                                                                     :searchable="true"
                                                                     @select="GetSelectedCountryExchangeRateByCountryCode($event)"
                                                                     :class="{'is-invalid': vErrors.has('sendingamountcurrency') }" >
                                                                 <template slot="singleLabel" slot-scope="props" class="p-0 m-0">
                                                                     <img style="width: 20px !important; height: 20px !important; padding: 0px !important; margin: 0px !important;" :src="props.option.getCountryflagurl()" alt=""><span class="option__desc">
                                                                       <span class="option__title pl-1">{{ props.option.getCurrencyiso() }}</span></span>
                                                                 </template>
                                                                 <template slot="option" slot-scope="{ option }" class="h-25 w-25">
                                                                     <img style="width: 30px !important; height: 30px !important;" :src="option.getCountryflagurl()"> {{ option.getCurrencyiso() }}
                                                                 </template>
                                                             </multiselect>
                                                         </div>
                                                     </div>
                                                     <div class="col-lg-7 col-sm-12">
                                                         <div class="form-group mb-3">
                                                             <label>{{ $t('send_moeny_labels.sending_amount')}}</label>
                                                             <input  type="amount"
                                                                     name="amount" class="form-control" placeholder="Amount"
                                                                     v-validate="'required'"
                                                                     v-model="recipient.amount"
                                                                     :class="{'is-invalid': vErrors.has('amount') }"
                                                                     @change="ClearSelectedSourceAndProcessingFees()"
                                                             />
                                                             <!--  <span v-show="vErrors.has('amount')" class="help text-danger">{{ vErrors.first('amount') }}</span>-->
                                                         </div>
                                                     </div>
                                                 </div>


                                                 <div class="form-group mb-3">
                                                     <label>{{ $t('send_moeny_labels.reference')}}</label>
                                                     <input  type="text"
                                                             name="reference" class="form-control" placeholder="Reference"
                                                             v-validate="'required'"
                                                             :class="{'is-invalid': vErrors.has('reference') }"
                                                             v-model="recipient.reference"
                                                     />
                                                 </div>
                                             </div>
                                         </div>
                                         <div class="col-lg-6 col-sm-12 pt-2" id="benStyle">
                                             <div v-if="recipient.country">
                                                 <div class="row">
                                                     <div class="col-md-7 col-sm-12">
                                                         <h4> {{ $t('send_moeny_labels.how_do_you_want_to_pay')}} </h4>
                                                     </div>
                                                     <div class="col-md-5 col-sm-12">

<!--                                                         <h4>-->
<!--                                                             <a href="#" @click="GetActiveSourceAccount"  class="mdi mdi-refresh btn-primary form-control" ><b>  </b> </a>-->
<!--                                                         </h4>-->
                                                         <b-button variant="primary btn-rounded mb-1" @click="GetActiveSourceAccount">
                                                             <i class="mdi mdi-refresh"> {{ $t('send_moeny_labels.refresh') }}</i>
                                                         </b-button>

                                                     </div>
                                                 </div>


                                                 <AlertMessage :variant="dangerSuccess" :message="responseMessageCalculateChargeFailed" v-if="responseMessageCalculateChargeFailed"/>
                                                 <b-overlay :show="showLoaderAvailableSoucrceAccount" rounded="sm">
                                                     <div  class="card mb-0" v-for="sourceaccount in listsOfExistingSourceAccount" :key="sourceaccount.getSourceaccountno()">
                                                         <div class="card-body removeborder" :id="sourceaccount.getSourceaccountno()">
                                                             <b-form-radio
                                                                     name="radiobutonStatus"
                                                                     v-model="radiobutonStatus"
                                                                     :value="sourceaccount.getDisplaysourceaccountno()"
                                                                     v-validate="'required'"
                                                                     @change="CalculateTransCharges(sourceaccount)"
                                                             >
                                                                 <!--  {{sourceaccount.getSourceaccountno().substring(0,3)  }}********* {{ sourceaccount.getSourceaccountno().substring( sourceaccount.getSourceaccountno().length -4,sourceaccount.getSourceaccountno().length)}}-->
                                                              <div class="row">
                                                                  <div class="col-md-10 col-sm-8">
                                                                      <div class="col-md-12">
                                                                          {{sourceaccount.getSourceaccountname() }}
                                                                      </div>
                                                                      <div class="col-md-12">
                                                                          <h6> {{ sourceaccount.getDisplaysourceaccountno() }}</h6>
                                                                      </div>
                                                                  </div>
                                                                  <div class="col-md-2 col-sm-4">
                                                                      <img
                                                                              :src="`${sourceaccount.getLogourl()}`"
                                                                              alt
                                                                              height="24"
                                                                              style="float: right !important; margin-left: 7rem !important;"
                                                                      />
                                                                  </div>

                                                              </div>


                                                             </b-form-radio>
                                                         </div>
                                                     </div>
                                                 </b-overlay>

                                                 <b-form-checkbox id="checkbox-1" class="mt-3 mb-3" @change="ValueOfPaymentMethodStatusCheck" v-model="status" name="checkbox-1" value="accepted"  unchecked-value="not_accepted">
                                                     {{ $t('send_moeny_labels.add_new_payment_method')}}
                                                 </b-form-checkbox>
                                                 <b-overlay :show="showsourceCountryLoader" rounded="sm">
                                                     <div class=""  v-if="status === 'accepted'">
                                                         <div class="form-group mb-3">
                                                             <label>{{ $t('send_moeny_labels.select_source_country')}} </label>
                                                             <multiselect
                                                                     id="sourcecountry"
                                                                     name="country"
                                                                     v-model="source.sourcecountry"
                                                                     v-validate="'required'"
                                                                     :options="AllCountries"
                                                                     :searchable="true"
                                                                     @select="GetPaymentTypeForSenderBySelectedCountryCode($event)"
                                                                     :class="{'is-invalid': vErrors.has('country') }" >
                                                                 <template slot="tag" slot-scope="props" class="p-0 m-0">
                                                                     <img style="width: 20px !important; height: 20px !important; padding: 0px !important; margin: 0px !important;" :src="props.option.getCountryflagurl()" alt=""><span class="option__desc">
                                                                   <span class="option__title pl-1">{{ props.option.getCountryname() }}</span></span>
                                                                 </template>
                                                                 <template slot="option" slot-scope="{ option }" class="h-25 w-25">
                                                                     <img style="width: 30px !important; height: 30px !important;" :src="option.getCountryflagurl()"> {{ option.getCountryname() }}
                                                                 </template>
                                                             </multiselect>
                                                             <span v-show="vErrors.has('sourcecountry')" class="help text-danger">{{ vErrors.first('sourcecountry') }}</span>
                                                         </div>

                                                         <div v-if="showSelectedCountryStatus" >
                                                             <AlertMessage :variant="dangerSuccess" :message="responseMessagepaymentInfo" v-if="responseMessagepaymentInfo"/>
                                                             <div v-for="accttype in listofsourceaccounttypes"  :key="accttype.getPaypartnergroupid()">
                                                                 <b-card no-body class="mb-0 custom-accordion" v-if="accttype.getPaypartnergroupid()===1">
                                                                     <b-overlay :show="showsourceGenerateOtpLoader" rounded="sm">
                                                                         <b-card-header header-tag="header" role="tab" id="changeOccordionHeaderBackgroudColor" >
                                                                             <h5 class="m-0 position-relative">
                                                                                 <a
                                                                                         v-b-toggle.accordion-1
                                                                                         class="text-reset"
                                                                                         href="javascript: void(0);"
                                                                                 >
                                                                                     <div class="nav-user" style="display: inline">
                                                                                     </div> {{ $t('send_moeny_labels.mobile_money')}}
                                                                                     <i class="mdi mdi-chevron-down accordion-arrow"></i>
                                                                                 </a>
                                                                             </h5>
                                                                         </b-card-header>
                                                                         <b-collapse id="accordion-1" :visible="collapseAccordian" accordion="my-accordion" role="tabpanel">
                                                                             <b-card-body>
                                                                                 <b-card-text>
                                                                                     <AlertMessage :variant="dangerSuccess" :message="responseMessageMomo" v-if="responseMessageMomo"/>
                                                                                     <form @submit.prevent="AddMomoToSourceAccount" ref="ClearAddMomoToSourceAccount">
                                                                                         <div class="form-group mb-3">
                                                                                             <label>{{ $t('send_moeny_labels.select_account_provider')}}</label>
                                                                                             <multiselect
                                                                                                     name="payPartnerServiceName"
                                                                                                     v-model="mobilemoney.payPartnerServiceName"
                                                                                                     v-validate="'required'"
                                                                                                     :options="listofsourceaccountproviders.filter(x => x.getPaypartnergroupid() === 1)"
                                                                                                     :searchable="true"
                                                                                                     @select= "GetSourceSelectedAccountTypeDataForMobileMoney($event)"
                                                                                                     :class="{'is-invalid': vErrors.has('payPartnerServiceName') }" >
                                                                                                 <template slot="singleLabel" slot-scope="props" class="p-0 m-0">
                                                                                                     <img style="width: 20px !important; height: 20px !important; padding: 0px !important; margin: 0px !important;" :src="props.option.getLogourl()" alt="">
                                                                                                     <span class="option__desc">
                                                                                           <span class="option__title pl-1">{{ props.option.getPaypartnerservicename() }}</span>
                                                                                     </span>
                                                                                                 </template>
                                                                                                 <template slot="option" slot-scope="{ option }" class="h-25 w-25">
                                                                                                     <img style="width: 30px !important; height: 30px !important;" :src="option.getLogourl()">  {{ option.getPaypartnerservicename() }}
                                                                                                 </template>

                                                                                             </multiselect>
                                                                                             <span v-show="vErrors.has('payPartnerServiceName')" class="help text-danger">{{ vErrors.first('payPartnerServiceName') }}</span>
                                                                                         </div>

                                                                                         <div class="row">
                                                                                             <div class="col-md-5">
                                                                                                 <div class="form-group mb-3">
                                                                                                     <label>{{ $t('send_moeny_labels.country_code')}}</label>
                                                                                                     <input  type="text"
                                                                                                             name="countrydialcode" class="form-control" placeholder="Mobile number"
                                                                                                             readonly
                                                                                                             v-model="source.countrydialcode"
                                                                                                     />
                                                                                                 </div>
                                                                                             </div>
                                                                                             <div class="col-md-7">
                                                                                                 <div class="form-group mb-3">
                                                                                                     <label>{{ $t('send_moeny_labels.mobile_number')}} </label>
                                                                                                     <input id="mobilenooraccountno" type="text"
                                                                                                            name="mobilenooraccountno" class="form-control" placeholder="Mobile number"
                                                                                                            v-validate="'required|min:'+source.minlength+'|max:+'+source.maxlength"
                                                                                                            v-model="source.mobilenooraccountno"
                                                                                                            @change="GetCustomernamebyMobileNoSource(source.mobilenooraccountno)"
                                                                                                            :class="{'is-invalid': vErrors.has('mobilenooraccountno') }"
                                                                                                     />
                                                                                                     <span v-show="vErrors.has('mobilenooraccountno')" class="help text-danger">{{ vErrors.first('mobilenooraccountno') }}</span>
                                                                                                 </div>
                                                                                             </div>
                                                                                         </div>


                                                                                         <div class="form-group mb-3">
                                                                                             <label>{{ $t('send_moeny_labels.account_name')}} </label>
                                                                                             <b-overlay :show="showLoaderCustomerNameForSource" rounded="sm">
                                                                                                 <input id="accountname" type="text"
                                                                                                        name="accountname" class="form-control" placeholder="Account name"
                                                                                                        v-validate="'required'"
                                                                                                        v-model="source.accountname"
                                                                                                        :class="{'is-invalid': vErrors.has('accountname') }"
                                                                                                 />
                                                                                             </b-overlay>
                                                                                             <span v-show="vErrors.has('accountname')" class="help text-danger">{{ vErrors.first('accountname') }}</span>
                                                                                         </div>

                                                                                         <button class="btn btn-primary mb-1" style="float: right;" id="bkcolor" type="submit">
                                                                                             Add
                                                                                         </button>
                                                                                     </form>
                                                                                 </b-card-text>
                                                                             </b-card-body>
                                                                         </b-collapse>
                                                                     </b-overlay>
                                                                 </b-card>
                                                                 <b-card no-body class="mb-0 custom-accordion" v-if="accttype.getPaypartnergroupid()===2">
                                                                     <b-card-header header-tag="header" role="tab" id="changeOccordionHeaderBackgroudColor">
                                                                         <h5 class="m-0 position-relative">
                                                                             <a
                                                                                     v-b-toggle.accordion-2
                                                                                     class="text-reset"
                                                                                     href="javascript: void(0);"
                                                                             >
                                                                                 <div class="nav-user" style="display: inline">

                                                                                 </div>
                                                                                 Banks
                                                                                 <i class="mdi mdi-chevron-down accordion-arrow"></i>
                                                                             </a>
                                                                         </h5>
                                                                     </b-card-header>
                                                                     <b-collapse
                                                                             id="accordion-2"
                                                                             accordion="my-accordion"
                                                                             role="tabpanel"
                                                                             :visible="collapseAccordian"
                                                                     >
                                                                         <b-card-body>
                                                                             <b-card-text>
                                                                                 <form @submit.prevent="AddAirtelTigo" ref="ClearairteltigoFormdata">

                                                                                     <div class="form-group mb-3">
                                                                                         <label>{{ $t('send_moeny_labels.select_account_provider')}} </label>
                                                                                         <multiselect
                                                                                                 name="payPartnerServiceName"
                                                                                                 v-model="mobilemoney.payPartnerServiceName"
                                                                                                 v-validate="'required'"
                                                                                                 :options="listofsourceaccountproviders.filter(x => x.getPaypartnergroupid() === 7)"
                                                                                                 :searchable="true"
                                                                                                 @select= "GetSourceSelectedAccountTypeData($event)"
                                                                                                 :class="{'is-invalid': vErrors.has('payPartnerServiceName') }" >
                                                                                             <template slot="singleLabel" slot-scope="props" class="p-0 m-0">
                                                                                     <span class="option__desc">
                                                                                           <span class="option__title pl-1">{{ props.option.getPaypartnerservicename() }}</span>
                                                                                     </span>
                                                                                             </template>
                                                                                             <template slot="option" slot-scope="{ option }" class="h-25 w-25">
                                                                                                 {{ option.getPaypartnerservicename() }}
                                                                                             </template>

                                                                                         </multiselect>
                                                                                         <span v-show="vErrors.has('payPartnerServiceName')" class="help text-danger">{{ vErrors.first('payPartnerServiceName') }}</span>
                                                                                     </div>
                                                                                     <div class="form-group mb-3">
                                                                                         <label> {{ $t('send_moeny_labels.account_number')}} </label>
                                                                                         <input  type="text"
                                                                                                 name="mobileno" class="form-control" placeholder="Account number"
                                                                                                 v-validate="'required'"
                                                                                                 v-model="vodafone.mobileno"
                                                                                                 :class="{'is-invalid': vErrors.has('mobileno') }"
                                                                                         />
                                                                                         <span v-show="vErrors.has('mobileno')" class="help text-danger">{{ vErrors.first('mobileno') }}</span>
                                                                                     </div>

                                                                                     <button class="btn btn-primary mb-1" style="float: right;" id="bkcolor" type="submit">
                                                                                         {{ $t('send_moeny_labels.add')}}
                                                                                     </button>
                                                                                 </form>
                                                                             </b-card-text>
                                                                         </b-card-body>
                                                                     </b-collapse>
                                                                 </b-card>
                                                                 <b-card no-body class="mb-0 custom-accordion" v-if="accttype.getPaypartnergroupid()===3">
                                                                     <b-card-header header-tag="header" role="tab" id="changeOccordionHeaderBackgroudColor">
                                                                         <h5 class="m-0 position-relative">
                                                                             <a
                                                                                     v-b-toggle.accordion-3
                                                                                     class="text-reset"
                                                                                     href="javascript: void(0);"
                                                                             >
                                                                                 <div class="nav-user" style="display: inline">

                                                                                 </div>
                                                                                 {{ $t('send_moeny_labels.payment_card')}}
                                                                                 <i class="mdi mdi-chevron-down accordion-arrow"></i>
                                                                             </a>
                                                                         </h5>
                                                                     </b-card-header>
                                                                     <b-collapse
                                                                             id="accordion-3"
                                                                             accordion="my-accordion"
                                                                             role="tabpanel"
                                                                             :visible="collapseAccordian"
                                                                     >
                                                                         <b-card-body>
                                                                             <b-card-text>
                                                                                 <b-overlay :show="showLoaderForCards" rounded="sm">
                                                                                     <form @submit.prevent="AddSourceCardAccount" ref="ClearSourcecardaccount">

                                                                                         <div class="form-group mb-3">
                                                                                             <label>{{ $t('send_moeny_labels.card_number')}} </label>
                                                                                             <input  type="text"
                                                                                                     name="creditCardNumber" class="form-control" placeholder="Card number"
                                                                                                     v-validate="'required'"
                                                                                                     v-model="creditCardNumber"
                                                                                                     :class="{'is-invalid': vErrors.has('creditCardNumber') }"
                                                                                             />
                                                                                             <span v-show="vErrors.has('creditCardNumber')" class="help text-danger">{{ vErrors.first('creditCardNumber') }}</span>
                                                                                         </div>
                                                                                         <div class="form-group mb-3">
                                                                                             <label>{{ $t('send_moeny_labels.card_name')}}</label>
                                                                                             <input  type="text"
                                                                                                     name="cardname" class="form-control" placeholder="Card name"
                                                                                                     v-validate="'required'"
                                                                                                     v-model="card.cardname"
                                                                                                     :class="{'is-invalid': vErrors.has('cardname') }"
                                                                                             />
                                                                                             <span v-show="vErrors.has('cardname')" class="help text-danger">{{ vErrors.first('cardname') }}</span>
                                                                                         </div>
                                                                                         <div class="row">
                                                                                             <div class="col-lg-5 col-md-5">
                                                                                                 <div class="form-group mb-3">
                                                                                                     <label> {{ $t('send_moeny_labels.month')}}</label>
                                                                                                     <select class="custom-select" v-model="card.month" name="month" id="month" v-validate="'required'" >
                                                                                                         <option value="" selected>{{ $t('send_moeny_labels.month')}}</option>
                                                                                                         <option value="01"> {{ $t('send_moeny_labels.months.jan')}} </option>
                                                                                                         <option value="02"> {{ $t('send_moeny_labels.months.feb')}} </option>
                                                                                                         <option value="03"> {{ $t('send_moeny_labels.months.mar')}}</option>
                                                                                                         <option value="04"> {{ $t('send_moeny_labels.months.apr')}} </option>
                                                                                                         <option value="05"> {{ $t('send_moeny_labels.months.may')}} </option>
                                                                                                         <option value="06"> {{ $t('send_moeny_labels.months.jun')}} </option>
                                                                                                         <option value="07"> {{ $t('send_moeny_labels.months.jul')}}</option>
                                                                                                         <option value="08"> {{ $t('send_moeny_labels.months.aug')}}</option>
                                                                                                         <option value="09"> {{ $t('send_moeny_labels.months.sep')}}</option>
                                                                                                         <option value="10"> {{ $t('send_moeny_labels.months.oct')}}</option>
                                                                                                         <option value="11"> {{ $t('send_moeny_labels.months.nov')}}</option>
                                                                                                         <option value="12"> {{ $t('send_moeny_labels.months.dec')}}</option>
                                                                                                     </select>
                                                                                                     <span v-show="vErrors.has('month')" class="help text-danger">{{ vErrors.first('month') }}</span>
                                                                                                 </div>
                                                                                             </div>
                                                                                             <div class="col-lg-4 col-md-4">
                                                                                                 <label>Year</label>
                                                                                                 <select class="custom-select" v-model="card.year" name="year" id="year" v-validate="'required'" >
                                                                                                     <option value="" selected>Year</option>

                                                                                                     <option v-for="year in years" :value="year" :key="year"> {{year}}</option>
                                                                                                 </select>
                                                                                                 <span v-show="vErrors.has('year')" class="help text-danger">{{ vErrors.first('year') }}</span>
                                                                                             </div>
                                                                                             <div class="col-lg-3 col-md-3">
                                                                                                 <label>Cvv</label>
                                                                                                 <input  type="text"
                                                                                                         name="Cvv" class="form-control" placeholder="Cvv"
                                                                                                         v-validate="'required|min:3|max:4'"
                                                                                                         v-model="card.Cvv"
                                                                                                         :class="{'is-invalid': vErrors.has('Cvv') }"
                                                                                                 />
                                                                                                 <span v-show="vErrors.has('Cvv')" class="help text-danger">{{ vErrors.first('Cvv') }}</span>
                                                                                             </div>
                                                                                         </div>
                                                                                         <button class="btn btn-primary btn-rounded mb-1" style="float: right;" id="bkcolor" type="submit">
                                                                                             Add
                                                                                         </button>
                                                                                     </form>
                                                                                 </b-overlay>
                                                                             </b-card-text>
                                                                         </b-card-body>
                                                                     </b-collapse>
                                                                 </b-card>
                                                                 <b-card no-body class="mb-0 custom-accordion" v-if="accttype.getPaypartnergroupid()===5">
                                                                     <b-card-header header-tag="header" role="tab" id="changeOccordionHeaderBackgroudColor">
                                                                         <h5 class="m-0 position-relative">
                                                                             <a
                                                                                     v-b-toggle.accordion-5
                                                                                     class="text-reset"
                                                                                     href="javascript: void(0);"
                                                                             >
                                                                                 <div class="nav-user" style="display: inline">
                                                                                 </div> Community bank
                                                                                 <i class="mdi mdi-chevron-down accordion-arrow"></i>
                                                                             </a>
                                                                         </h5>
                                                                     </b-card-header>
                                                                     <b-collapse
                                                                             id="accordion-5"
                                                                             accordion="my-accordion"
                                                                             role="tabpanel"
                                                                     >
                                                                         <b-card-body>
                                                                             <b-card-text>
                                                                                 <form @submit.prevent="AddVodafone" ref="ClearvodafoneFormdata">

                                                                                     <div class="form-group mb-3">
                                                                                         <label>Select account provider</label>
                                                                                         <multiselect
                                                                                                 name="payPartnerServiceName"
                                                                                                 v-model="mobilemoney.payPartnerServiceName"
                                                                                                 v-validate="'required'"
                                                                                                 :options="listofsourceaccountproviders.filter(x => x.getPaypartnergroupid() === 5)"
                                                                                                 :searchable="true"
                                                                                                 @select= "GetSourceSelectedAccountTypeData($event)"
                                                                                                 :class="{'is-invalid': vErrors.has('payPartnerServiceName') }" >
                                                                                             <template slot="singleLabel" slot-scope="props" class="p-0 m-0">
                                                                                     <span class="option__desc">
                                                                                           <span class="option__title pl-1">{{ props.option.getPaypartnerservicename() }}</span>
                                                                                     </span>
                                                                                             </template>
                                                                                             <template slot="option" slot-scope="{ option }" class="h-25 w-25">
                                                                                                 {{ option.getPaypartnerservicename() }}
                                                                                             </template>

                                                                                         </multiselect>
                                                                                         <span v-show="vErrors.has('payPartnerServiceName')" class="help text-danger">{{ vErrors.first('payPartnerServiceName') }}</span>
                                                                                     </div>
                                                                                     <div class="form-group mb-3">
                                                                                         <label>Account number</label>
                                                                                         <input  type="text"
                                                                                                 name="mobileno" class="form-control" placeholder="Mobile number"
                                                                                                 v-validate="'required'"
                                                                                                 v-model="vodafone.mobileno"
                                                                                                 :class="{'is-invalid': vErrors.has('mobileno') }"
                                                                                         />
                                                                                         <span v-show="vErrors.has('mobileno')" class="help text-danger">{{ vErrors.first('mobileno') }}</span>
                                                                                     </div>
                                                                                     <button class="btn btn-primary btn-rounded mb-1" style="float: right;" id="bkcolor" type="submit">
                                                                                         Add
                                                                                     </button>
                                                                                 </form>
                                                                             </b-card-text>
                                                                         </b-card-body>
                                                                     </b-collapse>
                                                                 </b-card>
                                                                 <b-card no-body class="mb-0 custom-accordion" v-if="accttype.getPaypartnergroupid()===6">
                                                                     <b-card-header header-tag="header" role="tab" id="changeOccordionHeaderBackgroudColor">
                                                                         <h5 class="m-0 position-relative">
                                                                             <a
                                                                                     v-b-toggle.accordion-6
                                                                                     class="text-reset"
                                                                                     href="javascript: void(0);"
                                                                             >
                                                                                 <div class="nav-user" style="display: inline">

                                                                                 </div>
                                                                                 Credit Union
                                                                                 <i class="mdi mdi-chevron-down accordion-arrow"></i>
                                                                             </a>
                                                                         </h5>
                                                                     </b-card-header>
                                                                     <b-collapse
                                                                             id="accordion-6"
                                                                             accordion="my-accordion"
                                                                             role="tabpanel"
                                                                             :visible="collapseAccordian"
                                                                     >
                                                                         <b-card-body>
                                                                             <b-card-text>
                                                                                 <form @submit.prevent="AddAirtelTigo" ref="ClearairteltigoFormdata">

                                                                                     <div class="form-group mb-3">
                                                                                         <label>Select account provider</label>
                                                                                         <multiselect
                                                                                                 name="payPartnerServiceName"
                                                                                                 v-model="mobilemoney.payPartnerServiceName"
                                                                                                 v-validate="'required'"
                                                                                                 :options="listofsourceaccountproviders.filter(x => x.getPaypartnergroupid() === 6)"
                                                                                                 :searchable="true"
                                                                                                 @select= "GetSourceSelectedAccountTypeData($event)"
                                                                                                 :class="{'is-invalid': vErrors.has('payPartnerServiceName') }" >
                                                                                             <template slot="singleLabel" slot-scope="props" class="p-0 m-0">
                                                                                     <span class="option__desc">
                                                                                           <span class="option__title pl-1">{{ props.option.getPaypartnerservicename() }}</span>
                                                                                     </span>
                                                                                             </template>
                                                                                             <template slot="option" slot-scope="{ option }" class="h-25 w-25">
                                                                                                 {{ option.getPaypartnerservicename() }}
                                                                                             </template>

                                                                                         </multiselect>
                                                                                         <span v-show="vErrors.has('payPartnerServiceName')" class="help text-danger">{{ vErrors.first('payPartnerServiceName') }}</span>
                                                                                     </div>
                                                                                     <div class="form-group mb-3">
                                                                                         <label>Account number</label>
                                                                                         <input  type="text"
                                                                                                 name="mobileno" class="form-control" placeholder="Account number"
                                                                                                 v-validate="'required'"
                                                                                                 v-model="vodafone.mobileno"
                                                                                                 :class="{'is-invalid': vErrors.has('mobileno') }"
                                                                                         />
                                                                                         <span v-show="vErrors.has('mobileno')" class="help text-danger">{{ vErrors.first('mobileno') }}</span>
                                                                                     </div>

                                                                                     <button class="btn btn-primary mb-1" style="float: right;" id="bkcolor" type="submit">
                                                                                         Add
                                                                                     </button>
                                                                                 </form>
                                                                             </b-card-text>
                                                                         </b-card-body>
                                                                     </b-collapse>
                                                                 </b-card>
                                                                 <b-card no-body class="mb-0 custom-accordion" v-if="accttype.getPaypartnergroupid()===7">
                                                                     <b-card-header header-tag="header" role="tab" id="changeOccordionHeaderBackgroudColor">
                                                                         <h5 class="m-0 position-relative">
                                                                             <a
                                                                                     v-b-toggle.accordion-7
                                                                                     class="text-reset"
                                                                                     href="javascript: void(0);"
                                                                             >
                                                                                 <div class="nav-user" style="display: inline">
                                                                                 </div>
                                                                                 Micro finance
                                                                                 <i class="mdi mdi-chevron-down accordion-arrow"></i>
                                                                             </a>
                                                                         </h5>
                                                                     </b-card-header>
                                                                     <b-collapse
                                                                             id="accordion-7"
                                                                             accordion="my-accordion"
                                                                             role="tabpanel"
                                                                             :visible="collapseAccordian"
                                                                     >
                                                                         <b-card-body>
                                                                             <b-card-text>
                                                                                 <form @submit.prevent="AddVodafone" ref="ClearvodafoneFormdata">
                                                                                     <div class="form-group mb-3">
                                                                                         <label>Select account provider</label>
                                                                                         <multiselect
                                                                                                 name="payPartnerServiceName"
                                                                                                 v-model="mobilemoney.payPartnerServiceName"
                                                                                                 v-validate="'required'"
                                                                                                 :options="listofsourceaccountproviders.filter(x => x.getPaypartnergroupid() === 7)"
                                                                                                 :searchable="true"
                                                                                                 @select= "GetSourceSelectedAccountTypeData($event)"
                                                                                                 :class="{'is-invalid': vErrors.has('payPartnerServiceName') }" >
                                                                                             <template slot="singleLabel" slot-scope="props" class="p-0 m-0">
                                                                                     <span class="option__desc">
                                                                                           <span class="option__title pl-1">{{ props.option.getPaypartnerservicename() }}</span>
                                                                                     </span>
                                                                                             </template>
                                                                                             <template slot="option" slot-scope="{ option }" class="h-25 w-25">
                                                                                                 {{ option.getPaypartnerservicename() }}
                                                                                             </template>

                                                                                         </multiselect>
                                                                                         <span v-show="vErrors.has('payPartnerServiceName')" class="help text-danger">{{ vErrors.first('payPartnerServiceName') }}</span>
                                                                                     </div>
                                                                                     <div class="form-group mb-3">
                                                                                         <label>Account number</label>
                                                                                         <input  type="text"
                                                                                                 name="mobileno" class="form-control" placeholder="Account number"
                                                                                                 v-validate="'required'"
                                                                                                 v-model="vodafone.mobileno"
                                                                                                 :class="{'is-invalid': vErrors.has('mobileno') }"
                                                                                         />
                                                                                         <span v-show="vErrors.has('mobileno')" class="help text-danger">{{ vErrors.first('mobileno') }}</span>
                                                                                     </div>
                                                                                     <button class="btn btn-primary btn-rounded mb-1" style="float: right;" id="bkcolor" type="submit">
                                                                                         Add
                                                                                     </button>
                                                                                 </form>
                                                                             </b-card-text>
                                                                         </b-card-body>
                                                                     </b-collapse>
                                                                 </b-card>
                                                             </div>

                                                         </div>
                                                     </div>

                                                 </b-overlay>
                                             </div>
                                         </div>
                                     </div>
                                     <!-- end row -->
                                 </tab-content>
                                 <tab-content icon="mdi mdi-account-circle" title="Review & pay" :before-change="validateSourceAccountData">
                                     <b-overlay :show="showLoaderMoneyTransfer" rounded="sm">
                                     <div class="row" ref="secondTabForm" >
                                         <div class="col-lg-12">
                                             <AlertMessage :variant="dangerSuccess" :message="responseMessageMoneyTransfer" v-if="responseMessageMoneyTransfer"/>
                                         </div>
                                         <h3> {{ $t('send_moeny_labels.review_pay') }}</h3>
                                          <div class="col-12" id="previewstyle">

                                             <div class="row mt-2">
                                                 <div class="col-md-6 col-sm-12">
                                                     <div class="form-group mb-3">
                                                         <label>{{ $t('send_moeny_labels.sending_from') }} : </label>
                                                         <span  style="float: right !important;" v-if="source.countryflagurl">
                                                         <img :src="source.countryflagurl"
                                                              alt
                                                              height="24"
                                                         />
                                                          </span>

                                                     </div>
                                                     <div class="form-group mb-3">
                                                         <label>{{ $t('send_moeny_labels.senders_account_name') }}</label>
                                                         <input  type="text"
                                                                 readonly
                                                                 name="accountname" class="form-control" placeholder="Account name"
                                                                 v-validate="'required'"
                                                                 v-model="source.accountname"
                                                         />
                                                     </div>
                                                     <div class="form-group mb-3">
                                                         <label> {{ $t('send_moeny_labels.senders_account_number') }}</label>

                                                             <span class="ml-2">
<!--                                                                  <img :src="source.providerlogourl"-->
<!--                                                                       alt-->
<!--                                                                       height="24"-->
<!--                                                                  />-->
                                                                   <input  type="text"
                                                                           readonly
                                                                           name="mobilenooraccountno" class="form-control"
                                                                           v-validate="'required'"
                                                                           v-model="source.displayaccountnoforview"
                                                                   />
                                                             </span>

                                                     </div>
                                                     <div class="row">
                                                         <div class="col-md-6 col-sm-12">
                                                             <div class="form-group mb-3">
                                                                 <label> {{ $t('send_moeny_labels.sending_amount') }} </label>
                                                                 <input  type="text"
                                                                         readonly
                                                                         name="sendingamount" class="form-control"
                                                                         v-validate="'required'"
                                                                         v-model="preview.sendingamount"
                                                                         :class="{'is-invalid': vErrors.has('amount') }"
                                                                 />
                                                             </div>
                                                         </div>
                                                         <div class="col-md-6 col-sm-12">
                                                             <div class="form-group mb-3">
                                                                 <label>{{ $t('send_moeny_labels.transaction_fee') }} </label>
                                                                 <input  type="text"
                                                                         readonly
                                                                         name="processingfee" class="form-control"
                                                                         v-validate="'required'"
                                                                         v-model="preview.processingfee"
                                                                         :class="{'is-invalid': vErrors.has('processingfee') }"
                                                                 />
                                                             </div>
                                                         </div>
                                                     </div>

                                                     <div class="row">
                                                         <div class="col-md-7 col-sm-12">
                                                             <div class="form-group mb-3">
                                                                 <label>  {{ $t('send_moeny_labels.total_amount') }}</label>
                                                                 <input  type="text"
                                                                         readonly
                                                                         name="totalamount" class="form-control" placeholder="Total amount"
                                                                         v-validate="'required'"
                                                                         v-model="preview.totalamount"
                                                                         :class="{'is-invalid': vErrors.has('totalamount') }"
                                                                         style="font-weight: bold;"
                                                                 />
                                                             </div>
                                                         </div>
                                                         <div class="col-md-5 col-sm-12">
                                                             <div class="form-group mb-3">
                                                                 <label> {{ $t('send_moeny_labels.pay_with') }} </label>
                                                                 <div>
                                                                     <img :src="source.providerlogourl"
                                                                          alt
                                                                          height="24"
                                                                     />
                                                                     <span class="ml-1"><b>{{ source.servicename}}</b> </span>
                                                                 </div>

                                                             </div>
                                                         </div>
                                                     </div>

                                                 </div>
                                                 <div class="col-md-6 col-sm-12" style="border-left: 1px solid black; height: 410px;">
                                                     <div class="form-group mb-3">
                                                         <label> {{ $t('send_moeny_labels.sending_money_to') }} :</label>
                                                         <span  style="float: right !important;" v-if="recipient.country">
                                                         <img :src="recipient.countryflagurl"
                                                              alt
                                                              height="24"
                                                         />
<!--                                                          {{ recipient.country.getCountryname() }}-->
                                                         </span>
                                                     </div>
                                                     <div class="form-group mb-3">
                                                         <label> {{ $t('send_moeny_labels.recipient_name') }}</label>
                                                         <input  type="text"
                                                                 readonly
                                                                 name="accountname" class="form-control" placeholder="Account name"
                                                                 v-validate="'required'"
                                                                 v-model="recipient.accountname"
                                                         />
                                                     </div>
                                                     <div class="form-group mb-3">
                                                         <label>{{ $t('send_moeny_labels.recipient_account') }}</label>
                                                         <input  type="text"
                                                                 readonly
                                                                 name="displayaccountno" class="form-control"
                                                                 v-validate="'required'"
                                                                 v-model="recipient.displayaccountnoforview"
                                                         />
                                                     </div>

                                                     <div class="form-group mb-3">
<!--                                                         <div class="row">-->
<!--                                                              <div class="col-lg-6">-->
<!--                                                                  <label> {{ $t('send_moeny_labels.receiving_amount') }}</label>-->
<!--                                                                  <input  type="text"-->
<!--                                                                          readonly-->
<!--                                                                          name="receivingamount" class="form-control" placeholder="Receiving amount"-->
<!--                                                                          v-validate="'required'"-->
<!--                                                                          v-model="preview.receivingamount"-->
<!--                                                                          :class="{'is-invalid': vErrors.has('receivingamount') }"-->
<!--                                                                  />-->
<!--                                                              </div>-->
<!--                                                              <div class="col-lg-6">-->
<!--                                                                  <label> {{ $t('send_moeny_labels.taxamount') }}</label>-->
<!--                                                                  <input  type="text"-->
<!--                                                                          readonly-->
<!--                                                                          name="taxamount" class="form-control" placeholder="Tax amount"-->
<!--                                                                          v-validate="'required'"-->
<!--                                                                          v-model="preview.taxamount"-->
<!--                                                                          :class="{'is-invalid': vErrors.has('taxamount') }"-->
<!--                                                                  />-->
<!--                                                              </div>-->
<!--                                                         </div>-->
                                                         <label> {{ $t('send_moeny_labels.receiving_amount') }}</label>
                                                         <input  type="text"
                                                                 readonly
                                                                 name="receivingamount" class="form-control" placeholder="Receiving amount"
                                                                 v-validate="'required'"
                                                                 v-model="preview.receivingamount"
                                                                 :class="{'is-invalid': vErrors.has('receivingamount') }"
                                                         />
                                                     </div>

                                                     <div class="form-group mb-2">
                                                         <label> {{ $t('send_moeny_labels.exchange_rate') }} : <span style="color: #a92222;">{{ source.currencyiso }} 1  = {{ recipient.currencyiso}} {{ exchangeRate}} </span></label>
                                                     </div>

                                                     <div class="form-group mb-2">
                                                         <label> {{ $t('send_moeny_labels.receive_into') }} </label>
                                                         <img :src="recipient.providerlogourl"
                                                              alt
                                                              class="ml-5"
                                                              height="24"
                                                         />
                                                         <span class="ml-1"><b>{{ recipient.servicename}}</b> </span>
                                                     </div>

                                                 </div>
                                             </div>
                                          </div>

                                     </div>
                                     </b-overlay>
                                     <!-- end row -->
                                 </tab-content>
                             </form-wizard>
                         </div>
                     </div>
                 </div>
             </div>
         </b-overlay>
             <b-modal
                     id="modal-lg"
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

             <b-modal
                     id="recipient-list"
                     size="lg"
                     title=""
                     title-class="font-18"
                     hide-footer>

                 <div class="col-lg-12">
                     <div class="row">
                              <div class="col">
                                  <div class="card">
                                      <!-- start Pending customer table -->
                                      <div class="card-body">
                                          <AlertMessage :variant="dangerSuccess" :message="responseMessage" v-if="responseMessage"/>

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
                                                      :items="listofbeneficiaries"
                                                      :fields="tableFields"
                                                      responsive="sm"
                                                      :per-page="perPage"
                                                      :current-page="currentPage"
                                                      :sort-by.sync="sortBy"
                                                      :sort-desc.sync="sortDesc"
                                                      :filter="filter"
                                                      :filter-included-fields="filterOn"
                                                      @filtered="onFiltered"
                                                      @row-clicked="GetSelectedUserData"
                                              >


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


             </b-modal
             >
         </div>
     </div>
</template>

<script>

import { FormWizard,TabContent} from 'vue-form-wizard';
//import DatePicker from "vue2-datepicker";
import commons from '../../protos/CommonData_grpc_web_pb'
import grpcUrl from '../../components/constant/index'
import Multiselect from "vue-multiselect";
import customerInfo from "../../protos/Customer_grpc_web_pb";
import moneyTransfer from "../../protos/EganowMoneyTransfer_grpc_web_pb"
import Swal from 'sweetalert2'
//import AlertMessage from "../../components/shared/AlertMessage";
import SweetAlertConfig from "../../SwalConfig";
import SweetAlertWrapper from "../../sweetAlert";
import moneytransfer from "../../protos/EganowMoneyTransfer_grpc_web_pb";




export default {

    data(){
       return {
           creditCardNumber :'',
           groupCode :'',
           StatusCheck :false,
           showLoaderForCards : false,
           exchangeRate:'',
           searchben :{
               countrycode :'',
               groupcode :''

           },
           showLoaderAvailableSoucrceAccount : false,
           showlinkTogetBeneficiaries :false,
           responseMessagepaymentInfo :'',
           responseMessageVisaCard :'',
           collapseAccordian : false,
           responseMessageCalculateChargeFailed : '',
           preview : {
                accountname : '',
                sendingamount :'',
                exchangerate :'',
                receivingamount :'',
                receivingamountwithoutcurrency : '',
                processingfee :'',
                totalamount : '',
                taxamount :''

           },
           status :'',
           checkifprovideriseganow : false,
            providereganow :'',
           enableExchangeRateAtRecipient : false,
           responseMessageMomo :'',
           responseMessageGenerateotp :'',
           responseMessageMoneyTransfer :'',
           showSelectedCountryStatus : false,
           showsourceCountryLoader : false,
           showsourceGenerateOtpLoader : false,
           accountstatus: '',
           sourcecountrystatus :'',
           clients:{},
           AllCountries:[], // source countries
           OperatingCountries : [],
           AccountTypes : [],
           AccountProviders :[],
           AllAccountProviders :[],
           MobileMoneyAccountTypes :[],
           listsOfExistingSourceAccount :[],
           enableConfirmAndPayButton : false,
           showLoaderCustomerNameForSource : false,
           mtn :{
             mobileno:''
           },

           airteltigo :{
             mobileno  :''
           },
           vodafone :{
              mobileno : ''
           },
           card :{
              cardnumber:'',
               year: '',
               month:'',
               Cvv :'',
               cardname :''
           },
           cardResponse :{
              redirectOtpurl:''
           },
           source : {
               sourcecountry :'',
               sendingamountcurrency :'',
               sendingcurrency :[],
               currencyiso : '',
               otp :'',
               accountno:'',
               mobilenooraccountno: '',
               accountname :'',
               minlength:'',
               maxlength :'',
               countrycode :'',
               groupcode :'',
               countrydialcode :'',
               paypartnerserviceid:'',
               remembersourceaccount : false,
               countryflagurl :'',
               providerlogourl:'',
               servicename :'',
               displayaccountnoforview:''
           },
           addSource : {
                 accountname:'',
                 accountnumber :''
           },
           mobilemoney : {
               paypartnerserviceid :'',
               payPartnerServiceName :''
           },
           recipient : {
               country:'',
               mobilenooraccountnumber:'',
               eganowaccountno :'',
               actualeganowaccountno :'',
               accounttype:'',
               accountprovider :'',
               mobilemoneytype:'',
               displayaccountno :'',
               amount:'',
               reference:'',
               countrycode: '',
               countrydialcode :'',
               minlengthofmobileno :'',
               maxlengthofmobileno :'',
               accountname:'',
               currencyiso :'',
               groupCode: '',
               merchantserviceid: '',
               countryflagurl:'',
               providerlogourl :'',
               displayaccountnoforview:'',
               servicename:''
           },
           radiobutonStatus : '',
        transfer : {
           recipientcountry:'',
            recipientname:'',
            recipientnumber:'',
            mobilemoneytype:'',
            accountname:'',
            amount:'',
            reference:'',
            senderaccountnumber:'',
            countrycode:'',
            totalamountwithoutcurrencyiso:''
        },
           momo :{
             paypartnerserviceid: '',
             mobileno :''
           },
           clientsCustomer : {},
           clientMoneyTransfer :{},
       dangerSuccess:'danger',
       responseMessage:'',
       listofbeneficiaries :[],
           listOfCurrencies :[],
        listofsourceaccounttypes :[],
        listofsourceaccountproviders :[],
       showLoader: false,
           showLoaderMoneyTransfer: false,
           showLoaderCustomerName : false,
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
                   label:"Account number / Mobile number",
                   key: "displayAccountNo",
                   sortable: true,
               },
               {
                   label: "Account name",
                   key: "beneficiaryAccountName",
                   sortable: true,
               }
           ],
       }
    },
    components : {
        FormWizard,
        TabContent,
        Multiselect,
       // AlertMessage
    },
    methods : {
        GetActiveSourceAccount(){
            try {
                this.radiobutonStatus = false;
                this.GetExistingSourceAccountByCustomerID();
            }catch (e) {
                console.log(" source accounts ")
            }

        },
        ClearSelectedSourceAndProcessingFees(){
            try {
                this.ClearSelectedSourceAndFeesCalculation()
                this.GetExchangeRateForCurrencies()
                const selectors = document.querySelectorAll(".removeborder")

                for(let i = 0; i < selectors.length; i++) {
                    selectors[i].style.border = "none";
                }

            }catch (e) {
                console.log(" Error : ", e)
            }

        },
        ValueOfPaymentMethodStatusCheck() {
            console.log(" Check staus : ", this.status)
        },
        ClearSourceData(){
           this.radiobutonStatus = null
        },
        ClearPatmentCardAccountDetails(e){

            try {
                 this.card = {
                     cardnumber: '',
                     cardname: '',
                     month: '',
                     year: ''
                 }
                 this.creditCardNumber =''
                 this.status = "not_accepted"
                e.preventDefault()

                }catch (e) {
              console.log(" Error ; ", e)
            }

        },
        AddSourceCardAccount : async function(){
            try {

                 this.card.cardnumber = this.creditCardNumber.replace(/-/g, "");
                 console.log(" Card number : ", this.card.cardnumber)
                let validatedcardno = await this.$validator.validate('creditCardNumber', this.card.cardnumber);
                let validatedcardname = await this.$validator.validate('cardname', this.card.cardname);
                let validatedyear = await this.$validator.validate('year', this.card.year);
                let validatedmonth = await this.$validator.validate('year', this.card.month);
                let validatedcvv = await this.$validator.validate('Cvv', this.card.Cvv);

                if(validatedcardno && validatedcardname && validatedyear && validatedmonth && validatedcvv){

                    const request = new moneyTransfer.CustomerSourceAcctCardRequestMessage()
                    request.setCardnumber(this.card.cardnumber)
                    request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                    request.setExpirydateyear(parseInt(this.card.year.toString().substr(-2)))
                    request.setExpirydatemonth(parseInt(this.card.month))
                    request.setNameoncard(this.card.cardname)
                    request.setCvv(this.card.Cvv)
                    request.setCountrycode(this.source.countrycode)
                    request.setMobileorweb("WEB")
                    this.responseMessagepaymentInfo = ''
                    this.showLoaderForCards = true
                    this.clientMoneyTransfer.addCustomerCardSourceAccount(request, this.$store.getters.metadata, (err,res) => {
                    this.showLoaderForCards = false
                        if(err) {
                            console.log(" Error : ",err)
                        }
                        console.log(" Res : ", res)
                        if(res.getIssuccess()) {
                            this.cardResponse.redirectOtpurl = res.getRedirectotpurl()
                             this.cardResponse.redirectOtpurl.replace(/"/g, '\\"')
                            console.log("Card redirected url  : ",res.getRedirectotpurl())

                           const timer = setTimeout(() => {
                                let e = document.getElementById("redirectTo3ds1Form");

                                if (e) {

                                    e.submit();
                                    if (e.parentNode !== null) {
                                        e.parentNode.removeChild(e);
                                    } }
                            }, 500)
                             clearTimeout(timer)
                             this.$bvModal.show('modal-lg')
                             this.collapseAccordian = false
                             this.$refs.ClearSourcecardaccount.reset()
                             this.GetExistingSourceAccountByCustomerID()
                             this.ClearPatmentCardAccountDetails()
                             this.dangerSuccess = 'success'
                             this.responseMessagepaymentInfo = res.getMessage()
                             console.log(" Card service response : ", res)
                        }
                        else {
                            this.dangerSuccess = 'danger'
                             this.responseMessagepaymentInfo = res.getMessage()
                        }

                    })

                }


            }  catch (e) {
                console.log(" Error : ", e)
            }
        },
        ClearSelectedSourceAndFeesCalculation(){

            this.preview.processingfee =''
            this.preview.totalamount = ''
            this.radiobutonStatus = null
        },
        AddMomoToSourceAccount: async function(){

            let validatedmobileno = await this.$validator.validate('mobilenooraccountno', this.source.mobilenooraccountno);
            let validateaccountprovider = await this.$validator.validate('payPartnerServiceName', this.mobilemoney.paypartnerserviceid);
            let validateaccountname = await this.$validator.validate('accountname', this.source.accountname);

            if(validatedmobileno && validateaccountprovider && validateaccountname){

              // create otp
                this.GenerateSourceAccountotp()
                this.collapseAccordian = false
                // this.ClearSourceAccountFields()
            }
        },

        GetCustomerBeneficiaryListBySelectedProvider(){

            try {
                const request = new moneyTransfer.BeneficiaryListByProviderRequestMessage()
                 request.setCountrycode(this.$store.getters.getUserInfo.countryCode)
                 request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                 request.setPaypartnerserviceid(this.recipient.merchantserviceid)

                this.clientMoneyTransfer.getCustomerBeficiaryListForSelectedProvider(request, this.$store.getters.metadata, (err, res) => {

                    if(err){
                        console.log(" Selected beneficiary provider error : ", err)
                    }

                    if(res) {

                        this.listofbeneficiaries = []
                        res.getBeneficiarylistList().forEach((data) => {
                            this.listofbeneficiaries.push({
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
                                logoUrl : data.getLogourl()
                            })
                        })
                    }
                })

            } catch (e) {
                console.log(" Eror : ", e)
            }
        },
        GetCustomernamebyMobileNo(number) {
            try {

                 if(this.recipient.accountname !== 'eganow') {

                     if(this.recipient.groupCode === 1) {
                         let currentlengthofnumber = 0
                         // check if number starts with zero
                         if(number.startsWith('0')){
                             this.recipient.mobilenooraccountnumber = number.slice(1)
                             console.log(" here : ", number.length - 1 )
                             currentlengthofnumber = parseInt(number.length - 1);

                         } else {
                             currentlengthofnumber = number.length
                         }

                         console.log(" here : ", this.recipient.minlengthofmobileno)
                         if(this.recipient.minlengthofmobileno >= currentlengthofnumber) {
                             this.recipient.accountname = ''
                             const request = new moneyTransfer.MerchantCustomerAccountNoRequestMessage()
                             request.setCountrycode(this.recipient.countrycode)
                             request.setCustomeracctno(this.recipient.countrydialcode+""+number)
                             request.setMerchantserviceid(this.recipient.merchantserviceid)
                             request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                             console.log(" Customer number : ", this.recipient.countrydialcode+""+number)
                             this.showLoaderCustomerName = true
                             this.clientMoneyTransfer.getMerchantCustomerKyc(request,this.$store.getters.metadata, (err,res) => {
                                 this.showLoaderCustomerName = false
                                 if(err) {
                                     console.log(" Customer KYC erro : ", err)
                                 }

                                 if(res.getIssuccess()) {
                                     this.recipient.accountname = res.getCustomername()
                                 }
                             })
                         }
                     }
                     console.log(" Group code  : " , this.recipient.groupCode)
                 }


            }catch (e) {
                console.log(" Error : ", e)
            }

        },
        GetCustomernamebyMobileNoSource(number) {
            try {
                    if(number.length >= this.source.minlength) {

                        const request = new moneyTransfer.MerchantCustomerAccountNoRequestMessage()
                        request.setCountrycode(this.source.countrycode)
                        request.setCustomeracctno(this.source.countrydialcode+""+this.source.mobilenooraccountno)
                        request.setMerchantserviceid(this.mobilemoney.paypartnerserviceid)
                        request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                        console.log(" Customer number : ", this.source.countrydialcode+""+number)
                        this.showLoaderCustomerNameForSource = true
                        this.clientMoneyTransfer.getMerchantCustomerKyc(request,this.$store.getters.metadata, (err,res) => {
                            this.showLoaderCustomerNameForSource = false
                            if(err) {
                                console.log(" Customer KYC erro : ", err)
                            }

                            if(res.getIssuccess()) {
                                console.log(" Customer name : ", res.getCustomername())
                                this.source.accountname = res.getCustomername()

                            }
                            else {
                                console.log( " Customer name failed : ", res.getMessage())
                            }
                        })
                    }


            }catch (e) {
                console.log(" Error : ", e)
            }

        },
        GenerateSourceAccountotp(){
            try {

                const request = new commons.OTPTransRequestMessage()
                console.log(" Mobile number :", this.source.mobilenooraccountno)
                console.log(" country code data : ", this.source.country)
                console.log(" country code dial : ", this.source.countrydialcode)
                request.setMobilenoorbankormerchantaccountno(this.source.countrydialcode+""+this.source.mobilenooraccountno)
                request.setPaypartnerserviceid(this.mobilemoney.paypartnerserviceid)
                request.setPaypartnergroupcode(1)
                request.setCountrycode(this.source.countrycode)
                //this.source.sourcecountry.getCountrycode()
                request.setLanguageid(this.$store.getters.getUserInfo.languageId)

                this.showsourceGenerateOtpLoader = true
                this.clients.createOTPForAddingSourceAccountNo(request, this.$store.getters.metadata, (err, res) => {
               this.showsourceGenerateOtpLoader = false
                    if (err) {
                        console.log(" Error : ", err)
                    }

                     if (res.getIssuccess() || res.getRegistrationerrorcode() === 'OTPSENT') {

                        Swal.fire({
                            title:res.getMessage(),
                            input: 'password',
                            inputAttributes: {
                                autocapitalize: 'off'
                            },
                            showCancelButton: true,
                            confirmButtonText: 'Confirm otp',
                            showLoaderOnConfirm: true,
                            preConfirm: (pin) => {
                                return new Promise((resolve, reject) => {
                                    try {

                                        const requestCustomer = new customerInfo.VerifyOTPRequestMessage()
                                        //console.log(" Dial code : ", this.source.countrydialcode)
                                        requestCustomer.setCustomerid(this.source.countrydialcode+""+this.source.mobilenooraccountno)
                                        requestCustomer.setLanguageid(this.$store.getters.getUserInfo.languageId)
                                        requestCustomer.setPersonalbusinessvalue(2)
                                        requestCustomer.setCountrycode(this.source.countrycode)
                                        this.source.otp = pin
                                        requestCustomer.setOtpvalue(pin)

                                        //this.showsourceGenerateOtpLoader = true
                                        this.clientsCustomer.verifyTransOTPNow(requestCustomer, this.$store.getters.metadata, (err, res) => {
                                            // this.showsourceGenerateOtpLoader = false
                                            if (err) {
                                                console.log(" Error : ", err)
                                            }
                                            if (!res.getIssuccess()) {
                                                this.source.mobilenooraccountno = ''
                                                this.source.accountname =''
                                                Swal.showValidationMessage(
                                                    res.getMessage()
                                                )

                                                return  resolve(res.getMessage())

                                            }
                                            else {
                                                // Working
                                                 console.log(" hit at else ")
                                                this.AddSourceAccountMomoBankAndMerchant()

                                            }
                                           return  reject()
                                        })

                                    } catch (e) {
                                        Swal.showValidationMessage(
                                            e
                                        )
                                        return resolve()
                                    }
                                })
                            },
                            allowOutsideClick: () => Swal.isLoading()
                        }).then((result) => {
                            if (result.isConfirmed) {
                                console.log(" hit at then: ")
                                this.AddSourceAccountMomoBankAndMerchant()
                                Swal.fire({})

                            }
                        })
                    }
                    else {
                 //       console.log("  error code : ", res.getRegistrationerrorcode())
                        this.responseMessageMomo = res.getMessage()
                    }

                })
            }
            catch (e) {
                console.log( " Error : ", e)
            }
        },
        AddSourceAccountMomoBankAndMerchant() {

            try {

                const request = new moneyTransfer.CustomerSourceAcctRequestMessage()
                console.log("add source data : ", this.source.sourcecountry[0].getCountrydialcode())
                console.log("country code : ", this.source.sourcecountry.getCountrycode())
                  request.setCountrycode(this.source.sourcecountry.getCountrycode())
                  request.setCurrencyiso(this.source.currencyiso)
                  request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                  request.setOtpvalue(this.source.otp)
                  request.setPaypartnerserviceid(this.mobilemoney.paypartnerserviceid)
                  request.setSourceaccountno(this.source.sourcecountry.getCountrydialcode()+""+ this.source.mobilenooraccountno)
                  request.setSourceaccountname(this.source.accountname)
                  request.setPaypartnergroupcode(1)
                    console.log(" Source account adding request : ", request)
                 this.clientMoneyTransfer.addCustomerMomoBankAndMerchantSourceAccount(request, this.$store.getters.metadata, (err,res) => {
                     if(err) {
                         console.log(" Error : ", err)
                     }
                     if(res.getIssuccess()) {
                         console.log(" Source account added : ",res.getMessage() )
                         this.GetExistingSourceAccountByCustomerID()
                         this.showsourceGenerateOtpLoader = false
                        // this.$refs.ClearAddMomoToSourceAccount.reset();
                         this.collapseAccordian = false;

                         Swal.fire({
                             icon: 'success',
                             title: 'Source account',
                             text: res.getMessage()
                         })
                     }
                     else {
                         console.log(" ")
                         this.responseMessage = res.getMessage()
                         Swal.showValidationMessage(
                             res.getMessage()
                         )
                         Swal.hideLoading()
                     }
                 })

            }catch (e) {
                console.log(" Error : ", e)
            }
        },

        AddAirtelTigo : async function(){
            let validatedairtelmobileno = await this.$validator.validate('mobileno', this.airteltigo.mobileno);
            if(validatedairtelmobileno){
                console.log(" data : " , this.airteltigo.mobileno)
                this.$refs.ClearairteltigoFormdata.reset()
            }
        },
        AddVodafone : async function(){
            let validatevodafonemobileno = await this.$validator.validate('mobileno', this.vodafone.mobileno);
            if(validatevodafonemobileno){
                console.log(" data : " , this.vodafone.mobileno)
                this.$refs.ClearvodafoneFormdata.reset()
            }
        },
        validateRecipientAndSourceData: async function(){


            console.log(" Account number : ", this.recipient.mobilenooraccountnumber)
            let validatedcountry = await this.$validator.validate('country', this.recipient.country);
            console.log(" country :", validatedcountry)


            let validatedmobilemoneytype = await this.$validator.validate('accounttype', this.recipient.accounttype);
            console.log(" momo type :", validatedmobilemoneytype)

            let validatedaccountname = await this.$validator.validate('accountname', this.recipient.accountname);
            console.log(" account name :", validatedaccountname)

            let validatedamount = await this.$validator.validate('amount', this.recipient.amount);

            let validatereference = await this.$validator.validate('reference',this.recipient.reference);

            let validateSelectSource = await this.$validator.validate('radiobutonStatus', this.radiobutonStatus);
             if(!validateSelectSource) {
                 this.dangerSuccess = 'danger'
                 this.responseMessageCalculateChargeFailed = 'Select source account'
             }
            if(this.providereganow === 'eganow') {
              // let amount = this.recipient.amount.trim()
                this.preview.sendingamount = grpcUrl.formatMoney(this.recipient.amount,this.recipient.currencyiso)
                console.log(" sending amount : ", grpcUrl.formatMoney(this.recipient.amount,this.recipient.currencyiso))
                this.GetExchangeRateForCurrencies()
                this.GetExistingSourceAccountByCustomerID()
                return validatedcountry  && validatedmobilemoneytype && validatedaccountname && validatedamount && validatereference && validateSelectSource;
            }

            let validatedcountrycode = await this.$validator.validate('countrycode', this.recipient.countrycode);
            console.log(" country code :", validatedcountrycode)

            let validatedmobileNo = await this.$validator.validate('mobilenooraccountnumber', this.recipient.mobilenooraccountnumber);
            console.log(" Mobile no :", validatedmobileNo)

          // let amount = this.recipient.amount.trim()
            //grpcUrl.formatMoney(amount,this.source.currencyiso)
            this.preview.sendingamount =  grpcUrl.formatMoney(this.recipient.amount,this.recipient.currencyiso) // this.source.currencyiso+" "+grpcUrl.formatMoneyWithoutCurrency(this.recipient.amount)

            this.recipient.displayaccountno = this.recipient.countrydialcode+""+this.recipient.mobilenooraccountnumber;
            this.recipient.displayaccountnoforview = this.recipient.countrydialcode+""+this.recipient.mobilenooraccountnumber;

            this.GetExchangeRateForCurrencies()
            this.GetExistingSourceAccountByCustomerID()

            return validatedcountry && validatedmobileNo && validatedcountrycode  && validatedmobilemoneytype && validatedaccountname && validatedamount && validatereference && validateSelectSource;
        },
        validateSourceAccountData : async function(){
             // Delect selected source account
            let validated_processingfee = await this.$validator.validate('processingfee', this.preview.processingfee);
            let validated_totalamount = await this.$validator.validate('totalamount', this.preview.totalamount);

            if(validated_processingfee && validated_totalamount) {

                this.VerifyCustomerEgaonwPin()
            }else{
               // this.responseMessageMoneyTransfer = ''
                this.dangerSuccess = 'danger'
                this.responseMessageMoneyTransfer = 'Select an available payment methods'
            }

                this.enableConfirmAndPayButton = false
            return true
        },
        VerifyCustomerEgaonwPin(){
             try {
                     Swal.fire({
                         title:'Enter your eganow 4 digit pin',
                         input: 'password',
                         inputAttributes: {
                             autocapitalize: 'off'
                         },
                         showCancelButton: true,
                         confirmButtonText: 'Submit',
                         showLoaderOnConfirm: true,
                         preConfirm: (pin) => {
                             return new Promise((resolve, reject) => {
                                 try {
                                     const request = new moneyTransfer.VerifyCustomerPinMessage()
                                     console.log(" Customer pin :", pin)
                                     request.setCustomerid(this.$store.getters.getUserInfo.customerId)
                                     request.setCustomerpin(pin)

                                     this.showLoaderMoneyTransfer = true
                                     this.clientMoneyTransfer.isCustomerPinValid(request, this.$store.getters.metadata, (err, res) => {
                                         // this.showsourceGenerateOtpLoader = false
                                         if (err) {
                                             console.log(" Error : ", err)
                                         }
                                         console.log(" REsponse : ", res)
                                         if (!res.getIssuccess()) {

                                             Swal.showValidationMessage(
                                                 'Invalid customer pin'
                                             )
                                             this.showLoaderMoneyTransfer = false
                                             return  resolve('Invalid customer pin')
                                         }
                                         else {
                                             this.TransferMoney()
                                         }
                                         return  reject()
                                     })

                                 } catch (e) {
                                     Swal.showValidationMessage(
                                         e
                                     )
                                     this.showLoaderMoneyTransfer = false
                                     return resolve()
                                 }
                             })

                         },
                         allowOutsideClick: () => Swal.isLoading()
                     }).then((result) => {
                         if (result.isConfirmed) {
                             // Not working
                             this.AddSourceAccountMomoBankAndMerchant()
                             Swal.fire({})

                         }
                     })



             }catch (e) {
                 console.log(" Error : ", e)
             }
        },
        TransferMoney() {
            try {
                console.log(" Money transfer")

                this.sweetAlert.showDialogYesOrNo(Object.assign(SweetAlertConfig, {
                    title : 'Transfer money',
                    text :`Transfer - ${this.recipient.amount} to ${this.recipient.accountname}`,
                    confirmButtonText : 'Yes, transfer'
                }), () => {

                    const request = new moneyTransfer.MoneyTransferRequestMessage()

                    request.setBeneficiaryaccountname(this.recipient.accountname)
                    if(this.providereganow === 'eganow'){
                        request.setBeneficiaryaccountno(this.recipient.actualeganowaccountno)
                    }
                    else {
                        request.setBeneficiaryaccountno(this.recipient.countrydialcode+""+this.recipient.mobilenooraccountnumber)
                    }

                    request.setBeneficiarycountrycode(this.recipient.countrycode)
                    request.setBeneficiarycurrecyiso(this.recipient.currencyiso)
                    request.setBeneficiarypaypartnerserviceid(this.recipient.merchantserviceid)
                    request.setCustomerid(this.$store.getters.getUserInfo.customerId)
                    request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                    request.setMobileorweborussd("WEB")
                    request.setSenderaccountname(this.source.accountname)
                    request.setSenderaccountno(this.source.mobilenooraccountno)
                    request.setSendercountrycode(this.source.countrycode)
                    request.setSenderpaypartnerserviceid(this.source.paypartnerserviceid)
                    request.setTransamount(this.preview.receivingamountwithoutcurrency)
                    request.setSendertranscurrecyiso(this.source.currencyiso)
                    request.setTransnarration(this.recipient.reference)
                    request.setSenderpaypartnergroupid(this.source.groupcode)
                    console.log(" Recipient group code : ",this.recipient.groupCode)
                    request.setBeneficiarypaypartnergroupid(this.recipient.groupCode)
                     console.log("Group code ben :", this.recipient.groupCode)
                    request.setRemembermysourcepaymentaccountyesno(this.source.remembersourceaccount)
                    request.setPurposeoftransferorpayment('Purpose')

                    this.showLoaderMoneyTransfer = true
                   this.clientMoneyTransfer.postMobileMoneyTransferTrans(request, this.$store.getters.metadata, (err,res) => {
                     this.showLoaderMoneyTransfer = false
                        if(err) {
                            console.log(" Error : ", err)
                        }
                       console.log(" Response : ", res)

                       if(res.getIssuccess()) {
                           if(this.source.groupcode === 3) {
                               console.log(" I frame : ", res.getOtpiframe() )
                               if(res.getOtpiframe()  != null){
                                   this.cardResponse.redirectOtpurl = res.getOtpiframe()
                                   this.cardResponse.redirectOtpurl.replace(/"/g, '\\"')
                                   console.log("Card redirected url  : ",res.getOtpiframe() )

                                   setTimeout(() => {
                                       var e = document.getElementById("redirectTo3ds1Form");

                                       if (e) {
                                           e.submit();
                                           if (e.parentNode !== null) {
                                               e.parentNode.removeChild(e);
                                           } }
                                   }, 500)
                                   this.$bvModal.show('modal-lg')

                                   this.ClaerSourceData()
                                   // MUST CHECK IF OTP OS ENTERED
                                   this.dangerSuccess ='success'
                                   this.responseMessageVisaCard = 'Transaction is initiated, you will be notify soon'

                               }
                               else {
                                   this.responseMessageMoneyTransfer = res.getMessage()
                               }

                           }
                           else {
                               this.ClaerSourceData()
                               this.sweetAlert.showMessage("Transfer money ", res.getMessage())
                           }


                        }
                        else {
                            this.responseMessageMoneyTransfer = res.getMessage()
                        }
                   })
                })

            }catch (e) {
                console.log(" Error : ", e)
            }
        },
        ClaerSourceData(){

            this.recipient = {
                country:'',
                mobilenooraccountnumber:'',
                accounttype:'',
                accountprovider :'',
                mobilemoneytype:'',
                amount:'',
                reference:'',
                countrycode: '',
                countrydialcode :'',
                minlengthofmobileno :'',
                maxlengthofmobileno :'',
                accountname:'',
                currencyiso :'',
                groupCode: '',
                merchantserviceid: ''
            }
            this.$refs.ClearMoneyTransferData.navigateToTab(0)
            this.$refs.ClearMoneyTransferData.reset();
            this.radiobutonStatus = null
            const selectors = document.querySelectorAll(".removeborder")

            for(let i = 0; i < selectors.length; i++) {
                selectors[i].style.border = "none";
            }

          //  e.preventDefault();
        },
        //todo Beneficiaries  done
        GetCountryCodeForSelectedCountry(selectedCountryInfo) {

            try {
                     console.log('Recepient info : ', selectedCountryInfo)
                this.recipient.countrycode = selectedCountryInfo.getCountrycode()
                this.recipient.countrydialcode =selectedCountryInfo.getCountrydialcode()
                this.recipient.currencyiso = selectedCountryInfo.getCurrencyiso()
                this.recipient.countryflagurl = selectedCountryInfo.getCountryflagurl()
                this.GetRecipientAccountType(selectedCountryInfo.getCountrycode())
                if(this.providereganow !== 'eganow') {

                    this.recipient.minlengthofmobileno = selectedCountryInfo.getMobilenominlen() - selectedCountryInfo.getCountrydialcode().length
                    this.recipient.maxlengthofmobileno = selectedCountryInfo.getMobilenomaxlen() - selectedCountryInfo.getCountrydialcode().length
                }

                this.source.sendingamountcurrency = selectedCountryInfo// selectedCountryInfo.getCurrencyiso()
                this.source.currencyiso = selectedCountryInfo.getCurrencyiso()
                this.source.countryflagurl = selectedCountryInfo.getCountryflagurl()
                this.GetExistingSourceAccountByCustomerID();
                this.GetExchangeRateForCurrencies();

            }catch (e) {
                console.log(" Error : " , e)
            }




        },
        GetSelectedUserData(record, index){
            try {

                console.log(" Index : ", index)
                if(this.providereganow === 'eganow') {
                    this.checkifprovideriseganow = true;
                    this.recipient.eganowaccountno = record.displayAccountNo
                    this.recipient.displayaccountnoforview = record.displayAccountNo
                    this.recipient.accountname = record.beneficiaryAccountName
                    this.recipient.actualeganowaccountno = record.beneficiaryAccountNo
                }else{

                    this.recipient.accountname = record.beneficiaryAccountName
                    this.recipient.displayaccountnoforview = record.beneficiaryAccountNo
                    this.recipient.mobilenooraccountnumber = record.beneficiaryAccountNo.slice(3)

                }

                this.$bvModal.hide("recipient-list")
                this.$set(record, '_showDetails', false)
            }catch (e) {
                console.log( " Error : ", e)
            }

        },
        GetBeneficiaryListByCountryCodeAndGroupCode() {

            try {
                const request = new moneytransfer.BeneficiaryListByPayPartnerRequestMessage()
                 console.log(" Is Ben Godwin")
                request.setCountrycode(this.searchben.countrycode.getCountrycode())
                request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                request.setPaypartnergroupcode(this.searchben.groupcode.getPaypartnergroupid())
                this.showLoader = true
                this.clientMoneyTransfer.getCustomerBeficiaryListByPayPartnerId(request, this.$store.getters.metadata, (err,res) => {
                    this.showLoader = false
                    if(err) {
                        console.log(" Error : ", err)
                    }
                    if(res) {
                        this.listofbeneficiaries = []
                        res.getBeneficiarylistList().forEach((data) => {
                            this.listofbeneficiaries.push({
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
                                logoUrl : data.getLogourl()

                            })
                        })
                    }
                })

            } catch (e) {
                console.log("Error : ", e)
            }
        },
        GetBeneficiaryAccountTypeByCountryCode(selectedsourcecountry){

            try {

                this.searchben.countrycode = selectedsourcecountry.getCountrycode()
                this.GetSendersAccountTypeListByCountryCode(selectedsourcecountry.getCountrycode())

            }catch (e) {
                console.log("Error : ", e)
            }
        },
        GetGroupCodeByCountryCode(selectedCountry){

            try {
                console.log(" Selected country : ", selectedCountry)
                this.searchben.groupcode = selectedCountry.getPaypartnergroupid()
                console.log(" Group code: ", selectedCountry.getPaypartnergroupid())

            }catch (e) {
                console.log("Error : ", e)
            }
        },
        GetRecipientOperatingCountries() {
            try {

                // console.log(" operating countries ")
                 let request = new commons.EmptyCommonDataMessage()

                this.clients.getReceivingOperatingCountries(request, this.$store.getters.metadata, (err,res) => {

                    if(res) {
                        this.OperatingCountries = res.getCountrylistList()
                    }

                })

            }catch (e) {
                console.log(" error : ", e.getMessage())
            }
        },
        GetRecipientAccountType(countrycode) {

            try {
                let request = new commons.CountryRequestMessage()

                request.setCountrycode(countrycode)
                request.setLanguageid(this.$store.getters.getUserInfo.languageId)

                this.clients.getPaymentTypeForBeneficiaryAccountsForSelectedCountry(request,this.$store.getters.metadata, (err , res) => {

                    if(res) {
                         this.AccountTypes = res.getPaymenttypeslistList();
                         console.log(" Recipient account type : ", this.AccountTypes)
                        this.AllAccountProviders = res.getPaymenttypesandsvclistList();
                    }
                })

            } catch (e) {
                console.log(" error : ", e.getMessage())
            }

        },
        GetAccountProvidersBySelectedAccountType(SelectedAccountType) {

            try {
                 console.log(" Selected account type name : ", SelectedAccountType.getAppname())
                this.accountstatus = SelectedAccountType.getAppname()
                 this.recipient.accounttype = SelectedAccountType.getAppname()
                this.recipient.groupCode = SelectedAccountType.getPaypartnergroupid()
                this.AccountProviders = []
                this.AccountProviders = this.AllAccountProviders.filter( x => x.getPaypartnergroupid() === SelectedAccountType.getPaypartnergroupid())

                console.log(' Account provider list :  ', this.AccountProviders)
            }catch (e) {
                console.log(" Error : ", e)
            }


        },
        GetBeneficiariesMerchantServiceId(selectedAccountprovider){

            try {
                this.providereganow =  selectedAccountprovider.getPaypartnerservicename()
                this.recipient.servicename = selectedAccountprovider.getPaypartnerservicename()
                this.recipient.merchantserviceid = selectedAccountprovider.getPaypartnerserviceid()
                 this.recipient.providerlogourl = selectedAccountprovider.getLogourl()
                 console.log(" merchant id : ",this.recipient.merchantserviceid)
                this.recipient.mobilenooraccountnumber = ""
                this.recipient.accountname = ""

                     if(selectedAccountprovider.getPaypartnerservicename() === 'eganow'){
                         this.checkifprovideriseganow = true;
                        // this.recipient.displayaccountno = this.recipient.eganowaccountno;
                     }
                     else {
                         this.checkifprovideriseganow = false;
                     }

                     this.showlinkTogetBeneficiaries = true

            } catch (e) {
                console.log(" Error : ", e)
            }
        },

        // todo Source information
        // Sender countries
        GetSenderCountryList() {
            let request = new commons.EmptyCommonDataMessage()

            this.clients.getSenderAllCountries(request, this.$store.getters.metadata, (err,res) => {

                if(res) {
                    this.AllCountries = res.getCountrylistList()
                    //console.log(" All countries : ", this.AllCountries)
                }
            })
        },
        GetExistingSourceAccountByCustomerID() {

            try {
                console.log(" My request data")
                const request = new moneyTransfer.CustomerPaymentSourceAccountsRequestMessage()
                request.setBeneficiarycountrycode(this.recipient.countrycode)

                request.setBeneficiarycurrencycode(this.recipient.currencyiso)
                request.setSendingcurrencycode(this.source.currencyiso)
                   this.showLoaderAvailableSoucrceAccount = true

                this.clientMoneyTransfer.getCustomerPaymentSourceAccountListForTransaction(request, this.$store.getters.metadata , (err,res) => {
                    this.showLoaderAvailableSoucrceAccount = false
                    if(err) {
                        console.log(" Existing source account error : ", err)
                    }

                    if(res){

                        this.listsOfExistingSourceAccount = res.getCustexistingaccountsList()
                    }

                })

            }catch (e) {
                 console.log("Error : ", e)
            }
        },
        CalculateTransCharges(selectsourceaccount) {

             try {
                   if(selectsourceaccount.getSourceaccountstatus() === 'PENDING') {
                       this.dangerSuccess = 'danger'
                       this.responseMessageCalculateChargeFailed = 'Card is not yet authorized for transaction'
                   }

                 this.responseMessageCalculateChargeFailed = ''
                 const request = new moneyTransfer.CalculateTransChargeRequestMessage()
                  this.source.accountname = selectsourceaccount.getSourceaccountname()
                     if(selectsourceaccount.getPaypartnerservicename() == 'eganow card'){
                       this.source.displayaccountnoforview = selectsourceaccount.getDisplaysourceaccountno()
                     }
                     else {
                         this.source.displayaccountnoforview = selectsourceaccount.getSourceaccountno()
                     }
                     // console.log(" Pay partner service id : ", selectsourceaccount.getPaypartnerserviceid())
                  console.log(" Pay partner service id card : ", selectsourceaccount.getSourceaccountno())
                  this.source.mobilenooraccountno = selectsourceaccount.getSourceaccountno()
                  this.source.paypartnerserviceid = selectsourceaccount.getPaypartnerserviceid()
                  this.source.groupcode = selectsourceaccount.getPaypartnertypeid()
                  this.source.providerlogourl = selectsourceaccount.getLogourl()
                  this.source.servicename = selectsourceaccount.getPaypartnerservicename()
                 //displaySourceAccountNo


                  request.setBeneficiarycountrycode(this.recipient.countrycode)
                  request.setDestinationpaypartnerserviceid(this.recipient.merchantserviceid)
                  request.setSendercountrycode(this.source.countrycode)
                  request.setSourcepaypartnerserviceid(selectsourceaccount.getPaypartnerserviceid())
                  console.log(" receiving amount : ",this.preview.receivingamountwithoutcurrency)
                  request.setTransamount(this.preview.receivingamountwithoutcurrency)
                  request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                  request.setSendertranscurrecyiso(this.source.currencyiso)
                  request.setBeneficiarycurrecyiso(this.recipient.currencyiso)
                  request.setSenderpaypartnergroupcode(this.source.groupcode)
                  request.setBeneficiarypaypartnergroupcode(this.recipient.groupCode)
                  request.setSenderaccountno(this.source.mobilenooraccountno)
                  request.setBeneficiaryaccountno(this.recipient.countrydialcode+""+this.recipient.mobilenooraccountnumber)
                      console.log(" Source account number ", this.source.mobilenooraccountno)
                  this.enableConfirmAndPayButton = true
                  this.clientMoneyTransfer.calculateMoneyTransferCharges(request,this.$store.getters.metadata , (err,res) => {

                      if(err) {
                          console.log(" Error : ", err)
                      }
                      if(res.getIssuccess()) {
                           this.preview.processingfee = grpcUrl.formatMoney(res.getChargeamount(),this.recipient.currencyiso)
                          this.preview.taxamount = grpcUrl.formatMoney(res.getTaxamountcharged(),this.recipient.currencyiso )
                          this.preview.totalamount =   grpcUrl.formatMoney(res.getTotaltranspluschargeamountplustax(),this.recipient.currencyiso)
                           this.transfer.totalamountwithoutcurrencyiso =  res.getChargeamount()
                      }
                      else {

                          this.dangerSuccess = 'danger'
                           this.responseMessageCalculateChargeFailed = res.getMessage()
                          console.log(" Failed : ", res.getMessage())
                      }

                       // Select the selected source account payment methods

                      const selectors = document.querySelectorAll(".removeborder")

                      for(let i = 0; i < selectors.length; i++) {
                          selectors[i].style.border = "none";
                      }
                      document.getElementById(selectsourceaccount.getSourceaccountno()).style.border = "1px solid #0078D4";

                  })

             }catch (e) {
                 console.log(" Error : ", e)
             }

        },
        GetSelectedCountryExchangeRateByCountryCode(selectedCountry){
            try {
                console.log(" Selected Currency : ", selectedCountry)
                this.ClearSelectedSourceAndFeesCalculation()
                this.source.sendingamountcurrency = selectedCountry.getCurrencyiso()
                this.source.currencyiso = selectedCountry.getCurrencyiso()
                //this.sourcecountrystatus = selectedCountry.getCountryname()
                this.source.countrycode = selectedCountry.getCountrycode()
                this.source.countrydialcode = selectedCountry.getCountrydialcode()
                this.source.countryflagurl = selectedCountry.getCountryflagurl()
                this.enableExchangeRateAtRecipient = true
                this.GetExchangeRateForCurrencies();

            }catch (e) {
                console.log("Error : ", e)
            }
        },

        GetSelectedCountryCurrencyByCountryCode(countrycode) {
              try {
                  const request = new commons.SendingAmountRequestMessage()

                  request.setBeneficiarycountrycode(countrycode)
                  request.setLanguageid(this.$store.getters.getUserInfo.languageId)

                  this.clients.getCurrenciesForSendingAmount(request, this.$store.getters.metadata , (err,res) => {
                      if(err) {
                          console.log(" Error : ", err)
                      }
                      if(res) {

                          this.listOfCurrencies = res.getCurrencylistList();
                          console.log(" Currencies : ", this.listOfCurrencies)
                          this.source.sendingamountcurrency = this.recipient.currencyiso
                      }
                  })

              }catch (e) {
                  console.log("Error : ", e)
              }
        },
        GetPaymentTypeForSenderBySelectedCountryCode(selectedsourcecountry){
            try {

                this.showSelectedCountryStatus = true
                this.collapseAccordian = true
                this.source.countrydialcode = selectedsourcecountry.getCountrydialcode()
                this.source.sourcecountry = selectedsourcecountry.getCountryname()
                this.sourcecountrystatus = selectedsourcecountry.getCountryname()
                this.source.countrycode = selectedsourcecountry.getCountrycode()
                this.source.currencyiso = selectedsourcecountry.getCurrencyiso()
                this.source.minlength = selectedsourcecountry.getMobilenominlen() - selectedsourcecountry.getCountrydialcode().length
                this.source.maxlength = selectedsourcecountry.getMobilenomaxlen() - selectedsourcecountry.getCountrydialcode().length


                this.GetSendersAccountTypeListByCountryCode(selectedsourcecountry.getCountrycode())

            }catch (e) {
                console.log("Error : ", e.getMessage())
            }
        },
        GetSendersAccountTypeListByCountryCode(countryCode) {
            try {
                const request = new commons.CountryRequestMessage()
                  request.setCountrycode(countryCode)
                 request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                this.showsourceCountryLoader = true
                this.clients.getPaymentTypeForSourceAccountsForSelectedCountry(request, this.$store.getters.metadata, (err,res) => {
                this.showsourceCountryLoader = false
                    if(err) {
                        console.log(" Error : ", err)
                    }
                    if(res) {
                        this.listofsourceaccounttypes = []
                        this.listofsourceaccountproviders =[]
                        this.listofsourceaccounttypes = res.getPaymenttypeslistList()

                        this.listofsourceaccountproviders = res.getPaymenttypesandsvclistList()
                        this.MobileMoneyAccountTypes = res.getPaymenttypesandsvclistList().filter(x => x.getPaypartnergroupid() ===1)
                    }
                })

                console.log(" Country code ")
            }catch (e) {
                console.log("Error : ", e)
            }
        },
        GetExchangeRateForCurrencies() {

            try {

                const request = new commons.CurrenExchRateRequestMessage();

                request.setBeneficiarycurrencyiso(this.recipient.currencyiso)
                request.setSendercurrencyiso(this.source.currencyiso)
                request.setLanguageid(this.$store.getters.getUserInfo.languageId)

                //console.log(" Exchange rate cal request : ", request)
                this.clients.getCurrenciesExchangeRate(request,this.$store.getters.metadata, (err,res) => {

                    if (err) {
                        console.log( " Error : ", err)
                    }
                    if (res) {

                        this.exchangeRate = res.getExchangerate()
                         this.preview.receivingamountwithoutcurrency = this.recipient.amount * res.getExchangerate()
                        //this.recipient.amount
                          let amount = this.recipient.amount.trim()
                         console.log(" amount : ",grpcUrl.formatMoney(amount,this.recipient.currencyiso))
                         this.preview.sendingamount =  grpcUrl.formatMoney(amount,this.recipient.currencyiso)
                         this.preview.receivingamount = grpcUrl.formatMoney(this.recipient.amount * res.getExchangerate(),this.recipient.currencyiso)
                    }

                })

            }catch (e) {
                console.log(" Error : ", e)
            }
        },
        GetSourceSelectedAccountTypeData(accounttype) {

            this.mobilemoney.paypartnerserviceid = accounttype.getPaypartnerserviceid()
        },
        GetSourceSelectedAccountTypeDataForMobileMoney(accounttype) {

             console.log(" Account type  test : ", accounttype)
            this.source.mobilenooraccountno =''
            this.source.accountname =''
             this.mobilemoney.paypartnerserviceid = accounttype.getPaypartnerserviceid()
        },
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
    },
    computed:{
        rows() {
            return this.listofbeneficiaries.length;
        },
        years () {
            const year = new Date().getFullYear() + 30
            return Array.from({length: year - new Date().getFullYear()}, (value, index) => new Date().getFullYear() + index)
        },
    },
  created() {

     this.clients = new commons.CommonDataSvcClient(grpcUrl.URL,null,null)
      this.clientsCustomer = new customerInfo.CustomerAccountClient(grpcUrl.URL,null,null)
     this.clientMoneyTransfer = new moneyTransfer.EganowMoneyTransferSvcClient(grpcUrl.URL,null,null)
      this.sweetAlert = new SweetAlertWrapper()
      this.GetSenderCountryList()
   //   this.GetExistingSourceAccountByCustomerID()
      this.GetRecipientOperatingCountries()
    this.$store.dispatch('setAppHeader', {
      title: "Money Transfer",
      items: [
        {
          text: "Dashboard",
          href: "#",
        },
        {
          text: "Money transfer",
          href: "#",
        },
      ],
    })
  },
    watch: {
        creditCardNumber() {
            // Card number without dash (-)
            let realNumber = this.creditCardNumber.replace(/-/gi, '')

            // Generate dashed number
            let dashedNumber = realNumber.match(/.{1,4}/g)

            // Replace the dashed number with the real one
            this.creditCardNumber = dashedNumber.join('-')
        }
    }
}
</script>

<style>
    #expandSelect .multiselect__content-wrapper {
        width: 21.7rem !important;
    }
    #previewstyle {
        border : 4px dotted rgb(233, 233, 233) !important;
        border-radius: 5px !important;
    }

    #benStyle {
        border : 1px solid rgb(233, 233, 233) !important;
        border-radius: 5px !important;

    }
    /*.vue-form-wizard .navbar .navbar-nav > li > a.wizard-btn, .vue-form-wizard .wizard-btn{*/
    /*    */
    /*}*/
    .wizard-footer-right > button {
        background-color: #cc0229 !important;
    }

    #redirectTo3ds1AcsSimple {
        height: 100%;
    }
</style>