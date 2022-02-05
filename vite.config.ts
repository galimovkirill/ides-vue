import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default () => {
    return {
        plugins: [
            vue(),
            createSvgIconsPlugin({
                iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
                symbolId: 'icon-[dir]-[name]',
            }),
        ],

        resolve: {
            alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
        },

        // css: {
        //     preprocessorOptions: {
        //         scss: {
        //             additionalData: `@import "@/assets/styles/vars.scss";`,
        //         },
        //     },
        // },
    }
}
