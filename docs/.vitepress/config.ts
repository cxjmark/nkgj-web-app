import { defineConfig } from 'vitepress'
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Inspect from 'vite-plugin-inspect'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: '/niuku-web-docs/',
  title: "web docs",
  description: "前端工程工具、组件、配置等文档说明",
  markdown: {
    theme: { light: 'github-light', dark: 'github-dark' },
    config: (md) => {
      md.use(demoblockPlugin, {
        customClass: ''
      })
    }
  },
  vite: {
    plugins: [demoblockVitePlugin(), vueJsx(), Inspect()],
  },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'VitePress | Vite & Vue Niuku docs' }],
  ],
  appearance: 'dark',
  themeConfig: {
    logo: { src: '/logo.svg', width: 24, height: 24 },
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '公用方法', link: '/shared/date/format-date' },
    ],

    sidebar: [
      {
        text: 'date',
        items: [
          { text: 'formatDate', link: '/shared/date/format-date' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://gitlab.usniuku.com/nkgj/nkgj-web-app' }
    ]
  }
})
