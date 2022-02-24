<template>
    <div class="login">
        <!-- <div class="navigation-block">
            <router-link
                v-for="link in links"
                :key="link.title"
                :to="{ name: link.routeName }"
            >
                {{ link.title }}
            </router-link>
        </div> -->

        <div class="auth-block">
            <h1>Войти в систему как:</h1>
            <div class="auth-buttons">
                <BaseButton
                    v-for="button in buttons"
                    :key="button.title"
                    @click="loginWithRole(button.role)"
                >
                    {{ button.title }}
                </BaseButton>

                <BaseButton type="secondary" @click="logout">Выйти</BaseButton>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store/app'
import { UserRoleType } from '@/types/user'
import BaseButton from '@/components/shared/button/BaseButton.vue'

const store = useStore()

const links = [
    { title: 'Главная', routeName: 'dashboard' },
    { title: 'База знаний', routeName: 'library' },
    { title: 'Профиль', routeName: 'settings' },
]

const buttons = [
    { title: 'Администратор', role: 'admin' },
    { title: 'Преподаватель', role: 'teacher' },
    { title: 'Студент', role: 'student' },
    { title: 'Родитель', role: 'parent' },
]

const loginWithRole = (role: UserRoleType) => {
    store.userLogin(role)
}

const logout = () => {
    store.userLogout()
}
</script>

<style lang="scss">
.login {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .navigation-block {
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;

        a:not(:last-child) {
            margin-right: 1rem;
        }
    }

    .auth-block {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .auth-buttons {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 1rem;
    }
}
</style>
