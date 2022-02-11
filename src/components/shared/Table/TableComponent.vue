<template>
    <div class="table" :class="{ 'no-border': noBorder }">
        <div class="table-header">
            <div v-if="checkable" class="checkbox-cell">
                <input
                    type="checkbox"
                    :checked="isAllRowsChecked()"
                    @change="checkAllRows"
                />
            </div>

            <slot name="header-start"></slot>

            <table-header-item
                v-for="col in columns"
                :key="col.field"
                :label="col.label"
                :width="col.width"
                :align="col.align"
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
                    <slot
                        :name="col.field"
                        v-bind="{ getRowItemContent, col, row }"
                    >
                        <table-row-item :width="col.width" :align="col.align">
                            {{ getRowItemContent(col, row) }}
                        </table-row-item>
                    </slot>
                </template>

                <slot name="row-end"></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// Pass your data as "data" prop. The order of object's keys is not important. Example:
// const data = [
//     { mark: 12, id: 1, fullName: 'Кирилл Галимов' },
//     { id: 2, score: 6, fullName: 'Павел Михайлов' },
//     { mark: 22, fullName: 'Людмила Калягина', id: 3 },
//]

// Keys of your data's objects must be the same as column's "field" property.

import { ref } from 'vue'
import { ITableRow, ITableCol } from '@/types/tableElements'
import TableHeaderItem from '@/components/shared/Table/TableHeaderItem.vue'
import TableRowItem from '@/components/shared/Table/TableRowItem.vue'

const props = defineProps({
    columns: {
        type: Array as () => Array<ITableCol>,
        default: () => [],
    },
    data: {
        type: Array as () => Array<ITableRow>,
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
    noBorder: {
        type: Boolean,
        default: false,
    },
})

const emit = defineEmits(['update:checkedRows'])

let localCheckedRows = ref<Array<ITableRow>>([])

/**
 * Return content based on current cell's field prop
 */
const getRowItemContent = (col: ITableCol, row: ITableRow) => row[col.field]

/**
 * Get index of row inside checkedRows array
 */
const getRowIndex = (row: ITableRow) => localCheckedRows.value.indexOf(row)

const isRowChecked = (row: ITableRow) => getRowIndex(row) !== -1

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
const removeCheckedRow = (row: ITableRow) => {
    const index = getRowIndex(row)
    index !== -1 && localCheckedRows.value.splice(index, 1)
}

/**
 * Toggle checkbox and save its state inside checkedRows array
 */
const checkRow = (row: ITableRow) => {
    isRowChecked(row) ? removeCheckedRow(row) : localCheckedRows.value.push(row)

    emit('update:checkedRows', localCheckedRows.value)
}

const checkAllRows = () => {
    isAllRowsChecked()
        ? (localCheckedRows.value = [])
        : (localCheckedRows.value = [...props.data])

    emit('update:checkedRows', localCheckedRows.value)
}
</script>

<style lang="scss">
$horizontalPadding: 1rem;

.table {
    background: var(--clr-theme-layout);
    border: 1px solid var(--clr-theme-border);
    border-radius: var(--ides-border-radius);

    &.no-border {
        border: none;

        .table-header {
            border-top-left-radius: var(--ides-border-radius);
            border-top-right-radius: var(--ides-border-radius);
        }
    }

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
        width: 30px;
        flex-shrink: 0;
    }
}
</style>
