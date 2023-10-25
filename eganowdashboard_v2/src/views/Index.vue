<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <router-view></router-view>
  </Layout>
</template>

<script>
import Layout from "./layouts/main";
import PageHeader from "@/components/Page-header";

/**
 * Starter component
 */
export default {
  data() {
    return {
      title:'',
      items :[]
      // title: "Dashboard",
      // items: [
      //   {
      //     text: "Dashboard",
      //     href: "/",
      //   },
      //   {
      //     text: "Account Balance",
      //     href: "/",
      //   },
      // ],

    }
  },
  created() {
    this.title = this.$store.getters.getAppHeader.title
    this.items = this.$store.getters.getAppHeader.items
  },
  components: {
    Layout,
    PageHeader
  },
};
</script>
