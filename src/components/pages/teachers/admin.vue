<template>
    <BaseHeading>
        <h2>Преподаватели</h2>

        <template #counter>4 преподавателя</template>

        <template #right>
            <BaseButton>Рассылка</BaseButton>
            <BaseButton>Добавить</BaseButton>
        </template>
    </BaseHeading>

    <BaseFilterPanel :cols="10" :spans="[6, 2, 2]">
        <BaseInput revert-color placeholder="Поиск" start-icon="search" />

        <BaseSelect
            :options="faculties"
            option-name-key="name"
            option-value-key="id"
            option-label="Факультет"
            revert-color
        />

        <BaseSelect
            :options="departments"
            option-name-key="name"
            option-value-key="id"
            option-label="Кафедра"
            revert-color
        />
    </BaseFilterPanel>
</template>

<script lang="ts" setup>
import BaseHeading from '@/components/shared/BaseHeading.vue'
import BaseButton from '@/components/shared/button/BaseButton.vue'
import BaseFilterPanel from '@/components/shared/BaseFilterPanel.vue'
import BaseInput from '@/components/shared/input/BaseInput.vue'
import BaseSelect from '@/components/shared/select/BaseSelect.vue'
import { faculties, departments } from '@/constants/api'
</script>
