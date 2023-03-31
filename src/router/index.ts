import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: "/",
    redirect: "/home",
    component: () => import("@/layouts/baseLayout.vue"),
    children: [
      {
        name: "home",
        path: "/home",
        component: () => import("@/views/home/homePage.vue"),
        meta: {
          layout: "content",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
