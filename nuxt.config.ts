// https://nuxt.com/docs/api/configuration/nuxt-config
// import viteCompression from 'vite-plugin-compression'
// import { compression } from 'vite-plugin-compression2'
export default defineNuxtConfig({
  $development: {
    vite: {
      server: {
        allowedHosts: true
      }
    }
  },
  srcDir: 'src/',
  devtools: { enabled: false },
  css: [],
  modules: ['@element-plus/nuxt'],

  alias: {
    '@/src': '/src'
  },

  // elementPlus: {},
  runtimeConfig: {
    public: {}
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['lottie-player'].includes(tag)
    }
  },
  plugins: ['~/plugins/lottie-player.client.ts'],
  app: {
    // pageTransition: { name: 'page', mode: 'out-in' }
  },

  devServer: {
    // host: '0.0.0.0', // 打开本地开发就会变得很慢
    port: 2000
  },

  routeRules: {
    '*': { headers: { 'cache-control': 'no-cache, no-store, must-revalidate' } }
    // '/_nuxt/**': { headers: { 'cache-control': 'no-cache' } }
  },

  nitro: {
    // 改成走vite 代理  nitro代理会出现丢失 /
    // 如/api/orgGoods/ 会变成/api/orgGoods 这时候会把/api/orgGoodsClassify也代理了
    // middleware: ['~/server/middleware/nocache']
  },

  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          // additionalData: '@import "@/assets/css/base.scss";' // 全局引入变量
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

      // brotliSize: false,
      // cssCodeSplit: true
    },
    plugins: [
      // viteCompression({
      //   verbose: true, // 是否在控制台中输出压缩结果
      //   disable: false,
      //   // threshold: 10240, // 如果体积大于阈值，将被压缩，单位为b，体积过小时请不要压缩，以免适得其反
      //   algorithm: 'gzip', // 压缩算法，可选['gzip'，' brotliccompress '，'deflate '，'deflateRaw']
      //   ext: '.gz',
      //   deleteOriginFile: true // 源文件压缩后是否删除
      // })
      // compression({ threshold: 1025 })
    ]
  },

  compatibilityDate: '2024-09-30'
})
