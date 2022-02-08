<template>
    <component :is="tag" :to="to" class="stats-card" :class="indexStyleClass">
        <div class="stats-card__info">
            <span class="stats-card__count">{{ count }}</span>
            <span class="stats-card__type">{{ type }}</span>
        </div>
        <div class="stats-card__icon">
            <svg-icon :name="icon" />
        </div>
    </component>
</template>

<script lang="ts">
import { defineComponent, computed, getCurrentInstance } from 'vue'

export default defineComponent({
    props: {
        count: {
            type: Number,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
        to: {
            type: String,
        },
    },

    setup(props) {
        const instance = getCurrentInstance()
        const tag = computed(() => {
            if (props.to) {
                return 'router-link'
            }
            return 'div'
        })

        const indexStyleClass = computed(() => {
            const key: any = instance?.vnode.key
            if (key % 2 === 0) {
                return 'even'
            }
            return 'odd'
        })

        return {
            count: props.count,
            type: props.type,
            icon: props.icon,
            tag,
            indexStyleClass,
        }
    },
})
</script>

<style lang="scss">
.stats-card {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    background: var(--clr-theme-layout);
    border: 1px solid var(--clr-theme-border);
    border-radius: var(--ides-border-radius);
    padding: 1.5rem;
    transition: $transition;

    &__info {
        display: flex;
        flex-direction: column;
    }

    &__count {
        font-size: 36px;
        font-weight: 600;
    }

    &__type {
        color: var(--clr-text-weak);
        margin-top: 1rem;
        font-weight: 500;
    }

    &__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        width: 80px;
        height: 80px;
        margin-left: 1rem;
        border-radius: 1rem;

        svg {
            width: 40px;
            height: 40px;
        }
    }

    &:hover {
        box-shadow: $shadow;
    }
}

.stats-card.odd .stats-card__icon {
    background: var(--clr-primary-strong);
}

.stats-card.even .stats-card__icon {
    background: var(--clr-primary);
}
</style>
