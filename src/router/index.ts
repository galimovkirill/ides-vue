import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from '@/store/app'

import TmpComponent from '@/components/TmpComponent.vue'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import(`../views/login.vue`),
        meta: {
            authTypeRoute: true,
        },
    },
    {
        path: '/',
        name: 'dashboard',
        component: () => import(`../views/dashboard.vue`),
    },
    {
        path: '/institution',
        name: 'institution',
        component: () => import(`../views/institution.vue`),
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
        component: () => import(`../views/library.vue`),
    },
    {
        path: '/students',
        name: 'students',
        component: () => import(`../views/students.vue`),
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

router.beforeEach((to, from, next) => {
    const store = useStore()
    const userRole = store.getUserRole

    if (to.matched.some((r) => r.meta.authTypeRoute)) {
        userRole ? next({ name: 'dashboard' }) : next()
    } else {
        userRole ? next() : next({ name: 'login' })
    }
})

export default router
