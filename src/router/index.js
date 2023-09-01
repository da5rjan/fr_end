import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Kategorija from "@/views/Kategorija.vue";
import Oglas from "@/views/Oglas.vue";
import About from "@/views/About.vue";
import Kitchensink from "@/views/Kitchensink.vue";
import EditKategorije from "@/views/EditKategorije.vue"
 
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
    path: "/oglas/:id",
    name: "Oglas",
    component: Oglas, 
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
  {
  path: "/editKategorije/:id",
  name: "editKategorije",
  component: EditKategorije,
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
