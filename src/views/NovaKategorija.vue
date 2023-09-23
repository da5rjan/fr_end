<script setup lang="ts">
     
    import NovaKategorija from '@/components/NovaKategorija.vue'
</script>

<template>
    <h1>Nova kategorija</h1>

    <NovaKategorija v-if="$store.state.user && $store.state.user.role=='admin'"/>

 </template>
  