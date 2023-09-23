<script>
export default {
  data() {
    return {
    }
  },

  methods: {
    odjava() {
      console.log("odjava")
      this.$store.commit('clearUser')
      this.$router.push("/")
    }
  }
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
    </div>
  </header>

  <main>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <span v-if="$store.state.user == null" > <router-link to="/login">Prijava</router-link> |</span>
      <span v-if="$store.state.user" @click="odjava()">Odjava |</span> 
      <span v-if="$store.state.user == null" ><router-link to="/registracija">Registracija</router-link> |</span>
      <router-link to="/about">About</router-link> |
      <span v-if="$store.state.user">{{ $store.state.user.userName }} </span>
    </div>
    <router-view />

  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
