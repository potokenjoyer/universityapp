import { createRouter, createWebHashHistory } from "vue-router";
import WelcomeForm from "./components/WelcomeForm.vue";
import MainSystem from "./components/MainSystem.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: WelcomeForm },
    { path: "/login", component: MainSystem },
  ],
});
