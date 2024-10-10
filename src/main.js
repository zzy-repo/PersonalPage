import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/index.scss'
import VueTyped from 'vue3typed'

createApp(App)
    .use(router)
    .use(VueTyped)
    .mount('#app')
