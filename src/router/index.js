import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

const token = () => {
  return store.state.user?.access_token;
};

const auth = (to, from, next) => {
  if (!token()) {
    next({ path: "/sign-in" });
    return;
  }
  next();
  return;
};

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: () => import("../views/NotFound/NotFound.vue"),
    },
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home/Home.vue"),
    },
  ],
});
