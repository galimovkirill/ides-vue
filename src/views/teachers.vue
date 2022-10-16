<template>
    <component :is="component" />
</template>

<script setup lang="ts">
import useComponentRegister from '@/mixins/useComponentRegister'
const { component } = useComponentRegister('teachers')
</script>
