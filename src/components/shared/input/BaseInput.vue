<template>
    <div class="input" :class="{ 'base-form-element': isBase }">
        <label v-if="label" :for="COMPONENT_UID" class="element-label">
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
                :class="{
                    'has-start-icon': startIcon,
                    'revert-color': revertColor,
                }"
                :disabled="disabled"
                :value="modelValue"
                @input="updateValue"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'

defineProps({
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
    revertColor: {
        type: Boolean,
        default: false,
    },
    isBase: {
        type: Boolean,
        default: true,
    },
    disabled: {
        type: Boolean,
        default: false,
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
    &-wrapper {
        position: relative;
    }

    &-element {
        &:disabled {
            opacity: 0.7;
        }

        &.has-start-icon {
            padding: 0 1.25rem 0 4rem;
        }
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
