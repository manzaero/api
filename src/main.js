import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './theme.css'
import axios from "axios";

axios.defaults.baseURL='https://test.octopus.uz/api/v1'

createApp(App).use(store).use(router).mount('#app')
