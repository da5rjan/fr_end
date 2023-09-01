<script setup lang="ts">
import Kategorije from '@/components/Kategorije.vue'
import EditOglas from '@/components/EditOglas.vue'
import Oglasi from '@/components/Oglasi.vue'
import Oglas from '@/components/Oglas.vue'
import Korisnici from '@/components/Korisnici.vue'  
import KorisnikOglasi from '@/components/KorisnikOglasi.vue'
import Korisnik from '@/components/Korisnik.vue'
import EditKorisnik from '@/components/EditKorisnik.vue'
import EditKategorija from '@/components/EditKategorije.vue'
 </script>


<template>  
    <h1>Kitchensink</h1>
    <Kategorije />

    <EditOglas oglas-id="63ab5a5183dc57faef759127"/>
     <hr/>
    <EditKategorija kategorija-id="63a36de447d8ab4be1970b34"/>
    <hr/>
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
    <hr> 


</template>
