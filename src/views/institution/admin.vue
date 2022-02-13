<template>
    <BaseCollapse>
        <div class="institution-collapse">
            <BaseInput
                v-model="searchQuery"
                placeholder="Поиск"
                start-icon="search"
            />
            <BaseButton>Добавить</BaseButton>
        </div>

        <BaseTable
            :columns="columns"
            :data="data"
            checkable
            :filter-query="searchQuery"
            :filter-fields="['fullName', 'post', 'age', 'experience']"
        />
    </BaseCollapse>
</template>

<script setup lang="ts">
import BaseCollapse from '@/components/shared/collapse/BaseCollapse.vue'
import BaseInput from '@/components/shared/input/BaseInput.vue'
import BaseButton from '@/components/shared/button/BaseButton.vue'
import BaseTable from '@/components/shared/table/BaseTable.vue'
import { ref } from 'vue'

const searchQuery = ref('')

const columns = [
    { field: 'fullName', label: 'ФИО' },
    { field: 'post', label: 'Должность' },
    { field: 'age', label: 'Возраст', width: 100, align: 'center' },
    { field: 'experience', label: 'Опыт работы', width: 100, align: 'center' },
]

let data: any[] = []

for (let i = 0; i < 10; i++) {
    const tmp = [
        {
            fullName: 'Иванов Алексей Петрович',
            post: 'Ректор',
            age: 26,
            experience: 4,
        },
        {
            fullName: 'Хайрудтинов Ильнар Назипович',
            post: 'Президент',
            age: 48,
            experience: 20,
        },
        {
            fullName: 'Насридтинов Даниил Аркадьевич',
            post: 'Проректор по образовательной деятельности',
            age: 59,
            experience: 30,
        },
        {
            fullName: 'Михайлов Михаил Михайлович',
            post: 'Проректор по научной и инновационной деятельности',
            age: 20,
            experience: 1,
        },
    ]

    data = [...data, ...tmp]
}
</script>

<style lang="scss">
.institution-collapse {
    display: flex;

    margin: -0.5rem -0.5rem 1rem;
    > * {
        margin: 0.5rem;
    }

    .input {
        width: 100%;
    }
}
</style>
