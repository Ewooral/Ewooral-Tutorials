const mutations={
    GET_REGISTERED_EMAIL_ADDRESS(state,payload){
        state.RegistrationInfo.emailAddress = payload.emailAddress;
        state.RegistrationInfo.otpsent = payload.otpsent
    },
    GET_PIN_OR_PASSWORD(state,payload) {
        state.checkIfPasswordOrPin.pinORpassword = payload.pinORpassword;
    },
    // GET_OTP_VALUE(state,payload) {
    //    state.RegistrationInfo.otpsent = payload.otpsent
    // },

    CUSTOMER_DATA(state,payload){
          state.CustomerInfo.customerId = payload.customerId;
          state.CustomerInfo.businessName = payload.businessName;
          state.CustomerInfo.personalBusinessGroupValue = payload.personalBusinessGroupValue;
          state.CustomerInfo.countryCode = payload.countryCode;
          state.CustomerInfo.currencyISO = payload.currencyISO;
          state.CustomerInfo.customerEganowWalletBalance = payload.customerEganowWalletBalance;
          state.CustomerInfo.emailAddress = payload.emailAddress;
          state.CustomerInfo.firstName = payload.firstName;
          state.CustomerInfo.lastName = payload.lastName;
          state.CustomerInfo.languageName = payload.languageName;
          state.CustomerInfo.languageId = payload.languageId;
          state.CustomerInfo.personalBusinessGroup = payload.personalBusinessGroup;
          state.CustomerInfo.loginErrorCode = payload.loginErrorCode;
          state.CustomerInfo.mobileNumber = payload.mobileNumber;
          state.CustomerInfo.jwt = payload.jwt;
          state.CustomerInfo.merchantId = payload.merchantId;
          state.CustomerInfo.kycDataStatus = payload.kycDataStatus;
          state.CustomerInfo.customerProfilePicImageUrl = payload.customerProfilePicImageUrl;

    },
    SET_SECURITY_QUESTION(state,payload) {
         state.SecurityQuestion.securityqtn = payload.securityqtn;
         state.SecurityQuestion.securityqtnnumber = payload.securityqtnnumber;
    },
    SET_AES_DATA(state,payload){
        state.AesSecret.transRefNo = payload.transRefNo;
        state.AesSecret.countryCode = payload.countryCode
    },

    SET_RESET_PASSWORD_VALUE(state,payload){
        state.ResetPassword.pin = payload.pin;
        state.ResetPassword.anstoqtn = payload.anstoqtn;
    },
     SET_APP_HEADER(state, {title = '', items = []}){
         state.AppHeader.title = title;
         state.AppHeader.items = items
     },
    SET_COUNTRY_CODE(state, countrycode){
        state.CountryCode.countrycode = countrycode
    },
    CLEAR_USER_DATA(state){
        state.CustomerInfo.jwt = '';
        state.businessName = '';
    }
}
//import state from "./state";

export default mutations