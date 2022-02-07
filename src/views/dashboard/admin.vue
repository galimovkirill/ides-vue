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

    <base-table
        :columns="columns"
        :data="data"
        checkable
        v-model:checked-rows="checkedRows"
    />
</template>

<script>
import BaseStatsCard from '@/components/shared/BaseStatsCard.vue'
import BaseTable from '@/components/shared/Table/BaseTable.vue'
import BaseTableHeaderItem from '@/components/shared/Table/BaseTableHeaderItem.vue'
import BaseTableRowItem from '@/components/shared/Table/BaseTableRowItem.vue'
import { ref } from 'vue'

export default {
    components: {
        BaseTableRowItem,
        BaseTableHeaderItem,
        BaseTable,
        BaseStatsCard,
    },

    setup() {
        const checkedRows = ref([])

        const columns = [
            { field: 'id', label: 'ID', width: 60 },
            { field: 'fullName', label: 'ФИО' },
            { field: 'score', label: 'Баллы' },
            { field: 'mark', label: 'Оценка' },
        ]

        const data = [
            { mark: 12, id: 1, fullName: 'Кирилл Галимов' },
            { id: 2, score: 6, fullName: 'Павел Михайлов' },
            { mark: 22, fullName: 'Людмила Калягина', id: 3 },
        ]

        return {
            checkedRows,
            columns,
            data,
        }
    },
}
</script>

<style lang="scss">
.dashboard-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
}
</style>
