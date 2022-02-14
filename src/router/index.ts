import { createRouter, createWebHistory } from 'vue-router'

import { store } from '@/store'
import { computed } from 'vue'
const userRole = computed(() => store.getters['user/getRole'])

import TmpComponent from '@/components/TmpComponent.vue'

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: () => import(`../views/dashboard/${userRole.value}.vue`),
    },
    {
        path: '/institution',
        name: 'institution',
        component: () => import(`../views/institution/${userRole.value}.vue`),
    },
    {
        path: '/schedule',
        name: 'schedule',
        component: TmpComponent,
    },
    {
        path: '/chats',
        name: 'chats',
        component: TmpComponent,
    },
    {
        path: '/library',
        name: 'library',
        component: () => import(`../views/library/${userRole.value}.vue`),
    },
    {
        path: '/students',
        name: 'students',
        component: () => import(`../views/students/${userRole.value}.vue`),
    },
    {
        path: '/groups',
        name: 'groups',
        component: TmpComponent,
    },
    {
        path: '/teachers',
        name: 'teachers',
        component: TmpComponent,
    },
    {
        path: '/plans',
        name: 'plans',
        component: TmpComponent,
    },
    {
        path: '/settings',
        name: 'settings',
        component: TmpComponent,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: '',
    linkExactActiveClass: '',
})

export default router
