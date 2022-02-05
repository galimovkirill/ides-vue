import { createRouter, createWebHistory } from 'vue-router'

import { store } from '@/store'
import { computed } from 'vue'
const userRole = computed(() => store.getters['user/getRole'])

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import(`../views/dashboard/${userRole.value}.vue`),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: '',
    linkExactActiveClass: '',
})

export default router
