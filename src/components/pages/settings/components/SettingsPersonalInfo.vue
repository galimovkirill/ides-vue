<template>
    <BaseWrapper class="personal-info">
        <template #title>Личные данные</template>

        <div class="personal-info__form">
            <div class="form-gap">
                <BaseInput
                    v-model="firstName"
                    label="Имя"
                    disabled
                    class="personal-info__row"
                />
                <BaseInput
                    v-model="lastName"
                    label="Фамилия"
                    disabled
                    class="personal-info__row"
                />
                <BaseInput
                    v-model="patronymic"
                    label="Отчество"
                    disabled
                    class="personal-info__row"
                />
            </div>

            <div class="form-gap">
                <BaseFormGroup
                    label="Дата рождения"
                    class="personal-info__birthdate"
                >
                    <BaseInput v-model="firstName" disabled :is-base="false" />
                    <BaseInput v-model="firstName" disabled :is-base="false" />
                    <BaseInput v-model="firstName" disabled :is-base="false" />
                </BaseFormGroup>
                <BaseInput
                    v-model="email"
                    label="E-mail"
                    disabled
                    class="personal-info__row"
                />
                <BaseInput
                    v-model="phone"
                    label="Телефон"
                    disabled
                    class="personal-info__row"
                />
            </div>
        </div>

        <BaseAlert>
            Данные может редактировать только Администратор системы
        </BaseAlert>
    </BaseWrapper>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseWrapper from '@/components/shared/BaseWrapper.vue'
import BaseInput from '@/components/shared/input/BaseInput.vue'
import BaseFormGroup from '@/components/shared/form-group/BaseFormGroup.vue'
import BaseAlert from '@/components/shared/alert/BaseAlert.vue'

const firstName = ref('Тимур')
const lastName = ref('Алибаев')
const patronymic = ref('Ахметович')
const email = ref('test@gmail.com')
const phone = ref('+79992223311')
</script>

<style lang="scss">
.personal-info {
    &__form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
    }

    &__row {
        &:not(:last-child) {
            margin-bottom: 1rem;
        }
    }

    &__birthdate {
        .form-group__body {
            display: grid;
            grid-template-columns: 1fr 2fr 1fr;
            gap: 1rem;
        }
    }

    .alert {
        margin-top: 1.5rem;
    }
}
</style>
