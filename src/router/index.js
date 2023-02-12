import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/subject",
      name: "subject",
      component: () => import("../views/SubjectView.vue"),
    },
    {
      path: "/AddDrop",
      name: "AddDrop",
      component: () => import("../views/AddDropView.vue"),
    },
  ],
});

export default router;
