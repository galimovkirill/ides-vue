<template>
    <div class="form-group base-form-element">
        <div class="form-group__label">
            <div v-if="props.label" class="element-label">
                {{ props.label }}
            </div>
        </div>

        <div class="form-group__body">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        default: null,
    },
})
</script>
