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

<style lang="scss">
.main {
    padding-top: var(--ides-header-height);
    padding-left: var(--ides-sidebar-width);

    &-wrapper {
        padding: 1.5rem;

        & > * {
            margin-bottom: 1.5rem;
        }
    }
}

@media screen and (max-width: $ides-breakpoint-lg) {
    .main {
        padding-left: 0;
    }
}
</style>
