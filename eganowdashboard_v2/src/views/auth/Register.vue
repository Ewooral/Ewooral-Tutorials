<template>
  <Auth>
    <b-overlay :show="showLoader" rounded="sm">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-8 col-xl-8">
        <div class="card">
          <div class="card-body">
            <div class="w-75 mb-2">
              <div class="auth-logo">
                <router-link to="/" class="logo logo-dark">
                  <span class="logo-lg">
                    <img src="@/assets/images/logo.svg" alt height="22" />
                  </span>
                </router-link>

                <router-link to="/" class="logo logo-light ">
                  <span class="logo-lg">
                    <img src="@/assets/images/logo-light.png" alt height="22" />
                  </span>
                </router-link>
              </div>
            </div>

            <h4 class="header-title mb-3">Business Registration</h4>
            <form-wizard shape="tab" color="rgb(0, 120, 212)" @on-complete="RegisterBusinessCustomer"  >
              <tab-content icon="mdi mdi-account-circle" title="Personal Information" :before-change="validatePersonalInfo">
                <AlertMessage :variant="dangerSuccess" :message="responseMessagePassword" v-if="responseMessagePassword"/>
                <div class="row" ref="firstTabForm">
                  <div class="col-lg-12">
                  </div>
                  <div class="col-lg-6">
                    <div>
                      <div class="form-group mb-3">
                        <label>First name</label>
                        <input id="firstName" name="firstName" type="text"
                               class="form-control" placeholder="First name as appeared on your legal document"
                               v-validate="'required'"
                               :class="{'is-invalid': vErrors.has('firstName') }"
                               v-model="personalInfo.firstName"
                        />
                        <span v-show="vErrors.has('firstName')" class="help text-danger">{{ vErrors.first('firstName') }}</span>
                      </div>
                      <div class="row">
                        <div class="col-lg-5 col-5">
                          <div class="form-group mb-3" id="expandSelect">
                            <label> Country code</label>
                                <multiselect
                                    name="countryCode"
                                    v-model="selectedCountryText"
                                    :options="listOfCountries"
                                    :searchable="true"
                                    @select="GetSelectedCountryInfo($event)"
                                >
                              <template slot="singleLabel" slot-scope="props" class="p-0 m-0">
                                <img style="width: 20px !important; height: 20px !important; padding: 0px !important; margin: 0px !important;" :src="props.option.getCountryflagurl()" alt=""><span class="option__desc">
                             <span class="option__title pl-1"> {{ props.option.getCountrydialcode() }}</span></span>
                              </template>
                              <template slot="option" slot-scope="{ option }" class="h-25 w-25">
                                <img style="width: 30px !important; height: 30px !important;" :src="option.getCountryflagurl()"> {{ option.getCountrydialcode() }} {{ option.getCountryname() }}
                              </template>
                            </multiselect>
                          </div>
                        </div>
                        <div class="col-lg-7">
                          <div class="form-group mb-3">
                              <label>Mobile Number</label>
                              <input id="mobileNo" name="mobileNo" type="text" @change="TakeawayZeroFromMobileNumberStarting(personalInfo.mobileNo)"
                                     class="form-control" placeholder="Mobile number"
                                     v-validate="'required'" :class="{'is-invalid': vErrors.has('mobileNo') }"
                                     v-model="personalInfo.mobileNo"
                              />

                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div>
                      <div class="form-group mb-3">
                        <label>Last name</label>
                        <input id="lastName" type="text"
                               name="lastName" class="form-control" placeholder="Last name as appeared on your legal document"
                               v-validate="'required'"
                               :class="{'is-invalid': vErrors.has('lastName') }"
                               v-model="personalInfo.lastName"
                        />
                        <span v-show="vErrors.has('lastName')" class="help text-danger">{{ vErrors.first('lastName') }}</span>
                      </div>

                      <div class="form-group mb-3">
                        <label>Language</label>
                        <select class="custom-select" name="language" id="language" v-model="personalInfo.language" v-validate="'required'">
                          <option value="" selected>Select language</option>
                          <option value="en">English</option>
                          <option value="fr" >French</option>
                        </select>
                        <span v-show="vErrors.has('language')" class="help text-danger">{{ vErrors.first('language') }}</span>
                      </div>

                    </div>
                  </div>
                   <div class="col-lg-12">
                      <p>Password required must contain at least one uppercase letter, one lowercase letter, one number and one special character</p>

                      <div class="row">
                         <div class="col-lg-6">
                           <div class="form-group mb-3">
                             <label>Password</label>
                             <input id="password" type="password"
                                    name="password" class="form-control" placeholder="Password"
                                    v-validate="'required|min:8'"
                                    v-model="personalInfo.password"
                                    :class="{'is-invalid': vErrors.has('password') }"
                             />
                             <span v-show="vErrors.has('password')" class="help text-danger">{{ vErrors.first('password') }}</span>
                           </div>
                         </div>
                         <div class="col-lg-6">
                           <div class="form-group mb-3">
                             <label>Confirm password</label>
                             <input type="password" id="confirmPassword" ref="password"
                                    name="confirmPassword" class="form-control" placeholder="Confirm Password"
                                    v-validate="'required|confirmed:password'"
                                    v-model="personalInfo.confirmPassword"
                                    :class="{'is-invalid': vErrors.has('confirmPassword') }"
                             />
                             <span v-show="vErrors.has('confirmPassword')" class="help text-danger">{{ vErrors.first('confirmPassword') }}</span>
                           </div>
                         </div>
                      </div>

                   </div>
                  <div class="col-12">
                      <div class="form-group mb-3">
                        <label>Email address</label>
                        <input id="email" type="email"
                               name="email" class="form-control" placeholder="Email address"
                               v-validate="'required|email'"
                               v-model="personalInfo.email"
                               readonly
                               :class="{'is-invalid': vErrors.has('email') }"
                        />
                        <span v-show="vErrors.has('email')" class="help text-danger">{{ vErrors.first('email') }}</span>
                      </div>
                  </div>
                </div>
                <!-- end row -->
              </tab-content>
              <tab-content icon="mdi mdi-account-multiple" title="Business Information" :before-change="validateBusinessInfo">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group mb-3">
                      <label>Business name</label>
                      <input type="text" name="businessName"
                             class="form-control"
                             v-validate="'required'"
                             v-model="businessInfo.businessName"
                             :class="{'is-invalid': vErrors.has('businessName') }"/>
                      <span v-show="vErrors.has('businessName')" class="help text-danger">{{ vErrors.first('businessName') }}</span>
                    </div>
                  </div>

                  <div class="col-lg-12">
                  <div class="row">
                    <div class="col-lg-4 col-4">
                      <div class="form-group mb-3" id="expandSelect">
                        <label> Country code</label>
                        <multiselect
                                name="countryCode"
                                v-model="selectedCountryText"
                                :options="listOfCountries"
                                :searchable="true"
                                @select="GetSelectedCountryInfo($event)"
                                readonly="readonly"
                        >
                          <template slot="singleLabel" slot-scope="props" class="p-0 m-0">
                            <img style="width: 20px !important; height: 20px !important; padding: 0px !important; margin: 0px !important;" :src="props.option.getCountryflagurl()" alt=""><span class="option__desc">
                             <span class="option__title pl-1"> {{ props.option.getCountrydialcode() }}</span></span>
                          </template>
                          <template slot="option" slot-scope="{ option }" class="h-25 w-25">
                            <img style="width: 30px !important; height: 30px !important;" :src="option.getCountryflagurl()"> {{ option.getCountrydialcode() }} {{ option.getCountryname() }}
                          </template>
                        </multiselect>
                      </div>
                    </div>
                    <div class="col-lg-8">
                      <div class="form-group mb-3">
                        <label>Business contact person's phone number</label>
                        <input id="contactpersonphonenumber" name="contactpersonphonenumber" type="text" @change="TakeawayZeroFromContactPersonMobileNumberStarting(businessInfo.contactpersonphonenumber)"
                               class="form-control" placeholder="Phone number"
                               v-validate="'required'" :class="{'is-invalid': vErrors.has('contactpersonphonenumber') }"
                               v-model="businessInfo.contactpersonphonenumber"
                        />

                      </div>
                    </div>

                  </div>
                  </div>

                  <div class="col-12">
                    <div class="form-group mb-3">
                      <label > Select country</label>
                        <multiselect
                                id="countryCode"
                                name="countryCode"
                                v-model="selectedCountryText"
                                v-validate="'required'"
                                :options="listOfCountries"
                                :searchable="true"
                                :class="{'is-invalid': vErrors.has('country') }" >
                          <template slot="singleLabel" slot-scope="props" class="p-0 m-0">
                            <img style="width: 20px !important; height: 20px !important; padding: 0px !important; margin: 0px !important;" :src="props.option.getCountryflagurl()" alt=""><span class="option__desc">
                               <span class="option__title pl-1">{{ props.option.getCountryname() }}</span></span>
                          </template>
                          <template slot="option" slot-scope="{ option }" class="h-25 w-25">
                            <img style="width: 30px !important; height: 30px !important;" :src="option.getCountryflagurl()"> {{ option.getCountrydialcode() }} {{ option.getCountryname() }}
                          </template>
                        </multiselect>
                    </div>
                  </div>

                </div>
                <!-- end row -->
              </tab-content>
              <tab-content icon="mdi mdi-comment-question-outline" title="Set security questions" :before-change="validateBusinessSecurityQuestions">
                <AlertMessage :variant="dangerSuccess" :message="responseMessageSecuriryQtns" v-if="responseMessageSecuriryQtns"/>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group mb-3">
                      <label > Select first security question</label>
                      <multiselect
                              id="securityQtn1"
                              name="securityQtn1"
                              v-model="securityQtn1"
                              v-validate="'required'"
                              :options="listOfSecurityQuestions"
                              :searchable="true"
                              :class="{'is-invalid': vErrors.has('securityQtn1') }"
                              @select="GetSelectedSecurityQuestionOne($event)"
                      >
                        <template slot="singleLabel" slot-scope="props" class="p-0 m-0">
                          <span class="option__title pl-1">{{ props.option.getSecurityquestion() }}</span>
                        </template>
                        <template slot="option" slot-scope="{ option }" class="h-25 w-25">
                          {{ option.getSecurityquestion() }}
                        </template>
                      </multiselect>
                    </div>
                    <div class="form-group mb-3">
                      <label>Answer to first security question</label>
                      <input id="securityanswer1" type="text" ref="securityanswer1"
                             name="securityanswer1" class="form-control" placeholder="Security question answer"
                             v-model="securityanswer1"
                             v-validate="'required'"
                             :class="{'is-invalid': vErrors.has('securityanswer1') }"
                      />
                      <span v-show="vErrors.has('securityanswer1')" class="help text-danger">{{ vErrors.first('securityanswer1') }}</span>
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="form-group mb-3">
                      <label > Select second security question</label>
                      <multiselect
                              id="securityQtn2"
                              name="securityQtn2"
                              v-model="securityQtn2"
                              v-validate="'required'"
                              :options="listOfSecurityQuestions"
                              :searchable="true"
                              :class="{'is-invalid': vErrors.has('securityQtn1') }"
                              @select="GetSelectedSecurityQuestionTwo($event)"
                      >
                        <template slot="singleLabel" slot-scope="props" class="p-0 m-0">
                          <span class="option__title pl-1">{{ props.option.getSecurityquestion() }}</span>
                        </template>
                        <template slot="option" slot-scope="{ option }" class="h-25 w-25">
                          {{ option.getSecurityquestion() }}
                        </template>
                      </multiselect>
                    </div>
                    <div class="form-group mb-3">
                      <label>Answer to second security question</label>
                      <input id="securityanswer2" type="text" ref="securityanswer2"
                             name="securityanswer2" class="form-control" placeholder="Answer to second security question"
                             v-model="securityanswer2"
                             v-validate="'required'"
                             :class="{'is-invalid': vErrors.has('securityanswer2') }"
                      />
                      <span v-show="vErrors.has('securityanswer2')" class="help text-danger">{{ vErrors.first('securityanswer2') }}</span>
                    </div>
                  </div>
                </div>
              </tab-content>

              <tab-content icon="mdi mdi-checkbox-marked-circle-outline" :before-change="validateSetupPin">
                <AlertMessage :variant="dangerSuccess" :message="responseMessage" v-if="responseMessage"/>
                <div class="row">
                  <div class="col-lg-6">
                    <div>
                        <div class="form-group mb-3">
                          <label>Create 6 digit transaction pin</label>
                          <input id="pin" type="password" ref="pin"
                                 name="pin" class="form-control" placeholder="Enter 6 digit pin"
                                 v-model="setPin.pin"
                                 v-validate="'required|length:6'"
                                 :class="{'is-invalid': vErrors.has('pin') }"
                          />
                          <span v-show="vErrors.has('pin')" class="help text-danger">{{ vErrors.first('pin') }}</span>
                        </div>
                      </div>
                  </div>
                  <div class="col-lg-6">
                    <div>
                      <div class="form-group mb-3">
                        <label>Confirm transaction pin</label>
                        <input id="confirmPin" type="password"
                               name="confirmPin" class="form-control" placeholder="Confirm transaction"
                               v-model="setPin.confirmPin"
                               v-validate="'required|confirmed:pin'"
                               :class="{'is-invalid': vErrors.has('confirmPin') }"
                        />
                        <span v-show="vErrors.has('confirmPin')" class="help text-danger">{{ vErrors.first('confirmPin') }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- end row -->
              </tab-content>
            </form-wizard>
          </div>
        </div>
      </div>
    </div>
    </b-overlay>
  </Auth>
</template>

<script>
import Auth from '@/components/register/Auth';
import { FormWizard,TabContent} from 'vue-form-wizard';
import Multiselect from "vue-multiselect";
import constant from '../../components/constant/index'
import customerInfo from  '../../protos/Customer_grpc_web_pb'
import commonDataClient from '../../protos/CommonData_grpc_web_pb'
import SweetAlertWrapper from "../../sweetAlert";
import AlertMessage from "../../components/shared/AlertMessage";
export default {
  data(){

    return{
      selectedCountryText: [],
      clients:{},
      commonClient :{},
      listOfCountries:[],
      securityanswer1 :'',
      responseMessagePassword : '',
      securityanswer2 :'',
      securityQtn1 : '',
      securityQtn2 :'',
      securityQtns : {
         selectedSecurityQuestionOne :'',
        selectedSecurityQuestionTwo : ''
      },
       listOfSecurityQuestions : [],
      listOfCountryNamesAndImage:[],
      dangerSuccess:'',
      responseMessage:'',
      responseMessageSecuriryQtns:'',
      showLoader: false,
      personalInfo:{
        firstName:'',
        lastName:'',
        email:'',
        language:'',
        mobileNo:'',
        password:'',
        confirmPassword:'',
        countrydialcode :'',
        countryCode : ''
      },
      businessInfo:{
        businessName:'',
        contactpersonphonenumber:'',
        busRegNo:'',
        tin:'',
      },
      businessInfo2:{
        countryCode: '',
        digitaladdress:'',
        zipcode:'',
        stateregion:'',
        city:'',
        streetaddress:'',
        streetaddressline:''
      },
      setPin:{
        pin:'',
        confirmPin:''
      },
      languagesOptions:[
          'English',
          'French',
      ],

    }
  },
  components:{
    Auth,
    FormWizard,
    TabContent,
    AlertMessage,
    Multiselect
  },
  methods:{

    GetSelectedCountryInfo(selectedCountry) {
      // console.log("Selected Country code : " , selectedCountry.getCountrycode())
       this.personalInfo.countrydialcode = selectedCountry.getCountrydialcode()
        this.personalInfo.countryCode = selectedCountry.getCountrycode()
    },
    GetSelectedSecurityQuestionOne(selectedQtnOne) {
        try {
             // console.log(" selected ques 1 : ", selectedQtnOne.getSecurityquestion())
            this.securityQtns.selectedSecurityQuestionOne = selectedQtnOne.getSecurityquestion()
        } catch (e) {
          console.log(e)
        }
    },
    GetSelectedSecurityQuestionTwo(selectedQtnTwo) {
      try {
        // console.log(" selected ques 2 : ", selectedQtnTwo.getSecurityquestion())
        this.securityQtns.selectedSecurityQuestionTwo = selectedQtnTwo.getSecurityquestion()

      } catch (e) {
        console.log(e)
      }
    },

    RegisterBusinessCustomer(){

      //let selectedCountryObject = this.listOfCountries.find(obj => obj.getCountrycode() === this.businessInfo2.countryCode);
         let request = new customerInfo.CustomerAccountMessage();
         console.log("Email address : ", this.$store.getters.getUserEmailAddress.emailAddress)
         request.setFirstname(this.personalInfo.firstName);
         request.setLastname(this.personalInfo.lastName);
         request.setMobilenumber(this.personalInfo.mobileNo);
         request.setEmailaddress(this.$store.getters.getUserEmailAddress.emailAddress);
         request.setPassword(this.personalInfo.password);
         request.setMobilenodialcode(this.personalInfo.countrydialcode)
         request.setBusinessname(this.businessInfo.businessName);
         request.setPersonalbusinessgroupvalue(2);
         request.setCountrycode(this.businessInfo2.countryCode);
         request.setMobileorweb("WEB");
        request.setCountrycodeforfirsteganowwallet(this.businessInfo2.countryCode);
        console.log(" country code : ",this.businessInfo2.countryCode)
         request.setCustomersixdigitpin(this.setPin.pin);
         request.setOtpvalue(this.$store.getters.getUserEmailAddress.otpsent);
         console.log(" Otp sent value : ", this.$store.getters.getUserEmailAddress.otpsent)
         request.setLanguageid(this.businessInfo.language);
        // request.
         request.setMobilenodialcode(this.personalInfo.countrydialcode);
         request.setSecurityquestionone(this.securityQtns.selectedSecurityQuestionOne);
         request.setSecurityquestiontwo(this.securityQtns.selectedSecurityQuestionTwo);
         request.setSecurityanswerone(this.securityanswer1);
         request.setSecurityanswertwo(this.securityanswer2);
         request.setBusinesscontactpersonmobilenumber(this.contactpersonphonenumber)
          this.showLoader = true;
       // console.log("Request Data : " , request);
          this.responseMessage = "";
         this.clients.createCustomerAccount(request,this.$store.getters.metadata, (err , res) => {
           if(err){
             console.log("Error : ", err)
             this.$toastr.error(err, 'Error');
           }
           this.showLoader = false;
           if(res.getIssuccess()){
             this.sweetAlert.showMessage("Account created", res.getMessage())
                // Save business data into store
             this.$store.dispatch('saveJWT', {
               jwt : res.getUserjwttoken(),
               firstName : res.getFirstname(),
               businessName : res.getBusinessname(),
               emailAddress: res.getEmailaddress(),
               lastName : res.getLastname(),
               languageId : res.getLanguageid(),
               countryCode : res.getCountrycode(),
               customerId : res.getCustomerid(),
               mobileNumber : res.getMobilenumber(),
               kycDataStatus : res.getKycdataenc(),
               customerProfilePicImageUrl : res.getCustomerprofilepicimageurl()
             })

             if(this.$store.getters.getUserInfo.jwt !== ''){
               this.$router.push('/').catch(() => { })
             }
             }
             else {
              // console.log(" Error message : "  , res.getMessage())
              // this.$toastr.warning(res.getMessage(), 'Warning');
              this.dangerSuccess = 'danger'
               this.responseMessage = res.getMessage();
             }

         });
    },
    GetListOfOperatingCountries(){
      let request = new commonDataClient.EmptyCommonDataMessage();
      this.commonclients.getReceivingOperatingCountries(request,{} , async (err,res) => {
         this.listOfCountries = await res.getCountrylistList()
         // console.log(" country list : ", this.listOfCountries)
        for(let i = 0; i < this.listOfCountries.length; i++) {
          this.listOfCountryNamesAndImage.push(this.listOfCountries[i].getCountryflagurl() +' '+ this.listOfCountries[i].getCountryname());
        }
      })
    },
    GetSecurityQuestions() {
      let request = new customerInfo.LanguageOnlyMessage();
      request.setLanguageid(this.businessInfo.language)
       //console.log('test')
       this.clients.getAllSecurityQuestions(request,{}, async (err,res) => {
         if(err){
           this.$toastr.error(err, 'Error');
         }
         this.listOfSecurityQuestions = await res.getSecurityquestionslistList()
        // console.log("security qtns : ", this.listOfSecurityQuestions)
         // for (let i=0; i < this.listOfSecurityQuestions.length; i++) {
         //
         // }

       })
    },
    TakeawayZeroFromMobileNumberStarting(mobileNo){

       try {
         if(mobileNo.startsWith('0')){
           this.personalInfo.mobileNo = mobileNo.slice(1)
           console.log(" Mobilee number : ", this.personalInfo.mobileNo)
         }
       }catch (e){
         console.log("Error :  ", e)
       }

    },
    TakeawayZeroFromContactPersonMobileNumberStarting(ContactPersonPhone) {
      try {
        if(ContactPersonPhone.startsWith('0')){
          this.businessInfo.contactpersonphonenumber = ContactPersonPhone.slice(1)
        }
      }catch (e){
        console.log("Error :  ", e)
      }
    },
    validatePersonalInfo : async function () {
       const mobileNo = "+"+this.selectedCountryText.getCountrydialcode()+""+this.personalInfo.mobileNo
      let validatedFirstname = await this.$validator.validate('firstName', this.personalInfo.firstName);
      let validatedlastName = await this.$validator.validate('lastName', this.personalInfo.lastName);
      let validatedpassword = await this.$validator.validate('password', this.personalInfo.password);
      let validatedconfirmPassword = await this.$validator.validate('confirmPassword', this.personalInfo.confirmPassword);
      let validatedLanguage = await this.$validator.validate('language', this.personalInfo.language);
       let validatedmobileNo = await this.$validator.validate('mobileNo', mobileNo);
       if(this.personalInfo.password !== this.personalInfo.confirmPassword) {

         this.dangerSuccess = 'danger';
         this.responseMessagePassword = 'Password do not match confirm password'
         return false;
       }

      return validatedFirstname && validatedlastName && validatedmobileNo && validatedpassword && validatedconfirmPassword && validatedLanguage;
    },
    validateBusinessInfo : async function(){

      let validatedBusinessName = await this.$validator.validate('businessName', this.businessInfo.businessName);
      this.businessInfo2.countryCode =   this.selectedCountryText.toString().split(',')[0]
      let validatedCountryName = await this.$validator.validate('countryCode', this.businessInfo2.countryCode);

      return validatedBusinessName && validatedCountryName;
    },
    validateBusinessSecurityQuestions : async function() {
      let validateSecQtn1 = await this.$validator.validate('securityQtn1' , this.securityQtn1)
      let validateSecQtn2 = await this.$validator.validate('securityQtn2' , this.securityQtn2)
      let validateAnswer1 = await this.$validator.validate('securityanswer1' , this.securityanswer1)
      let validateAnswer2 = await this.$validator.validate('securityanswer2' , this.securityanswer2)

       // console.log("qtn 1 : ", this.securityQtn1.getQuestionid())
       // console.log("qtn 2 : ", this.securityQtn2.getQuestionid())
      if(this.securityQtn1.getQuestionid() === this.securityQtn2.getQuestionid()) {
          this.dangerSuccess = 'danger'
          this.responseMessageSecuriryQtns = 'You cannot select the same question for 1 &2'
          return false
      }
      console.log(" selected question 1 :", this.securityQtn1.getQuestionid())
      return  validateSecQtn1 && validateSecQtn2 && validateAnswer1 && validateAnswer2;
    },

    validateBusinessInfoSecond : async function(){
      console.log( " Country code ", this.selectedCountryText.toString().split(',')[0])
      this.businessInfo2.countryCode =   this.selectedCountryText.toString().split(',')[0]
        console.log(" country code after : ",this.businessInfo2.countryCode )
        let validatedCity = await this.$validator.validate('city',this.businessInfo2.city);
        let validatedStreetAddress = await this.$validator.validate('streetaddress', this.businessInfo2.streetaddress);
        let validatedStreetAddressLine = await this.$validator.validate('streetaddressline',this.businessInfo2.streetaddressline);
       let validatedCountryName = await this.$validator.validate('countryCode', this.businessInfo2.countryCode);
         console.log(" validated business info 2 ", validatedCountryName)
        return validatedCity && validatedStreetAddress && validatedStreetAddressLine && validatedCountryName;
    },
    validateSetupPin : async function(){
       let validatedPin = await this.$validator.validate('pin',this.setPin.pin);
       let validatedConfirmPin = await this.$validator.validate('confirmPin',this.setPin.confirmPin);
       return validatedPin && validatedConfirmPin;
    }
  },
  created() {
     this.sweetAlert = new SweetAlertWrapper()
    console.log("Email address : ",this.$store.getters.getUserEmailAddress.emailAddress)
     this.personalInfo.email = this.$store.getters.getUserEmailAddress.emailAddress;
    if(this.$store.getters.getUserEmailAddress.emailAddress === ''){
      this.$router.push('/business/email').catch(() => { })
    }
  },
  mounted() {
     this.commonclients = new commonDataClient.CommonDataSvcClient(constant.URL,null,null);
    this.clients = new customerInfo.CustomerAccountClient(constant.URL,null,null);
    this.GetListOfOperatingCountries();
    this.GetSecurityQuestions();
  }
}
</script>

<style>
  #expandSelect .multiselect__content-wrapper {
    width: 19.4rem !important;
  }
</style>