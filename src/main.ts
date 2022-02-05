import { createApp } from 'vue'
import App from './App.vue'

import { store } from '@/store'
import router from '@/router'

import '@/assets/styles/settings.scss'
import '@/assets/styles/main.scss'
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(store)
app.use(router)

import SvgIcon from '@/components/SvgIcon.vue'
app.component('SvgIcon', SvgIcon)

app.mount('#app')
