 

<script setup lang="ts">
     
    import Korisnik from '@/components/Kategorijainfo.vue'
    
 </script>
 
<template> 

<h1>The user is {{ $route.params.name }}</h1>
  <router-link> 
    Korisnik
  </router-link>


</template>
  