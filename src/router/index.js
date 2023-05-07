import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../pages/ProductList.vue";

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
      component: () => import("../pages/Login.vue"),
    },
    {
      path: "/signup",
      component: () => import("../pages/Signup.vue"),
    },
    {
      path: "/search",
      name: "search",
      component: () => import("../pages/FindProduct.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../pages/NotFound.vue"),
    },
  ],
});

export default router;
