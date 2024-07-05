import { createRouter, createWebHashHistory } from "vue-router";
import authorized from './components/authorized.vue'
import WelcomeForm from "./components/WelcomeForm.vue";

export default createRouter( {
    routes :[
        {path: '/login', component: authorized},
        {path: '/', component: WelcomeForm}
    ]
})