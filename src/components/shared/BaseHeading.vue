<template>
    <div class="heading">
        <div>
            <slot name="left"></slot>
        </div>

        <div class="heading__right">
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
}
</style>
