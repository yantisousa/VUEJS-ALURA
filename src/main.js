import './assets/main.css'

// import { createApp } from 'vue'
import { createApp } from 'vue/dist/vue.esm-bundler.js'
import App from './App.vue'
import router from './router'
const app = createApp(App);

app.component('header-app', {
    template: '<h2>Yan</h2>'
})
app.component('footer-app', {
    template: '<h2>Footer</h2>'
})
app.use(router)

app.mount('#app')
