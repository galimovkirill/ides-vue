<template>
    <div class="dashboard-stats">
        <base-stats-card
            v-for="card in 4"
            :key="card"
            :count="4"
            icon="group"
            type="Студенты"
        />
    </div>
</template>

<script lang="ts">
import BaseStatsCard from '@/components/shared/BaseStatsCard.vue'

export default {
    components: { BaseStatsCard },
}
</script>

<style lang="scss">
.dashboard-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
}
</style>
