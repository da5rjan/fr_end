<script>
export default {
    data () {
        return {
            "kategorija": null,
            "naziv": "" ,
            "opis": ""

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
            })
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
    </form> 
    <div>
    <button @click=" posalji_pod()">posalji</button>  
     
    </div>


</template>

