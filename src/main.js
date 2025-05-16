import { createApp } from 'vue'
import './assets/main.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/router'

const app = createApp(App)
app.use(createPinia())

app.use(router)
app.mount('#app')
