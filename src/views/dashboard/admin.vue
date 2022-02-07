<template>
    <div class="dashboard-stats">
        <base-stats-card
            v-for="card in 4"
            :key="card"
            :count="4"
            icon="group"
            type="Студенты"
            to="/"
        />
    </div>

    <base-wrapper class="dashboard-rating">
        <template #header>
            <h3>Рейтинг пользователей</h3>
        </template>

        <div class="dashboard-rating__row">
            <base-table :columns="columns_1" :data="data_1" no-border />
            <base-table :columns="columns_2" :data="data_2" no-border />
        </div>
    </base-wrapper>
</template>

<script>
import BaseStatsCard from '@/components/shared/BaseStatsCard.vue'
import BaseTable from '@/components/shared/Table/BaseTable.vue'
import BaseWrapper from '@/components/shared/BaseWrapper.vue'

export default {
    components: {
        BaseWrapper,
        BaseTable,
        BaseStatsCard,
    },

    setup() {
        const columns_1 = [
            { field: 'fullName', label: 'ФИО' },
            {
                field: 'result',
                label: 'Результат',
                width: 100,
                textAlign: 'center',
            },
        ]

        const data_1 = [
            { fullName: 'Петрова Анна Павловна', result: 6 },
            { fullName: 'Тимофеев Алексей Николаевич', result: 'н/д' },
        ]

        const columns_2 = [
            { field: 'fullName', label: 'ФИО' },
            {
                field: 'result',
                label: 'Результат',
                width: 100,
                textAlign: 'center',
            },
        ]

        const data_2 = [
            { fullName: 'Иванов Алексей Петрович', result: 6 },
            { fullName: 'Хайрудтинов Ильнар Назипович', result: 'н/д' },
            { fullName: 'Насридтинов Даниил Аркадьевич', result: 'н/д' },
            { fullName: 'Михайлов Михаил Михайлович', result: 'н/д' },
        ]

        return {
            columns_1,
            data_1,
            columns_2,
            data_2,
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

.dashboard-rating {
    margin-top: 2rem;

    &__row {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }
}
</style>
