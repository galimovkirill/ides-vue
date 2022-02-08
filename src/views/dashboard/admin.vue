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

        <div class="rating-grid">
            <div class="rating-item">
                <div class="rating-header">
                    <h4>Преподаватели</h4>
                    <div class="rating-header__end">средний балл</div>
                </div>
                <base-table :columns="columns_1" :data="data_1" no-border />
            </div>

            <div class="rating-item">
                <div class="rating-header">
                    <h4>Учащиеся</h4>
                    <div class="rating-header__end">средний балл</div>
                </div>
                <base-table :columns="columns_2" :data="data_2" no-border />
            </div>
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

    .rating {
        &-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
        }

        &-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1rem;
            &__end {
                font-size: 14px;
            }
        }
    }
}
</style>
