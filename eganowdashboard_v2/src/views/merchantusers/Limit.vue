<template>
<div>
  <h1> Limit</h1>
</div>
</template>

<script>
//import Multiselect from "vue-multiselect";
export default {
  components :{

    // Multiselect
  },
  data(){
    return{
    }
  },
  created() {
    this.$store.dispatch('setAppHeader', {
      title: "Limit",
      items: [
        {
          text: "Dashboard",
          href: "#",
        },
        {
          text: "Limit",
          href: "/merchant/limit",
        },
      ],
    })
  }
}
</script>

<style scoped>

</style>