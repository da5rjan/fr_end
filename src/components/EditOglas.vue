<script>
export default {
    data () {
        return {
            "naslov": "",
            "text": "" ,
            "kategorija": "",
            "cijena":"",
            "ocijne":"",
            "saljem": false,
            "greska": null
        }
    },
    props: ['oglasId'],
    methods :{
        zoviBackend() {
            console.log("zovem podatke o oglasima")
            console.log(this.oglasId)
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };
            console.log("http://localhost:3000/ad/" + this.oglasId ,requestOptions)
            fetch("http://localhost:3000/ad/" + this.oglasId ,requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log("----------------------stigli su podaci o oglasima")
                    console.log(result)
                    this.naslov = result.title
                    this.text = result.description
                    this.kategorija = result.kategorija
                    this.cijena =result.price.$numberDecimal
                    this.ocijene= result.ocijene
                    this.korisnik = result.creator
            })

        },
        posalji_pod(){
        console.log("salji podatke  ")
            const updateData = {} 

            updateData.title = this.naslov
            updateData.description = this.text
            updateData.price = this.cijena 
            console.log(updateData)
            var requestOptions = {
                method: 'PUT',
                redirect: 'follow',
                headers: {
                        'Content-Type': 'application/json', 
                        'Authorization': 'Bearer '+ this.$store.state.user.token
                },
                body: JSON.stringify(updateData)
            }
            this.saljem = true
            this.greska = null
            console.log(updateData)
            console.log("http://localhost:3000/ad/" + this.oglasId ,requestOptions)
            fetch("http://localhost:3000/ad/" + this.oglasId  ,requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log("oglas  promijenjen")
                    console.log(result)
                    this.saljem = false
                    this.greska = null
                    this.$router.push("/oglas/" + this.oglasId)
                })
                .catch(error => {
                    console.log('error in oglas  update', error)
                    this.greska = error.message
                    this.saljem = false
                });
            }
    },
        
    mounted: function(){
        this.zoviBackend()
    }
}
</script>
<template>
<form>
    <h2> Naslov </h2>
    <label for = "inputNaziv"> Naziv</label>
    <input name="inputNaziv" v-model = "naslov"/>
   <h2> cijena </h2>
   <label for = "inputCIjena">Cijena </label> 
   <input name="inputCijena" v-model ="cijena" />

    <h2>opis</h2> 


   <label for ="inputopis"/> 
    
   <input name = "inputopis" v-model = "text"/>
    </form>
    <div v-if="! saljem">
        <button @click="posalji_pod()">posalji</button>  
    </div>
    <div v-if="saljem">
        Saljem podatke ..  
    </div>
    <div v-if="greska">
        Doslo je do greske: {{ greska }}   
    </div>

</template>