<script setup lang="ts">
import Kategorije from './components/Kategorije.vue'
import Oglasi from './components/Oglasi.vue'
import Oglas from './components/Oglas.vue'
import Korisnici from './components/Korisnici.vue'  
import KorisnikOglasi from './components/KorisnikOglasi.vue'
import Korisnik from './components/Korisnik.vue'
import EditKorisnik from './components/EditKorisnik.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <Kategorije />
    </div>
  </header>

  <main>
    <hr>
    <EditKorisnik korisnik-id="63adbfd54ef0cb47638c0470"/>
    <hr/>
    <Oglasi kategorija-id="63a36de447d8ab4be1970b34"/>
    <hr/>
    <Oglas oglas-id="63bc8cbc54a71d3d21a3353a"/>
    <hr/>
    <Korisnici/>
    <Korisnik korisnik-id="63ab5c8bee4fb22bc7e6d78e"/>
    <hr/>
    <KorisnikOglasi korisnik-id="63ab5d16ee4fb22bc7e6d78e"></KorisnikOglasi>
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
