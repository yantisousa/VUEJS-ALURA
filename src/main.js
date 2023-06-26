import './assets/main.css'

// import { createApp } from 'vue'
import { createApp } from 'vue/dist/vue.esm-bundler.js'
import App from './App.vue'
import router from './roteador'
const app = createApp(App);
app.use(router)

app.mount('#app')
