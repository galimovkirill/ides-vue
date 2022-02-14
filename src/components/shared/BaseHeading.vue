<template>
    <div class="heading">
        <div>
            <slot></slot>
        </div>

        <div class="heading__right">
            <span v-if="$slots.counter" class="heading-counter">
                <slot name="counter"></slot>
            </span>
            <slot name="right"></slot>
        </div>
    </div>
</template>

<style lang="scss">
.heading {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__right {
        display: flex;
        align-items: center;
        margin: -0.5rem;

        & > * {
            margin: 0.5rem;
        }
    }

    &-counter {
        color: var(--color-text-01);
        font-size: 14px;
    }
}
</style>
