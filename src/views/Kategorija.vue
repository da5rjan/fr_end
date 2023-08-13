<script setup lang="ts">
    import  Oglasi from '@/components/Oglasi.vue'
</script>


<template>
    <h1>Kategorija Page</h1>
    <Oglasi v-bind:kategorijaId="$route.params.id" />
</template>