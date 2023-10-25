<template>
    <div class="row">
      <div class="col-lg-12">
      <b-alert show dismissible :variant="variant" v-if="!dismissed">{{message}}</b-alert>
      </div>
    </div>
</template>

<script>
export default {

  props : {
    variant: {
      type:String
    },
    message: {
      type:String
    },
  },
    data() {
       return {
           dismissSecs: 5,
           dismissCountDown: 0,
           dismissed : false
       }
    },
    methods : {
        dismissAlert() {
            // this.dismissCountDown = this.dismissSecs
            // console.log("Watch value : ", this.dismissCountDown)
            setTimeout(() => {
                // console.log("Watch value : ", this.dismissCountDown)
                this.dismissed = true;
            }, 10000)
        }
     },
    mounted() {
        this.dismissAlert()
    },

}
</script>

<style scoped>

</style>