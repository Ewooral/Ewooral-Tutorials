
<template>
  <!-- Footer Start -->
  <footer class="footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          {{ new Date().getFullYear()}} &copy; Eganow
        </div>
        <div class="col-md-6 ">
             <div class="text-md-right">{{ $t('setting.version') }}</div>

<!--          <div class="text-md-right footer-links d-none d-sm-block">-->
<!--            <a href="javascript:void(0);">About Us</a>-->
<!--            <a href="javascript:void(0);">Help</a>-->
<!--            <a href="javascript:void(0);">Contact Us</a>-->
<!--          </div>-->
        </div>
      </div>
    </div>
  </footer>
  <!-- end Footer -->
</template>


<script>
/**
 * Footer Component
 */
export default {}
</script>