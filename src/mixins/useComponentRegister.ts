import { useStore } from '@/store/app'
import { computed, defineAsyncComponent } from 'vue'
import { RouteTypes } from '@/types/routes'

export default (routeName: RouteTypes) => {
    const store = useStore()
    const userRole = store.getUserRole

    const component = computed(() => {
        return defineAsyncComponent(
            () => import(`../components/pages/${routeName}/${userRole}.vue`)
        )
    })

    return { component }
}
