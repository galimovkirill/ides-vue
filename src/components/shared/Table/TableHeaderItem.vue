<template>
    <div
        class="w-full"
        :style="{
            width: width && width + 'px',
            flexShrink: width && 0,
            textAlign,
        }"
    >
        <slot>
            {{ label }}
        </slot>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        label: String,
        width: [String, Number],
        textAlign: {
            type: String,
            default: 'left',
            validator: (val) => ['left', 'center', 'right'].includes(val),
        },
    },
})
</script>
