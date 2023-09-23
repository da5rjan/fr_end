<script>

export default {
  data() {
    return {
      "oglasi": [],
    }
  },

  props: ['kategorijaId'],

  methods: {
    oglasLink(oglas) {
      if (this.$store.state.user) {
        if (oglas.creator===this.$store.state.user.userId) 
        {
          return "/mojOglas/"+oglas._id          
        }
      }
      return "/oglas/"+oglas._id          
    },
    
    zoviBackend() {
     
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch("http://localhost:3000/ad/category/" + this.kategorijaId , requestOptions)
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
    <div v-if="oglasi!=[]">
        <h1 class="blue">Oglasi</h1>
        <div v-for="oglas in oglasi">
            <router-link :to="oglasLink(oglas)"> 
              <h2>{{oglas.title}}</h2>
            </router-link> 
  
            <p>
                {{oglas.description}}
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
