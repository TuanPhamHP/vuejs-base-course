import Vue from "vue";
import Vuex from "vuex";
import products from "./modules/products";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    avatar: `https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2020/10/meme-hai-huoc-moi-nhat-141.jpg?fit=400%2C20000&quality=95&ssl=1`,
    userInit: {
      id: 14,
      name: "Phạm Anh Tuấn",
      age: 25,
      gender: "male",
    },
  },
  mutations: {},
  actions: {},
  modules: {
    products,
  },
});
