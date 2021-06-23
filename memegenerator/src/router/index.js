import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import image from "../views/image.vue";
import Login from "../views/Login.vue";
import Post from "../views/Post.vue";
import isAuth from "../middleware/index.js"; // spread, rest
Vue.use(VueRouter);

// tạm coi middleware như 1 function.
// được hiểu tạm như 1 function sẽ được gọi đến ở giữa của 1 proccess nào đó.

// truớc khi vào route : beforeEnter  login state, permission state ....
// đã vào route
// rời khỏi route
// life cycle

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/image/:image_id",
    name: "Image",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: image,
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login,
  },
  {
    path: "/post",
    name: "Post",
    component: Post,
    beforeEnter: (to, from, next) => {
      // console.log(isAuth);
      const token = isAuth();
      if (token) {
        next();
      } else {
        alert("ban co chac khong"); // blocking fn
        next(false);
      }
    },
  },
];
// Route history
const router = new VueRouter({
  routes,
});

export default router;

// const hooksList = ['b4Enter','b4Leave','b4Change']
