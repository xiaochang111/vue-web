import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: "/",
    redirect: "/home",
    children: [],
  },
  {
    name: "home",
    path: "/home",
    component: () => import("@/views/home/homePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
