import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'
import App from './App.vue'

import 'virtual:svg-icons-register'
import '@/assets/styles/css-variables/_index.scss'
import '@/assets/styles/main.scss'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

window.$app = {
    router,
    store: pinia.state.value,
}

import SvgIcon from '@/components/SvgIcon.vue'
app.component('SvgIcon', SvgIcon)

app.mount('#app')
