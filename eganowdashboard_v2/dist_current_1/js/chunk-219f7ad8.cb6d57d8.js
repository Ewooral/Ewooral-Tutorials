(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-219f7ad8"],{2276:function(t,a,e){},"669d":function(t,a,e){"use strict";e("2276")},"9b40":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t._self._c;return a("div",[a("b-overlay",{attrs:{show:t.showLoader,rounded:"sm"}},[a("div",{staticClass:"row"},t._l(t.listOfAccountbalances,(function(e){return a("div",{key:e.getAccountname(),staticClass:"col-xl-3 col-md-6"},[a("div",{staticClass:"card",staticStyle:{"background-color":"#0078D4"}},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"d-flex justify-content-between"},[a("div",[a("h5",{staticClass:"text-white font-weight-bold mt-0 text-truncate",attrs:{title:"Campaign Sent"}},[t._v(t._s(e.getAccountname().split(" ").slice(0,3).join(" ")))]),a("h3",{staticClass:"my-2 py-1"},[a("span",{staticClass:"font-weight-bold text-white",attrs:{"data-plugin":"counterup"}},[t._v(t._s(e.getCurrencyiso())+" "+t._s(e.getAvailablebalance().toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")))])]),a("p",{staticClass:"text-white mb-3"},[a("span",{staticClass:"text-nowrap"},[t._v(t._s(e.getAccountname().split("-").pop()))])]),a("a",{staticStyle:{cursor:"pointer"},on:{click:function(a){return t.NavigateToStatment(e)}}},[a("span",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-color"},[t._v(t._s(t.$t("account_balance.view_statement")))])])])]),a("div",{staticClass:"avatar-sm"},[a("span",{staticClass:"avatar-title rounded"},[a("img",{staticClass:"avatar-sm rounded-circle",attrs:{src:""+e.getCountryflagurl(),alt:"logo"}})])])])])])])})),0)])],1)},n=[],c=(e("14d9"),e("df52")),o=e.n(c),r=e("4d1b"),i={data(){return{listOfAccountbalances:[],clientMoneyTransfer:{},showLoader:!1}},methods:{GetCustomerAccountBalances(){try{const t=new o.a.MoneyTransferEmptyMessage;this.showLoader=!0,this.clientMoneyTransfer.getCustomerEganowBalances(t,this.$store.getters.metadata,(t,a)=>{this.showLoader=!1,t&&console.log(" customer account balances : ",t),this.listOfAccountbalances=[],a&&(this.listOfAccountbalances=a.getBallistList())})}catch(t){console.log(" account balance Error : ",t)}},NavigateToStatment(t){try{console.log(" Country code : ",t.getCountrycode()),this.$store.dispatch("SaveCountryInfoForStatement",{countrycode:t.getCountrycode()}),this.$router.push("/moneytransfer/business/accountstatement").catch(()=>{})}catch(a){console.log(" Data : ",a)}}},created(){this.clientMoneyTransfer=new o.a.EganowMoneyTransferSvcClient(r["a"].URL,null,null),this.GetCustomerAccountBalances(),this.$store.dispatch("setAppHeader",{title:"Account Balance",items:[{text:"Dashboard",href:"#"},{text:"Account balances",href:"#"}]})}},l=i,u=(e("669d"),e("2877")),d=Object(u["a"])(l,s,n,!1,null,"8f02d4ec",null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-219f7ad8.cb6d57d8.js.map