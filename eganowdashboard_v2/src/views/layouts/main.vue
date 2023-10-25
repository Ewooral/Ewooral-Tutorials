<template>
  <div>
    <!-- Begin page -->
    <Vertical :layout="'vertical'">
      <slot />
    </Vertical>
    <!-- END layout-wrapper -->
  </div>
</template>

<script>
import Vertical from "./vertical";
export default {
  components:{
    Vertical
  }
}
</script>

<style scoped>

</style>