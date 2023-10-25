const state={
  RegistrationInfo :{
      emailAddress:'',
      otpsent:''
  },
  checkIfPasswordOrPin :{
     pinORpassword :''
  },

SecurityQuestion : {
     securityqtn : '',
     securityqtnnumber : ''
},
 AesSecret : {
     key:'Eng@N!w#!@#dfd32',
     transRefNo :'',
     countryCode : ''
 },
ResetPassword : {
     pin:'',
    anstoqtn:''
   },
    CustomerInfo:{
        businessName:'',
        firstName :'',
        lastName :'',
        countryCode:'',
        currencyISO :'',
        customerEganowWalletBalance :'',
        customerId :'',
        emailAddress :'',
        languageId :'',
        languageName :'',
        loginErrorCode :'',
        mobileNumber :'',
        personalBusinessGroup :'',
        personalBusinessGroupValue :'',
        jwt :'',
        merchantId:'',
        kycDataStatus :'',
        customerProfilePicImageUrl : ''
    },
    AppHeader:{
       title:'Dashboard',
       items:[
           {
               text: "Dashboard",
               href: "/",
           },
           {
               text: "Account Balance",
               href: "/",
           },
       ]
    },
    CountryCode : {
      countrycode:''
    }
}

export  default state;