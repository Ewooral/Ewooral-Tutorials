
<template>
    <div>
        <b-overlay :show="showLoader" rounded="sm">
    <div class="row">
        <div
                v-for="data in listOfAccountbalances"
                :key="data.getAccountname()"
                class="col-xl-3 col-md-6"
        >

                <div class="card" style="background-color: #0078D4">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <div>
                                <!--                            text-muted-->
                                <h5 class="text-white font-weight-bold mt-0 text-truncate" title="Campaign Sent">{{ data.getAccountname().split(' ').slice(0, 3).join(' ') }}</h5>
                                <h3 class="my-2 py-1">
                                    <span class="font-weight-bold text-white" data-plugin="counterup">{{ data.getCurrencyiso()}} {{ data.getAvailablebalance().toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') }}</span>
                                </h3>

                                <p class="text-white mb-3">
                                    <span class="text-nowrap ">{{ data.getAccountname().split('-').pop()}}</span>
                                </p>

                                    <a @click="NavigateToStatment(data)" style="cursor: pointer;'">
                                        <span class="form-group">
                                              <button  class="btn btn-color" style="">{{ $t('account_balance.view_statement') }}</button>
                                        </span>
                                    </a>

                            </div>
                            <div class="avatar-sm">
                        <span class="avatar-title rounded">
                            <img
                                    :src="`${data.getCountryflagurl()}`"
                                    alt="logo"
                                    class="avatar-sm rounded-circle"
                            />
                        </span>
                            </div>
                        </div>
                    </div>
                </div>


        </div>
    </div>
        </b-overlay>
    </div>
</template>

<script>

    import moneyTransfer from "../../protos/EganowMoneyTransfer_grpc_web_pb"
    import grpcUrl from "../../components/constant";

    export default {
        data(){
            return {
                listOfAccountbalances : [],
                clientMoneyTransfer : {},
                showLoader : false
            }
        },
        methods :{
              GetCustomerAccountBalances() {

                  try {

                 const request = new moneyTransfer.MoneyTransferEmptyMessage()
                 this.showLoader = true
                  this.clientMoneyTransfer.getCustomerEganowBalances(request, this.$store.getters.metadata, (err, res) => {
                  this.showLoader = false
                      if(err) {
                          console.log(" customer account balances : ", err)
                      }

                      this.listOfAccountbalances = []
                      if(res) {

                          this.listOfAccountbalances = res.getBallistList()
                      }

                  })

                  }catch (e) {
                      console.log( " account balance Error : ",e)
                  }
              },
            NavigateToStatment(data) {

                  try {

                      console.log(" Country code : ", data.getCountrycode())
                      this.$store.dispatch('SaveCountryInfoForStatement', {
                          countrycode : data.getCountrycode()
                      })
                      this.$router.push('/moneytransfer/business/accountstatement').catch(() => { })
                  }catch (e) {
                      console.log(" Data : ", e)
                  }
            }
        },
        created() {

        this.clientMoneyTransfer = new moneyTransfer.EganowMoneyTransferSvcClient(grpcUrl.URL,null,null)
            this.GetCustomerAccountBalances();
            this.$store.dispatch('setAppHeader', {
                title: "Account Balance",
                items: [
                    {
                        text: "Dashboard",
                        href: "#",
                    },
                    {
                        text: "Account balances",
                        href: "#",
                    },
                ],
            })
        }
    }
</script>

<style scoped>
.btn-color {
    background-color:#26AC4E;
/*#DF4545;*/
    color: white;
    font-weight: normal;
}
 .btn-color:hover {
     background-color: #fff;
     color: black;
 }
</style>