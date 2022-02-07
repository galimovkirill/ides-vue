<template>
    <div
        class="w-full"
        :style="{
            width: width && width + 'px',
            flexShrink: width && 0,
        }"
    >
        <slot>
            {{ label }}
        </slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        label: String,
        width: [String, Number],
    },
})
</script>
