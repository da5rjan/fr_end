<script setup lang="ts">
    import  Oglasi from '@/components/Oglasi.vue'
    import KategorijaInfo from '@/components/Kategorijainfo.vue'
    
 </script>




<template>
    <KategorijaInfo v-bind:kategorijaId="$route.params.id"/>
    <Oglasi v-bind:kategorijaId="$route.params.id" />
    
    <br/>
    <router-link v-if="$store.state.user" :to="/noviOglas/+$route.params.id" >   
        Predaj novi oglas u ovu kategoriju        
    </router-link> 
    <br/>
    <router-link v-if="$store.state.user && $store.state.user.role=='admin'"  :to="/editKategorije/+$route.params.id" >   
        Edit Kategorije        
    </router-link> 

    
</template>
