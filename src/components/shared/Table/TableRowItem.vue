<template>
    <div class="table-row__item" :style="styles">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import tableItemMixin, { tableItemProps } from '@/mixins/tableItemMixin'

const props = defineProps({
    ...tableItemProps,
})

const { styles } = tableItemMixin(props)
</script>

<style lang="scss">
.table-row__item {
    display: flex;
    align-items: center;
    width: 100%;
}
</style>
