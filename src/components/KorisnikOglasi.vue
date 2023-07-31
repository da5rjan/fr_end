
<script>

export default {
  data() {
    return {
      "oglasi": [],
    }
  },

  props: ['korisnikId'],

  methods: {
    zoviBackend() {
      console.log("idemo zvati backend")
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch("http://localhost:3000/kategorije/korisnik/" + this.korisnikId , requestOptions)
        .then(response => response.json())
        .then(result => {
            this.oglasi=result
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
    <h1>svi oglasi korisnika </h1>

    <div v-if="oglasi!=[]">
        
         
        <div v-for="og in oglasi">
             <h2>{{og.naslov}}</h2>
            <p>

                {{og.text}}
            </p>
            <p>
                {{og.cijena}}
            </p>
            
            <p>
                {{og.ocijene}}
            </p>
            <p>
                {{og.kategorija}}
            </p>
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