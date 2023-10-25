<template>
  <div>
    <h1> Assign User Role </h1>
  </div>
</template>

<script>
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
      title: "Assign User Role",
      items: [
        {
          text: "Dashboard",
          href: "#",
        },
        {
          text: "Assign User Role",
          href: "/merchant/assignuserrole",
        },
      ],
    })
  }
}
</script>

<style scoped>

</style>