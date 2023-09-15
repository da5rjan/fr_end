<script setup lang="ts">
     import NoviOglas from '@/components/NoviOglas.vue'
     
</script>




<template>
       <NoviOglas v-bind:kategorijaId="$route.params.id"/>
</template>