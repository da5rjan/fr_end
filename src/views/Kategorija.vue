<script setup lang="ts">
    import  Oglasi from '@/components/Oglasi.vue'
    import KategorijaInfo from '@/components/Kategorijainfo.vue'
</script>


<template>
    <h1>Kategorija Page</h1>
    <KategorijaInfo v-bind:kategorijaId="$route.params.id"/>
    <Oglasi v-bind:kategorijaId="$route.params.id" />
</template>
