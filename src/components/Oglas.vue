<script>

export default {
  data() {
    return {
      "oglas": null
    }
  },

  props: ['oglasId'],

  methods: {
    zoviBackend() {
      
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch("http://localhost:3000/oglasi/" + this.oglasId, requestOptions)
        .then(response => response.json())
        .then(result => {
             this.oglas=result
          })
        .catch(error => console.log('error', error));
    },

    prosjekOcjena(ocjene) {
     
      let suma = 0
      let brojOcjena = 0
      for (const oc of ocjene) {
        suma=suma+oc;
        brojOcjena++;
      }
      return suma/brojOcjena
    }
  },

  mounted: function(){
        this.zoviBackend()

    }

}
</script>

<template>
  <div class="greetings">
    <h1>naslov</h1>
    <ul>
        <div v-if="oglas!=null">
            {{oglas._id}}
            <h2>"naslov"{{oglas.naslov}}</h2>
            <p> kategorija  <a :href="todo">{{oglas.kategorijaDetalji[0].naziv}}</a> </p>  
            <p> text {{oglas.text}} </p>  
            <p> cijena {{oglas.cijena["$numberDecimal"]}}</p>  
            <p> ime {{oglas.korisnikDetalji[0].ime }}</p>
            <p> prezime {{oglas.korisnikDetalji[0].prezime }}</p>
             <p> br_mob {{oglas.korisnikDetalji[0].br_mob }} </p>
             <p> grad {{oglas.korisnikDetalji[0].grad }}</p>
             <p> web_stranica <a :href="oglas.korisnikDetalji[0].web_stranica">{{oglas.korisnikDetalji[0].web_stranica}}</a> </p>
            <p> ocijena {{prosjekOcjena(oglas.ocijene)}}</p>  
        </div>
    </ul>
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
