<template>
  <div>
    <div class="account-pages mt-5 mb-5">
      <div class="container">
        <slot />
      </div>
      <!-- end container -->
    </div>
    <!-- end page -->
    <footer class="footer footer-alt">
      {{ new Date().getFullYear() }} &copy; Eganow <span>{{ $t('setting.version') }}</span>
    </footer>
  </div>
</template>
