import { Module } from 'vuex'
import IUserTypes from '@/store/modules/user/types'
import IRootStateTypes from '@/store/types'

const userModule: Module<IUserTypes, IRootStateTypes> = {
    state: {
        role: 'student',
    },
    getters: {
        getRole(state) {
            return state.role
        },
    },
    mutations: {},
    actions: {},
    namespaced: true,
}

export default userModule
