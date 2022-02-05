import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router'
import { store } from '@/store'

import '@/assets/styles/colors.scss'
import '@/assets/styles/main.scss'
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(router)
app.use(store)

import SvgIcon from '@/components/SvgIcon.vue'
app.component('SvgIcon', SvgIcon)

app.mount('#app')
