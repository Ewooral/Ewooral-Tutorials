<template>
    <div class="inbox-leftbar">
        <b-button block variant="danger" @click="showModal = true">Project details</b-button>
        <div class="mail-list mt-4">

            <a style="cursor: pointer;" @click="Pay" :class="{'text-danger' : servicename === 'pay' }"><i class="ri-align-justify align-bottom mr-2 " ></i>Pay</a>
<!--            <a href="javascript: void(0);"><i class="ri-file-list-2-line align-bottom mr-2"></i>Contributors<span class="badge badge-soft-info float-right ml-2">32</span></a>-->
            <a style="cursor: pointer" @click="Contributors"  :class="{'text-danger' : servicename === 'contributor' }"><i class="ri-file-list-2-line align-bottom mr-2"></i>Contributors</a>
            <a style="cursor: pointer" @click="Chat"  :class="{'text-danger' : servicename === 'chat' }"><i class="ri-mail-unread-fill align-bottom mr-2"></i>Chat</a>
            <a style="cursor: pointer" @click="Cashout"  :class="{'text-danger' : servicename === 'cashout' }"><i class="ri-store-3-fill align-bottom mr-2"></i>Cash out</a>
            <a style="cursor: pointer" @click="Settings"  :class="{'text-danger' : servicename === 'settings' }"><i class="ri-settings-3-fill align-bottom mr-2"></i>Settings</a>

        </div>

    </div>
</template>

<script>
    export default {
        name: "SidePanel",
        data() {
          return {
              servicename : '',
              projectname:''
          }
        },
        methods : {
            Pay() {
                this.servicename = 'pay'
                this.$emit('menuClicked', 'pay')
            },
            Contributors() {
                this.servicename = 'contributor'
                this.$emit('menuClicked', 'contributor')
            },
            Chat() {
                this.servicename = 'chat'
                this.$emit('menuClicked', 'chat')
            },
            Cashout() {
                this.servicename = 'cashout'
                this.$emit('menuClicked', 'cashout')
            },
            Settings() {
                this.servicename = 'settings'
                this.$emit('menuClicked', 'settings')
            }
        },
        created() {
            this.projectname = this.$store.getters.GetProjectName.projectname
           this.Pay()
        }
    }
</script>

<style scoped>

</style>