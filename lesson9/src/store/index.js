import Vue from "vue";
import Vuex from "vuex";
import products from "./modules/products";
Vue.use(Vuex);
// state managements
export default new Vuex.Store({
  state: {
    // để ghi lại, quản lí trạng thái hiện tại cho toàn bộ pj
    avatar: `https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2020/10/meme-hai-huoc-moi-nhat-141.jpg?fit=400%2C20000&quality=95&ssl=1`,
    userInit: {
      id: 14,
      name: "Phạm Anh Tuấn",
      age: 25,
      gender: "male",
    },
    counter: 0,
  },
  getters: {
    getUserName(state) {
      return state.userInit.name ? state.userInit.name : "Không có tên";
    },
  },
  mutations: {
    // để xử lý state
    INCREASECOUNTER(state, num) {
      // code goes here
      state.counter += num;
    },
    DECREASECOUNTER(state, num) {
      // code goes here
      state.counter -= num;
    },
  },
  actions: {
    // dùng để trigger mutations
    SETCOUNTER({ commit }, _payload = {}) {
      console.log(_payload);
      switch (_payload.type) {
        case "increase":
          commit("INCREASECOUNTER", _payload.value);
          break;
        case "decrease":
          commit("DECREASECOUNTER", _payload.value);
          break;
        default:
          console.log("type sai");
          break;
      }
    },

    // dùng để call api và trả lại
  },
  modules: {
    products,
  },
});
