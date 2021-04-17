import { createRouter, createWebHistory } from "vue-router";

import App from "@/App";

const routes = [
  { path: "/", name: "landingpage", component: App },
  { hash: "#card", name: "card", component: App },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
  routes,
});

export default router;
