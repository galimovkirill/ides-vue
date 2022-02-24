<template>
    <div class="wrapper">
        <div v-if="$slots.title" class="wrapper-header">
            <h3>
                <slot name="title"></slot>
            </h3>
        </div>

        <div class="wrapper-body">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss">
.wrapper {
    background: var(--color-theme-layout);
    border: 1px solid var(--color-theme-border);
    border-radius: var(--ides-border-radius);

    .wrapper-header {
        padding: 1rem 1.5rem;
        border-bottom: 1px solid var(--color-theme-border);
    }

    .wrapper-body {
        padding: 1.5rem 1.5rem 2rem;
    }
}
</style>
