<script>
    export default {
        data () {
            return {
                "naslov": "",
                "text": "" ,
                "cijena":""
            }
        }, 

        props: ['kategorijaId'],
        methods :{
            posalji_pod() {
                console.log("saljem podatke", this.kategorijaId)
                const updateData = {} 

                updateData.naslov = this.naslov
                updateData.text = this.text
                updateData.korisnik =  "63c70591b184125322bb36f9"
                updateData.cijena = this.cijena 
                updateData.ocijene = []
                updateData.kategorija = this.kategorijaId
                console.log(updateData)
                var requestOptions = {
                    method: 'POST',
                    redirect: 'follow',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(updateData)
                }
                console.log("http://localhost:3000/oglasi/" + this.oglasId ,requestOptions)
                fetch("http://localhost:3000/oglasi/" ,requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log("oglas  promijenjen")
                    console.log(result)
                })
                .catch(error => console.log('error in oglas  update', error));
            }
        }
    }
    
</script>

<template>
    <h1>Stvaranje  novog oglasa!</h1>
    <form>
        <label for = "inputNaziv"> Naziv</label>
        <input name="inputNaziv" v-model = "naslov"/>
        <h1> cijena </h1>
        <label for = "inputCIjena">Cijena </label> 
        <input name="inputCijena" v-model ="cijena" />      
        <h1>opis</h1> 
        <label for ="inputopis"/> 
        <input name = "inputopis" v-model = "text"/>
        <div>
            <button type="button" @click="posalji_pod()">posalji</button>  
        </div>
    </form>
</template>




