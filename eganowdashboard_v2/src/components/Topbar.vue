<template>
  <!-- Topbar Start -->
  <b-overlay :show="showLoader" rounded="sm">
  <div class="navbar-custom" style="background: #0078D4;">
    <div class="container-fluid">

      <ul class="list-unstyled topnav-menu float-right mb-0">

        <li class="dropdown d-inline-block d-lg-none">
          <a
              class="nav-link dropdown-toggle arrow-none waves-effect waves-light"
              data-toggle="dropdown"
              href="#"

              role="button"
              aria-haspopup="false"
              aria-expanded="false"
          >
            <i class="fe-search noti-icon"></i>
          </a>
          <div class="dropdown-menu dropdown-lg dropdown-menu-right p-0">
            <form class="p-3">
              <input
                  type="text"
                  class="form-control"
                  :placeholder="('navbar.search.text')"
                  aria-label="Recipient's username"
              />
            </form>
          </div>
        </li>

<!--        <li class="dropdown d-none d-lg-inline-block">-->
<!--          <a-->
<!--              class="nav-link arrow-none text-center text-white font-18"-->
<!--              @click="CreateMerchantService"-->
<!--              href="#"-->
<!--          >-->
<!--           manage  merchant service-->
<!--          </a>-->
<!--        </li>-->

        <li class="dropdown d-none d-lg-inline-block">
          <a
                  class="nav-link dropdown-toggle arrow-none waves-effect waves-light"
                  @click="initFullScreen"
                  data-toggle="fullscreen"
                  href="#"
          >
            <i class="fe-maximize noti-icon"></i>

          </a>
        </li>

<!--        <b-nav-item-dropdown-->
<!--            right-->
<!--            class="notification-list"-->
<!--            menu-class="dropdown-lg"-->
<!--        >-->
<!--          <template slot="button-content" class="nav-link dropdown-toggle">-->
<!--            <i class="fe-bell noti-icon"></i>-->
<!--            <span class="badge badge-danger rounded-circle noti-icon-badge"> 5</span>-->
<!--          </template>-->

<!--          <a href="#" class="dropdown-item noti-title">-->
<!--            <h5 class="m-0">-->
<!--              <span class="float-right">-->
<!--                <a href class="text-dark">-->
<!--                  <small>-->
<!--                      clear all-->
<!--                    </small>-->
<!--                </a>-->
<!--              </span>-->
<!--              notification-->
<!--            </h5>-->
<!--          </a>-->

<!--          <simplebar style="max-height: 230px">-->
<!--            <a-->
<!--                href="javascript:void(0);"-->
<!--                class="dropdown-item notify-item active"-->
<!--            >-->
<!--              <div class="notify-icon bg-soft-primary text-primary">-->
<!--                <i class="mdi mdi-comment-account-outline"></i>-->
<!--              </div>-->
<!--              <p class="notify-details">-->
<!--                Doug Dukes commented on Admin Dashboard-->
<!--                <small class="text-muted"> 1 minute</small>-->
<!--              </p>-->
<!--            </a>-->

<!--            &lt;!&ndash; item&ndash;&gt;-->
<!--            <a href="javascript:void(0);" class="dropdown-item notify-item">-->
<!--              <div class="notify-icon">-->
<!--                <img-->
<!--                    src="@/assets/images/users/avatar-2.jpg"-->
<!--                    class="img-fluid rounded-circle"-->
<!--                    alt-->
<!--                />-->
<!--              </div>-->
<!--              <p class="notify-details">-->
<!--                Doug Dukes commented on Admin Dashboard-->
<!--              </p>-->
<!--              <p class="text-muted mb-0 user-msg">-->
<!--                <small>2 minutes</small>-->
<!--              </p>-->
<!--            </a>-->

<!--            &lt;!&ndash; item&ndash;&gt;-->
<!--            <a href="javascript:void(0);" class="dropdown-item notify-item">-->
<!--              <div class="notify-icon">-->
<!--                <img-->
<!--                    src="@/assets/images/users/avatar-4.jpg"-->
<!--                    class="img-fluid rounded-circle"-->
<!--                    alt-->
<!--                />-->
<!--              </div>-->
<!--              <p class="notify-details">-->
<!--                Doug Dukes commented on Admin Dashboard-->
<!--              </p>-->
<!--              <p class="text-muted mb-0 user-msg">-->
<!--                <small>3 minutes</small>-->
<!--              </p>-->
<!--            </a>-->
<!--          </simplebar>-->

<!--          <a-->
<!--              href="javascript:void(0);"-->
<!--              class="dropdown-item text-center text-primary notify-item notify-all"-->
<!--          >-->
<!--            {{ ("navbar.dropdown.notification.button") }}-->
<!--            <i class="fi-arrow-right"></i>-->
<!--          </a>-->
<!--        </b-nav-item-dropdown>-->
        <b-nav-item-dropdown
            variant="white"
            class="d-none d-lg-inline-block"
            right
            toggle-class="header-item"
        >
          <template v-slot:button-content>

            <img class :src="flag" alt="Header Language" height="16"  />
            {{ text }}
          </template>
          <b-dropdown-item
              class="notify-item"
              v-for="(entry, i) in languages"
              :key="`Lang${i}`"
              :value="entry"
              :link-class="{ active: entry.language }"
              @click="setLanguage(entry.language,entry.title, entry.flag)"
          >
            <img
                :src="`${entry.flag}`"
                alt=""
                class="mr-1"
                height="12"
            />
            <span class="align-middle">{{ entry.title }}</span>
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown
            right
            class="notification-list topbar-dropdown"
            menu-class="profile-dropdown"
            toggle-class="p-0"
        >
          <template slot="button-content" class="nav-link dropdown-toggle">
            <div class="nav-user mr-0">
              <img
                  :src="uploaded_image"
                  alt="user-image"
                  class="rounded-circle"
              />
              <span class="pro-user-name ml-1">
                {{firstName}}
                <i class="mdi mdi-chevron-down"></i>
              </span>
            </div>
          </template>

            <a class="dropdown-item" style="cursor: pointer" @click="GoToProfile">
                <i class="fe-user mr-1"></i>
                <span>{{ $t('setting.profile') }}</span>

          </a>
            <b-dropdown-divider></b-dropdown-divider>
            <a class="dropdown-item" style="cursor: pointer" @click="AddUser">
                <i class="fe-user-plus"></i>
                <span>{{ $t('setting.adduser') }}</span>
            </a>


          <b-dropdown-divider></b-dropdown-divider>
          <a class="dropdown-item" style="cursor: pointer" @click="ViewUser">
            <i class="fe-users"></i>
            <span>{{ $t('setting.viewuser') }}</span>
          </a>


          <b-dropdown-divider></b-dropdown-divider>

          <a class="dropdown-item" style="cursor: pointer" @click="ResetPassword">
            <i class="fe-edit mr-1"></i>
            <span>{{ $t('setting.change_password') }}</span>
          </a>

            <b-dropdown-divider></b-dropdown-divider>
            <a class="dropdown-item" style="cursor: pointer" @click="ChangePin">
                <i class="fe-edit mr-1"></i>
                <span>{{ $t('setting.reset_pin') }}</span>
            </a>

          <b-dropdown-divider></b-dropdown-divider>
          <a class="dropdown-item" @click="LogoutUser" style="cursor: pointer">
            <i class="fe-log-out mr-1"></i>
            <span>{{ $t('setting.log_out') }}</span>
          </a>
        </b-nav-item-dropdown>

<!--        <li class="dropdown notification-list">-->
<!--          <a-->
<!--              href="javascript:void(0);"-->
<!--              @click="toggleRightSidebar"-->
<!--              class="nav-link right-bar-toggle toggle-right"-->
<!--          >-->
<!--            <i class="fe-settings noti-icon toggle-right"></i>-->
<!--          </a>-->
<!--        </li>-->
      </ul>

      <!-- LOGO -->
      <div class="logo-box">
        <router-link to="/" class="logo logo-dark text-center">
          <span class="logo-sm">
            <img src="@/assets/images/logo-text.svg" alt height="24" />
            <!-- <span class="logo-lg-text-light">Minton</span> -->
          </span>
        </router-link>

        <router-link to="/" class="logo logo-light text-center">
          <span class="logo-sm">
            <img src="@/assets/images/logo-text.svg" alt height="24" />
          </span>
          <span class="logo-lg">
            <img src="@/assets/images/logo-text.svg" alt height="20" />
          </span>
        </router-link>
      </div>

      <ul class="list-unstyled topnav-menu topnav-menu-left m-0">
        <li>
          <button
              class="button-menu-mobile waves-effect waves-light"
              @click="toggleMenu"
          >
            <i class="fe-menu"></i>
          </button>
        </li>

        <li>
          <!-- Mobile menu toggle (Horizontal Layout)-->
          <a
              class="navbar-toggle nav-link"
              data-toggle="collapse"
              @click="horizonalmenu()"
              data-target="#topnav-menu-content"
          >
            <div class="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
          <!-- End mobile menu toggle-->
        </li>
        <li>
          <a   class="navbar-toggle nav-link"
               data-toggle="collapse" style="font-size: 18px; color: white;">
            <b>{{ businessName }}</b>
          </a>
        </li>
      </ul>
      <div class="clearfix"></div>
    </div>
  </div>
  </b-overlay>
  <!-- end Topbar -->
</template>

<script>
import common from "../protos/CommonData_grpc_web_pb";
import constant from "./constant";

/**
 * Topbar component
 */
export default {
  data() {
    return {
      showLoader : false,
      businessName:'',
      firstName :'',
      clients:{},
      uploaded_image:'',
      languages: [
        {
          flag: require("@/assets/images/flags/us.jpg"),
          language: "en",
          title: "English",
        },
        {
          flag: require("@/assets/images/flags/french.jpg"),
          language: "fr",
          title: "French",
        },

      ],
      current_language: this.$i18n.locale,
      text: null,
      flag: require("@/assets/images/flags/us.jpg"),
      value: null,
    };
  },
  mounted() {
     this.businessName = this.$store.getters.getUserInfo.businessName;
     this.firstName = this.$store.getters.getUserInfo.firstName;
    this.value = this.languages.find((x) => x.language === this.$i18n.locale);
    this.text = this.value.title;
    this.flag = this.value.flag;
  },
  methods: {
    /**
     * Toggle menu
     */
    toggleMenu() {
      this.$parent.toggleMenu();

      if(document.body.classList.contains('sidebar-enable')) {
        document.body.classList.remove('sidebar-enable')
        //document.body.setAttribute("data-sidebar-size", "default")
      } else {
        document.body.classList.add('sidebar-enable')
      }

    },
    LogoutUser(){
       this.$store.dispatch('Logout');
      this.$router.push('/business/login').catch(() => {})
    },
    /**
     * Full screen
     */
    initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (
          !document.fullscreenElement &&
          /* alternative standard method */
          !document.mozFullScreenElement &&
          !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
              Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
    /**
     * Toggle rightbar
     */
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
       console.log(" data : ", this.$parent.toggleRightSidebar())
    },
    /**
     * Set languages
     */
    setLanguage(locale, country, flag) {
      this.$i18n.locale = locale;
      this.current_language = locale;
      console.log(" Language id : ", locale)
      this.text = country;
      this.flag = flag;
    },
    /**
     * Horizontal-toggle menu
     */
    horizonalmenu() {
      let element = document.getElementById("topnav-menu-content");
      element.classList.toggle("show");
    },
      AddUser(){
          try {
            this.$router.push('/bizcollect/merchant/createuser').catch(() => { })
          }catch (e) {
              console.log(" Error : ", e)
          }
      },
    ViewUser(){
      try {
        this.$router.push('/bizcollect/merchant/viewuser').catch(() => { })
      }catch (e) {
        console.log(" Error : ", e)
      }
    },
      GoToProfile(){

          try {
               this.$router.push('/business/profile').catch(() => { })
          }catch (e) {
              console.log(" Error : ", e)
          }
      },
    // CreateMerchantService(){
    //   try {
    //
    //     this.$router.push('merchantservice/merchant/createmerchantservice').catch(() => { })
    //     console.log( " Go to settings")
    //   }catch (e) {
    //     console.log(" Error : ", e)
    //   }
    // },
      ResetPassword() {

          try {
            ///bizcollect/business/services
            this.$store.dispatch('savePinOrPasswordValue', {
              pinORpassword : 'PASSWORD'
            })
              this.$router.push('/business/enteremail').catch(() => { })
              console.log( " Go to settings")
          }catch (e) {
              console.log(" Error : ", e)
          }
      },
    ChangePin(){
      this.$store.dispatch('savePinOrPasswordValue', {
        pinORpassword : 'PIN'
      })
      this.$router.push('/business/enteremail').catch(() => { })
      // this.$validator.validateAll().then((result) => {
      //   if (result) {
      //       console.log(" In result")
      //     let request = new common.LanguageRequestMessage();
      //
      //     request.setLanguageid(this.current_language)
      //     this.showLoader = true;
      //     this.clients.generateTransOTPNow(request,this.$store.getters.metadata, (err, res) => {
      //       console.log(" In generate otp")
      //       this.showLoader = false;
      //       if(err){
      //          console.log("Error :", err);
      //         this.responseMessage = constant.serverError;
      //       }
      //       else {
      //         //loginErrorCode
      //         if(!res.getIssuccess()){
      //           console.log(" otp not generated ")
      //            console.log(" Message : " , res.getMessage())
      //         }
      //         else {
      //           console.log(" In otp generated")
      //           this.$router.push('/business/pinresetotp').catch(() => { })
      //         }
      //       }
      //
      //     });
      //
      //     return;
      //   }
      // });
    },
    ToggleSidebar(e) {
      var target = e.target || e.srcElement;
      var id = target.id
      var element = document.getElementById("sidebarToggle");
      element.classList.add("sidebar-enable");

      console.log(" target id : ", e.srcElement.id)
      console.log(id," : getting id")
      console.log(e.target, " target")
    }
  },
  created() {
    this.clients = new common.CommonDataSvcClient(constant.URL,null,null)
      this.uploaded_image = this.$store.getters.getUserInfo.customerProfilePicImageUrl
      if(this.uploaded_image ===  null || this.uploaded_image === '') {
          this.uploaded_image = require('@/assets/images/users/avatar.png')
      }
  }
};
</script>

<style scoped>

</style>
