<script setup >
    import  Oglas from '@/components/Oglas.vue'
</script>


<template>
    <Oglas v-bind:oglasId="$route.params.id" />
    <router-link v-if="$store.state.user" :to="/editOglas/+$route.params.id" > 
      Uredi oglas
    </router-link>
    
</template>
