<template>
    <div
        class="table-header__item"
        :style="{
            width: width && width + 'px',
            flexShrink: width && 0,
            justifyContent,
        }"
    >
        <slot>
            {{ label }}
        </slot>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import tableItemMixin, { tableItemProps } from '@/mixins/tableItemMixin'

export default defineComponent({
    props: {
        ...tableItemProps,
        label: String,
    },

    setup(props) {
        const { justifyContent } = tableItemMixin(props)

        return {
            justifyContent,
        }
    },
})
</script>

<style lang="scss">
.table-header__item {
    display: flex;
    align-items: center;
    width: 100%;
}
</style>
