<script>
export default {
    data () {
        return {
            "name": "" ,
            "description": "",
            "order": 1
        }
    },
    methods :{
        posalji_pod(){
            console.log("salji podatke  ")
            const updateData = {} 
            updateData.name = this.name
            updateData.order = this.order
            updateData.description = this.description
            var requestOptions = {
                method: 'POST',
                redirect: 'follow',
                headers: {
                        'Content-Type': 'application/json', 
                        'Authorization': 'Bearer '+ this.$store.state.user.token
                    },
                body: JSON.stringify(updateData)
            }
            console.log(updateData)
            fetch("http://localhost:3000/category/"  ,requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log("kategorija dodana")
                    console.log(result)
                })
                .catch(error => console.log('error in katogorija add', error));
        }
    },
}
</script>

<template>
    <form>
        <table>
            <tr>
                <td>
                    <label for="inputNaziv">Naziv</label>
                </td>
                <td>
                    <input name="inputNaziv" v-model="name"/>
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
                    <label for="inputredoslijed">Redoslijed</label>
                </td>
                <td>
                    <input type="number" name="inputredoslijed" v-model="order"/>
                </td>
            </tr>
        </table>
    </form> 
    <div>
        <button @click="posalji_pod()">posalji</button>  
    </div>


</template>

