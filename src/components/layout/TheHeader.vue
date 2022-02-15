<template>
    <header class="header">
        <div class="header__left">
            <div class="burger">
                <div class="burger__line"></div>
                <div class="burger__line"></div>
                <div class="burger__line"></div>
            </div>

            <div class="logo-row">
                <router-link :to="{ name: 'dashboard' }" class="logo-row__app">
                    <img src="@/assets/images/logo.svg" alt="IDES" />
                </router-link>

                <a
                    href="https://mon.tatarstan.ru/"
                    target="_blank"
                    class="logo-row__customer"
                >
                    <img src="@/assets/images/mon_ttr.svg" alt="МОН РТ" />
                    <span>
                        Министерство образования и науки Республики Татарстан
                    </span>
                </a>
            </div>
        </div>

        <div class="header__right">
            <router-link
                :to="{ name: 'chats' }"
                class="header__chat"
                :class="{ active: true }"
            >
                <svg-icon name="letter" />
            </router-link>

            <router-link :to="{ name: 'settings' }" class="header__profile">
                <span class="header__profile__name">Алибаев Тимур</span>
                <img
                    src="https://upload.ides.plus/api/file-storage/17112021-232734_942-unnamed.jpeg"
                    alt=""
                    class="header__profile__avatar"
                />
            </router-link>

            <button class="header__logout" @click="handleUserLogout">
                <svg-icon name="logout" />
            </button>
        </div>
    </header>
</template>

<script setup lang="ts">
import { useStore } from '@/store/app'
const store = useStore()

const handleUserLogout = () => {
    store.userLogout()
}
</script>

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

    &__left {
        display: flex;
        align-items: center;
    }

    &__right {
        display: flex;
        align-items: center;
        font-weight: 500;
    }

    .burger {
        display: none;
    }

    .logo-row {
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
            font-size: 14px;
            img {
                margin-right: 0.75rem;
            }
        }
    }

    &__chat {
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

    &__profile {
        display: flex;
        align-items: center;
        margin: 0 1.5rem;

        &__name {
            font-size: 14px;
            margin-right: 1rem;
        }

        &__avatar {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: var(--ides-border-radius);
            object-fit: cover;
        }
    }

    &__logout {
        display: flex;
        cursor: pointer;
        border: none;
        background: none;

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

@media screen and (max-width: $ides-breakpoint-lg) {
    .header {
        .burger {
            display: flex;
            flex-direction: column;
            margin-right: 2rem;
            cursor: pointer;

            &__line {
                width: 1.5rem;
                height: 2px;
                display: block;
                background: var(--color-text);

                &:not(:last-child) {
                    margin-bottom: 6px;
                }
            }
        }

        .logo-row {
            &__customer {
                img {
                    margin-right: 0;
                }
                span {
                    display: none;
                }
            }
        }
    }
}

@media screen and (max-width: $ides-breakpoint-md) {
    .header {
        padding: 0 1rem;
    }
}

@media screen and (max-width: $ides-breakpoint-sm) {
    .header {
        .logo-row {
            &__app {
                margin-right: 1rem;
                img {
                    height: 2rem;
                }
            }
        }

        &__profile {
            margin: 0 0 0 1rem;
            &__name {
                display: none;
            }
        }

        &__logout {
            display: none;
        }
    }
}
</style>
