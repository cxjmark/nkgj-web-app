// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import { h } from 'vue'
import '@theme/css/tailwind.scss'
import '@theme/css/index.scss'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import DefaultTheme from 'vitepress/theme'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'
export default {
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  }
} satisfies Theme
