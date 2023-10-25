const actions ={
    saveJWT({commit}, {jwt, firstName, businessName,emailAddress,lastName,customerId,languageId,currencyISO,customerEganowWalletBalance,countryCode,kycDataStatus,mobileNumber,customerProfilePicImageUrl}){
        commit('CUSTOMER_DATA', {
            jwt : jwt,
            firstName : firstName,
            lastName : lastName,
            businessName :businessName,
            emailAddress : emailAddress,
            customerId : customerId,
            languageId : languageId,
            currencyISO :currencyISO,
            customerEganowWalletBalance : customerEganowWalletBalance,
            countryCode : countryCode,
            mobileNumber : mobileNumber,
            kycDataStatus : kycDataStatus,
            customerProfilePicImageUrl : customerProfilePicImageUrl
        })
    },

    saveSecurityQtnNumberAndQuestion({commit}, {securityqtn, securityqtnnumber}) {
        commit('SET_SECURITY_QUESTION', {
            securityqtn : securityqtn,
            securityqtnnumber : securityqtnnumber
        })
    },

    saveAesData({commit},{transRefNo,key,countryCode}){
        commit('SET_AES_DATA', {
            transRefNo : transRefNo,
            key :key,
            countryCode : countryCode
        })
    },

    saveEmailAddress({commit}, {emailAddress, otpsent}){
        commit('GET_REGISTERED_EMAIL_ADDRESS',{
            emailAddress : emailAddress,
            otpsent : otpsent
        })
    },

    savePinOrPasswordValue({commit},{pinORpassword}) {
        commit('GET_PIN_OR_PASSWORD', {
            pinORpassword : pinORpassword
        })
    },

    PasswordResetData({commit},{pin,anstoqtn}){
        commit('SET_RESET_PASSWORD_VALUE', {
            pin : pin,
            anstoqtn : anstoqtn
        })
    },


    Logout({commit}){
        commit('CLEAR_USER_DATA');
    },
    setAppHeader({commit},  {title = '', items = []}){
        commit('SET_APP_HEADER',  {
            title, items
        });
    },
    SaveCountryInfoForStatement({commit}, {countrycode}) {
          commit('SET_COUNTRY_CODE', {
              countrycode : countrycode
          })
    }
}

export default actions;