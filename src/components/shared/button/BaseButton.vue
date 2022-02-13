<template>
    <component
        :is="computedTag"
        v-bind="attrs"
        class="button"
        :class="typeClass"
    >
        <div class="button__content">
            <span class="button__text">
                <slot></slot>
            </span>
        </div>
    </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
    tag: {
        type: String,
        default: 'button',
    },

    to: {
        type: String,
        default: null,
    },

    disabled: {
        type: Boolean,
        default: false,
    },

    type: {
        type: String,
        default: 'primary',
        validator: (t: string) => ['primary', 'secondary'].includes(t),
    },
})

const computedTag = computed(() => (props.to ? 'router-link' : 'button'))

const attrs = computed(() => {
    return {
        ...(props.to && { to: props.to }),
        disabled: props.disabled,
    }
})

const typeClass = computed(() => {
    return `button--${props.type}`
})
</script>

<style lang="scss">
.button {
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    transition: $transition;
    font-size: 14px;
    font-weight: 500;
    border-radius: var(--ides-border-radius);

    &__content {
        padding: 0 2rem;
    }

    &--primary {
        color: #fff;
        background: var(--color-primary);
        &:hover {
            background: var(--color-primary-hover);
        }
    }

    &--secondary {
        color: var(--color-text-09);
        background: var(--color-button-secondary-bg);

        &:hover {
            background: var(--color-primary);
            color: #fff;
        }
    }
}
</style>
