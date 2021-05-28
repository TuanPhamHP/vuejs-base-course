import axios from "axios";
import Vue from "vue";
import meme from "./meme";

const factories = {
  meme: meme(axios),
};

Vue.prototype.$api = factories;
