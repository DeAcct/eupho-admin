import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './util/firebase'

import "./color.scss"
import "./common.scss"

import App from './App.vue'
import router from './router'


// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
