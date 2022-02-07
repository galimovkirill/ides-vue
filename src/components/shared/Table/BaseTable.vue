<template>
    <div class="table">
        <div class="table-header">
            <div v-if="checkable" class="checkbox-cell">
                <input
                    type="checkbox"
                    :checked="isAllRowsChecked()"
                    @change="checkAllRows"
                />
            </div>

            <slot name="header-start"></slot>

            <base-table-header-item
                v-for="col in columns"
                :key="col.field"
                :label="col.label"
                :width="col.width"
            />

            <slot name="header-end"></slot>
        </div>

        <div class="table-body">
            <div v-for="(row, rowIdx) in data" :key="rowIdx" class="table-row">
                <div v-if="checkable" class="checkbox-cell">
                    <input
                        type="checkbox"
                        :checked="isRowChecked(row)"
                        @change="checkRow(row)"
                    />
                </div>

                <slot name="row-start" :row="row"></slot>

                <template v-for="col in columns" :key="col.field">
                    <base-table-row-item :width="col.width">
                        {{ getRowItemContent(col, row) }}
                    </base-table-row-item>
                </template>

                <slot name="row-end"></slot>
            </div>
        </div>
    </div>
</template>

<script>
// Setup your data for building this table. You need create an object for "columns" prop, which looks like this:
// const columns = [
//     { field: 'id', label: 'ID', width: 60 },
//     { field: 'fullName', label: 'ФИО' },
//     { field: 'score', label: 'Баллы' },
//     { field: 'mark', label: 'Оценка' },
// ]

// Pass your data as "data" prop. The order of object's keys is not important. Example:
// const data = [
//     { mark: 12, id: 1, fullName: 'Кирилл Галимов' },
//     { id: 2, score: 6, fullName: 'Павел Михайлов' },
//     { mark: 22, fullName: 'Людмила Калягина', id: 3 },
//]

// Keys of your data's objects must be the same as column's object "field".

import { defineComponent, ref } from 'vue'
import BaseTableHeaderItem from '@/components/shared/Table/BaseTableHeaderItem.vue'
import BaseTableRowItem from '@/components/shared/Table/BaseTableRowItem.vue'

export default defineComponent({
    components: { BaseTableRowItem, BaseTableHeaderItem },
    props: {
        columns: {
            type: Array,
            default: () => [],
        },
        data: {
            type: Array,
            default: () => [],
        },
        checkable: {
            type: Boolean,
            default: false,
        },
        checkedRows: {
            type: Array,
            default: () => [],
        },
    },

    emits: ['update:checkedRows'],

    setup(props, { emit }) {
        let localCheckedRows = ref([])

        /**
         * Return content based on current cell's field prop
         */
        const getRowItemContent = (col, row) => row[col.field]

        /**
         * Get index of row inside checkedRows array
         */
        const getRowIndex = (row) => localCheckedRows.value.indexOf(row)

        const isRowChecked = (row) => getRowIndex(row) !== -1

        /**
         * Compare initial data and checked rows
         */
        const isAllRowsChecked = () => {
            const { data } = props
            return (
                localCheckedRows.value.length > 0 &&
                data.length === localCheckedRows.value.length &&
                data.join('') === localCheckedRows.value.join('')
            )
        }

        /**
         * Remove row from checkedRows if it is already checked
         */
        const removeCheckedRow = (row) => {
            const index = getRowIndex(row)
            index !== -1 && localCheckedRows.value.splice(index, 1)
        }

        /**
         * Toggle checkbox and save its state inside checkedRows array
         */
        const checkRow = (row) => {
            isRowChecked(row)
                ? removeCheckedRow(row)
                : localCheckedRows.value.push(row)

            emit('update:checkedRows', localCheckedRows.value)
        }

        const checkAllRows = () => {
            isAllRowsChecked()
                ? (localCheckedRows.value = [])
                : (localCheckedRows.value = [...props.data])

            emit('update:checkedRows', localCheckedRows.value)
        }

        return {
            localCheckedRows,
            getRowItemContent,
            isAllRowsChecked,
            isRowChecked,
            checkRow,
            checkAllRows,
        }
    },
})
</script>

<style lang="scss">
$horizontalPadding: 1rem;

.table {
    background: var(--clr-theme-layout);
    border: 1px solid var(--clr-theme-border);
    border-radius: var(--ides-border-radius);

    &-header {
        display: flex;
        align-items: center;
        height: 40px;
        background: var(--clr-primary-weak);
        padding: 0 $horizontalPadding;
        font-size: 13px;
    }

    &-row {
        display: flex;
        align-items: center;
        padding: 1rem $horizontalPadding;
        font-size: 14px;
        font-weight: 500;
    }

    .checkbox-cell {
        width: 40px;
        flex-shrink: 0;
    }
}
</style>
