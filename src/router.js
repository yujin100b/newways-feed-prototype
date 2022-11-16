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
    path: "/join2",
    name: "Join2",
    component: () => import("@/views/Join2"), // 동적 import
  },
  {
    path: "/join3",
    name: "Join3",
    component: () => import("@/views/Join3"), // 동적 import
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("@/views/Profile"), // 동적 import
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
