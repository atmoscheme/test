import Vue from "vue";
import VueRouter from "vue-router";
import Tasks from "@/components/TasksBoard";
Vue.use(VueRouter);

const routes = [
  {
    path: "/tasks",
    component: Tasks,
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
