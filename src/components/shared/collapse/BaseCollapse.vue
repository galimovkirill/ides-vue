<template>
    <div class="collapse" :class="{ opened: isCollapseOpened }">
        <div
            class="collapse-panel"
            @click="isCollapseOpened = !isCollapseOpened"
        >
            <span class="collapse-title">Ректорат</span>
            <svg-icon name="chevron" class="collapse-chevron" />
        </div>

        <div v-if="isCollapseOpened" class="collapse-body">
            <div class="collapse-body__wrapper">
                <slot>
                    <h1>Test</h1>
                </slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isCollapseOpened = ref(false)
</script>

<style lang="scss">
@import '@/assets/styles/vars.scss';

.collapse {
    &-panel {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        border-radius: var(--ides-border-radius);
        background: var(--color-primary);
        color: #fff;
        padding: 0 2rem;
        height: 4rem;

        .opened & {
            border-radius: 0;
            border-top-left-radius: var(--ides-border-radius);
            border-top-right-radius: var(--ides-border-radius);
        }
    }

    &-chevron {
        transition: $transition;
    }

    &-body {
        &__wrapper {
            padding: 1rem;
            background: var(--color-theme-layout);
            border: 1px solid var(--color-theme-border);
            border-bottom-left-radius: var(--ides-border-radius);
            border-bottom-right-radius: var(--ides-border-radius);
        }
    }
}
</style>
