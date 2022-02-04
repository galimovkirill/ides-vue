<template>
    <header class="header">
        <div class="header-logo">
            <router-link to="/" class="header-logo__app">
                <img src="@/assets/images/logo.svg" alt="IDES" />
            </router-link>
            <a href="" class="header-logo__customer">
                <img src="@/assets/images/mon_ttr.svg" alt="МОН РТ" />
                <span>
                    Министерство образования и науки Республики Татарстан
                </span>
            </a>
        </div>

        <div class="header-menu">
            <div class="header-chat">Chat</div>
            <router-link to="/" class="header-profile">
                <span class="header-profile__name">Алибаев Тимур</span>
                <img
                    src="https://upload.ides.plus/api/file-storage/17112021-232734_942-unnamed.jpeg"
                    alt=""
                    class="header-profile__avatar"
                />
            </router-link>
            <div class="header-logout">Logout</div>
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
    background: var(--clr-theme-layout);
    border-bottom: 1px solid var(--clr-theme-border);

    &-logo {
        display: flex;
        align-items: center;

        &__app {
            margin-right: 2rem;
            img {
                height: 2.5rem;
            }
        }

        &__customer {
            display: flex;
            align-items: center;
            img {
                margin-right: 0.75rem;
            }
        }
    }

    &-menu {
        display: flex;
        align-items: center;
    }

    &-profile {
        display: flex;
        align-items: center;
        margin: 0 1.5rem;
        &__avatar {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: var(--ides-border-radius);
            object-fit: cover;
            margin-left: 1rem;
        }
    }
}
</style>
