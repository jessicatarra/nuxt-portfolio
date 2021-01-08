export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Jessica Tarra - Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'Jessica Tarra - Developer'
      },
      { 
        hid: 'twitter:site', 
        name: 'twitter:site', 
        content: '@jessicatarra' 
      },
      { 
        hid: 'twitter:creator', 
        name: 'twitter:creator', 
        content: '@jessicatarra' 
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Jessica Tarra - Developer'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: ''
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/jessica.jpg'
      },
      { hid: 'description', name: 'description', content: '' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/jessica.jpg'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Jessica Tarra - Developer'
      },
      { 
        hid: 'og:title', 
        name: 'og:title', 
        content: 'Jessica Tarra - Developer' 
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {src: '~/plugins/vueTyper.js', ssr: false},
    {src: '~/plugins/aosClient.js', ssr: false}
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // dark-mode
    '@nuxtjs/color-mode',
    //svg-nuxt
    '@nuxtjs/svg'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'nuxt-i18n',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
