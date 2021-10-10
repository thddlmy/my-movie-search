import Vue from 'vue'
import App from './App.vue'
import store from '~/store'
import router from '~/routes'
import 'bootswatch/dist/litera/bootstrap.min.css'

const { createApp } = Vue
const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')