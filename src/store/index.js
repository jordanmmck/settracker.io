import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: "ETH TO $20K",
  },
  getters: {
    getData: (state) => {
      return state.data;
    },
  },
  mutations: {
    setData: (state, payload) => {
      state.data = payload;
    },
  },
  actions: {
    setData: ({ commit }) => {
      axios
        .get("https://api.tokensets.com/public/v1/rebalancing_sets")
        .then((res) => commit("setData", res))
        .catch((err) => console.log(err));
    },
  },
  modules: {},
});
