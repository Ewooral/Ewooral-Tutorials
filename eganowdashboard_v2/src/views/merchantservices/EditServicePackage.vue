<template>
<div>
   <h1> Edit service package</h1>
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
    this.$store.dispatch('setAppHeader',{
      title: "Edit Service Package",
      items: [
        {
          text: "Dashboard",
          href: "#",
        },
        {
          text: "Edit Service Package",
          href: "/merchant/editservicepackage",
        },
      ],
    })
  }
}
</script>

<style scoped>

</style>