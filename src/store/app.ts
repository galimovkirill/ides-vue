import { defineStore } from 'pinia'
import { UserRoleType } from '@/types/user'
import router from '@/router'

interface IAppStore {
    isUserAuthenticated: boolean
    userRole: UserRoleType | null
}

export const useStore = defineStore('app', {
    state: (): IAppStore => ({
        isUserAuthenticated: false,
        userRole: null,
    }),

    getters: {
        getUserAuthenticatedStatus: (state) => state.isUserAuthenticated,
        getUserRole: (state) => state.userRole,
    },

    actions: {
        setUserAuthenticatedStatus(status: boolean) {
            this.isUserAuthenticated = status
        },
        setUserRole(role: UserRoleType | null) {
            this.userRole = role
        },

        /**
         * @param forceRoute Определяет необходимость смены роута на 'dashboard' после авторизации
         */
        userLogin(role: UserRoleType, forceRoute = true) {
            this.setUserAuthenticatedStatus(true)
            this.setUserRole(role)

            if (forceRoute) {
                router.push({ name: 'dashboard' })
            }
        },

        /**
         * @param forceRoute Определяет необходимость смены роута на 'login' после выхода из аккаунта
         */
        userLogout(forceRoute = true) {
            this.setUserAuthenticatedStatus(false)
            this.setUserRole(null)

            if (forceRoute) {
                router.push({ name: 'login' })
            }
        },
    },
})
