<template>
    <div class="inbox-leftbar">
        <b-button block variant="danger" @click="showModal = true">List of projects</b-button>
        <div class="mail-list mt-4">

            <a style="cursor: pointer" @click="ProjectList"  :class="{'text-danger' : servicename === 'projects' }"><i class="ri-file-list-2-line align-bottom mr-2"></i>Projects</a>
            <a style="cursor: pointer;" @click="MemberList" :class="{'text-danger' : servicename === 'members' }"><i class="ri-align-justify align-bottom mr-2 " ></i>Members</a>

        </div>

    </div>
</template>

<script>
    export default {
        name: "SidePanelForProjects",
        data() {
            return {
                servicename : '',
            }
        },
        methods : {
            MemberList() {
                this.servicename = 'members'
                this.$emit('menuClicked', 'members')
            },
            ProjectList() {
                this.servicename ='projects'
                this.$emit('menuClicked', 'projects')
            }
        },
        created() {
            this.ProjectList()
        }
    }
</script>

<style scoped>

</style>