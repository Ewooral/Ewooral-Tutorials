import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueToastr2 from 'vue-toastr-2'


import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

import simplebar from "simplebar-vue";
Vue.component('simplebar', simplebar);

window.Fire = new Vue()

import VueQuillEditor from 'vue-quill-editor';
Vue.use(VueQuillEditor);

import VueTour from 'vue-tour'
Vue.use(VueTour)

import vco from "v-click-outside"
Vue.use(vco);

import JsonExcel from "vue-json-excel";
Vue.component("downloadExcel", JsonExcel);

import VueDraggable from "vue-draggable";
Vue.use(VueDraggable);

import EasyCamera from 'easy-vue-camera';
Vue.use(EasyCamera);


import VueMoment from 'vue-moment'
import moment from 'moment-timezone'

Vue.use(VueMoment, {
    moment,
})

import LottieAnimation from 'lottie-web-vue'
Vue.use(LottieAnimation);

import VueApexCharts from 'vue-apexcharts'
Vue.component('apexchart', VueApexCharts)

Vue.component('AlertMessage',() =>
    import('@/components/shared/AlertMessage'));

Vue.component('CustomHeaderAlert', () => import('@/components/shared/CustomHeaderAlert'))

import VeeValidate from 'vee-validate';
//Vue.use(VeeValidate);
Vue.use(VeeValidate, {
    errorBagName: 'vErrors',
    fieldsBagName: 'vee-fields'
});

import VueCryptojs from 'vue-cryptojs'
Vue.use(VueCryptojs)

// import Cloudinary from "cloudinary-vue";
// Vue.use(Cloudinary, {
//     configuration: {
//         cloudName: "demo",
//         secure: true }
// });

//import i18n from '.i18n'; //for localization
 import "@/assets/scss/app.scss";

import i18n from './i18n'

window.toastr = require('toastr')
Vue.use(VueToastr2);

Vue.config.productionTip = false

new Vue({
  router,
    i18n,
   store,
  render: h => h(App)
}).$mount('#app')
