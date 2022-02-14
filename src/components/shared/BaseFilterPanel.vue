<template>
    <div
        v-if="$slots.default"
        ref="filterPanel"
        class="filter-panel"
        :style="styles"
    >
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const filterPanel = ref()

const props = defineProps({
    cols: {
        type: Number,
        required: true,
    },
    spans: {
        type: Array as () => number[],
        required: true,
    },
})

const styles = {
    gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
}

onMounted(() => {
    const innerElements = filterPanel.value.children

    for (let i = 0; i < innerElements.length; i++) {
        const span = props.spans[i]
        innerElements[i].style.gridColumn = `span ${span} / span ${span}`
    }
})
</script>

<style lang="scss">
.filter-panel {
    display: grid;
    gap: 1rem;
}

@media screen and (max-width: $ides-breakpoint-lg) {
    .filter-panel {
        display: flex;
        flex-direction: column;
        gap: 0;

        > * {
            &:not(:last-child) {
                margin-bottom: 1rem;
            }
        }
    }
}
</style>
