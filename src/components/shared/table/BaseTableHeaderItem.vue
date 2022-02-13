<template>
    <div class="table-header__item" :style="styles">
        <slot>
            {{ label }}
        </slot>
    </div>
</template>

<script setup lang="ts">
import tableItemMixin, { tableItemProps } from '@/mixins/tableItemMixin'

const props = defineProps({
    ...tableItemProps,
    label: String,
})

const { styles } = tableItemMixin(props)
</script>

<style lang="scss">
.table-header__item {
    display: flex;
    align-items: center;
    width: 100%;
}
</style>
