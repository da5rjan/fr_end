<script setup lang="ts">
    import  Oglas from '@/components/Oglas.vue'
</script>


<template>
    this is das oglasID
    <Oglas v-bind:oglasId="$route.params.id" />
    <router-link :to="/editOglas/+$route.params.id" > 
      Uredi oglas
    </router-link>
    
</template>
