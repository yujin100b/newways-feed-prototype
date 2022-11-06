import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home"), // 동적 import
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});
