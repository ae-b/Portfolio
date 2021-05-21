require('dotenv').config();
// const {MICROCMS_API_URL,MICROCMS_API_KEY} = process.env;

export default {

  // 環境変数設定
  privateRuntimeConfig: {
    MicroCmsApiKey: process.env.MICROCMS_API_URL,
    MicroCmsApiUrl: process.env.MICROCMS_API_KEY
  },
  publicRuntimeConfig: {
  },

  // 動的ルーティング出力設定
  generate: {
    async routes() {
      const pages = await axios
        .get(process.env.MICROCMS_API_URL, {
          headers: { 'X-API-KEY': process.env.MICROCMS_API_KEY }
        })
        .then((res) =>
          res.data.contents.map((content) => ({
            route: `/${content.id}`,
            payload: content
          }))
        )
      return pages
    }
  },

  // // envファイルの定義
  // env: {
  //   X_API_KEY,
  //   URL
  // }

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}