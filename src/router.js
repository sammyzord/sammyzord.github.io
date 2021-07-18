import { createRouter, createWebHashHistory } from "vue-router";
import About from "./pages/About.vue";
import Work from "./pages/Work.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: About,
    },
    {
      path: "/work",
      component: Work,
    },
    {
      path: "/trabalho",
      component: Work,
    },
    { path: "/:pathMatch(.*)*", component: About },
  ],
});

export default router;
