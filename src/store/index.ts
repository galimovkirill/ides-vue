import { createStore } from 'vuex'
import IRootStateTypes from '@/store/types'

import user from '@/store/modules/user'

export const store = createStore<IRootStateTypes>({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        user,
    },
})
