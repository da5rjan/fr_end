<script>
export default {
    data () {
        return {
            "naslov": null,
            "text": "" ,
            "kategorija": "",
            "cijena":"",
            "ocijne":""
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
            console.log("http://localhost:3000/oglasi/" + this.oglasId ,requestOptions)
            fetch("http://localhost:3000/oglasi/" + this.oglasId ,requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log("----------------------stigli su podaci o oglasima")
                    console.log(result)
                    this.naslov = result.naslov
                    this.text = result.text
                    this.kategorija = result.kategorija
                    this.cijena =result.cijena
                    this.ocijene= result.ocijene
                    this.korisnik = result.korisnik
                
                
            })

        },
        posalji_pod(){
        console.log("salji podatke  ")
            const updateData = {} 

            updateData.naslov = this.naslov
            updateData.text = this.text
            updateData.korisnik = this.korisnik
            updateData.cijena = this.cijena 
            updateData.ocijene = this.ocijene
            updateData.kategorija = this.kategorija
            console.log(updateData)
            var requestOptions = {
                method: 'PUT',
                redirect: 'follow',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(updateData)
            }
        console.log(updateData)
        console.log("http://localhost:3000/oglasi/" + this.oglasId ,requestOptions)
        fetch("http://localhost:3000/oglasi/" + this.oglasId  ,requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log("oglas  promijenjen")
                console.log(result)
            })
            .catch(error => console.log('error in oglas  update', error));
        }
        
    },
        
    mounted: function(){
        this.zoviBackend()
    }
}
</script>
<template>
edit oglasa 
<h1>edit oglas</h1>
{{ oglasID }}
<form>
<h2> 
    {{ oglas }}
    <label for = "inputNaziv"> Naziv</label>
    <input name="inputNaziv" v-model = "naslov"/>
   <h1> cijena </h1>
   {{cijena }}
   <label for = "inputCIjena">Cijena </label> 
   <input name="inputCijena" v-model ="cijena" />

    <h1>opis</h1> 

    </h2>
    {{ text  }}

   <label for ="inputopis"/> 
    
   <input name = "inputopis" v-model = "text"/>
    </form>
    
 

<div>
    <button @click="posalji_pod()">posalji</button>  

    </div>
</template>