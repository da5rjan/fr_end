<script setup >
    import  Oglas from '@/components/Oglas.vue'
</script>


<template>
    <Oglas v-bind:oglasId="$route.params.id" />
</template>
