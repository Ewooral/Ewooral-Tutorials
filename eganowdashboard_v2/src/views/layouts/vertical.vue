<script>
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";

/**
 * Vertical layout
 */
import moneyTransferMenus from "../../components/shared/menus/moneyTransferMenus";
import billPaymentMenus from "../../components/shared/menus/billPaymentMenus";
import bizCollectMenus from "../../components/shared/menus/bizCollectMenus";
import defaultMenus from "../../components/shared/menus/defaultMenus";
import groupContributionMenu from "../../components/shared/menus/groupContributionMenu";
import merchantServiceMenu from "../../components/shared/menus/merchantServiceMenu";
export default {
  components: {
    Sidebar,
    Topbar,
    Footer,
  },
  data() {
    return {
      isMenuCondensed: false,
    };
  },
  created() {
    let category = this.$route.params.module
    console.log("category : ", category)
    switch (category){
      case "moneyTransfer" :
            this.$store.dispatch("setMenuItems",moneyTransferMenus)
         break;
      case "billpayment":
        this.$store.dispatch("setMenuItems",billPaymentMenus)
        break;
      case "bizcollect" :
        this.$store.dispatch("setMenuItems",bizCollectMenus)
        break;
      case "groupcontribution" :
          this.$store.dispatch('setMenuItems',groupContributionMenu)
          break;
      case "merchantservice" :
           this.$store.dispatch('setMenuItems', merchantServiceMenu)
           break;
        default:
          this.$store.dispatch("setMenuItems",defaultMenus)
          break;

    }
  },
  mounted() {
    document.body.removeAttribute("data-layout-mode");
    document.body.removeAttribute("data-sidebar-showuser");
  },
  methods: {
    toggleRightSidebar() {
      document.body.classList.toggle("right-bar-enabled");
    },
    hideRightSidebar() {
      document.body.classList.remove("right-bar-enabled");
    },
    toggleMenu() {
      this.isMenuCondensed = !this.isMenuCondensed;
      if (this.isMenuCondensed)
        document.body.setAttribute("data-sidebar-size", "condensed");
      else document.body.removeAttribute("data-sidebar-size", "condensed");

      // if (window.screen.width >= 992) {
      //   this.$router.afterEach((routeTo, routeFrom) => {
      //     document.body.classList.remove("sidebar-enable");
      //   });
      // } else {
      //   document.body.setAttribute("data-sidebar-size", "default");
      //   document.body.classList.toggle("sidebar-enable");
      //   this.$router.afterEach((routeTo, routeFrom) => {
      //     document.body.classList.remove("sidebar-enable");
      //   });
      // }
    },
  },
};
</script>

<template>
  <!-- Begin page -->
  <div id="wrapper">
    <Sidebar
        :type="'dark'"
        :width="'fluid'"
        :size="'condensed'"
        :menu="'fixed'"
        :topbar="'dark'"
    />
    <!-- ============================================================== -->
    <!-- Start Page Content here -->
    <!-- ============================================================== -->

    <div class="content-page">
      <div class="content">
        <Topbar />
        <!-- Start Content-->
        <div class="container-fluid">
         <slot/>
        </div>
      </div>
      <Footer />
    </div>
<!--    <Rightbar />-->
  </div>
</template>
