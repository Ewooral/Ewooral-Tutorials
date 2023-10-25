<template>
   <div>
     <h1> My services</h1>
   </div>
</template>

<script>

export default {
  components:{
  },
  data(){
    return{

    }
  },
  created() {
    this.$store.dispatch('setAppHeader', {
      title: "My Merchant Service",
      items: [
        {
          text: "Dashboard",
          href: "#",
        },
        {
          text: "My Merchant Service",
          href: "/merchant/mymerchantservice",
        },
      ],
    })
  }
}
</script>

<style scoped>

</style>