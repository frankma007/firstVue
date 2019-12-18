import Vue from 'vue'
import Vuex from "vuex";
Vue.use(Vuex)
import state from "./state.js";
import mutations from "./mutations.js";

export default new Vuex.Store({
  state: state,
  // actions: {
  //   changeCity (ctx, city) {
  //     // console.log(ctx, city, "actions")
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations: mutations
})