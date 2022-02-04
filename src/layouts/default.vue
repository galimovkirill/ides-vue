<template>
    <the-header />
    <main>
        <the-sidebar />
        <router-view />
    </main>
</template>

<script lang="ts" setup>
import TheHeader from '@/components/layout/TheHeader.vue'
import TheSidebar from '../components/layout/TheSidebar.vue'
</script>
