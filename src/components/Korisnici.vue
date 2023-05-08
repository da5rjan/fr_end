<script>

export default {
  data() {
    return {
      "korisnici": [],
    }
  },

 
  methods: {
    zoviBackend() {

      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch("http://localhost:3000/korisnici", requestOptions)
        .then(response => response.json())
        .then(result => {
            this.korisnici=result
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
   <h1> korisnici </h1>
   <div v-if="korisnici!=[]">
    <div  v-for = "kor in korisnici"> 
        <h2>{{kor._id}}  </h2>
        <p> {{kor.ime}}</p>
        <p>{{kor.OIB}}</p>
        <p>{{kor.broj_mobitela}}</p>
        <p>{{kor.ime }}</p>
        <p>{{kor.grd }}</p>
        <p>{{kor.e_mail }}</p>
        <p>{{kor.kratki_opis }}</p>
    </div>
   </div> 
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