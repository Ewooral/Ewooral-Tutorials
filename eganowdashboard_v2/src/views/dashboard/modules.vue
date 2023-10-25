<template>
  <horizontal>
    <div class="row mt-2">

<!--        <div class="col-12 mb-2 text-center">-->
<!--            <h2> Create a merchant and agent service <a style="cursor: pointer;" class="text-danger" @click="CreateMerchantService"> Here</a></h2>-->
<!--        </div>-->

      <div
          v-for="module in myModules"
          :key="module.name"
          class="col-xl-3 col-sm-4"
      >
          <div  class="card rounded-5 mb-4" >
              <div class="card-body">
                  <div class=" row d-flex justify-content-center mt-1">
                      <img
                              :src="`${module.logo}`"
                              style="width:80px"
                              alt="Avatar"
                      />
                  </div>
                  <div class=" row d-flex justify-content-center mt-3">
                            <span   class="font-weight-bold" style="color:#000000;font-size: 20px"
                            >{{$t(module.name)}}</span
                            >
                  </div>
                  <div class="row d-flex flex-column text-center align-items-center mt-3 " >
                      <p class="mb-0" style="font-size:16px;font-weight:600;width:250px" id="description"
                         v-b-tooltip.hover.bottomright.v-primary :title="`${$t(module.text)}`"
                         variant="danger" placement="bottom"
                      >{{$t(module.text)}}</p>

                  </div>
                  <div class="row d-flex justify-content-center mt-4 mb-2">
                      <router-link :to="`${module.href}`">
                          <b-button pill
                                    size="lg"
                                    style="width:200px;background-color: #0078D4; border:none"
                          >Continue</b-button>
<!--  #0078D4  #cc0029 -->
                      </router-link>

                  </div>
              </div>
          </div>
<!--          <div class="card hovereffect">-->
<!--            <div class="card-body">-->
<!--              <div class="media ">-->
<!--                <div class="avatar-md mr-3" v-if="module.logo" >-->
<!--                  <div class="avatar-title bg-light rounded-circle" >-->
<!--                    <img id="logocss"-->
<!--                        :src="`${module.logo}`"-->
<!--                        alt="logo"-->
<!--                        class="avatar-sm rounded-circle"-->
<!--                    />-->
<!--                  </div>-->
<!--                </div>-->
<!--                  <div class="avatar-md mr-3" v-else>-->
<!--                      <div class="avatar-title bg-light font-20 text-body font-weight-semibold rounded-circle">-->
<!--                          {{ $t(module.name.split(' ').map(x => x.charAt(0)).join('').substr(0, 2).toUpperCase()) }}-->
<!--                      </div>-->
<!--                  </div>-->
<!--                <div class="media-body">-->
<!--                  <h4 class="my-1">-->
<!--                    <a href="javascript:void(0);" >{{-->
<!--                        $t(module.name)-->
<!--                      }}</a>-->
<!--                  </h4>-->
<!--                  <p class="text-muted text-truncate mb-0">-->
<!--&lt;!&ndash;                    <i class="ri-map-pin-line align-bottom mr-1"></i>&ndash;&gt;-->
<!--&lt;!&ndash;                    {{ module.location }}&ndash;&gt;-->
<!--                  </p>-->
<!--                </div>-->
<!--              </div>-->
<!--              <hr  />-->
<!--              <div class="text-muted">-->
<!--                <div class="row">-->
<!--                    <p class="text ml-3">{{ $t(module.text) }}</p>-->

<!--                    <router-link :to="module.href">-->
<!--                        <div class="col-12 form-group mb-0 pull-right"  style="float: right !important;">-->
<!--                            <button  class="btn btn-outline-primary buttonhover">{{ $t('dashboard.button-text') }}</button>-->
<!--                        </div>-->
<!--                    </router-link>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->


      </div>
    </div>

  </horizontal>
</template>


<script>
//import DashboardLayout from "../layouts/DashboardLayout";
import horizontal from "../layouts/horizontal";

import { myModules } from "./data";
import { required } from "vuelidate/lib/validators";

/**
 * Companies component
 */
export default {
  page: {
    title: "myModules",
    meta: [{ name: "description", content: 'hello' }],
  },
  components: {
    horizontal
  },
  data() {
    return {
      myModules: myModules,
      title: "myModules",
      items: [
        {
          text: "myModules",
          active: true,
        },
      ],
      showmodal: false,
      submitted: false,
      company: {
        name: "",
        location: "",
      },
    };
  },
  validations: {
    company: {
      name: {
        required,
      },
      location: {
        required,
      },
    },
  },
  created() {
    // console.log("Country code : " , this.$store.getters.getUserInfo.countryCode)
    // console.log("Email address stor : " , this.$store.getters.getUserInfo.emailAddress)
  },
  methods: {

      CreateMerchantService(){
          try {

              this.$router.push('merchantservice/merchant/createmerchantservice').catch(() => { })
              console.log( " Go to settings")
          }catch (e) {
              console.log(" Error : ", e)
          }
      }
    /**
     * Modal form submit
     */
    /**
     * Modal hide on close
     */
  },
  middleware: "router-auth",
};
</script>


<style scoped>

 .hovereffect:hover * {
   background: rgb(0, 120, 212);
   color: #fff;
 }
 .hovereffect:hover Button {
     background-color: white;
     color: black;
 }
 .hovereffect:hover #logocss {
     background-color: white;
 }
  a {
    color: #1a1e24;
  }

  .buttonhover:hover {
        background-color: #a92222;
    }


</style>