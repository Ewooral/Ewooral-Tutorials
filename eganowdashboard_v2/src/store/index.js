import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import state from './state'
import actions from './actions'
import getters from "./getters";
import menusState from "./menusState";
import groupcontributions from "./groupcontributions";

Vue.use(Vuex)

export default new Vuex.Store({
  mutations,
  state,
  actions,
  getters,
  modules : {menusState,groupcontributions},
  strict: process.env.NODE_ENV !== 'production'
})
