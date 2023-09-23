<script setup lang="ts">
    import Kategorije from '@/components/Kategorije.vue'
    
</script>

<template>
    <h1>Home Page</h1>
    
    <Kategorije />
    <div> 
        <router-link v-if="$store.state.user && $store.state.user.role=='admin'" to="/novaKategorija">
            Nova kategorija
        </router-link>

    </div>
</template>
  