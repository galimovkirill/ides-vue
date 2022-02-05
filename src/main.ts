import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router'
import 'virtual:svg-icons-register'

import '@/assets/styles/vars.scss'
import '@/assets/styles/main.scss'

createApp(App).use(router).mount('#app')
