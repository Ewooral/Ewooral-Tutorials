<template>
    <!-- Topbar Start -->
    <b-overlay :show="showLoader" rounded="sm">
        <div class="navbar-custom" style="background: #0078D4;" >
            <div class="container-fluid">

                <ul class="list-unstyled topnav-menu float-right mb-0">

                    <li class="dropdown d-inline-block d-lg-none">
                        <a
                                class="nav-link dropdown-toggle arrow-none waves-effect waves-light"
                                data-toggle="dropdown"
                                href="#"
                                id="sidebarToggle"
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
            },
            ToggleSidebar(e) {

                var target = e.target || e.srcElement;
                var id = target.id
                var element = document.getElementById("sidebarToggle");
                element.classList.add("sidebar-enable");

                console.log(id," : getting id horizontal ")
                console.log(e.target, " target horizontal ")
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
            GoToSetting(){
                try {
                    console.log( " Go to settings")
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
            CreateMerchantService(){
                try {

                    this.$router.push('merchantservice/merchant/createmerchantservice').catch(() => { })
                    console.log( " Go to settings")
                }catch (e) {
                    console.log(" Error : ", e)
                }
            },
            ResetPassword() {

                try {
                    ///bizcollect/business/services
                    this.$router.push('/business/enteremail').catch(() => { })
                    console.log( " Go to settings")
                }catch (e) {
                    console.log(" Error : ", e)
                }
            },
            VerifyEmailAndGetSecurityQuestion(){
                try {
                    this.$router.push('/business/pinresetverifyuser').catch(() => { })
                }catch (e) {
                    console.log(e)
                }
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
