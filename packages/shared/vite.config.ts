import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: './index.ts',
      name: 'nk-shared',
      fileName: (format) => {
        return `shared.${format}.js`
      },
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖，防止多个vue产生冲突
      external: ['vue', 'dayjs', 'lodash-es'],
      output: {
        globals: {
          vue: 'Vue',
          dayjs: 'dayjs',
          "lodash-es": "lodashEs"
        },
      },
    },
  },
  plugins: [
    dts({
      include: ['./src/**/*.ts'],
    }),
  ],
})
