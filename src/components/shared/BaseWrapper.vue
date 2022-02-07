<template>
    <div class="wrapper">
        <div class="wrapper-header">
            <slot name="header"></slot>
        </div>

        <div class="wrapper-body">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss">
.wrapper {
    background: var(--clr-theme-layout);
    border: 1px solid var(--clr-theme-border);
    border-radius: var(--ides-border-radius);

    .wrapper-header {
        padding: 1rem 1.5rem;
        border-bottom: 1px solid var(--clr-theme-border);
    }

    .wrapper-body {
        padding: 1rem 1.5rem;
    }
}
</style>
