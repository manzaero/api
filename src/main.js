import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './theme.css'
import axios from "axios";
import Paginate from "vuejs-paginate-next";

axios.defaults.baseURL='https://test.octopus.uz/api/v1'

createApp(App).component('Paginate', Paginate).use(store).use(router).mount('#app')
