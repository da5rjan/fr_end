<script setup lang="ts">
    import Kategorije from '@/components/Kategorije.vue'
    
</script>

<template>
    <h1>Home Page</h1>
    
    <Kategorije />
    <div> 
        <router-link to="/novaKategorija">
            Nova kategorija
        </router-link>

    </div>
</template>
  