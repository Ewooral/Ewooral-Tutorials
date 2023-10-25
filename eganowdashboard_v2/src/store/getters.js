const getters = {
    getUserInfo: (state) => {
       return  state.CustomerInfo;
    },

    isAuth: (state) => {
        return  state.CustomerInfo.jwt !== '';
    },
    //LIVE CREDENTIALS
    // 'eganowappcustkey': 'keY-a6ee91c7-493a-4e0d-814d-06919674cea1-a0UoThthyys30a-Ey',
    // 'eganowapppassword': 'passW-5e4cd4d1-515b-4047-aa63-288be83e44ff-x001223Th76x-Word'

    //DEV CREDENTIALS
    // 'eganowappcustkey': 'keY-a6ee91c7-493a-4e0d-814d-06919674cea1-Ey',
    // 'eganowapppassword': 'passW-5e4cd4d1-515b-4047-aa63-288be83e44ff-Word'
    metadata : (state) => {
      return  { 'authorization': 'Bearer ' + state.CustomerInfo.jwt,
                  'eganowappcustkey': 'keY-a6ee91c7-493a-4e0d-814d-06919674cea1-Ey',
                  'eganowapppassword': 'passW-5e4cd4d1-515b-4047-aa63-288be83e44ff-Word'
             }
    },

    getUserEmailAddress : (state) => {
        return state.RegistrationInfo;
    },

    getAppHeader : (state) => {
        return state.AppHeader;
    },
    getSecurityQuestionData : (state) => {
        return state.SecurityQuestion;
    },

    getResetPasswordData : (state) => {
        return state.ResetPassword;
    },
    getCountrycode : (state) => {
        return state.CountryCode.countrycode
    },
    getAesData : (state) => {
        return state.AesSecret
    },

    getPinOrPassword :(state) => {
        return state.checkIfPasswordOrPin
    }
}

export default getters;