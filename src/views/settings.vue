<template>
    <SettingsHeader />
    <SettingsPersonalInfo />

    <div class="settings-grid">
        <SettingsChangePassword />
    </div>
</template>

<script setup lang="ts">
import SettingsHeader from '@/components/pages/settings/components/SettingsHeader.vue'
import SettingsPersonalInfo from '@/components/pages/settings/components/SettingsPersonalInfo.vue'
import SettingsChangePassword from '@/components/pages/settings/components/SettingsChangePassword.vue'
</script>

<style lang="scss">
.settings-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
}
</style>
