<template>
    <div class="badge" :class="'badge--' + type">{{ label }}</div>
</template>

<script setup lang="ts">
defineProps({
    type: {
        type: String,
        default: 'success',
        validator: (v: string) => ['success'].includes(v),
    },
    label: {
        type: String,
        required: true,
    },
})
</script>

<style lang="scss">
.badge {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: lowercase;
    font-size: 12px;
    height: 28px;
    padding: 0 1rem;
    border: 1px solid var(--color-badge-success-darker);
    border-radius: 4px;
    &--success {
        background: var(--color-badge-success);
        color: var(--color-badge-success-darker);
    }
}
</style>
