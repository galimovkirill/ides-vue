<template>
    <aside class="sidebar">
        <div class="sidebar-navigation">
            <router-link
                v-for="(item, index) in navigation"
                :key="index"
                to="/"
                :class="['navigation-item', { active: index === 0 }]"
            >
                <svg-icon :name="item.icon" />
                <span class="navigation-item__label">{{ item.label }}</span>
            </router-link>
        </div>
    </aside>
</template>

<script setup lang="ts">
import { sidebarNavigation } from '@/constants/navigation'
import { ref, computed } from 'vue'

const role = 'schoolAdmin'
const navigation = computed(() => sidebarNavigation[role])
</script>

<style lang="scss">
.sidebar {
    position: fixed;
    left: 0;
    height: 100%;
    top: calc(var(--ides-header-height) + 1px);
    width: var(--ides-sidebar-width);
    background: var(--clr-theme-layout);
    border-right: 1px solid var(--clr-theme-border);

    &-navigation {
        display: flex;
        flex-direction: column;
        font-size: 12px;
    }

    .navigation-item {
        display: flex;
        align-items: center;
        height: 4rem;
        padding: 0 1rem;
        transition: $transition;

        svg {
            width: 1.5rem;
            height: 1.5rem;
            margin-right: 0.75rem;
        }

        &.active {
            background: var(--clr-primary) !important;
            color: #fff;
        }

        &:hover {
            background: var(--clr-primary-weak);
        }
    }
}
</style>
