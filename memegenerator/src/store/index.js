import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    image: [],
  },
  mutations: {
    SETIMAGE(state, payload) {
      state.image = payload;
    },
  },
  actions: {
    getAllImage({ commit }) {
      axios.get(`https://api.imgflip.com/get_memes`).then(res => {
        commit("SETIMAGE", res.data.data.memes);
      });
    },
  },
  modules: {},
});
