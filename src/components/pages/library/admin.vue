<template>
    <BaseHeading>
        <h2>База знаний</h2>

        <template #counter>4 файла</template>
        <template #right>
            <BaseButton>Добавить</BaseButton>
            <BaseButton @click="isAddFolderModalShown = true">
                Новая папка
            </BaseButton>
        </template>
    </BaseHeading>

    <BaseTable
        :columns="tableCols"
        :data="tableData"
        checkable
        class="library-table"
    >
        <template #header-end>
            <BaseTableHeaderItem label="Действия" width="100" align="center" />
        </template>

        <template #title="{ getRowItemContent, col, row }">
            <BaseTableRowItem class="title">
                <svg-icon :name="row.type" />
                {{ getRowItemContent(col, row) }}
            </BaseTableRowItem>
        </template>

        <template #type="{ col, row }">
            <BaseTableRowItem :width="col.width" :align="col.align">
                <template v-if="row.type === 'folder'">Папка</template>
                <template v-else-if="row.type === 'file'">Файл</template>
            </BaseTableRowItem>
        </template>

        <template #row-end>
            <BaseTableRowItem width="100" align="center">
                Скачать
            </BaseTableRowItem>
        </template>
    </BaseTable>

    <BaseModal
        v-if="isAddFolderModalShown"
        title="Добавить папку"
        @close="isAddFolderModalShown = false"
    >
        <div>
            <BaseInput label="Название" />
        </div>

        <template #footer>
            <BaseButton type="secondary">Отмена</BaseButton>
            <BaseButton>Добавить</BaseButton>
        </template>
    </BaseModal>
</template>

<script lang="ts" setup>
import BaseHeading from '@/components/shared/BaseHeading.vue'
import BaseButton from '@/components/shared/button/BaseButton.vue'
import BaseInput from '@/components/shared/input/BaseInput.vue'
import BaseTable from '@/components/shared/table/BaseTable.vue'
import BaseTableRowItem from '@/components/shared/table/BaseTableRowItem.vue'
import BaseTableHeaderItem from '@/components/shared/table/BaseTableHeaderItem.vue'
import BaseModal from '@/components/shared/modal/BaseModal.vue'
import { ref } from 'vue'

const isAddFolderModalShown = ref(false)

const tableCols = [
    { field: 'title', label: 'Название' },
    { field: 'type', label: 'Тип', width: 100, align: 'center' },
    {
        field: 'timestamp',
        label: 'Дата загрузки',
        width: 100,
        align: 'center',
    },
    { field: 'size', label: 'Размер', width: 100, align: 'center' },
]

const tableData = [
    {
        title: 'Физико-математический факультет',
        type: 'folder',
        timestamp: '17.11.2021',
    },
    {
        title: 'Факультет прикладных информационных технологий',
        type: 'file',
        timestamp: '17.11.2021',
        size: '20mb',
    },
    {
        title: 'Факультет авиации, наземного транспорта и энергетики',
        type: 'folder',
        timestamp: '17.11.2021',
    },
]
</script>

<style lang="scss">
.library-table {
    .title .icon {
        margin-right: 0.5rem;
    }
}
</style>
