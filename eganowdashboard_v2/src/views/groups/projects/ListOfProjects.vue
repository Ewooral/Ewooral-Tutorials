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
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div
                                class="col-md-6 col-xl-3"
                                v-for="(item, index) in gropuDetailData"
                                :key="index"
                        >
                            <div class="card product-box rounded-top ">
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
                                        <p>
                                            {{item.text}}
                                        </p>
                                        <h4 class="m-0 pb-2">
                                            <span class="text-muted"> Target : GHS {{ item.amount }}</span>
                                        </h4>
                                        <h4 class="m-0">
                                            <span class=""> Deadline : {{ item.deadline }}</span>
                                        </h4>
                                        <div class="my-3">
                                            <button class="btn btn-primary border-0 btn-lg btn-block" @click="SelectedProject(item)"> Continue </button>
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
    </div>
</template>

<script>
    export default {
        name: "ListOfProjects",
        data() {
            return {
                headertext :'List of all project for this group',
                gropuDetailData: [
                    {
                        id:1,
                        name: "Kwame's wedding",
                        text: "Lorem ipsum consectetur adipiscing elit,  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
                        deadline: '15-03-22',
                        amount: 320,
                    },
                    {
                        id:2,
                        name: "Dennis's wedding",
                        // profile: require("@/assets/images/users/avatar-3.jpg"),
                        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. non proident, sunt in culpa qui officia ",
                        deadline: '25-03-22',
                        amount: 30000,
                    },
                    {
                        id:3,
                        name: "Enoch's birthday party",
                        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
                        deadline: '17-06-22',
                        amount: 6320,
                    },
                    {
                        id:4,
                        name: "Favor's friday party",
                        text: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed  ",
                        deadline: '15-09-22',
                        amount: 5320,
                    },
                ],
            }
        },
        methods : {
            SelectedProject(data) {
                try {
                    this.$store.dispatch('SetProjectName', {
                        projectname : data.name
                    })
                    this.$router.push('/groupcontribution/business/groupservices').catch(() => { })
                }catch (e) {
                    console.log(e)
                }
            }
        }
    }
</script>

<style scoped>

</style>