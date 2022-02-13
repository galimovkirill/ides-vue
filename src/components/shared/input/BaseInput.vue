<template>
    <div class="input">
        <label v-if="label" :for="COMPONENT_UID" class="input-label">
            {{ label }}
        </label>

        <div class="input-wrapper">
            <svg-icon
                v-if="startIcon"
                :name="startIcon"
                class="input__start-icon"
            />
            <input
                :id="COMPONENT_UID"
                type="text"
                :placeholder="placeholder"
                class="input-element"
                :class="{ 'has-start-icon': startIcon }"
                :value="modelValue"
                @input="updateValue"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'

const props = defineProps({
    label: {
        type: String || null,
        default: null,
    },
    placeholder: {
        type: String,
        default: null,
    },
    startIcon: {
        type: String,
        default: null,
    },
    modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

const VueInstance = getCurrentInstance()
const COMPONENT_UID = VueInstance?.uid?.toString()

const updateValue = (event: Event) => {
    // TODO: Запретить ввод пробелов при пустом инпуте
    emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<style lang="scss">
.input {
    position: relative;
    display: flex;
    flex-direction: column;

    .input-element {
        height: 3rem;
        background: var(--color-theme-background);
        border-radius: var(--ides-border-radius);
        padding: 0 1.25rem;
        border: 1px solid var(--color-theme-border);
        width: 100%;

        &:focus {
            outline: none;
            border-color: var(--color-theme-border-focus);
        }

        &.has-start-icon {
            padding: 0 1.25rem 0 4rem;
        }
    }

    &-label {
        font-size: 14px;
        font-weight: 600;
        color: var(--color-text-01);
        margin-bottom: 8px;
    }

    &__start-icon {
        pointer-events: none;
        position: absolute;
        left: 1.5rem;
        top: 50%;
        transform: translateY(-50%);
        color: rgba(172, 175, 193, 1);
    }
}
</style>
