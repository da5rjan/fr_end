<script>
export default {
    data () {
        return {
            "kategorija": null,
            "naziv": "" ,
            "opis": "",
            "redoslijed":""
        }
    },
    props: ['kategorijaId'],
    methods :{
        zoviBackend() {
            console.log()
            console.log(this.kategorijaId)
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };
            console.log("http://localhost:3000/kategorije/" + this.kategorijaId ,requestOptions)
            fetch("http://localhost:3000/kategorije/" + this.kategorijaId ,requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log("stigli su podaci o kategorijama")
                    console.log(result)
                    this.kategorija = result
                    this.naziv = result.naziv
                    this.opis = result.opis
                    this.redoslijed =result.redoslijed
            })

        },
        posalji_pod(){
            console.log("salji podatke  ")
            const updateData = {} 
            updateData.naziv = this.naziv
            updateData.redoslijed = this.redoslijed
            updateData.opis = this.opis
            var requestOptions = {
                method: 'PUT',
                redirect: 'follow',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(updateData)
            }
        console.log(updateData)
        console.log("http://localhost:3000/kategorije/" + this.kategorija._id ,requestOptions)
        fetch("http://localhost:3000/kategorije/" + this.kategorija._id  ,requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log("kategorija promijenjena")
                console.log(result)
            })
            .catch(error => console.log('error in katogorija update', error));
        }
    },
    mounted: function(){
        this.zoviBackend()
    }
}

</script>


<template>
    <h1> edit kategorije</h1>
    {{ kategorijaId }}  
    <h1> uredi kategoriju</h1>
    <form>
    <h2>
        {{  kategorija }}
    </h2>
    <label for="inputNaziv"/>
    <input name="inputNaziv" v-model="naziv"/>
    <h1> opis</h1>
    <p>{{opis}}</p>
    <input v-model = "opis"/>
    <h1>Redoslijed</h1>
    <p>{{redoslijed}}</p>
    <label for="inputredoslijed"/>
    <input name="inputredoslijed" v-model="redoslijed"/>
    </form> 
    <div>
    <button @click="posalji_pod()">posalji</button>  

    </div>


</template>
}
