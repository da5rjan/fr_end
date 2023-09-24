<script>
export default {
    data () {
        return {
            "userName": "" ,
            "password": "",
            "saljem": false,
            "greska": null
        }
    },
    methods :{
        posalji_pod(){
            console.log("salji podatke  ")
            const updateData = {...this} 
            var requestOptions = {
                method: 'POST',
                redirect: 'follow',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(updateData)
            }
            console.log(updateData)
            this.saljem = true
            this.greska = null
            fetch("http://localhost:3000/user/login/"  ,requestOptions)
                .then(response => {
                    if (!response.ok) {
                        throw Error("Login failed")
                    }
                    return response.json()
                })
                .then(result => {
                    this.saljem = false
                    this.greska = null
                    console.log("user loggeed in")
                    console.log(result)
                    this.$store.commit('setUser', result)
                    console.log("in store", this.$store.state.user)
                    this.$router.push("/")
                })
                .catch(error => {
                    console.log('error in user login', error)
                    this.saljem = false
                    this.greska = error.message
                });
        }
    },
}
</script>

<template>
    <form>
        <table>
            <tr>
                <td>
                    <label for="inputUsername">Korisnicko ime</label>
                </td>
                <td>
                    <input name="inputUsername" v-model="userName"/>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="inputPassword">Zaporka</label>
                </td>
                <td>
                    <input type="password" v-model="password" name="inputPassword"/>
                </td>
            </tr>
        </table>
    </form> 
    <div>
        <button v-if="! saljem" @click="posalji_pod()">posalji</button>  
    </div>
    <div v-if="saljem">
        Saljem podatke ..  
    </div>
    <div v-if="greska">
        Doslo je do greske: {{ greska }}   
    </div>


</template>

