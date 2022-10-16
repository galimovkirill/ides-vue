<template>
    <BaseWrapper class="change-password">
        <template #title>Изменить пароль</template>

        <form class="change-password__form form-gap">
            <BaseInput label="Пароль" />
            <BaseInput label="Подтверждение пароля" />
            <BaseButton>Изменить пароль</BaseButton>
        </form>
    </BaseWrapper>
</template>

<script setup lang="ts">
import BaseWrapper from '@/components/shared/BaseWrapper.vue'
import BaseInput from '@/components/shared/input/BaseInput.vue'
import BaseButton from '@/components/shared/button/BaseButton.vue'
</script>
