<script>

export default {
  data() {
    return {
      "kategorije": [],  
    }
  },

  methods: {
    zoviBackend() {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch("http://localhost:3000/kategorije/", requestOptions)
        .then(response => response.json())
        .then(result => {
            this.kategorije=result

          })
        .catch(error => console.log('error', error));
    },
    kategorijaLink(kat) {
      return "/kategorija/" + kat._id
    }
  },

  mounted: function(){
        this.zoviBackend()
    }

}
</script>

<template>
  <div class="greetings">
    <h1>Kategorije</h1>
    <ul>
        <div v-for="kategorija in kategorije">
          <router-link :to="kategorijaLink(kategorija)"> 
            <h2>{{ kategorija.naziv}}</h2>
          </router-link> 
          <p>
            {{kategorija.opis}}
          </p>
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
