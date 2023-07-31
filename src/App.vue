<script setup lang="ts">
import Kategorije from './components/Kategorije.vue'
import EditOglas from './components/EditOglas.vue'
import Oglasi from './components/Oglasi.vue'
import Oglas from './components/Oglas.vue'
import Korisnici from './components/Korisnici.vue'  
import KorisnikOglasi from './components/KorisnikOglasi.vue'
import Korisnik from './components/Korisnik.vue'
import EditKorisnik from './components/EditKorisnik.vue'
import EditKategorija from './components/EditKategorije.vue'
 </script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
    </div>
  </header>

  <main>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/kitchensink">Kitchensink</router-link>
    </div>

    <router-view />

  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
