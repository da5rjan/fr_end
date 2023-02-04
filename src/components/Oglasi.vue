<script>

export default {
  data() {
    return {
      "oglasi": [],
    }
  },

  props: ['kategorijaId'],

  methods: {
    zoviBackend() {
      console.log("idemo zvati backend")
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch("http://localhost:3000/oglasi/kategorija/" + this.kategorijaId , requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result); 
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
    {{ kategorijaId }}
    <div v-if="oglasi!=[]">
        <h1 class="blue">Oglasi</h1>
        <div v-for="oglas in oglasi">
            <h2>{{oglas.naslov}}</h2>
            <p>
                {{oglas.text}}
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
