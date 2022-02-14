<template>
    <div class="select base-form-element">
        <label v-if="label" :for="COMPONENT_UID" class="element-label">
            {{ label }}
        </label>

        <div class="select-wrapper">
            <select
                class="select-element"
                :class="{ 'revert-color': revertColor }"
            >
                <option v-if="optionLabel" value="" disabled selected>
                    {{ optionLabel }}
                </option>

                <option
                    v-for="(option, optionIndex) in options"
                    :key="optionIndex"
                    :value="option[optionValueKey]"
                >
                    {{ option[optionNameKey] }}
                </option>
            </select>

            <svg-icon name="chevron" class="select-chevron" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'

interface IOptionsItem {
    [key: string]: string | number
}

defineProps({
    label: {
        type: String,
        default: null,
    },
    revertColor: {
        type: Boolean,
        default: false,
    },
    options: {
        type: Array as () => IOptionsItem[],
        required: true,
    },
    optionLabel: {
        type: String,
        default: null,
    },
    optionValueKey: {
        type: String,
        required: true,
    },
    optionNameKey: {
        type: String,
        required: true,
    },
})

const VueInstance = getCurrentInstance()
const COMPONENT_UID = VueInstance?.uid?.toString()
</script>

<style lang="scss">
.select {
    &-element {
        appearance: none;
        cursor: pointer;
        padding-right: 2.5rem !important;
    }

    &-wrapper {
        position: relative;
    }

    &-chevron {
        position: absolute;
        top: 50%;
        right: 1rem;
        transform: translateY(-50%) scale(0.8);
        color: var(--color-primary);
        pointer-events: none;
    }
}
</style>
