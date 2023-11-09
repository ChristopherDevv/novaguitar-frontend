import './assets/main.css'
import 'tw-elements'; // Importa tw-elements aquí

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueNextSelect from 'vue-next-select'

import 'aos/dist/aos.css'
import AOS from 'aos'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('vue-select', VueNextSelect)
app.use(createPinia())
app.use(router)


app.mount('#app')

AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
});

