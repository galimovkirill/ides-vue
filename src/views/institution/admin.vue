<template>
    <BaseCollapse v-for="collapse in 4" :key="collapse">
        <div class="institution-collapse">
            <BaseInput />
            <BaseButton>Добавить</BaseButton>
        </div>

        <BaseTable :columns="columns" :data="data" checkable />
    </BaseCollapse>
</template>

<script setup lang="ts">
import BaseCollapse from '@/components/shared/collapse/BaseCollapse.vue'
import BaseInput from '@/components/shared/input/BaseInput.vue'
import BaseButton from '@/components/shared/button/BaseButton.vue'
import BaseTable from '@/components/shared/table/BaseTable.vue'

const columns = [
    { field: 'fullName', label: 'ФИО' },
    { field: 'post', label: 'Должность' },
]

const data = [
    { fullName: 'Иванов Алексей Петрович', post: 'Ректор' },
    { fullName: 'Хайрудтинов Ильнар Назипович', post: 'Президент' },
    {
        fullName: 'Насридтинов Даниил Аркадьевич',
        post: 'Проректор по образовательной деятельности',
    },
    {
        fullName: 'Михайлов Михаил Михайлович',
        post: 'Проректор по научной и инновационной деятельности',
    },
]
</script>

<style lang="scss">
.institution-collapse {
    display: flex;

    margin: -0.5rem -0.5rem 1rem;
    > * {
        margin: 0.5rem;
    }

    .input-wrapper {
        width: 100%;
    }
}
</style>
