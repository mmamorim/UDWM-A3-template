import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(transformAssetUrls),
    WindiCSS(),
    quasar({
      sassVariables: './src/styles/quasar-variables.sass'
    })
  ],
})
