import { Module } from 'vuex'
import IUserTypes from '@/store/modules/user/types'
import IRootStateTypes from '@/store/types'

const userModule: Module<IUserTypes, IRootStateTypes> = {
    state: {
        role: 'admin',
    },
    getters: {
        getRole(state) {
            return state.role
        },
    },
    actions: {},
    namespaced: true,
}

export default userModule
