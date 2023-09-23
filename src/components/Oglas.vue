<script>

export default {
  data() {
    return {
      "oglas": null,
      "title": "",
      "description": "",
      "price": 0,  // price["$numberDecimal"] 
      "ime": "",
      "prezime": "",
      "email": "",
      "grad":"",
      "adresa": ""

    }
  },

  props: ['oglasId'],

  methods: {
    zoviBackend() {
      console.log("zovem backend")      
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch("http://localhost:3000/ad/" + this.oglasId, requestOptions)
        .then(response => response.json())
        .then(result => {
             console.log("stigo oglas", result)      
             this.oglas=result
             this.title = result.title
             this.description = result.description
             this.price = result.price["$numberDecimal"]
             this.ime = result.creator.firstName
             this.prezime = result.creator.lastName
             this.email = result.creator.email
             this.grad = result.creator.city
             this.adresa = result.creator.address
             console.log("result", result)
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
            <h2>{{title}}</h2>
            <p> {{description}} </p>  
            <p> cijena {{price}}</p>  
            <p> ime {{ime}}</p>
            <p> prezime {{prezime}}</p>
            <p> email {{email}}</p>
            <p> grad {{grad}}</p>
            <p> adresa {{adresa}}</p>
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
