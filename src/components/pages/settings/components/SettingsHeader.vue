<template>
    <!-- TODO: передалть правую часть -->

    <BaseWrapper>
        <div class="settings-header">
            <div class="personal-info">
                <BaseAvatar
                    src="https://upload.ides.plus/api/file-storage/17112021-232734_942-unnamed.jpeg"
                    size="big"
                    class="settings-header__avatar"
                />

                <div class="fullname">
                    <span>Алибаев</span>
                    <div>Тимур Ахметович</div>
                </div>
            </div>

            <div class="college-info">
                <div class="college-info__block">
                    <div class="college-info__title">Факультет</div>
                    <div class="college-info__value">
                        Физико-математический факультет
                    </div>
                </div>

                <div class="college-info__block">
                    <div class="college-info__title">Кафедра</div>
                    <div class="college-info__value">Общая кафедра</div>
                </div>

                <div class="college-info__block">
                    <div class="college-info__title">Курс</div>
                    <div class="college-info__value">1 курс</div>
                </div>
            </div>
        </div>
    </BaseWrapper>
</template>

<script setup lang="ts">
import BaseWrapper from '@/components/shared/BaseWrapper.vue'
import BaseAvatar from '@/components/shared/avatar/BaseAvatar.vue'
</script>

<style lang="scss">
.settings-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;

    &__avatar {
        margin-right: 1rem;
    }

    .personal-info {
        display: flex;
        align-items: center;

        .fullname {
            font-size: 18px;
            font-weight: 600;
            span:nth-child(1) {
                display: block;
                margin-bottom: 0.5rem;
            }
        }
    }

    .college-info {
        position: relative;
        display: flex;

        &__block {
            // width: 100%;
            &:not(:last-child) {
                margin-right: 1rem;
            }
        }

        &__title {
            color: var(--color-text-01);
            font-size: 14px;
            font-weight: 500;
        }

        &__value {
            font-weight: 500;
            margin-top: 0.5rem;
        }

        &::before {
            position: absolute;
            content: '';
            width: 1px;
            height: calc(100% + 2rem);
            display: block;
            background: var(--color-theme-border);
            left: -1.5rem;
            top: -1rem;
        }
    }
}
</style>
