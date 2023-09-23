import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <---

import './assets/main.css'

import { createStore } from "vuex"

// Create a new store instance.
const store = createStore({
  state () {
    return {
      user: null
    }
  },
  mutations: {
    setUser (state, user) {
      state.user = { ... user}
    },
    clearUser (state) {
        state.user = null
      }
    }
})
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
