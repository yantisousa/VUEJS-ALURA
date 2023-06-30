import './assets/main.css'

// import { createApp } from 'vue'
import { createApp } from 'vue/dist/vue.esm-bundler.js'
import App from './App.vue'
import router from './roteador'
import store from './store'
const app = createApp(App);
app.use(router)
app.use(store)

app.mount('#app')
