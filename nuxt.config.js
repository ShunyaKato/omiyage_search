
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'おとりよせ検索' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'webでお取り寄せできるご当地グルメを簡単検索！' || '' },
      { name: 'google-site-verification', content: 'AyewlBGcAgNBrX9xqzT7CS8PlsQ--tkOx8fYEmFFDXc' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-48.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@fortawesome/fontawesome-free-webfonts',
    '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css',
    'swiper/css/swiper.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/vue-awesome-swiper', ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    ['@nuxtjs/google-analytics', {
      id: 'UA-166762436-1'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-fontawesome'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    vendor: [
      'vue-awesome-swiper'
    ]
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  }
}
