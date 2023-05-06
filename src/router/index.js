import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../components/ProductList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ProductList,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../components/Login.vue"),
    },
    {
      path: "/signup",
      component: () => import("../components/Signup.vue"),
    },
  ],
});

export default router;
