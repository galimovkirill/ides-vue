import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from '@/store/app'

let userRole: string | null = null

import TmpComponent from '@/components/TmpComponent.vue'

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: () => import(`../views/dashboard/${userRole}.vue`),
    },
    {
        path: '/institution',
        name: 'institution',
        component: () => import(`../views/institution/${userRole}.vue`),
    },
    {
        path: '/schedule',
        name: 'schedule',
        component: () => import(`../views/schedule/${userRole}.vue`),
    },
    {
        path: '/chats',
        name: 'chats',
        component: TmpComponent,
    },
    {
        path: '/library',
        name: 'library',
        component: () => import(`../views/library/${userRole}.vue`),
    },
    {
        path: '/students',
        name: 'students',
        component: () => import(`../views/students/${userRole}.vue`),
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

router.beforeEach((to, from) => {
    const store = useStore()
    userRole = store.getUserRole
})

export default router
