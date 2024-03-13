import { createRouter, createWebHistory } from "vue-router";
import { LayoutView, MyProjectViews } from "./pages";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: LayoutView,
      children: [
        {
          path: "",
          name: "home",
          component: MyProjectViews,
        },
      ],
    },
  ],
});

export default router;
