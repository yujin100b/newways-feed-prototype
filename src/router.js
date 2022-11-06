import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home"), // 동적 import
  },
  {
    path: "/join",
    name: "Join",
    component: () => import("@/views/Join"), // 동적 import
  },
  {
    path: "/feed",
    name: "Feed",
    component: () => import("@/views/Feed"), // 동적 import
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
