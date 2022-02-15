<template>
    <LayoutEmpty v-if="isEmptyLayoutForCurrentRoute" />
    <LayoutDefault v-else />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import LayoutDefault from '@/layouts/default.vue'
import LayoutEmpty from '@/layouts/empty.vue'

const route = useRoute()
const currentRoute = computed(() => route.name)

const routeNamesForEmptyLayout = ['login']
const isEmptyLayoutForCurrentRoute = computed(() => {
    if (typeof currentRoute.value === 'string') {
        return routeNamesForEmptyLayout.includes(currentRoute.value)
    }

    return false
})
</script>
