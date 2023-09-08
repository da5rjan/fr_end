<script setup lang="ts">
     import EditOglas from '@/components/EditOglas.vue'
     
 </script>




<template>
       <EditOglas v-bind:oglasId="$route.params.id"/>
      <router-link :to="/oglas/+$route.params.id" > 

      Nazad na oglas
    </router-link>

    </template>