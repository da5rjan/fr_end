
<script>

export default {
  data() {
    return {
      "name": null, 
      "description": null,
      "kategorija": null
    }
  },

  props: ['kategorijaId'],

  methods: {
    zoviBackend() {
      
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      console.log("my kategorijaId is", this.kategorijaId)
      fetch("http://localhost:3000/category/" + this.kategorijaId, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log("received info for kategorija", result)
             this.kategorija = result
             this.name = result.name
             this.description = result.description
          })
        .catch(error => console.log('error', error));
    },
    

  },

  mounted: function(){
        this.zoviBackend()

    }

}
</script>
<template>
   
    <h1>{{ name }}</h1>
    <div>
        {{ description }}
    </div>
</template>