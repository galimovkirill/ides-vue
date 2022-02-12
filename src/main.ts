import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

import { store } from '@/store'
import router from '@/router'

import 'virtual:svg-icons-register'
import '@/assets/styles/css-variables/_index.scss'
import '@/assets/styles/main.scss'

app.use(store)
app.use(router)

import SvgIcon from '@/components/SvgIcon.vue'
app.component('SvgIcon', SvgIcon)

app.mount('#app')
