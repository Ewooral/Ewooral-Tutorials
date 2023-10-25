//const URL ='https://sandoxegagrpcapimain.azurewebsites.net/'
//const URL ='https://dev.eganow.com:7001'
//const URL ='https://192.168.10.32:7073'
// LIVE
const URL ='https://egamaingrpcapiforeganowappsv1.azurewebsites.net/'



const serverError = 'Sorry, unable to process your request.Please try later'

function formatMoney(amount,currency) {
    return amount.toLocaleString('en-US', { style: 'currency', currency: currency });
}

function formatMoneyWithoutCurrency(amount) {
  return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}

export default {
    URL : URL,
    serverError : serverError,
    formatMoney : formatMoney,
    formatMoneyWithoutCurrency : formatMoneyWithoutCurrency
}
