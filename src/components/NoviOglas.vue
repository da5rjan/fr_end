<script>
    export default {
        data () {
            return {
                "title": "",
                "description": "" ,
                "price": "",
                "saljem" : false,
                "greska" : null
            }
        }, 

        props: ['kategorijaId'],
        methods :{
            posalji_pod() {
                console.log("saljem podatke", this.kategorijaId)
                const updateData = {...this} 
                updateData.creator = this.$store.state.user._id
                console.log("store", this.$store.state.user)
                console.log(updateData)
                var requestOptions = {
                    method: 'POST',
                    redirect: 'follow',
                    headers: {
                        'Content-Type': 'application/json', 
                        'Authorization': 'Bearer '+ this.$store.state.user.token
                    },
                    body: JSON.stringify(updateData)
                }
                this.saljem = true
                this.greska = false
                console.log("http://localhost:3000/ad/",requestOptions)
                fetch("http://localhost:3000/ad/" ,requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log("oglas je predan")
                    console.log(result)
                    this.saljem = false
                    this.greska = false
                    this.$router.push("/kategorija/" + this.kategorijaId)
                })
                .catch(error => {
                    console.log('error in oglas predaja', error)
                    this.saljem = false
                    this.greska = error.message
                })

            }
        }
    }
    
</script>

<template>
    <h1>Predaja novog oglasa!</h1>
    <form>
        <table>
            <tr>
                <td>
                    <label for="inputNaziv">Naziv</label>
                </td>
                <td>
                    <input name="inputNaziv" v-model="title"/>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="inputOpis">Opis</label>
                </td>
                <td>
                    <input v-model="description" name="inputOpis"/>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="inputPrice">Cijena</label>
                </td>
                <td>
                    <input type="number" name="inputPrice" v-model="price"/>
                </td>
            </tr>
        </table>
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




