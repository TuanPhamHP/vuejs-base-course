import axios from "axios";
import Vue from "vue";
import image from "./image";

const factories = {
  image: image(axios),
};

Vue.prototype.$api = factories;
