<template>
    <div class="row">
        <CustomHeaderAlert :message="message"/>
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <SidePanelForProjects @menuClicked="menuClicked"  />
                    <div class="inbox-rightbar">
                        <div class="row justify-content-md-between align-items-md-center">
                            <div class="col-12">
                                <div v-if="servicename === 'projects'">
                                    <ListOfProjects />
                                </div>
                                <div v-if="servicename === 'members'">
                                    <ListOfMembers />
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

    import SidePanelForProjects from "./SidePanelForProjects";
    import ListOfProjects from "./projects/ListOfProjects";
    import ListOfMembers from "./projects/ListOfMembers";
    import CustomHeaderAlert from "../../components/shared/CustomHeaderAlert";

    export default {
        name: "GroupDetails",
        data() {
            return {
                servicename : '',
                message :'List of projects',
                viewproject :{
                   name:'',
                   text:'',
                   amount :'',
                   deadline:''
                },

            }
        },
        components : {
         CustomHeaderAlert,
            SidePanelForProjects,
            ListOfProjects,
            ListOfMembers
        },
        methods : {

            menuClicked(text){
                console.log(" group detail name : ", text)
                this.servicename = text
            },
            ViewProject(data) {
                this.viewproject.name = data.name
                this.viewproject.text = data.text
                this.viewproject.amount = data.amount
                this.viewproject.deadline = data.deadline
            },
            ProceedToNextScreen(data) {
                console.log(data)
                 this.$store.dispatch('SetProjectName', {
                     projectname : data.name
                 })
                this.$router.push('/groupcontribution/business/groupservices').catch(() => { })
            }
        },
        created() {
         console.log(" data : ", this.$store.getters.GetGroupName.groupname)
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

<style scoped>

</style>