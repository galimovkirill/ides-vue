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

<script>
import { computed } from 'vue'

export default {
    props: {
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
            validator: (value) => ['primary', 'secondary'].includes(value),
        },
    },

    setup(props) {
        const computedTag = computed(() =>
            props.to ? 'router-link' : 'button'
        )
        const attrs = computed(() => {
            return {
                ...(props.to && { to: props.to }),
                disabled: props.disabled,
            }
        })
        const typeClass = computed(() => {
            return `button--${props.type}`
        })

        return {
            computedTag,
            attrs,
            typeClass,
        }
    },
}
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
    border-radius: var(--ides-border-radius);

    &__content {
        padding: 0 2rem;
    }

    &--primary {
        color: #fff;
        background: var(--clr-primary);
        &:hover {
            background: var(--clr-primary-strong);
        }
    }

    &--secondary {
        color: var(--clr-primary-strong);
        background: var(--clr-primary-weak);

        &:hover {
            background: var(--clr-primary);
            color: #fff;
        }
    }
}
</style>
