<template>
    <teleport to="body">
        <div class="modal-overlay" @click="handleCloseModal"></div>

        <div class="modal" :style="{ maxWidth }">
            <div class="modal-wrapper">
                <div class="modal-header">
                    <slot name="header">
                        <h3>{{ props.title }}</h3>
                    </slot>

                    <div class="modal-close" @click="handleCloseModal">
                        &times;
                    </div>
                </div>

                <div class="modal-body">
                    <slot></slot>
                </div>

                <div v-if="$slots.footer" class="modal-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from '@vue/runtime-core'

// TODO: добавить props и автоматически отображать кнопку "Отменить/Закрыть"

const props = defineProps({
    title: {
        type: String,
        default: 'Test',
    },
    maxWidth: {
        type: String,
        default: '550px',
    },
})
const emit = defineEmits(['close'])

const handleCloseModal = () => emit('close')

onMounted(() => document.body.classList.add('modal-shown'))
onUnmounted(() => document.body.classList.remove('modal-shown'))
</script>

<style lang="scss">
.modal {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    min-width: 300px;
    width: 100%;
    box-shadow: 0 1px 15px 0 rgb(155 155 155 / 25%);
    background: var(--color-theme-layout);
    border: 1px solid var(--color-theme-border);
    border-radius: var(--ides-border-radius);
    z-index: 100;

    &-wrapper {
        padding: 2.5rem;
    }

    &-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.5rem;
    }

    &-close {
        font-size: 1.75rem;
        margin-left: 1rem;
        opacity: 0.3;
        cursor: pointer;
        user-select: none;
    }

    &-footer {
        display: flex;
        align-items: center;
        margin: 1.5rem -1rem -1rem;
        * {
            margin: 1rem;
            width: 100%;
        }
    }

    &-overlay {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: var(--color-theme-layout);
        opacity: 0.45;
        z-index: 99;
    }
}
</style>
