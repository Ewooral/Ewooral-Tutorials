(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f07e02c","chunk-2d213ca8"],{"24d4":function(e,t,s){"use strict";t["a"]={title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}},"4a69":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e._self._c;return t("b-overlay",{attrs:{show:e.showLoader,rounded:"sm"}},[t("div",{staticClass:"row"},[t("CustomHeaderAlert",{attrs:{message:e.message}}),t("div",{staticClass:"col-lg-12"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col"},[t("div",{staticClass:"card"},[e.responseMessage?t("AlertMessage",{attrs:{variant:e.dangerSuccess,message:e.responseMessage}}):e._e(),t("div",{staticClass:"card-body"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.GetCustomerThatRequestPinReset.apply(null,arguments)}}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-2 col-md-2"},[t("div",{staticClass:"form-group mb-3"},[t("button",{staticClass:"btn btn-primary btn-block",attrs:{id:"bkcolor",type:"submit"}},[e._v(" Get customers ")])])])])]),t("div",{staticClass:"row mb-md-2"},[t("div",{staticClass:"col-sm-12 col-md-6"},[t("div",{staticClass:"dataTables_length",attrs:{id:"tickets-table_length"}},[t("label",{staticClass:"d-inline-flex align-items-center"},[e._v(" Show  "),t("b-form-select",{attrs:{size:"sm",options:e.pageOptions},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}}),e._v(" entries ")],1),e.listOfFilteredCustomersRequestedForPinReset.length>0?t("div",[t("download-excel",{staticClass:"text-success hidefromprint",staticStyle:{"font-weight":"bold",cursor:"pointer"},attrs:{data:this.listOfFilteredCustomersRequestedForPinReset}},[e._v(" Export to excel ")])],1):e._e()])]),t("div",{staticClass:"col-sm-12 col-md-6"},[t("div",{staticClass:"dataTables_filter text-md-right",attrs:{id:"tickets-table_filter"}},[t("label",{staticClass:"d-inline-flex align-items-center"},[e._v(" Search: "),t("b-form-input",{staticClass:"form-control form-control-sm ml-2",attrs:{type:"search",placeholder:"Search..."},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})],1)])])]),t("div",{staticClass:"table-responsive mb-0",attrs:{id:"table"}},[t("b-table",{attrs:{items:e.pinresetresuestcustomers,fields:e.tableFields,responsive:"sm","per-page":e.perPage,"current-page":e.currentPage,"sort-by":e.sortBy,"sort-desc":e.sortDesc,filter:e.filter,"filter-included-fields":e.filterOn},on:{"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t},"update:sortDesc":function(t){e.sortDesc=t},"update:sort-desc":function(t){e.sortDesc=t},filtered:e.onFiltered},scopedSlots:e._u([{key:"cell(actions)",fn:function(s){return[t("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-responsive",modifiers:{"modal-responsive":!0}}],staticClass:"text-primary mr-2",on:{click:function(t){return e.ViewCustomerPinResetRequest(s.item)}}},[t("i",{staticClass:"mdi mdi-eye"}),e._v(" View")]),t("a",{staticClass:"text-success mr-2",staticStyle:{cursor:"pointer"},on:{click:function(t){return e.ApproveCustomerPinRequest(s.item)}}},[t("i",{staticClass:"mdi mdi-check"}),e._v(" Approve")])]}}])})],1),t("div",{staticClass:"row"},[t("div",{staticClass:"col"},[t("div",{staticClass:"dataTables_paginate paging_simple_numbers float-right"},[t("ul",{staticClass:"pagination pagination-rounded mb-0"},[t("b-pagination",{attrs:{"total-rows":e.rows,"per-page":e.perPage},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)])])])])],1)])])]),t("b-modal",{attrs:{id:"modal-responsive",title:"View customer pin reset","title-class":"font-18","body-class":"p-4"}},[t("div",{staticClass:"form-group mb-3"},[t("label",[e._v("Customer name ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.viewcustomer.customername,expression:"viewcustomer.customername"}],staticClass:"form-control",attrs:{type:"text",name:"customername",readonly:""},domProps:{value:e.viewcustomer.customername},on:{input:function(t){t.target.composing||e.$set(e.viewcustomer,"customername",t.target.value)}}})]),t("div",{staticClass:"form-group mb-3"},[t("label",[e._v("Mobile number")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.viewcustomer.mobilenumber,expression:"viewcustomer.mobilenumber"}],staticClass:"form-control",attrs:{type:"text",name:"mobilenumber",readonly:""},domProps:{value:e.viewcustomer.mobilenumber},on:{input:function(t){t.target.composing||e.$set(e.viewcustomer,"mobilenumber",t.target.value)}}})]),t("div",{staticClass:"form-group mb-3"},[t("label",[e._v("Request status")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.viewcustomer.requestStatus,expression:"viewcustomer.requestStatus"}],staticClass:"form-control",attrs:{type:"text",name:"requestStatus",readonly:""},domProps:{value:e.viewcustomer.requestStatus},on:{input:function(t){t.target.composing||e.$set(e.viewcustomer,"requestStatus",t.target.value)}}})]),t("div",{staticClass:"form-group mb-3"},[t("label",[e._v(" Requested date ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.viewcustomer.requestdate,expression:"viewcustomer.requestdate"}],staticClass:"form-control",attrs:{type:"text",name:"requestdate",readonly:""},domProps:{value:e.viewcustomer.requestdate},on:{input:function(t){t.target.composing||e.$set(e.viewcustomer,"requestdate",t.target.value)}}})]),t("div",{staticClass:"form-group mb-3"},[t("label",[e._v(" TID ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.viewcustomer.tid,expression:"viewcustomer.tid"}],staticClass:"form-control",attrs:{type:"text",name:"tid",readonly:""},domProps:{value:e.viewcustomer.tid},on:{input:function(t){t.target.composing||e.$set(e.viewcustomer,"tid",t.target.value)}}})])])],1)])},o=[],a=(s("14d9"),s("666c")),i=s("6e5c"),l=s.n(i),n=s("4d1b"),u=s("53e5"),c=s("24d4"),m=s("add3"),d={components:{CustomHeaderAlert:a["default"],AlertMessage:m["default"]},data(){return{showLoader:!1,listOfFilteredCustomersRequestedForPinReset:[],message:"Customers that want to reset their pins",clients:{},dangerSuccess:"danger",responseMessage:"",viewcustomer:{tid:"",customername:"",mobilenumber:"",requestdate:"",requestStatus:""},pinresetresuestcustomers:[],totalRows:1,currentPage:1,perPage:10,pageOptions:[10,25,50,100],filter:null,filterOn:[],sortBy:"tid",sortDesc:!1,tableFields:[{key:"tid",sortable:!0},{label:"Customer name",key:"customerName",sortable:!0},{label:"Mobile number",key:"mobileNo",sortable:!0},{label:"Request status",key:"requestStatus",sortable:!0},{label:"Requested date",key:"requestDate",sortable:!0},{key:"actions",sortable:!0}]}},methods:{GetCustomerThatRequestPinReset(){try{this.pinresetresuestcustomers=[];const e=new l.a.UsersByCIDRequestMessage;e.setCountrycode(this.$store.getters.getUserInfo.countryCode),e.setSubscriptionstatus("PENDING"),console.log(" Request : ",e),this.showLoader=!0,this.clients.getMerchantCustomerPINChangeRequest(e,this.$store.getters.metadata,(e,t)=>{this.showLoader=!1,e&&console.log(" error : ",e),t&&(t.getCustlistList().forEach(e=>{this.pinresetresuestcustomers.push({tid:e.getTid(),mobileNo:e.getMobileno(),requestStatus:e.getRequeststatus(),customerName:e.getCustomername(),requestDate:e.getRequestdate(),cID:e.getCid()})}),this.listOfFilteredCustomersRequestedForPinReset=this.pinresetresuestcustomers)})}catch(e){console.log(" error : ",e.message)}},ApproveCustomerPinRequest(e){try{this.sweetAlert.showDialogYesOrNo(Object.assign(c["a"],{confirmButtonText:"Yes, approve"}),()=>{const t=new l.a.MerchantCustomerPINChangeApproveMessage;t.setTid(e.tid),t.setCid(e.cID),t.setSubscriptionstatus("APPROVED"),t.setApproveordisapprove("APPROVED"),t.setMobileno(e.mobileNo),this.showLoader=!0,this.clients.merchantCustomerPINChangeApproval(t,this.$store.getters.metadata,(e,t)=>{this.showLoader=!1,e&&console.log(" Error : ",e),t.getIssuccess()?(console.log(" Response : ",t.getIssuccess()),this.GetCustomerThatRequestPinReset(),this.sweetAlert.showMessage("Pin reset approval ",t.getMessagesuccessfulorfailed())):(console.log(" pin reset error : ",t.getMessage()),this.responseMessage=t.getMessage())})})}catch(t){console.log(" Error : ",t.getMessage())}},ViewCustomerPinResetRequest(e){try{this.viewcustomer.customername=e.customerName,this.viewcustomer.mobilenumber=e.mobileNo,this.viewcustomer.requestStatus=e.requestStatus,this.viewcustomer.tid=e.tid,this.viewcustomer.requestdate=e.requestDate}catch(t){console.log("Error : ",t.getMessage())}},onFiltered(e){this.listOfFilteredCustomersRequestedForPinReset=e,this.totalRows=e.length,this.currentPage=1}},computed:{rows(){return this.listOfFilteredCustomersRequestedForPinReset.length}},mounted(){},created(){this.clients=new l.a.MerchantMiddlewareCustomerSvcClient(n["a"].URL,null,null),this.sweetAlert=new u["a"],this.GetCustomerThatRequestPinReset(),this.$store.dispatch("setAppHeader",{title:"Customer Pin Request Approval",items:[{text:"Dashboard",href:"#"},{text:"Pin Reset Request",href:"/merchant/pinrequest"}]})}},p=d,v=s("2877"),g=Object(v["a"])(p,r,o,!1,null,"f46f054a",null);t["default"]=g.exports},add3:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-12"},[e.dismissed?e._e():t("b-alert",{attrs:{show:"",dismissible:"",variant:e.variant}},[e._v(e._s(e.message))])],1)])},o=[],a={props:{variant:{type:String},message:{type:String}},data(){return{dismissSecs:5,dismissCountDown:0,dismissed:!1}},methods:{dismissAlert(){setTimeout(()=>{this.dismissed=!0},1e4)}},mounted(){this.dismissAlert()}},i=a,l=s("2877"),n=Object(l["a"])(i,r,o,!1,null,"1be72a84",null);t["default"]=n.exports}}]);
//# sourceMappingURL=chunk-0f07e02c.f2339d40.js.map