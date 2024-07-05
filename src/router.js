import { createRouter, createWebHashHistory } from "vue-router";
import authorized from "./components/authorized.vue";
import WelcomeForm from "./components/WelcomeForm.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: WelcomeForm },
    { path: "/login", component: authorized,},
  ],
});
