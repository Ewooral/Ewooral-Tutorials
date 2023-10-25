<template>
    <div>
        <b-overlay :show="showLoader" rounded="sm">
            <CustomHeaderAlert :message="message" />
        <div class="row">
            <div class="col-12">
                <div class="card">

                    <div class="card-body">

                        <form @submit.prevent="GetListOfMerchantAccountRequest">
                            <div class="row">
                                <div class="col-lg-3 col-md-3">
                                    <div class="form-group mb-3">
                                        <button class="btn btn-primary btn-block" id="bkcolor" type="submit" >
                                            Get merchant account request
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div class="row">
                            <div class="col-2">
                                <h4 class="header-title">Search result</h4>
                            </div>
                            <div class="col-4">

                            </div>
                        </div>


                        <p class="text-muted font-13 mb-4"></p>
                        <div class="row mb-md-2">
                            <div class="col-sm-12 col-md-6">
                                <div id="tickets-table_length" class="dataTables_length">
                                    <label class="d-inline-flex align-items-center">
                                        Show&nbsp;
                                        <b-form-select
                                                v-model="perPage"
                                                size="sm"
                                                :options="pageOptions"
                                        ></b-form-select
                                        >&nbsp;entries
                                    </label>
                                    <download-excel :data="this.listOfMerchantAccountFiltered" class="text-success hidefromprint" style="font-weight: bold; cursor: pointer;">
                                        Export to excel
                                    </download-excel>
                                </div>
                            </div>
                            <!-- Search -->
                            <div class="col-sm-12 col-md-6">
                                <div
                                        id="tickets-table_filter"
                                        class="dataTables_filter text-md-right"
                                >
                                    <label class="d-inline-flex align-items-center">
                                        Search:
                                        <b-form-input
                                                v-model="filter"
                                                type="search"
                                                placeholder="Search..."
                                                class="form-control form-control-sm ml-2"
                                        ></b-form-input>
                                    </label>
                                </div>
                            </div>
                            <!-- End search -->
                        </div>
                        <!-- Table -->

                            <div class="table-responsive mb-0" id="table">
                                <b-table style="color: #000000 !important;"
                                         :items="listOfMerchantAccounts"
                                         :fields="tableFields"
                                         responsive="sm"
                                         :per-page="perPage"
                                         :current-page="currentPage"
                                         :sort-by.sync="sortBy"
                                         :sort-desc.sync="sortDesc"
                                         :filter="filter"
                                         :filter-included-fields="filterOn"
                                         @filtered="onFiltered"
                                >
                                    <template #cell(actions)="data">
                                        <a v-b-modal.modal-lg class="text-secondary mr-2" style="cursor: pointer" @click="ViewTransaction(data.item)"  > <i class="mdi mdi-eye"></i> View</a>
                                    </template>

                                </b-table>
                            </div>
                        <div class="row">
                            <div class="col">
                                <div
                                        class="dataTables_paginate paging_simple_numbers float-right"
                                >
                                    <ul class="pagination pagination-rounded mb-0">
                                        <!-- pagination -->
                                        <b-pagination
                                                v-model="currentPage"
                                                :total-rows="rows"
                                                :per-page="perPage"
                                        ></b-pagination>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </b-overlay>
        <!-- start View transaction model      -->
        <b-modal
                id="modal-lg"
                title="View merchant account request"
                title-class="font-18"
                body-class="p-4"
                size="lg"
        >

            <div class="row">

                <div class="col-12">
                    <div class="form-group mb-3">
                        <label>Nature of business </label>
                        <input
                                class="form-control"
                                type="text"
                                v-model="viewTransaction.Natureofbusiness"
                                name="Natureofbusiness"
                                readonly
                        />
                    </div>
                    <div class="form-group mb-3">
                        <label>Do you require collection service ?</label>
                        <input
                                class="form-control"
                                type="text"
                                v-model="viewTransaction.RequireCollectionService"
                                name="RequireCollectionService"
                                readonly
                        />
                    </div>
                    <div class="form-group mb-3">
                        <label>Do you require payout service ?</label>
                        <input
                                class="form-control"
                                type="text"
                                v-model="viewTransaction.RequiredPayoutService"
                                name="RequiredPayoutService"
                                readonly
                        />
                    </div>
                    <div class="form-group mb-3">
                        <label>Do you require api integration ? </label>
                        <input
                                class="form-control"
                                type="text"
                                v-model="viewTransaction.RequireApiIntegration"
                                name="RequireApiIntegration"
                                readonly
                        />
                    </div>
                    <div class="form-group mb-3">
                        <label>Request Status</label>
                        <input
                                class="form-control"
                                type="text"
                                v-model="viewTransaction.RequestStatus"
                                name="transTimes"
                                readonly
                        />
                    </div>
                </div>
            </div>


        </b-modal>
        <!--  End  View transaction model     -->
    </div>
</template>

<script>
    import merchantstrans from "../../protos/MerchantMoneyTransferForBusinessPortal_grpc_web_pb";
    import grpcUrl from "../../components/constant";
    import CustomHeaderAlert from "../../components/shared/CustomHeaderAlert";
    export default {
        name: "MerchantRequestList",
        data() {
            return {
                listOfMerchantAccounts:[],
                listOfMerchantAccountFiltered : [],
                showLoader : false,
                message : 'Get merchant account requests',
                filterOn: [],
                viewTransaction : {
                  Natureofbusiness: '',
                  RequireCollectionService : '',
                  RequiredPayoutService : '',
                  RequireApiIntegration : '',
                  RequestStatus : ''
                },
                merchantTransactions : {},
                pageOptions: [10, 25, 50, 100],
                filter: null,
                sortBy: "MakeDate",
                sortDesc: false,
                totalRows: 1,
                currentPage: 1,
                perPage: 10,
                tableFields: [
                    {
                        label:"Date Created",
                        key: "MakeDate",
                        sortable: true,
                    },
                    {
                        label:"Nature of Business",
                        key: "Natureofbusiness",
                        sortable: true,
                    },
                    {
                        label :"Require Collection Service",
                        key: "RequireCollectionService",
                        sortable: true,
                    },
                    {
                        label :"Require Payout Service",
                        key: "RequiredPayoutService",
                        sortable: true,
                    },
                    {
                        label :"Require Api Integration",
                        key: "RequireApiIntegration",
                        sortable: true,
                    },
                    {
                        key: "actions",
                        sortable: true,
                    },
                ],
            }

        },
        components : {
          CustomHeaderAlert
        },
        methods : {
            GetListOfMerchantAccountRequest() {
                try {
                       let request = new merchantstrans.BillPaymentEmptyMessage()
                    this.showLoader = true;
                    this.merchantTransactions.getBizCollectrequestForMerchant(request, this.$store.getters.metadata, (err, res) => {
                        this.showLoader = false;
                        if(err) {
                            console.log(err)
                        }

                        if(res) {

                            this.listOfMerchantAccounts = []
                            res.getReqlistList().forEach((data) => {
                                this.listOfMerchantAccounts.push({
                                    Natureofbusiness : data.getNatureofbusiness(),
                                    RequireCollectionService : data.getCollectionserviceyesno(),
                                    RequiredPayoutService : data.getPayoutserviceyesno(),
                                    RequireApiIntegration : data.getApirequiredyesno(),
                                    RequestStatus : data.getRequeststatus(),
                                    MakeDate : data.getMakedate(),
                                })
                            })
                            this.listOfMerchantAccountFiltered = this.listOfMerchantAccounts;
                        }
                    })
                }  catch (e) {
                    console.log(e)
                }
            },
            onFiltered(filteredItems) {
                console.log(" filter data : ", filteredItems)
                this.listOfMerchantAccountFiltered = filteredItems
                // Trigger pagination to update the number of buttons/pages due to filtering
                this.totalRows = filteredItems.length;
                this.currentPage = 1;
            },
            ViewTransaction(data) {
               this.viewTransaction.Natureofbusiness = data.Natureofbusiness;
               this.viewTransaction.RequireCollectionService = data.RequireCollectionService;
               this.viewTransaction.RequiredPayoutService = data.RequiredPayoutService;
               this.viewTransaction.RequireApiIntegration = data.RequireApiIntegration;
               this.viewTransaction.RequestStatus = data.RequestStatus;

            }
        },
        created() {
            this.merchantTransactions = new merchantstrans.MerchantMoneyTransferForBusinessPortalSvcClient(grpcUrl.URL,null, null)
            this.GetListOfMerchantAccountRequest()
        },
        computed : {
            rows() {
                return this.listOfMerchantAccountFiltered.length;
            },
        }

    }
</script>

<style scoped>

</style>