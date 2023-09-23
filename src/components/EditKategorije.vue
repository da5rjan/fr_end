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
            console.log("http://localhost:3000/category/" + this.kategorijaId ,requestOptions)
            fetch("http://localhost:3000/category/" + this.kategorijaId ,requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log("stigli su podaci o kategorijama")
                    console.log(result)
                    this.kategorija = result
                    this.naziv = result.name
                    this.opis = result.description
                    this.redoslijed =result.order
            })

        },
        posalji_pod(){
            console.log("salji podatke  ")
            const updateData = {} 
            updateData.name = this.naziv
            updateData.order = this.redoslijed
            updateData.description = this.opis
            var requestOptions = {
                method: 'PUT',
                redirect: 'follow',
                headers: {
                        'Content-Type': 'application/json', 
                        'Authorization': 'Bearer '+ this.$store.state.user.token
                },
                body: JSON.stringify(updateData)
            }
        console.log(updateData)
        console.log("http://localhost:3000/kategorije/" + this.kategorija._id ,requestOptions)
        fetch("http://localhost:3000/category/" + this.kategorija._id  ,requestOptions)
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
    <form>
    <h2>Ime</h2>
    <label for="inputNaziv"/>
    <input name="inputNaziv" v-model="naziv"/>
    <h2>Opis</h2>
    <input v-model = "opis"/>
    <h2>Redoslijed</h2>
    <label for="inputredoslijed"/>
    <input name="inputredoslijed" v-model="redoslijed"/>
    </form> 
    <div>
    <button @click="posalji_pod()">posalji</button>  

    </div>


</template>

