<template>
  <!-- start page title -->
  <div class="row">
    <div class="col-12">
      <div
          class="page-title-box"
          :class="{
          'page-title-box-alt': false
        }"
      >
<!--        <h4 class="page-title">{{ title }}</h4>-->
        <div class="page-title-left">
          <b-breadcrumb :items="items" class="m-0"></b-breadcrumb>
        </div>
      </div>
    </div>
  </div>
  <!-- end page title -->
</template>
<script>

/**
 * Page-header component
 */
export default {
  components: {},
  computed: {
    title() {
      return this.$store.getters.getAppHeader.title;
    },
    items() {
      return this.$store.getters.getAppHeader.items;
    },
  }

  // props: {
  //   title: {
  //     type: String,
  //     default: "",
  //   },
  //   items: {
  //     type: Array,
  //     default: () => {
  //       return [];
  //     },
  //   },
  // },
};
</script>


<style scoped>
.breadcrumb-item > a {
  color: #c92d4b !important;
  /*font-weight: bold;*/
}
.breadcrumb-item.active {
  color: #c92d4b !important;
  font-weight: bold;
}
</style>