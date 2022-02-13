<template>
    <div class="input-wrapper">
        <label v-if="label" :for="COMPONENT_UID" class="input-label">
            {{ label }}
        </label>
        <input :id="COMPONENT_UID" type="text" class="input" />
    </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'

const props = defineProps({
    label: {
        type: String || null,
        default: null,
    },
})

const VueInstance = getCurrentInstance()
const COMPONENT_UID = VueInstance?.uid?.toString()
</script>

<style lang="scss">
.input {
    height: 3rem;
    background: var(--color-theme-background);
    border: 1px solid var(--color-theme-border);
    border-radius: var(--ides-border-radius);
    width: 100%;
    padding: 0 1.25rem;

    &:focus {
        outline: none;
        border-color: var(--color-theme-border-focus);
    }

    &-label {
        font-size: 14px;
        font-weight: 600;
        color: var(--color-text-01);
        margin-bottom: 8px;
    }

    &-wrapper {
        display: flex;
        flex-direction: column;
    }
}
</style>
