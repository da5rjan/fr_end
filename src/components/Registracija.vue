<script>
export default {
    data () {
        return {
            "userName": "" ,
            "password": "",
            "email": "",
            "role": "user",
            "firstName": "",
            "lastName": "",
            "oIB": "",
            "city": "",
            "address": "",
            "description": ""
        }
    },
    methods :{
        posalji_pod(){
            console.log("salji podatke  ")
            const updateData = {...this}
            var requestOptions = {
                method: 'POST',
                redirect: 'follow',
                headers: {
                        'Content-Type': 'application/json' 
                    },
                body: JSON.stringify(updateData)
            }
            console.log(updateData)
            fetch("http://localhost:3000/user/"  ,requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log("Xuser added")
                    console.log(result)
                    this.$router.push("/login")
                })
                .catch(error => console.log('error in user add', error));
        }
    },
}
</script>

<template>
    <form>
        <table>
            <tr>
                <td>
                    <label for="iUsername">Korisnicko ime</label>
                </td>
                <td>
                    <input name="iUsername" v-model="userName"/>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="iPassword">Zaporka</label>
                </td>
                <td>
                    <input type="password" name="iPassword" v-model="password"/>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="iEmail">Email</label>
                </td>
                <td>
                    <input name="iEmail" v-model="email"/>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="iFirstName">Ime</label>
                </td>
                <td>
                    <input name="iFirstName" v-model="firstName"/>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="iLastName">Prezime</label>
                </td>
                <td>
                    <input name="iLastName" v-model="lastName"/>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="iOIB">OIB</label>
                </td>
                <td>
                    <input name="iOIB" v-model="oIB"/>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="iCity">Grad</label>
                </td>
                <td>
                    <input name="iCity" v-model="city"/>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="iAddress">Adresa</label>
                </td>
                <td>
                    <input name="iAddress" v-model="address"/>
                </td>
            </tr>
            <tr>
                <td>
                    <label for="iDescription">Opis</label>
                </td>
                <td>
                    <input name="iDescripotion" v-model="description"/>
                </td>
            </tr>
        </table>
    </form> 
    <div>
        <button @click="posalji_pod()">posalji</button>  
    </div>


</template>

