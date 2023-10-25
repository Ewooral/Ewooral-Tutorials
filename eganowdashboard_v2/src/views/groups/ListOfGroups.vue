<template>
    <div class="row">
        <CustomeHeaderAlert :message="headertext"/>
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="row mb-3">
                        <div class="col-4">
                            <h4>List of groups</h4>
                        </div>
                        <div class="col-8">
<!--                            <div class="text-lg-right mt-3 mt-lg-0">-->
<!--                                <a-->
<!--                                        class="btn text-white btn-danger"-->
<!--                                        href="javascript: void(0);"-->
<!--                                        @click="showmodal = true">-->
<!--                                    <i class="mdi mdi-plus-circle mr-1"></i> Create group-->
<!--                                </a>-->
<!--                            </div>-->
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div
                                class="col-md-6 col-xl-3"
                                v-for="(item, index) in tableData"
                                :key="index"
                        >
                            <div class="card product-box rounded-top ">
                                <p :class="{'text-primary' : item.status === 'Private',
                                          'text-success' : item.status === 'Public' }" class="font-weight-bold m-2">
                                    {{item.status}}
<!--                                    <i class="mdi mdi-star text-warning"></i>-->
<!--                                    <i class="mdi mdi-star text-warning"></i>-->
                                </p>
                                <div class="product-img border-top">
                                    <div class="p-3">
                                        <img :src="`${item.image}`" alt="product-pic" class="img-fluid w-100 h-auto" />
                                    </div>
                                </div>

                                <div class="product-info border-top p-3">
                                    <div>
                                        <h5 class="font-18 mt-0 mb-1 font-weight-bold">
                                            <router-link
                                                    :to="`/ecommerce/product-detail/${item.id}`"
                                                    class="text-dark"
                                            >{{ item.name }}</router-link
                                            >
                                        </h5>
                                        <p class="lead">
                                            {{item.subject}}
                                        </p>
                                        <h4 class="m-0">
                                            <span class=""> Number of members : {{ item.noofmember }}</span>
                                        </h4>
                                        <div class="my-3">
                                            <button class="bgcustomcolor border-0 btn-lg btn-block" @click="GroupDetails(item)"> Continue </button>
                                        </div>
                                    </div>
                                </div>
                                <!-- end product info-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<!--        <b-modal-->
<!--                id="modal-1"-->
<!--                v-model="showmodal"-->
<!--                title="Create group"-->
<!--                header-close-variant="light"-->
<!--                title-class="font-18"-->
<!--                hide-footer>-->
<!--            <form @submit.prevent="CreateGroup">-->
<!--                <div class="form-group">-->
<!--                    <label for="name">Name</label>-->
<!--                    <input-->
<!--                            id="name"-->
<!--                            v-model="addgroup.name"-->
<!--                            type="text"-->
<!--                            class="form-control"-->
<!--                            placeholder="Enter name"-->
<!--                            name="name"-->
<!--                            :class="{ 'is-invalid': vErrors.has('name') }"-->
<!--                    />-->
<!--                    <span v-show="vErrors.has('name')" class="help text-danger">{{ vErrors.first('name') }}</span>-->
<!--                </div>-->
<!--                <div class="form-group">-->
<!--                    <label> Group type</label>-->
<!--                    <select name="status" class="custom-select" v-model="addgroup.type">-->
<!--                        <option selected>Select status</option>-->
<!--                        <option value="public">Public</option>-->
<!--                        <option value="private">Private</option>-->
<!--                    </select>-->
<!--                </div>-->
<!--                <div class="form-group">-->
<!--                    <label for="description">Descriptions</label>-->
<!--                    <textarea v-model="addgroup.description" v-validate="'required'" id="description" class="form-control"  name="description" :maxlength="400" rows="3" placeholder="Group description">-->
<!--                            </textarea>-->
<!--                    <span v-show="vErrors.has('description')" class="help text-danger">{{ vErrors.first('description') }}</span>-->

<!--                </div>-->

<!--                <div class="text-right">-->
<!--                    <button type="submit" class="btn btn-success">Save</button>-->
<!--                    <b-button class="ml-1" variant="danger" @click="hideModal"-->
<!--                    >Cancel</b-button-->
<!--                    >-->
<!--                </div>-->
<!--            </form>-->
<!--        </b-modal>-->
    </div>
</template>

<script>
    import {widgetData, tableData} from "./listgroup";
    import CustomeHeaderAlert from '../../components/shared/CustomHeaderAlert'

    export default {
       data() {
           return {
               showmodal: false,
               headertext :'Active running private and public groups',
            addgroup : {
                 name:'',
                type:'',
                description:''
            },
               tableData: tableData,
               widgetData: widgetData,
           }
       },
        components : {
            CustomeHeaderAlert
        },
        methods: {
            CreateGroup() {

            },
            onFiltered(filteredItems) {
                // Trigger pagination to update the number of buttons/pages due to filtering
                this.totalRows = filteredItems.length;
                this.currentPage = 1;
            },
            hideModal(e) {
                console.log(e)
                this.showmodal = false;
            },
            GroupDetails(data) {
                   console.log("d", data)

                 this.$store.dispatch('SetGroupName', {
                     groupname : data.name
                 })
                this.$router.push('/groupcontribution/business/groupdetails').catch(() => { })
            }
        },
        created() {
            this.$store.dispatch('setAppHeader', {
                title: "List of groups",
                items: [
                    {
                        text: "Dashboard",
                        href: "#",
                    },
                    {
                        text: "List of groups",
                        href: "#",
                    },
                ],
            })
        },
        computed:{
            rows() {
                return this.tableData.length;
            },
        },
        mounted() {
            // Set the initial number of items
            this.totalRows = this.tableData.length;
        },
    }
</script>

<style >
   .bgcustomcolor {
       background-color: #D8DADF !important;
       font-weight: bold !important;
   }
</style>