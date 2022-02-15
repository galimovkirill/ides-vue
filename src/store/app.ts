import { defineStore } from 'pinia'

export const useStore = defineStore('app', {
    state: () => ({
        userRole: 'admin',
    }),

    getters: {
        getUserRole(state) {
            return state.userRole
        },
    },
})
