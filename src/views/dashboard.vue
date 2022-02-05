<template>
    <h2>{{ userRole }}</h2>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore()
        const userRole = computed(() => store.getters['user/getRole'])

        return {
            userRole,
        }
    },
}
</script>
