
<script>
import KorisnikOglasi from './KorisnikOglasi.vue'

export default {
  data() {
    return {
      "korisnik": null,
      "ime":"",       
      "prezime": "",
      "username": "", 
      "korisnikOIB":"",
      "korisnik_email":"",
      "korisnik_grad":"",
      "vrsta":"",
      "kratki_opis":""
    }
  },
props: ['korisnikId'],
 
  methods: {
    zoviBackend() {
      console.log("idemo zvati backend")
      console.log(this.korisnikId)
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'

      
      };

      console.log("http://localhost:3000/korisnici/" + this.korisnikId ,requestOptions)
      fetch("http://localhost:3000/korisnici/" + this.korisnikId ,requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log("stigli podatci o korisniku")

            console.log(result); 
            this.korisnik=result
            this.username=result.user_name
            this.ime=result.ime
            this.prezime = result.prezime
            this.adresa=result.adresa
            this.grad=result.grad
            this.korisnikOIB = result.OIB
            this.e_mail = result.e_mail
            this.korisnik_grad=result.grad
            this.broj_mobitela = result.broj_mobitela
            this.kratki_opis=result.kratki_opis
            this.vrsta =result.vrsta
          })
        .catch(error => console.log('error', error));
    },
    posalji_pod(){
      console.log("treba poslat podatke")
      const updateData = {}
      updateData.ime=this.ime
      updateData.user_name = this.korisnik.user_name
      updateData.prezime =this.prezime
      updateData.broj_mobitela = this.broj_mobitela
      updateData.grad = this.korisnik_grad
      updateData.e_mail = this.e_mail
      updateData.adresa=this.adresa
      updateData.kratki_opis = this.kratki_opis
      updateData.korisnikOIB = this.korisnikOIB
      updateData.vrsta= "stari korisnik"
      console.log(updateData)
      console.log("idemo zvati backend")
      console.log(this.korisnikId)
      var requestOptions = {
        method: 'PUT',
        redirect: 'follow',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updateData)
     }
      console.log("http://localhost:3000/korisnici/" + this.korisnikId ,requestOptions)
      fetch("http://localhost:3000/korisnici/" + this.korisnikId ,requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log("stigli podatci o korisniku")
          })
        .catch(error => console.log('error', error));

    }
  },

  mounted: function(){
        this.zoviBackend()
  }
}

</script>

<template>

  <div class="greetings">
    
    <h1>O korisniku</h1>
    {{ korisnikId }}
    <div v-if="korisnik!=null">
        <h1 class="blue">korisnik</h1>
      <h1> uredi korsinika</h1>
      <form>
        <h2>{{ime}}</h2>

        <label for="imeinput">Ime</label><input id="imeinput" v-model="ime">
         <h1>korisnik.prezime</h1>
        <p> {{korisnik.prezime }}</p>
        <input v-model ="prezime" >
        <h1>korisnik user name </h1>
        <p> {{korisnik.user_name }}</p>
        <input v-model = "korisnik.user_name" />
        <h1>korisnik adresa</h1>
        <p> {{ korisnik.adresa }}</p>
        <input v-model = "korisnik.adresa"/>
        <h1> OIB Korisnika </h1>
        <p>{{korisnik.OIB }}</p>
        <input v-model="korisnikOIB">
        <h1>broj mobitela korisnika </h1>
        <p>{{korisnik.broj_mobitela}}</p>
        <input v-model="broj_mobitela">
        <h1>grad u kojem se nalazi korisnik</h1>
        <p>{{korisnik.grad }}</p>
        <input v-model="grad">
         <h1>korisnička mail adresa </h1>
        <p>{{korisnik.e_mail}}</p>
        <input v-model="e_mail">
        <h1>opis korisnika</h1>
        <p>{{korisnik.kratki_opis }}</p>
        <input v-model = "kratki_opis">
      </form>
      <button @click=" posalji_pod()">posalji</button>  
     </div>
    <KorisnikOglasi korisnik-id="63ab5d16ee4fb22bc7e6d78e" />
 </div>

 
</template>


 

