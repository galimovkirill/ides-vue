import { computed } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from '@/store/app'

const userRole = computed(() => {
    const store = useStore()
    return store.getUserRole
})

import TmpComponent from '@/components/TmpComponent.vue'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import(`../views/auth/login.vue`),
        meta: {
            authTypeRoute: true,
        },
    },
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
        component: () => import(`../views/schedule/${userRole.value}.vue`),
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

router.beforeEach((to, from, next) => {
    if (to.matched.some((r) => r.meta.authTypeRoute)) {
        userRole.value ? next({ name: 'dashboard' }) : next()
    } else {
        userRole.value ? next() : next({ name: 'login' })
    }
})

export default router
