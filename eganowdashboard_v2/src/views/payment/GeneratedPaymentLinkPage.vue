<template>
    <paymentTopbar>
     <div class="container">
         <b-overlay :show="showLoader" rounded="sm">
         <div class="col-lg-12">
             <div class="row">
                 <div class="col-md-12 col-lg-5 col-xl-5 col-sm-12 mx-auto">
                     <h4 class="text-center my-4"> <span class="font-weight-bold">Make payment to </span><span class="text-bold text-primary">{{servicename}} </span> </h4>

                     <div class="card">
                         <div class="card-body">
                             <div class="col-lg-12">
                                 <AlertMessage :variant="dangerSuccess" :message="responseMessage" v-if="responseMessage"/>
                             </div>
                             <div class="col-lg-12">
                                 <h5 class="headerText mb-3">Beneficiary information</h5>
                                 <div class="row">
                                     <div class="col-lg-4 col-sm-12">
                                         <div class="form-group mb-3" id="expandCurrencySelect">
                                             <label> Currency</label>
                                             <multiselect
                                                     :disabled="canUserchangeamount=== 'NO'"
                                                     id="currency"
                                                     name="currency"
                                                     v-model="getselectedCountry"
                                                     v-validate="'required'"
                                                     :options="CurrencyList"
                                                     :searchable="true"
                                                     :class="{'is-invalid': vErrors.has('currency') }" >
                                                 <template slot="singleLabel" slot-scope="props" class="p-0 m-0">
                                                     <img style="width: 20px !important; height: 20px !important; padding: 0px !important; margin: 0px !important;" :src="props.option.getCountryflagurl()" alt=""><span class="option__desc">
                                     <span class="option__title pl-1">{{ props.option.getCurrencyiso() }}</span></span>
                                                 </template>
                                                 <template slot="option" slot-scope="{ option }" class="h-25 w-25">
                                                     <img style="width: 30px !important; height: 30px !important;" :src="option.getCountryflagurl()"> {{ option.getCurrencyiso() }}
                                                 </template>
                                             </multiselect>
                                             <span v-show="vErrors.has('currency')" class="help text-danger">{{ vErrors.first('currency') }}</span>

                                         </div>
                                     </div>
                                     <div class="col-lg-8 col-sm-12">
                                         <div class="form-group mb-3">
                                             <label> Amount</label>
                                             <input  name="amount" type="text"  :readonly="canUserchangeamount==='NO'"
                                                     class="form-control"
                                                     v-validate="'required|numeric'"
                                                     :class="{'is-invalid': vErrors.has('amount') }"
                                                     v-model="data.amount"
                                             />
                                             <span v-show="vErrors.has('amount')" class="help text-danger">{{ vErrors.first('amount') }}</span>
                                         </div>
                                     </div>
                                 </div>
                                 <div class="row" >
                                     <div class="col-lg-12">
                                         <div class="form-group mb-3">
                                             <label> Narration</label>
                                             <input  name="narration" type="text"
                                                     class="form-control"
                                                     v-validate="'required'"
                                                     :class="{'is-invalid': vErrors.has('narration') }"
                                                     v-model="data.narration"
                                             />
                                             <span v-show="vErrors.has('narration')" class="help text-danger">{{ vErrors.first('narration') }}</span>
                                         </div>
                                     </div>
                                 </div>


                                 <div class="row">
                                     <div class="col-lg-12 col-sm-12 py-2">
                                     <h5 class="headerText"> {{ $t('send_moeny_labels.how_do_you_want_to_pay')}}</h5>
                                     </div>
                                     <div class="col-lg-12">
                                         <b-overlay :show="showsourceCountryLoader" rounded="sm">
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
                                                                                     <!--                                                                                                  <input  type="text"-->
                                                                                     <!--                                                                                                          name="countrydialcode" class="form-control" placeholder=""-->
                                                                                     <!--                                                                                                          readonly-->
                                                                                     <!--                                                                                                          v-model="source.countrydialcode"-->
                                                                                     <!--                                                                                                  />-->
                                                                                     <multiselect
                                                                                             disabled
                                                                                             id="countrydialcode"
                                                                                             name="countrydialcode"
                                                                                             v-model="getselectedCountry"
                                                                                             v-validate="'required'"
                                                                                             :options="AllCountries"
                                                                                             :searchable="true"
                                                                                             :class="{'is-invalid': vErrors.has('countrydialcode') }" >
                                                                                         <template slot="singleLabel" slot-scope="props" class="p-0 m-0">
                                                                                             <img style="width: 20px !important; height: 20px !important; padding: 0px !important; margin: 0px !important;" :src="props.option.getCountryflagurl()" alt=""><span class="option__desc">
                                                                               <span class="option__title pl-1">{{ props.option.getCountrydialcode() }}</span></span>
                                                                                         </template>
                                                                                         <template slot="option" slot-scope="{ option }" class="h-25 w-25">
                                                                                             <img style="width: 30px !important; height: 30px !important;" :src="option.getCountryflagurl()"> {{ option.getCountrydialcode() }}
                                                                                         </template>
                                                                                     </multiselect>
                                                                                 </div>
                                                                             </div>
                                                                             <div class="col-md-7">
                                                                                 <div class="form-group mb-3">
                                                                                     <label>{{ $t('send_moeny_labels.mobile_number')}} </label>
                                                                                     <input id="mobilenooraccountno" type="text"
                                                                                            name="mobilenooraccountno" class="form-control" placeholder="Mobile number"
                                                                                            v-validate="'required|min:'+source.minlength+'|max:10'"
                                                                                            v-model="source.mobilenooraccountno"
                                                                                            @change="GetCustomernamebyMobileNoSource(source.mobilenooraccountno)"
                                                                                            :class="{'is-invalid': vErrors.has('mobilenooraccountno') }"
                                                                                     />
                                                                                     <!--                                                                                                  +source.maxlength-->
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

                                                                         <div class="form-group mb-3">
                                                                             <label> Email address</label>
                                                                             <input  name="emailaddress" type="email"
                                                                                     class="form-control"
                                                                                     v-validate="'required|email'"
                                                                                     :class="{'is-invalid': vErrors.has('emailaddress') }"
                                                                                     v-model="data.emailaddress"
                                                                             />
                                                                             <span v-show="vErrors.has('emailaddress')" class="help text-danger">{{ vErrors.first('emailaddress') }}</span>
                                                                         </div>


                                                                         <button class="btn btn-primary mb-1" style="float: right;" id="bkcolor" type="submit">
                                                                             Pay
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
                                                                                     v-validate="'required|min:16|max:19'"
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
                                                                                         <!--                                                                                                      <option value="" selected>{{ $t('send_moeny_labels.month')}}</option>-->
                                                                                         <!--                                                                                                      <option value="01"> {{ $t('send_moeny_labels.months.jan')}} </option>-->
                                                                                         <!--                                                                                                      <option value="02"> {{ $t('send_moeny_labels.months.feb')}} </option>-->
                                                                                         <!--                                                                                                      <option value="03"> {{ $t('send_moeny_labels.months.mar')}}</option>-->
                                                                                         <!--                                                                                                      <option value="04"> {{ $t('send_moeny_labels.months.apr')}} </option>-->
                                                                                         <!--                                                                                                      <option value="05"> {{ $t('send_moeny_labels.months.may')}} </option>-->
                                                                                         <!--                                                                                                      <option value="06"> {{ $t('send_moeny_labels.months.jun')}} </option>-->
                                                                                         <!--                                                                                                      <option value="07"> {{ $t('send_moeny_labels.months.jul')}}</option>-->
                                                                                         <!--                                                                                                      <option value="08"> {{ $t('send_moeny_labels.months.aug')}}</option>-->
                                                                                         <!--                                                                                                      <option value="09"> {{ $t('send_moeny_labels.months.sep')}}</option>-->
                                                                                         <!--                                                                                                      <option value="10"> {{ $t('send_moeny_labels.months.oct')}}</option>-->
                                                                                         <!--                                                                                                      <option value="11"> {{ $t('send_moeny_labels.months.nov')}}</option>-->
                                                                                         <!--                                                                                                      <option value="12"> {{ $t('send_moeny_labels.months.dec')}}</option>-->

                                                                                         <option value="" selected>{{ $t('send_moeny_labels.month')}}</option>
                                                                                         <option value="01"> 01 </option>
                                                                                         <option value="02"> 02 </option>
                                                                                         <option value="03"> 03</option>
                                                                                         <option value="04"> 04</option>
                                                                                         <option value="05"> 05</option>
                                                                                         <option value="06"> 06 </option>
                                                                                         <option value="07"> 07</option>
                                                                                         <option value="08"> 08</option>
                                                                                         <option value="09"> 09</option>
                                                                                         <option value="10"> 10</option>
                                                                                         <option value="11"> 11</option>
                                                                                         <option value="12"> 12</option>
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
                                                                                 <input  type="password"
                                                                                         name="Cvv" class="form-control" placeholder="Cvv"
                                                                                         v-validate="'required|min:3|max:3'"
                                                                                         v-model="card.Cvv"
                                                                                         :class="{'is-invalid': vErrors.has('Cvv') }"
                                                                                 />
                                                                                 <span v-show="vErrors.has('Cvv')" class="help text-danger">{{ vErrors.first('Cvv') }}</span>
                                                                             </div>
                                                                         </div>
                                                                         <div class="form-group mb-3">
                                                                             <label> Email address</label>
                                                                             <input  name="emailAddress" type="email"
                                                                                     class="form-control"
                                                                                     v-validate="'required|email'"
                                                                                     :class="{'is-invalid': vErrors.has('emailAddress') }"
                                                                                     v-model="card.emailAddress"
                                                                             />
                                                                             <span v-show="vErrors.has('emailAddress')" class="help text-danger">{{ vErrors.first('emailAddress') }}</span>
                                                                         </div>
                                                                         <button class="btn btn-primary mb-1" style="float: right;" id="bkcolor" type="submit">
                                                                             Pay
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
                                         </b-overlay>
                                     </div>
                                 </div>

                             </div>
                         </div>
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
                         <div class="pb-2">
                             <ol class="list-group list-group-numbered">
                                 <li class="list-group-item font-12 text-danger">1. Generate the OTP | 2. Enter the OTP received to authorize the transaction | 3. Tap on continue to exit </li>
                             </ol>
                         </div>
                         <div class="row h-75" style="height: 26rem !important;" >
                             <div class="col-12"  v-html="cardResponse.redirectOtpurl" >
                             </div>
                         </div>
                     </div>
                 </div>
                 <div>
                     <button class="btn btn-primary " @click="CloseButton()">Continue</button>
                 </div>
             </div>
         </b-modal>

     </div>
    </paymentTopbar>
</template>

<script>
    import paymentTopbar from "../layouts/paymentHorizontal";
    import merchantservices from "../../protos/MerchantAccount_grpc_web_pb";
    import merchantstrans from '../../protos/MerchantMoneyTransferForBusinessPortal_grpc_web_pb'
    import grpcUrl from "../../components/constant";
    import commonDataClient from "../../protos/CommonData_grpc_web_pb";
     import Multiselect from "vue-multiselect";
    // import { FormWizard,TabContent} from 'vue-form-wizard';
    import constant from "../../components/constant";
    import moneyTransfer from "../../protos/EganowMoneyTransfer_grpc_web_pb";
    import commons from "../../protos/CommonData_grpc_web_pb";
    import Swal from "sweetalert2";
    import customerInfo from "../../protos/Customer_grpc_web_pb";
    import SweetAlertConfig from "../../SwalConfig";
    import SweetAlertWrapper from "../../sweetAlert";

    export default {
        name: "GeneratedPaymentLinkPage",
        components : {
            Multiselect,
            paymentTopbar,
            // FormWizard,
            // TabContent
        },
        data() {
            return {
                showsourceCountryLoader : false,
                showLoaderAvailableSoucrceAccount : false,
                responseMessageMoneyTransfer : '',
                creditCardNumber :'',
                listsOfExistingSourceAccount : [],
                radiobutonStatus : '',
                canUserchangeamount : '',
                collapseAccordian : false,
                servicename:'',
                countrydialcode:'',
                data : {
                  beneficiaryName :'',
                  amount:'',
                  narration:'',
                  emailaddress:'',
                  customerName:'',
                  mobileNo:''
                },
                mobilemoney : {
                    paypartnerserviceid :'',
                    payPartnerServiceName :''
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
                showLoader : false,
                showLoaderForCards : false,
                countryCode:'',
                dangerSuccess : 'danger',
                transRefNo: '',
                serviceClients : {},
                merchantTransactions:{},
                clientMoneyTransfer : {},
                commonClient:{},
                servicesOptions :[],
                serviceId :'',
                responseMessage :'',
                listOfCountries : [],
                CurrencyList : [],
                AllCountries :[],
                selectedCountryText: [],
                emailAddress:'',
                transAmount:'',
                mobileNumber:'',
                currency :'',
                exchangeRate :'',
                getselectedCountry :'',
                listofsourceaccounttypes :[],
                showsourceGenerateOtpLoader : false,
                responseMessagepaymentInfo :'',
                listofsourceaccountproviders :[],
                responseMessageMomo : '',
                showLoaderCustomerNameForSource : false,
                customerId : '',
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
                    cardname :'',
                    cardServiceId:'',
                    emailAddress :''
                },

                cardResponse :{
                    redirectOtpurl:''
                },
            }
        },
        methods : {
            CloseButton(){
                this.$router.push('/').catch(() => { })
            },
            TransferMoney(){
                  try {
                      console.log("dddd")
                  }catch(e) {
                      console.log(e)
                  }
            },
            GetSendersAccountTypeListByCountryCode(countryCode) {
                try {
                    const request = new merchantstrans.PayLinkCountryRequestMessage()
                   // console.log("merchant id : ", this.$store.getters.getUserInfo)
                    request.setCountrycode(countryCode)
                    request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                   // request.setMerchantserviceid(this.$store.getters.getUserInfo.serviceId)
                    this.showsourceCountryLoader = true
                    this.merchantTransactions.getPaymentTypeForSourceAccountsForSelectedCountryForPayLinkTrans(request, {}, (err,res) => {
                        this.showsourceCountryLoader = false
                        if(err) {
                            console.log(" Error : ", err)
                        }
                        if(res) {
                            this.listofsourceaccounttypes = []
                            this.listofsourceaccountproviders =[]
                            this.listofsourceaccounttypes = res.getPaylinkpaymenttypeslistList()

                            this.listofsourceaccountproviders = res.getPaylinkpaymenttypesandsvclistList()
                            this.MobileMoneyAccountTypes = res.getPaylinkpaymenttypesandsvclistList().filter(x => x.getPaypartnergroupid() ===1)
                            this.card.cardServiceId = res.getPaylinkpaymenttypesandsvclistList().filter(x => x.getPaypartnergroupid() ===3)
                        }
                    })
                }catch (e) {
                    console.log("Error : ", e)
                }
            },
            AddMomoToSourceAccount: async function(){
                let validatedmobileno = await this.$validator.validate('mobilenooraccountno', this.source.mobilenooraccountno);
                let validateaccountprovider = await this.$validator.validate('payPartnerServiceName', this.mobilemoney.paypartnerserviceid);
                let validateaccountname = await this.$validator.validate('accountname', this.source.accountname);
                console.log("Email address : " , this.data.emailaddress+ " "+this.data.customerName)
              //  let validatecustomername = await this.$validator.validate('customerName', this.data.customerName);
                let validateemailaddress = await this.$validator.validate('emailaddress', this.data.emailaddress);

                if(validatedmobileno && validateaccountprovider && validateaccountname && validateemailaddress){

                    this.collapseAccordian = false
                     this.source.groupcode = 1;
                    const accountNumberOrphoneOrCardNumber = this.source.countrydialcode+""+this.source.mobilenooraccountno
                    this.PostTransactionsMomoOrBankOrCard(accountNumberOrphoneOrCardNumber , this.data.emailaddress)
                }
            },
            ClaerSourceData() {
              //  this.countryCode =''
                this.transRefNo = ''
               // this.$refs.ClearAddMomoToSourceAccount.reset()
                this.data = {}
               // this.$refs.ClearSourcecardaccount.reset();
            },
            PostTransactionsMomoOrBankOrCard(acctNo, emailaddress) {
                 try {
                     this.sweetAlert.showDialogYesOrNo(Object.assign(SweetAlertConfig, {
                         title : 'Payment',
                         text :`Transfer - ${this.currency} ${this.data.amount} to ${this.servicename}`,
                         confirmButtonText : 'Yes, transfer'
                     }), () => {

                         const request = new merchantstrans.MechantPaymentByLinkTransRequestMessage()

                         request.setBeneficiarypaypartnerserviceid(this.serviceId)
                         console.log(" beneficiary service id : ", this.serviceId)
                         request.setBeneficiaryaccountno(this.mobileNumber)

                         console.log(" Beneficiary phone number : " , this.mobileNumber)
                         request.setBeneficiaryaccountname(this.data.beneficiaryName)
                         request.setBeneficiarycountrycode(this.countryCode)
                         request.setBeneficiarytranscurrecyiso(this.currency)
                         request.setCustomeremailaddress(emailaddress)
                         request.setCustomermobilenumber(this.data.mobileNo)
                         request.setTransamount(this.data.amount)
                         request.setTransnarration(this.data.narration)
                         request.setMerchanttransrefno(this.transRefNo)
                         request.setMerchantcustomerguid(this.customerId)
                         request.setPaymentbylinktransrefno(this.transRefNo)
                         console.log(" group code : ",this.source.groupcode)
                         if(this.source.groupcode === 3) {
                             request.setSenderpaypartnerserviceid(this.card.cardServiceId[0].getPaypartnerserviceid())
                             request.setCustomeremailaddress(this.card.emailAddress)
                         } else {
                             request.setSenderpaypartnerserviceid(this.mobilemoney.paypartnerserviceid)
                             request.setCustomeremailaddress(this.data.emailaddress)
                         }
                         request.setSenderaccountnoorcardnumber(acctNo)
                         request.setSenderaccountname(this.source.accountname)
                         request.setSendercountrycode(this.countryCode)
                         request.setSendertranscurrecyiso(this.currency)
                         request.setCvv(this.card.Cvv)
                         request.setExpirydatemonth(this.card.month)
                         request.setExpirydateyear(this.card.year)
                         request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                         console.log("Request : ", request)
                         this.showLoader = true
                         this.merchantTransactions.postCollectionMerchantTransactionThroughPaymentLink(request, {}, (err,res) => {
                             this.showLoader = false
                             if(err) {
                                 console.log(" Error : ", err)
                             }
                           console.log(" Response : ", res)
                             if(res.getIssuccess()) {
                                 if(this.source.groupcode === 3) {
                                     if(res.getCardredirectthreedsurl()  != null){
                                         this.cardResponse.redirectOtpurl = res.getCardredirectthreedsurl()
                                         this.cardResponse.redirectOtpurl.replace(/"/g, '\\"')

                                         setTimeout(() => {
                                             let e = ''
                                             // GT
                                             // if(document.getElementById("threedsChallengeRedirectForm")) {
                                             //     e = document.getElementById("threedsChallengeRedirectForm");
                                             // }
                                             // // STANBIC BANK
                                             //  if(document.getElementById("threedsChallengeRedirect")) {
                                             //     e = document.getElementById("threedsChallengeRedirect");
                                             //     // LIVE
                                             //      //threedsChallengeRedirect
                                             //      //DEV
                                             //      //redirectTo3ds1Form
                                             // }
                                             //  if(document.getElementById("challengeFrame")) {
                                             //      e = document.getElementById("challengeFrame");
                                             //  }
                                             //  if(document.getElementById("threedsChallengeRedirectForm")){
                                             //      e = document.getElementById("threedsChallengeRedirectForm");
                                             //  }
                                             //  if(document.getElementById("threedsChallengeRedirectForm")) {
                                             //
                                             //  }
                                             //threedsChallengeRedirectForm // STANBIC
                                              if(document.getElementById("redirectTo3ds1Form")) {
                                                  e = document.getElementById("redirectTo3ds1Form");
                                              }
                                              // GT
                                              if(document.getElementById("threedsChallengeRedirectForm")){
                                                  e = document.getElementById("threedsChallengeRedirectForm");
                                              }

                                             console.log(" submit button clicked ", e)

                                             if (e) {
                                                  e.submit();
                                                 if (e.parentNode !== null) {
                                                     e.parentNode.removeChild(e);
                                                 } }
                                         }, 400)
                                         this.$bvModal.show('modal-lg')


                                         // MUST CHECK IF OTP OS ENTERED
                                         this.dangerSuccess ='success'
                                         this.responseMessageVisaCard = 'Transaction is initiated, you will be notify soon'
                                         // setTimeout(() => {
                                         //       this.$router.push('/').catch(() => { })
                                         //   }, 100000)
                                          this.ClaerSourceData()
                                         // clearTimeout(timeoutClear)
                                        //  clearTimeout(cardTimer)
                                     }
                                     else {
                                         this.responseMessage = res.getMessage()
                                     }

                                 }
                                 else {
                                    // this.ClaerSourceData()
                                  const notcardTimer =   this.sweetAlert.showMessage("Payment initiated! ", res.getMessage())
                                     setTimeout(() => {
                                         this.$router.push('/').catch(() => { })
                                     }, 2000)
                                     clearTimeout(notcardTimer)
                                 }

                             }
                             else {
                                 console.log(" Transfer failed : ", res.getMessage())
                                 this.dangerSuccess = 'danger'
                                 this.responseMessage = res.getMessage()
                             }
                         })
                     })
                 }  catch (e) {
                     console.log(e)
                 }
            },

            GenerateSourceAccountotp(){
                try {

                    const request = new commons.OTPTransRequestMessage()
                    console.log(" Mobile number :", this.source.mobilenooraccountno)
                    request.setMobilenoorbankormerchantaccountno(this.source.countrydialcode+""+this.source.mobilenooraccountno)
                    request.setPaypartnerserviceid(this.mobilemoney.paypartnerserviceid)
                    request.setPaypartnergroupcode(1)
                    request.setCountrycode(this.source.countrycode)
                    request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                    console.log("Request for otp : ", request )
                    this.showsourceGenerateOtpLoader = true
                    this.commonClient.createOTPForAddingSourceAccountNo(request, {}, (err, res) => {
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
                                confirmButtonText: 'Confirm pin',
                                showLoaderOnConfirm: true,
                                preConfirm: (pin) => {
                                    return new Promise((resolve, reject) => {
                                        try {
                                            const requestCustomer = new customerInfo.VerifyOTPRequestMessage()
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

                    request.setCountrycode(this.source.countrycode)
                    request.setCurrencyiso(this.source.currencyiso)
                    request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                    request.setOtpvalue(this.source.otp)
                    request.setPaypartnerserviceid(this.mobilemoney.paypartnerserviceid)
                    request.setSourceaccountno(this.source.countrydialcode+""+ this.source.mobilenooraccountno)
                    request.setSourceaccountname(this.source.accountname)
                    request.setPaypartnergroupcode(1)
                   // console.log(" Source account adding request : ", request)
                    this.clientMoneyTransfer.addCustomerMomoBankAndMerchantSourceAccount(request, this.$store.getters.metadata, (err,res) => {
                        if(err) {
                            console.log(" Error : ", err)
                        }
                        if(res.getIssuccess()) {
                          //  console.log(" Source account added : ",res.getMessage() )
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
            GetSourceSelectedAccountTypeDataForMobileMoney(accounttype) {

                console.log(" Account type : ", accounttype.getPaypartnerservicename())
                this.source.mobilenooraccountno =''
                this.source.accountname =''
                this.mobilemoney.paypartnerserviceid = accounttype.getPaypartnerserviceid()
            },
            GetCustomernamebyMobileNoSource(number) {
                try {
                    if(number.length >= this.source.minlength) {
                          if(number.startsWith('0')) {
                              this.source.mobilenooraccountno = number.substring(1)
                                number = number.substring(1)
                          }
                        const request = new merchantstrans.PaylinkCustomerAccountNoRequestMessage()
                        request.setCountrycode(this.source.countrycode)
                        request.setCustomeracctno(this.source.countrydialcode+""+this.source.mobilenooraccountno)
                        // console.log( " Phone number : ",this.source.countrydialcode+""+this.source.mobilenooraccountno)
                        request.setMerchantserviceid(this.mobilemoney.paypartnerserviceid)
                        request.setLanguageid(this.$store.getters.getUserInfo.languageId)
                        request.setMerchantcustomerguid(this.customerId)
                        console.log("Request : ", request)
                        this.showLoaderCustomerNameForSource = true
                        this.merchantTransactions.getMerchantCustomerKycForPaylinkTrans(request,{}, (err,res) => {
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
            GetPaymentTypeForSenderBySelectedCountryCode(selectedsourcecountry){
                try {

                //    console.log(" selected country code data : ", selectedsourcecountry[0].getCountrydialcode())
                    // this.showSelectedCountryStatus = true
                    // this.collapseAccordian = true
                    this.source.countrydialcode = selectedsourcecountry[0].getCountrydialcode()
                    this.source.sourcecountry = selectedsourcecountry[0].getCountryname()
                    this.sourcecountrystatus = selectedsourcecountry[0].getCountryname()
                    this.source.countrycode = selectedsourcecountry[0].getCountrycode()
                    this.source.currencyiso = selectedsourcecountry[0].getCurrencyiso()
                    this.source.minlength = selectedsourcecountry[0].getMobilenominlen() - selectedsourcecountry[0].getCountrydialcode().length
                    this.source.maxlength = selectedsourcecountry[0].getMobilenomaxlen() - selectedsourcecountry[0].getCountrydialcode().length
                    console.log(" source min : ", this.source.minlength)

                    this.GetSendersAccountTypeListByCountryCode(selectedsourcecountry[0].getCountrycode())

                }catch (e) {
                    console.log("Error : ", e)
                }
            },
            // NOT IN USE
            AddAirtelTigo : async function(){
                let validatedairtelmobileno = await this.$validator.validate('mobileno', this.airteltigo.mobileno);
                if(validatedairtelmobileno){
                   // console.log(" data : " , this.airteltigo.mobileno)
                    this.$refs.ClearairteltigoFormdata.reset()
                }
            },
            //NOT IN USE
            AddVodafone : async function(){
                let validatevodafonemobileno = await this.$validator.validate('mobileno', this.vodafone.mobileno);
                if(validatevodafonemobileno){
                  //  console.log(" data : " , this.vodafone.mobileno)
                    this.$refs.ClearvodafoneFormdata.reset()
                }
            },
            GetCustomerInfoByTransRefNoAndCountryCode(){
                 try {
                     let request = new merchantstrans.MechantPaymentInitialTransDataRequestMessage();
                     const decryptedText = this.$CryptoJS.AES.decrypt(this.$route.params.id, this.$store.getters.getAesData.key ).toString(this.$CryptoJS.enc.Utf8)
                     this.transRefNo = decryptedText.substring(0,decryptedText.indexOf(":"));

                     this.countryCode = decryptedText.substring(decryptedText.indexOf(":") + 1)
                      console.log(" Country code for payment link : ", this.countryCode)
                     request.setBeneficiarycountrycode(this.countryCode)
                     request.setPaymentbylinktransrefno(this.transRefNo);
                     request.setLanguageid(this.$store.getters.getUserInfo.languageId)

                     this.showLoader = true;
                     this.merchantTransactions.getMerchantPaymentLinkInitialTransData(request , {}, (err,res) => {
                         this.showLoader = false;
                         if(err) {
                             console.log(" Error from trans Info : ", err)
                         }
                         if(!res.getIssuccess()) {
                              this.responseMessage = res.getMessage()
                             return;
                         }
                           // console.log(" Data : ", res)
                          this.serviceId = res.getBeneficiarypaypartnerserviceid()
                          this.servicename = res.getBeneficiarypaypartnerservicename()
                         this.data.beneficiaryName = res.getBeneficiarypaypartnerservicename()
                         this.data.amount = res.getTransamount();
                         this.data.narration = res.getTransnarration()
                         this.currency = res.getBeneficiarytranscurrecyiso()
                         this.canUserchangeamount = res.getCanuserchangeamountyesno()
                         this.customerId = res.getMerchantcustomerguid()

                     })

                 } catch (e) {
                     console.log(e)
                 }
            },
            GetSourceSelectedAccountTypeData(accounttype) {

                this.mobilemoney.paypartnerserviceid = accounttype.getPaypartnerserviceid()
            },
            AddSourceCardAccount : async function(){
                try {

                   // this.card.cardnumber = this.creditCardNumber.replace(/-/g, "");
                    this.card.cardnumber = this.creditCardNumber.replace(/\s/g, "");
                    //console.log(" Card number being sent : ", this.card.cardnumber)
                    let validatedcardno = await this.$validator.validate('creditCardNumber', this.card.cardnumber);
                    let validatedcardname = await this.$validator.validate('cardname', this.card.cardname);
                    let validatedyear = await this.$validator.validate('year', this.card.year);
                    let validatedmonth = await this.$validator.validate('year', this.card.month);
                    let validatedcvv = await this.$validator.validate('Cvv', this.card.Cvv);
                    let validateemailaddress = await this.$validator.validate('emailAddress', this.card.emailAddress);
                    if(validatedcardno && validatedcardname && validatedyear && validatedmonth && validatedcvv && validateemailaddress){
                        this.source.groupcode = 3;
                        this.source.accountname = this.card.cardname
                          this.PostTransactionsMomoOrBankOrCard(this.card.cardnumber , this.card.emailAddress)
                    }


                }  catch (e) {
                    console.log(" Error : ", e)
                }
            },
            GetSenderCountryList() {
                let request = new commonDataClient.EmptyCommonDataMessage()

                this.commonClient.getSenderAllCountries(request, this.$store.getters.metadata, (err,res) => {

                    if(res) {
                        this.AllCountries = res.getCountrylistList()
                        this.GetSelectedCountryByCountryCode()

                    }
                })
            },
            GetSelectedCountryByCountryCode() {
                 try {
                     this.getselectedCountry = this.AllCountries.filter(x => x.getCountrycode() === this.countryCode)
                      this.source.countrydialcode = this.getselectedCountry[0].getCountrydialcode()
                       this.GetPaymentTypeForSenderBySelectedCountryCode(this.getselectedCountry);
                 }  catch (e) {
                     console.log(e)
                 }
            },

            // NOT IN USE
            CalculateTransCharges(selectsourceaccount) {
             console.log(selectsourceaccount)
            },
            GetSelectedCountryInfo(selectedCountry) {
                this.countrydialcode = selectedCountry.getCountrydialcode()
                this.countryCode = selectedCountry.getCountrycode()
            },
            TakeawayZeroFromMobileNumberStarting(mobileNo){

                try {
                    if(mobileNo.startsWith('0')){
                        this.mobileNumber = mobileNo.slice(1)
                    }
                }catch (e){
                    console.log("Error :  ", e)
                }

            },
            GetCurrenciesByCountryCode() {
                let request  = new commonDataClient.SendingAmountRequestMessage()

                request.setLanguageid(this.$store.getters.getUserInfo.languageId) // en
                request.setBeneficiarycountrycode(this.$store.getters.getUserInfo.countryCode)

                this.commonClient.getCurrenciesForSendingAmount(request, this.$store.getters.metadata, (err,res) => {
                    if(err) {
                        console.log('Error : ', err)
                    }
                    if(res) {
                        console.log( " Currency response : ", res.getCurrencylistList())
                        this.CurrencyList = res.getCurrencylistList()
                       // this.GetExchangeRateForCurrencies();
                    }
                })

            },
            GetExistingSourceAccountByCustomerID() {

                try {
                    const request = new merchantstrans.MerchantCustomerPaymentSourceAccountsRequestMessage()
                    request.setBeneficiarycountrycode(this.countryCode)

                    request.setBeneficiarycurrencycode(this.currency)
                    request.setSendingcurrencycode(this.currency)
                    request.setMerchantcustomerguid(this.customerId)
                    this.showLoaderAvailableSoucrceAccount = true
                    this.merchantTransactions.getCustomerPaymentSourceAccountListForMerchantTransaction(request, {} , (err,res) => {
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
             // NOT IN USE
            GetExchangeRateForCurrencies() {

                try {

                    const request = new commons.CurrenExchRateRequestMessage();

                    request.setBeneficiarycurrencyiso(this.currency)
                    request.setSendercurrencyiso(this.currency)
                    request.setLanguageid(this.$store.getters.getUserInfo.languageId)

                    //console.log(" Exchange rate cal request : ", request)
                    this.clients.getCurrenciesExchangeRate(request,this.$store.getters.metadata, (err,res) => {

                        if (err) {
                            console.log( " Error : ", err)
                        }
                        if (res) {
                             console.log(" Currency Exchange rate : ", res)
                            this.exchangeRate = res.getExchangerate()
                           // this.preview.receivingamountwithoutcurrency = this.recipient.amount * res.getExchangerate()
                            // let amount = this.recipient.amount.trim()
                            // console.log(" amount : ",grpcUrl.formatMoney(amount,this.recipient.currencyiso))
                            // this.preview.sendingamount =  grpcUrl.formatMoney(amount,this.recipient.currencyiso)
                            // this.preview.receivingamount = grpcUrl.formatMoney(this.recipient.amount * res.getExchangerate(),this.recipient.currencyiso)
                        }

                    })

                }catch (e) {
                    console.log(" Error : ", e)
                }
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
        watch : {
            creditCardNumber() {
                // Card number without dash (-)
                let realNumber = this.creditCardNumber.replace(/\s/g, '')
                //this.creditCardNumber.match(/.{1,4}/g).join(' ');
//return value ? value.match(/.{1,4}/g).join(' ') : '';
                // Generate dashed number
                let dashedNumber = realNumber.match(/.{1,4}/g)

                // Replace the dashed number with the real one
                this.creditCardNumber = dashedNumber.join(' ')
            }
        },
        created() {
            this.serviceClients = new merchantservices.MerchantAccountSvcClient(grpcUrl.URL,null,null)
            this.commonClient = new commonDataClient.CommonDataSvcClient(constant.URL,null,null);
            this.merchantTransactions = new merchantstrans.MerchantMoneyTransferForBusinessPortalSvcClient(grpcUrl.URL,null, null)
            this.clientMoneyTransfer = new moneyTransfer.EganowMoneyTransferSvcClient(grpcUrl.URL,null, null)
            this.GetSenderCountryList();
            this.GetCurrenciesByCountryCode();
            this.sweetAlert = new SweetAlertWrapper()
            // this.GetListOfOperatingCountries();
            this.GetCustomerInfoByTransRefNoAndCountryCode()
            this.GetExistingSourceAccountByCustomerID();
            this.GetSendersAccountTypeListByCountryCode(this.countryCode)
        }
    }
</script>

<style>
    .card-header {
        background-color: #fff !important;
    }
    #expandCurrencySelect .multiselect__content-wrapper {
        width: 31.2rem !important;
    }
    .headerText {
        color: #2a90e9;
        text-align: left !important;
        /*text-decoration: underline;*/
    }
    #benStyle {
        border : 1px solid rgb(233, 233, 233) !important;
        border-radius: 5px !important;

    }
    .wizard-footer-right {
        display: none !important;
    }

    #challengeFrame {
        height: 45% !important;
    }
</style>