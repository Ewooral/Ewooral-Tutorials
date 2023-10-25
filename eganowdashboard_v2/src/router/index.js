import Vue from 'vue'
import VueRouter from 'vue-router'
import BizCollectIndex from '../views/Index'
import store from '../store'

Vue.use(VueRouter)

const authUser = {
  headers: {Authorization:'Bearer ' + store.state.CustomerInfo.jwt}
}
window.auth = authUser;

 console.log(" store jwt value " ,  store.state.CustomerInfo.jwt )

const routes = [
  {
    // path : '/:lang',
    // component : { render(c) { return c('router-view')} }   ::: to add language eg (en) to the url
    path: '/',
    name: '',
    component: BizCollectIndex,
    beforeEnter: (to, from, next) =>{
      console.log("before Enter ", store.getters.isAuth);
      if(store.getters.isAuth){
        next()
      }
      else{
        next("/business/login")
      }
    },
    children :[
      {
        path: '/',
        redirect: {name:"modules"}
      },
      {
        path: ':module/business/services',
        name: 'Dashboard Services',
        component: () => import('../views/services/Home')
      },
      {
        path: ':module/business/accounttransaction',
        name: 'Account Transaction',
        component: () => import('../views/merchanttrans/AccountTransaction')
      },
      {
        path: ':module/business/accounttoaccount',
        name: 'Account To Account',
        component: () => import('../views/merchanttrans/AccountToAccount')
      },
      {
        path: ':module/business/fundtransfer',
        name: 'Fund Transfer',
        component: () => import('../views/merchanttrans/FundTransfer')
      },
      {
        path: ':module/business/fundtransferhistory',
        name: 'Fund Transfer',
        component: () => import('../views/merchanttrans/FundTransferHistory')
      },
      {
        path: ':module/business/glstatement',
        name: 'Gl statement',
        component: () => import('../views/merchanttrans/GlStatement')
      },
      {
        path: ':module/merchant/viewcustomers',
        name: 'View Customers',
        component: () => import('../views/merchantcustomers/ViewCustomers')
      },
      {
        path: ':module/merchant/pendingcustomers',
        name: 'View Customers',
        component: () => import('../views/merchantcustomers/PendingCustomers')
      },
      {
        path: ':module/merchant/pinrequest',
        name: 'Reset Pin',
        component: () => import('../views/merchantcustomers/PinResetRequest')
      },
      {
        path: ':module/merchant/terminate',
        name: 'Termination Request',
        component: () => import('../views/merchantcustomers/TerminationRequest')
      },
      {
        path: ':module/merchant/approvetermination',
        name: 'Termination Request',
        component: () => import('../views/merchantcustomers/ApproveTermination')
      },
      {
        path: ':module/merchant/createmerchantservice',
        name: 'Termination Request',
        component: () => import('../views/merchantservices/CreateMerchantService')
      },
      {
        path: ':module/merchant/merchantrequest',
        name: 'Merchant Request',
        component: () => import('../views/merchantservices/MerchantRequest')
      },
      {
        path: ':module/merchant/merchantrequestlist',
        name: 'Merchant Request',
        component: () => import('../views/merchantservices/MerchantRequestList')
      },
      {
        path: ':module/merchant/addservicepackage',
        name: 'Termination Request',
        component: () => import('../views/merchantservices/AddServicePackage')
      },
      {
        path: ':module/merchant/editservicepackage',
        name: 'Termination Request',
        component: () => import('../views/merchantservices/EditServicePackage')
      },
      {
        path: ':module/merchant/mymerchantservice',
        name: 'Termination Request',
        component: () => import('../views/merchantservices/MyMerchantService')
      },
      {
        path: ':module/merchant/createuser',
        name: 'Create User',
        component: () => import('../views/merchantusers/CreateUser')
      },
      {
        path: ':module/merchant/viewuser',
        name: 'View User',
        component: () => import('../views/merchantusers/ViewUsers')
      },
      {
        path: ':module/merchant/assignuserrole',
        name: 'Assign User Role',
        component: () => import('../views/merchantusers/AssignUserRole')
      },
      {
        path: ':module/merchant/limit',
        name: 'Limits',
        component: () => import('../views/merchantusers/Limit')
      },
      {
        path: ':module/merchant/payment-link',
        name: 'Payment link',
        component: () => import('../views/payment/PaymentLink')
      },
      {
        path: ':module/merchant/get-payments-list',
        name: 'Payment-List',
        component: () => import('../views/payment/GetListOfPayment')
      },


        // Money Transfer
      {
        path :':module/business/sendmoney',
        name: 'money transfer',
        component:() => import('../views/moneytransfer/SendMoney')
      },
      {
        path :':module/business/transactionhistory',
        name: 'Transaction history',
        component:() => import('../views/moneytransfer/TransactionHistory')
      },
      {
        path :':module/business/getbeneficiaries',
        name: 'Get Beneficiaries',
        component:() => import('../views/moneytransfer/GetBeneficiaries')
      },
      {
        path :':module/business/managesourceaccount',
        name: 'Manage Source Account',
        component:() => import('../views/moneytransfer/ManageSourceAccount')
      },
      {
        path :':module/business/accountbalance',
        name: 'Account balance',
        component:() => import('../views/moneytransfer/AccountBalance')
      },
      {
        path :':module/business/accountstatement',
        name: 'Account statement',
        component:() => import('../views/moneytransfer/AccountStatments')
      },

        // Groups
      {
        path :':module/business/listofgroups',
        name: 'Listofgroup',
        component:() => import('../views/groups/ListOfGroups')
      },
      {
        path :':module/business/creategroup',
        name: 'CreateGroup',
        component:() => import('../views/groups/CreateGroup')
      },
      {
        path :':module/business/groupdetails',
        name: 'groupdetails',
        component:() => import('../views/groups/GroupDetails')
      },
      {
        path :':module/business/groupchat',
        name: 'groupchat',
        component:() => import('../views/groups/GroupChat')
      },
      {
        path :':module/business/groupservices',
        name: 'groupservices',
        component:() => import('../views/groups/GroupServices')
      },
      {
        path :':module/business/joinpublicgroup',
        name: 'JoinPublicGroup',
        component:() => import('../views/groups/JoinPublicGroup')
      },

    ]
  },
  {
    path: '/business/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/Register')
  },
  {
    path: '/business/email',
    name: 'Email',
    component: () => import('../components/register/EmailVerification')
  },
  {
    path: '/business/login',
    name: 'Email',
    component: () => import('../views/auth/Login')
  },
  {
    path: '/business/verify',
    name: 'Verify',
    component: () => import('../components/register/Verify')
  },
  {
    path: '/business/enteremail',
    name: 'Email address',
    component: () => import('../views/passwordreset/EnterEmail')
  },
  {
    path: '/business/profile',
    name: 'Profile',
    component: () => import('../views/profile/Profile')
  },
  {
    path: '/business/verifysecurityans',
    name: 'PasswordVerify',
    component: () => import('../views/passwordreset/VerifySecurityAnswerByQuestion')
  },
  {
    path: '/business/fp/enteremail',
    name: 'Enter email',
    component: () => import('../views/forgotpassword/shared/EnterEmail')
  },
  {
    path: '/business/fp/verifysecurityans', // NOT IN USE
    name: 'Question & Answer',
    component: () => import('../views/forgotpassword/shared/VerifySecurityAnswerByQuestion')
  },
  {
    path: '/business/fp/verifyotp',
    name: 'Otp sent to email',
    component: () => import('../views/forgotpassword/shared/VerifyEmailOtp')
  },
  {
    path: '/business/verifyotp',
    name: 'Otp sent to email',
    component: () => import('../views/passwordreset/VerifyEmailOtpSent')
  },
  {
    path: '/business/forgotpassword',
    name: 'Forgetpassword reset',
    component: () => import('../views/forgotpassword/ForgotPassword')
  },
  {
    path: '/business/changepassword',
    name: 'PasswordReset',
    component: () => import('../views/passwordreset/ChangePassword')
  },
  {
    path: '/merchant/payment/:id',
    name: 'My-payment',
    component: () => import('../views/payment/GeneratedPaymentLinkPage')
  },


  {
    path: '/',
    name: 'modules',
    component: () => import('../views/dashboard/modules'),
    beforeEnter: (to, from, next) =>{
      console.log("before Enter ", store.getters.isAuth);
      if(store.getters.isAuth){
        next()
      }
      else{
        next("/business/login")
      }
    }
  },
  //Pin Reset
  {
    path :'/business/changepin',
    name: 'pin reset',
    component:() => import('../views/passwordreset/PinReset'),
    beforeEnter: (to, from, next) =>{
      console.log("before Enter ", store.getters.isAuth);
      if(store.getters.isAuth){
        next()
      }
      else{
        next("/business/login")
      }
    }
  },
  {
    path :'/business/pinresetverifyuser',
    name: 'pin reset',
    component:() => import('../views/passwordreset/VerifySecurityPinAnswerByQuestion'),
    beforeEnter: (to, from, next) =>{
      console.log("before Enter ", store.getters.isAuth);
      if(store.getters.isAuth){
        next()
      }
      else{
        next("/business/login")
      }
    }
  },


]


const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
