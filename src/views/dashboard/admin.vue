<template>
    <div class="dashboard-stats">
        <base-stats-card :count="4" icon="group" type="Студент" />
    </div>
</template>

<script lang="ts">
import BaseStatsCard from '@/components/shared/BaseStatsCard.vue'

export default {
    components: { BaseStatsCard },
}
</script>
