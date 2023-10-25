<template>
  <div>
<!--  <b-overlay :show="showLoader" rounded="sm">-->
    <div class="image-loader"  id="image-loader" >
      <lottie-loader :loading="showLoader" />
    </div>
      <div class="row ">
          <div class="col-lg-12 content">
              <div class="row">
                  <div class="col">
                      <div class="card">
                          <div class="card-body">
                              <form @submit.prevent="searchTransaction">
                                  <AlertMessage :variant="dangerSuccess" :message="responseMessage" v-if="responseMessage"/>
                                  <div class="row">
                                      <div class="col-lg-4 col-md-4">
                                          <div class="form-group mb-3">
                                              <div class="row ">
                                                  <label>Select your service account</label>
                                                  <select class="custom-select" v-model="serviceAccount" name="serviceAccount" id="serviceAccount" v-validate="'required'" >
                                                      <option value="0" selected> Select service type</option>
                                                      <option value="1" selected> Select service type</option>
<!--                                                      <option :value="service.getPaypartnerserviceid()" v-for="service in listOfMerchantCustomers" :key="service.getPaypartnerserviceid()">{{service.getPaypartnerservicename()}}</option>-->

                                                  </select>

                                                  <span v-show="vErrors.has('serviceAccount')" class="help text-danger">{{ vErrors.first('serviceAccount') }}</span>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-lg-2 col-md-2">
                                          <div class="form-group mb-3">
                                              <label ></label>
                                              <br />
                                              <button class="btn btn-primary btn-block" id="bkcolor" type="submit" style="margin-top: 8px;" >
                                                  Search
                                              </button>
                                          </div>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  <div class="row">
     <CustomHeaderAlert :message="message" />
    <div
        v-for="data in DashboardServices"
        :key="data.title"
        class="col-xl-3 col-md-4"
    >
      <DashboardServicesComponent
          :title="data.title"
          :icon="data.icon"
          :value="data.value"
          :text="data.text"
          :color="data.color"
      />
    </div>
  </div>
<!--  </b-overlay>-->
  </div>
</template>

<script>
import DashboardServicesComponent from "../../components/dashboard/DashboardServices";
import CustomHeaderAlert from "../../components/shared/CustomHeaderAlert";
import merchantstrans from "../../protos/MerchantMoneyTransferForBusinessPortal_grpc_web_pb";
import grpcUrl from "../../components/constant";
import LottieLoader from "../../components/LottieLoader";
export default {
  data(){
    return{
      clients :{},
        listOfMerchantCustomers : [],
      dangerSuccess:'',
        serviceAccount:'',
      responseMessage :'',
      message :"Account balances for collections, payouts and commissions",
      showLoader : false,
      color : '',
      DashboardServices: [

        // {
        //   title: "Commissions",
        //   icon: "ri-hand-heart-line",
        //   value: "34,521",
        //   text: "8.58%",
        // }
      ],
    }
  },
  name: "Home",
  methods :{
      searchTransaction() {
          console.log("hello")
      },
      getAccountBalancesByServiceId(){
         try {
                // console.log("im here : ", this.serviceAccount)
             const request = new merchantstrans.MerchantServicesRequestMessage();

             request.setCountrycode(this.$store.getters.getUserInfo.countryCode)
             request.setLanguageid(this.$store.getters.getUserInfo.languageId)
             request.setPaypartnerserviceid(this.serviceAccount)

             this.showLoader = true;
             this.clients.getMerchantServiceAccountBalanceByServiceId(request,this.$store.getters.metadata, (error, res) => {
                 this.showLoader = false;
                 if(error) {
                     console.log(" error : ", error.getMessage())
                 }
                 this.DashboardServices = []
                 if(res) {
                    // console.log("Response : ", res)
                     res.getBalancelistList().forEach((data) => {
                         if(data.getDashboardname() === 'Collection') {
                             this.color  = "#26AC4E"
                         }
                         else if(data.getDashboardname() === 'Payout') {
                             this.color  = "#DF4545" // 2C89DC
                         }
                         else  {
                             this.color  = "#0078D4"
                         }
                         this.DashboardServices.push({
                             title : data.getDashboardname(),
                             value: grpcUrl.formatMoney(data.getAvailablebalance(),data.getCurrencyiso()),
                             text :data.getPaypartnerservicename(),
                             icon: data.getDashboardname() === 'Collection' ? 'ri-stack-line' : 'ri-slideshow-2-line',
                             color : this.color
                         })
                     })
                 }

             })

         }  catch (e) {
             this.showLoader = false;
             this.responseMessage = grpcUrl.serverError
         }
      },
      getMerchanrtListByCust() {
          try {
              const request = new merchantstrans.BillPaymentCountryMessage();

              request.setCountrycode(this.$store.getters.getUserInfo.countryCode)
              request.setLanguageid(this.$store.getters.getUserInfo.languageId)
              this.showLoader = true;
              this.clients.getMerchantServicesByCustomerGuidList(request,this.$store.getters.metadata, (error, res) => {
                  this.showLoader = false;
                  if(error) {
                      this.responseMessage = grpcUrl.serverError
                  }

                  if(res) {
                      this.listOfMerchantCustomers = []
                      this.listOfMerchantCustomers = res.getPaypartnerserviceslistList()
                      console.log(" service list type : ", this.listOfMerchantCustomers)
                  }

              })
          } catch (e) {
              this.showLoader = false;
              this.responseMessage = grpcUrl.serverError
              console.log(" Error : ", e)
          }
      },
     GetServicesAccountBalances() {
         const request = new merchantstrans.BillPaymentCountryMessage();
          request.setCountrycode(this.$store.getters.getUserInfo.countryCode)
          request.setLanguageid(this.$store.getters.getUserInfo.languageId)
           console.log(" Request : ", request)
        this.showLoader = true
        this.clients.getMerchantServiceAccountBalance(request,this.$store.getters.metadata, (err,res) => {
        this.showLoader = false
            if(err) {
              console.log(" error : ", err.getMessage())
            }
            console.log(" REsponse : ", res)
              //this.DashboardServices = []
            if(res) {
              //  console.log("Response : ", res)
               res.getBalancelistList().forEach((data) => {
                   if(data.getDashboardname() === 'Collection') {
                     this.color  = "#26AC4E"
                   }
                   else if(data.getDashboardname() === 'Payout') {
                     this.color  = "#DF4545" // 2C89DC
                   }
                   else  {
                     this.color  = "#0078D4"
                   }
                   this.DashboardServices.push({
                      title : data.getDashboardname(),
                      value: grpcUrl.formatMoney(data.getAvailablebalance(),data.getCurrencyiso()),
                      text :data.getPaypartnerservicename(),
                      icon: data.getDashboardname() === 'Collection' ? 'ri-stack-line' : 'ri-slideshow-2-line',
                      color : this.color
                   })
               })
            }
        })
     }
  },
  components: {
    DashboardServicesComponent,
    CustomHeaderAlert,
    LottieLoader
  },
  created() {
    this.clients = new merchantstrans.MerchantMoneyTransferForBusinessPortalSvcClient(grpcUrl.URL,null, null)
    this.GetServicesAccountBalances();
      //this.getMerchanrtListByCust();
    this.$store.dispatch('setAppHeader',{
      title: 'Services',
      items: [
        {
          text: "Dashboard",
          href: "#",
        },
        {
          text: "Services",
          href: "#",
        },
      ],
    })
  }

}
</script>

<style scoped>
.image-loader {
    z-index: 100;
}
</style>