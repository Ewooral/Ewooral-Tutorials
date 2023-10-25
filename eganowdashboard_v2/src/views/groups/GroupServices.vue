<template>
    <div class="row">
        <CustomHeaderAlert :message="message"/>
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <SidePanel @menuClicked="menuClicked"  />
                    <div class="inbox-rightbar">
<!--                        <Toolbar />-->

                        <div class="row justify-content-md-between align-items-md-center">
                            <div class="col-12">
                                <div v-if="servicename === 'chat'">
                                     <GroupChat />
                                </div>
                                <div v-if="servicename === 'pay'">
                                    <Payments />
                                </div>
                                <div v-if="servicename === 'contributor'">
                                    <Contributors />
                                </div>
                                <div v-if="servicename === 'settings'">
                                    <Settings />
                                </div>
                                <div v-if="servicename === 'cashout'">
                                    <Cashout />
                                </div>

                            </div>
                            <!-- end col-->

                            <!-- end col-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SidePanel from "./SidePanel";
    import GroupChat from "./GroupChat";
    import Payments from "./Payments";
    import Settings from "./Settings";
    import Cashout from "./Cashout";
    import Contributors from "./Contributors";

    import CustomHeaderAlert from "../../components/shared/CustomHeaderAlert";

    export default {
        name: "GroupServices",
        data(){
            return {
                message :'You can perform all this in a group',
                servicename : '',
                dataDisplay :[]
            }
        },
        components :{
            Payments,
            SidePanel,
            GroupChat,
            Contributors,
            Settings,
            Cashout,
            CustomHeaderAlert
        },
        methods : {
            menuClicked(text){
                this.servicename = text
            }
        },
        computed: {
            rows() {
                return this.dataDisplay.length;
            },
        },
        created() {

            this.$store.dispatch('setAppHeader', {
                title: "Projects",
                items: [
                    {
                        text: "Dashboard",
                        href: "#",
                    },
                    {
                        text: this.$store.getters.GetGroupName.groupname,
                        href: "#",
                    },
                    {
                        text: this.$store.getters.GetProjectName.projectname,
                        href: "#",
                    },
                ],
            })
        },
    }
</script>

<style scoped>

</style>