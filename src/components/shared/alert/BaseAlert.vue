<template>
    <div class="alert" :class="`alert--${props.type}`">
        <p class="alert__text">
            <slot></slot>
        </p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    type: {
        type: String,
        default: 'danger',
        validator: (v: string) => ['danger'].includes(v),
    },
})
</script>

<style lang="scss">
.alert {
    padding: 1rem 1.5rem;
    font-size: 14px;
    font-weight: 500;
    border-radius: var(--ides-border-radius);

    &--danger {
        background: var(--color-danger-bg);
        color: var(--color-danger);
    }
}
</style>
