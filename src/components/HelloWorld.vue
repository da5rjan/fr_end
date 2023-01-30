<script>

export default {
  data() {
    return {
      "poruka": 'Ovo je poruka',
      "counter": 0,
      "korisnik": "nema jos korisnika"
    }
  },

  methods: {
    incrementCounter() {
      this.counter++;
    },
    decrementCounter() {
      this.counter--;
    },
    zoviBackend() {
      console.log("idemo zvati backend")
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch("http://localhost:3000/korisnici/63ab5c8bee4fb22bc7e6d78e", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result); 
            this.korisnik=result
          })
        .catch(error => console.log('error', error));
    }
  }
}
</script>

<template>
  <div class="greetings">
    <h1 class="blue">{{ msg }}</h1>
    <h3>
      <input type="text" v-model="poruka" id="inp"/>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
    <h2>{{poruka}}</h2>
    <h2>Brojac je:{{counter}}</h2>
    <button @click="incrementCounter">Click Me to increment!</button>
    <button @click="decrementCounter">Click Me to decrement!</button>
    <h2>Brojac je i ovdje:{{counter}}</h2>
    <button @click="zoviBackend">Pozovi backend!</button>
    <div>
      <p>
        {{korisnik}}
      </p>
    </div>


  </div>
</template>


<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
