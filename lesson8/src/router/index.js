import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Lesson from "../views/LessonToday.vue";
import TodoList from "../views/TodoList.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/ve-chung-toi",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/baihoc",
    name: "BaiHoc",
    component: Lesson,
  },
  {
    path: "/todo",
    name: "To Do",
    component: TodoList,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
