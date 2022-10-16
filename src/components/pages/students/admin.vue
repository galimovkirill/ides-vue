<template>
    <BaseHeading>
        <h2>Студенты</h2>

        <template #counter>4 студента</template>
        <template #right>
            <BaseButton>Рассылка</BaseButton>
            <BaseButton>Добавить студента</BaseButton>
            <BaseButton>Загрузить Excel</BaseButton>
        </template>
    </BaseHeading>

    <BaseFilterPanel :cols="12" :spans="[4, 2, 2, 2, 2]">
        <BaseInput start-icon="search" placeholder="Поиск" revert-color />
        <BaseSelect
            :options="faculties"
            option-name-key="name"
            option-value-key="id"
            option-label="Факультет"
            revert-color
        />
        <BaseSelect
            :options="faculties"
            option-name-key="name"
            option-value-key="id"
            option-label="Факультет"
            revert-color
        />
        <BaseSelect
            :options="faculties"
            option-name-key="name"
            option-value-key="id"
            option-label="Факультет"
            revert-color
        />
        <BaseSelect
            :options="faculties"
            option-name-key="name"
            option-value-key="id"
            option-label="Факультет"
            revert-color
        />
    </BaseFilterPanel>

    <BaseTable :columns="tableCols" :data="tableData">
        <template #status="{ col, row }">
            <BaseTableRowItem :width="col.width" :align="col.align">
                <BaseBadge :label="row.status" />
            </BaseTableRowItem>
        </template>
    </BaseTable>
</template>

<script setup lang="ts">
import BaseHeading from '@/components/shared/BaseHeading.vue'
import BaseButton from '@/components/shared/button/BaseButton.vue'
import BaseFilterPanel from '@/components/shared/BaseFilterPanel.vue'
import BaseInput from '@/components/shared/input/BaseInput.vue'
import BaseTable from '@/components/shared/table/BaseTable.vue'
import BaseTableRowItem from '@/components/shared/table/BaseTableRowItem.vue'
import BaseBadge from '@/components/shared/badge/BaseBadge.vue'
import BaseSelect from '@/components/shared/select/BaseSelect.vue'
import { faculties } from '@/constants/api'

const tableCols = [
    { field: 'fullName', label: 'ФИО' },
    { field: 'faculty', label: 'Факультет' },
    { field: 'group', label: 'Группа' },
    { field: 'course', label: 'Курс', width: 100 },
    { field: 'status', label: 'Статус', width: 150, align: 'center' },
]

const tableData = [
    {
        fullName: 'Иванов Алексей Петрович',
        faculty: 'Физико-математический факультет',
        course: '1 курс',
        group: 'Математика',
        status: 'Обучается',
    },
]
</script>
