import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Kategorija from "@/views/Kategorija.vue";
import About from "@/views/About.vue";
import Kitchensink from "@/views/Kitchensink.vue";
 
 const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/kategorija/:id",
    name: "Kategorija",
    component: Kategorija, 
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {        
    path: "/kitchensink",
    name: "Kitchensink",
    component: Kitchensink,

  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
