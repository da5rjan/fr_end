
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