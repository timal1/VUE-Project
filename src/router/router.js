import BlogPage from "@/pages/BlogPage.vue";
import DetailsPage from "@/pages/DetailsPage.vue";
import MainPage from "@/pages/MainPage.vue";
import ProjectDetailsPage from "@/pages/ProjectDetailsPage.vue";
import ProjectsPage from "@/pages/ProjectsPage.vue";
import Error404Page from "@/pages/Error404Page.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/project",
    component: ProjectsPage,
  },
  {
    path: "/project/details",
    component: ProjectDetailsPage,
  },
  {
    path: "/blog",
    component: BlogPage,
  },
  {
    path: "/blog/derails",
    component: DetailsPage,
  },
  {
    path: "/:CatchAll(.*)",
    name: 404,
    component: Error404Page,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savePosition) {
    return {
      top: 0,
    };
  },
});

// app.use(router);
export default router;
