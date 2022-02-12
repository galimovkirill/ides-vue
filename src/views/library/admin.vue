<template>
    <base-heading>
        <template #left>
            <h2>База знаний</h2>
        </template>

        <template #right>
            <span>4 файла</span>
            <base-button>Добавить</base-button>
            <base-button @click="isAddFolderModalShown = true">
                Новая папка
            </base-button>
        </template>
    </base-heading>

    <table-component
        :columns="tableCols"
        :data="tableData"
        checkable
        class="library-table"
    >
        <template #header-end>
            <table-header-item label="Действия" width="100" align="center" />
        </template>

        <template #title="{ getRowItemContent, col, row }">
            <table-row-item class="title">
                <svg-icon :name="row.type" />
                {{ getRowItemContent(col, row) }}
            </table-row-item>
        </template>

        <template #type="{ col, row }">
            <table-row-item :width="col.width" :align="col.align">
                <template v-if="row.type === 'folder'">Папка</template>
                <template v-else-if="row.type === 'file'">Файл</template>
            </table-row-item>
        </template>

        <template #row-end>
            <table-row-item width="100" align="center">
                Скачать
            </table-row-item>
        </template>
    </table-component>

    <teleport to="body">
        <modal-component
            v-if="isAddFolderModalShown"
            title="Добавить папку"
            @close="isAddFolderModalShown = false"
        >
            <div>
                <base-input label="Название" />
            </div>

            <template #footer>
                <base-button type="secondary">Отмена</base-button>
                <base-button>Добавить</base-button>
            </template>
        </modal-component>
    </teleport>
</template>

<script lang="ts" setup>
import BaseHeading from '@/components/shared/BaseHeading.vue'
import BaseButton from '@/components/shared/BaseButton.vue'
import TableComponent from '@/components/shared/Table/TableComponent.vue'
import TableRowItem from '@/components/shared/Table/TableRowItem.vue'
import TableHeaderItem from '@/components/shared/Table/TableHeaderItem.vue'
import ModalComponent from '@/components/shared/Modal/ModalComponent.vue'
import { ref } from '@vue/reactivity'
import BaseInput from '@/components/shared/BaseInput.vue'

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
