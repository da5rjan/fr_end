import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Kategorija from "@/views/Kategorija.vue";
import Oglas from "@/views/Oglas.vue";
import MojOglas from "@/views/MojOglas.vue";
import About from "@/views/About.vue";
import EditKategorije from "@/views/EditKategorije.vue"
import EditOglas from"@/views/EditOglas.vue"
import NovaKategorija from "@/views/NovaKategorija.vue"
import NoviOglas from"@/views/NoviOglas.vue"
import Registracija from"@/views/Registracija.vue"
import Login from"@/views/Login.vue"
 
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
    path: "/mojOglas/:id",
    name: "MojOglas",
    component: MojOglas, 
  },

  {
    path: "/about",
    name: "About",
    component: About,
  },
  
  {
  path: "/editKategorije/:id",
  name: "editKategorije",
  component: EditKategorije,
  },
  {
  path: "/editOglas/:id",
  name: "editOglas",
  component: EditOglas,
  },
  {
    path: "/noviOglas/:id",
    name: "noviOglas",
    component: NoviOglas,
  },
  {
    path: "/registracija/",
    name: "registracija",
    component: Registracija,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/novaKategorija",
    name: "novaKategorija",
    component: NovaKategorija,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
