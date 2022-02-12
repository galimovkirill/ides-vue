<template>
    <header class="header">
        <div class="header-logo">
            <router-link :to="{ name: 'dashboard' }" class="header-logo__app">
                <img src="@/assets/images/logo.svg" alt="IDES" />
            </router-link>

            <a
                href="https://mon.tatarstan.ru/"
                target="_blank"
                class="header-logo__customer"
            >
                <img src="@/assets/images/mon_ttr.svg" alt="МОН РТ" />
                <span>
                    Министерство образования и науки Республики Татарстан
                </span>
            </a>
        </div>

        <div class="header-menu">
            <router-link
                :to="{ name: 'chats' }"
                class="header-chat"
                :class="{ active: true }"
            >
                <svg-icon name="letter" />
            </router-link>

            <router-link :to="{ name: 'settings' }" class="header-profile">
                <span class="header-profile__name">Алибаев Тимур</span>
                <img
                    src="https://upload.ides.plus/api/file-storage/17112021-232734_942-unnamed.jpeg"
                    alt=""
                    class="header-profile__avatar"
                />
            </router-link>

            <div class="header-logout">
                <svg-icon name="logout" />
            </div>
        </div>
    </header>
</template>

<style lang="scss">
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;

    height: var(--ides-header-height);
    background: var(--color-theme-layout);
    border-bottom: 1px solid var(--color-theme-border);

    &-logo {
        display: flex;
        align-items: center;

        &__app {
            display: flex;
            margin-right: 2rem;
            img {
                height: 2.5rem;
            }
        }

        &__customer {
            display: flex;
            align-items: center;
            font-weight: 600;
            img {
                margin-right: 0.75rem;
            }
        }
    }

    &-menu {
        display: flex;
        align-items: center;
        font-weight: 500;
    }

    &-chat {
        position: relative;

        svg {
            display: flex;
            color: var(--color-primary);
            width: 1.5rem;
            height: 1.5rem;
            transition: $transition;
        }

        &.active {
            &::after {
                content: '';
                position: absolute;
                right: -4px;
                top: 0;
                width: 10px;
                height: 10px;
                background-color: var(--color-danger);
                display: block;
                border-radius: 100%;
                transition: $transition;
            }
        }

        &:hover {
            svg {
                color: var(--color-primary-hover);
            }
        }
    }

    &-profile {
        display: flex;
        align-items: center;
        margin: 0 1.5rem;

        &__name {
            font-size: 14px;
        }

        &__avatar {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: var(--ides-border-radius);
            object-fit: cover;
            margin-left: 1rem;
        }
    }

    &-logout {
        display: flex;
        cursor: pointer;

        svg {
            width: 1.5rem;
            height: 1.5rem;
            color: var(--color-primary);
            transition: $transition;

            &:hover {
                color: var(--color-primary-hover);
            }
        }
    }
}
</style>
