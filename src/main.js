import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Custom css should always be at the bottom
import './assets/glbcss/appvue.css'
import './assets/glbcss/about.css'
import './assets/glbcss/home.css'


createApp(App).use(router).mount('#app')




