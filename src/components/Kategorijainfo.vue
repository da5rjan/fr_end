
<script>

export default {
  data() {
    return {
      "naziv": null, 
      "opis": null,
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
      fetch("http://localhost:3000/kategorije/" + this.kategorijaId, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log("received info for kategorija", result)
             this.kategorija = result
             this.naziv = result.naziv
             this.opis = result.opis
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
   
    <h1>{{ naziv }}</h1>
    <div>
        {{ opis }}
    </div>




</template>