//import './plugins/axios'
//import axios from 'axios';
import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Vue.prototype.$axios = axios;
createApp(App).use(store).use(router).mount('#app')
