<template>
    <div class="avatar" :class="`avatar--${props.size}`">
        <img :src="props.src" :alt="props.alt" class="avatar__image" />
    </div>
</template>

<script lang="ts" setup>
interface Props {
    src: string
    alt?: string
    size: 'small' | 'medium' | 'big'
}

const props = withDefaults(defineProps<Props>(), {
    alt: '',
    size: 'small',
})
</script>

<style lang="scss">
.avatar {
    $self: &;

    &__image {
        border-radius: var(--ides-border-radius);
        object-fit: cover;
    }

    &--small {
        #{$self}__image {
            width: 2.5rem;
            height: 2.5rem;
        }
    }

    &--big {
        #{$self}__image {
            width: 4rem;
            height: 4rem;
        }
    }
}
</style>
