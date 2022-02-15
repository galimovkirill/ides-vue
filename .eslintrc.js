require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/eslint-config-typescript/recommended',
        '@vue/eslint-config-prettier',
    ],
    rules: {
        'vue/no-unused-vars': 'error',
        'vue/multi-word-component-names': [
            'error',
            {
                ignores: [
                    'admin',
                    'student',
                    'teacher',
                    'parent',
                    'empty',
                    'login',
                ],
            },
        ],
    },
}
