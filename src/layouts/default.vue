<template>
    <TheHeader />
    <main class="main">
        <TheSidebar />
        <div class="main-wrapper">
            <router-view />
        </div>
    </main>
</template>

<script lang="ts" setup>
import TheHeader from '@/components/layout/TheHeader.vue'
import TheSidebar from '@/components/layout/TheSidebar.vue'
</script>
