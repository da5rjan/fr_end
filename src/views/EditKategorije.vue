<script setup lang="ts">
     
    import EditKategorije from '@/components/EditKategorije.vue'
</script>

<template>
    <h1>Uredi kategoriju</h1>
    
    <EditKategorije v-bind:kategorijaId="$route.params.id" v-if="$store.state.user && $store.state.user.role=='admin'"/>

    <router-link :to="/kategorija/+$route.params.id" >   
      Nazad na Kategoriju
    </router-link>
    
 </template>
  