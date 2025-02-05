// https://nuxt.com/docs/api/configuration/nuxt-config
// import viteCompression from 'vite-plugin-compression'
// import { compression } from 'vite-plugin-compression2'
export default defineNuxtConfig({
  // $development: {
  //   vite: {
  //     server: {
  //       allowedHosts: true
  //     }
  //   }
  // },
  srcDir: 'src/',

  // devtools: { enabled: false },
  css: [],

  // modules: ['@element-plus/nuxt'],

  alias: {
    '@/src': '/src'
  },

  // elementPlus: {},
  runtimeConfig: {
    public: {}
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  devServer: {
    port: 5000
  },

  routeRules: {
    '*': { headers: { 'cache-control': 'no-cache, no-store, must-revalidate' } }
    // '/_nuxt/**': { headers: { 'cache-control': 'no-cache' } }
  },

  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          // additionalData: '@import "@/assets/css/base.scss";'
        }
      }
    },
    esbuild: {
      // pure: ['console.log', 'console.error', 'console.warn', 'console.debug', 'console.trace']
    },
    server: {
      // hmr: true,
      // allowedHosts: true,
      proxy: {}
    },
    build: {
      minify: 'terser'
    },
    plugins: []
  },

  compatibilityDate: '2025-02-05'
})