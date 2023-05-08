
<script>
import KorisnikOglasi from './KorisnikOglasi.vue'

export default {
  data() {
    return {
      "korisnik": null, 
    }
  },
props: ['korisnikId'],
 
  methods: {
    zoviBackend() {
     
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch("http://localhost:3000/korisnici/" + this.korisnikId ,requestOptions)
        .then(response => response.json())
        .then(result => {
       

            this.korisnik=result
          })
        .catch(error => console.log('error', error));
    }
  },

  mounted: function(){
        this.zoviBackend()
    }
  }
</script>

<template>

  <div class="greetings">
    
    <h1>O korisniku</h1>
    {{ korisnikId }}
    <div v-if="korisnik!=null">
        <h1 class="blue">korisnik</h1>
      
        <h2>{{korisnik.ime }}</h2>
        <p>{{korisnik._id}}  </p>


      
        <p>{{korisnik.OIB }}</p>
        <p>{{korisnik.broj_mobitela}}</p>
        
        <p>{{korisnik.grad }}</p>
        <p>{{korisnik.e_mail}}</p>
        <p>{{korisnik.kratki_opis }}</p>
    </div>
    <KorisnikOglasi korisnik-id="63ab5c8bee4fb22bc7e6d78e" />
 </div>

 
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>