<template>
    <div class="stats-card">
        <div class="stats-card__info">
            <span class="stats-card__count">{{ count }}</span>
            <span class="stats-card__type">{{ type }}</span>
        </div>
        <div class="stats-card__icon">
            <svg-icon :name="icon" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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
    },

    setup(props) {
        return {
            count: props.count,
            type: props.type,
            icon: props.icon,
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
        background: var(--clr-primary);
        border-radius: var(--ides-border-radius);

        svg {
            width: 40px;
            height: 40px;
        }
    }
}
</style>
