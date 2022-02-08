<template>
    <base-heading>
        <template #left>
            <h2>База знаний</h2>
        </template>

        <template #right>
            <span>4 файла</span>
            <base-button>Добавить</base-button>
            <base-button>Новая папка</base-button>
        </template>
    </base-heading>

    <table-component :columns="tableCols" :data="tableData" checkable>
        <template #header-end>
            <table-header-item
                label="Действия"
                width="100"
                text-align="center"
            />
        </template>
        <template #row-end>
            <table-row-item width="100" text-align="center">
                Скачать
            </table-row-item>
        </template>
    </table-component>
</template>

<script>
import BaseHeading from '@/components/shared/BaseHeading.vue'
import BaseButton from '@/components/shared/BaseButton.vue'
import TableComponent from '@/components/shared/Table/TableComponent.vue'
import TableRowItem from '@/components/shared/Table/TableRowItem.vue'
import TableHeaderItem from '@/components/shared/Table/TableHeaderItem.vue'

export default {
    components: {
        BaseHeading,
        BaseButton,
        TableComponent,
        TableRowItem,
        TableHeaderItem,
    },

    setup() {
        const tableCols = [
            { field: 'title', label: 'Название' },
            { field: 'type', label: 'Тип', width: 100, textAlign: 'center' },
            {
                field: 'timestamp',
                label: 'Дата загрузки',
                width: 100,
                textAlign: 'center',
            },
            { field: 'size', label: 'Размер', width: 100, textAlign: 'center' },
        ]

        const tableData = [
            {
                title: 'Физико-математический факультет',
                type: 'Папка',
                timestamp: '17.11.2021',
            },
            {
                title: 'Физико-математический факультет',
                type: 'Папка',
                timestamp: '17.11.2021',
                size: '20mb',
            },
            {
                title: 'Физико-математический факультет',
                type: 'Папка',
                timestamp: '17.11.2021',
            },
            {
                title: 'Физико-математический факультет',
                type: 'Папка',
                timestamp: '17.11.2021',
                size: '116kb',
            },
        ]

        return {
            tableCols,
            tableData,
        }
    },
}
</script>
