export default {
  // googleAnalytics: {
  //   id: 'G-06JE71HEXT',
  // },
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en-US',
    },
    title: 'Jessica Tarra | Software Developer',
    meta: [
      { charset: 'utf-8' },
      //  HTML Meta Tags
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'keywords',
        content:
          'web developer, software developer, front end developer, freelance web developer, wordpress developer, developer, web developer portfolio, web developer resume, javascript, vue js, react, nuxt js, next js, strapi, headless cms, wordpress, aws, npm, cypress, qa tester, test, end to end test',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Hello, I am Jessica. I am from Cartagena, Colombia and currently living in Rio de Janeiro, Brazil. I am a Software Developer who is excited about being part of the future tech solutions that will help LATAM grow.',
      },
      //Twitter Meta Tags
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://tarralva.com',
      },
      {
        name: 'twitter:site',
        content: '@jessicatarra',
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@jessicatarra',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Jessica Tarra | Software Developer',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Hello, I am Jessica. I am from Cartagena, Colombia and currently living in Rio de Janeiro, Brazil. I am a Software Developer who is excited about being part of the future tech solutions that will help LATAM grow.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.tarralva.com/_nuxt/img/thumbnail.bf9052c.png',
      },
      //Facebook Meta Tags
      { property: 'og:image:type', content: 'image/jpeg' },
      { property: 'og:image:width', content: '400' },
      { property: 'og:image:height', content: '300' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.tarralva.com/_nuxt/img/thumbnail.bf9052c.png',
      },
      {
        name: 'og:site_name',
        content: 'Jessica Tarra | Software Developer',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Jessica Tarra | Software Developer',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Hello, I am Jessica. I am from Cartagena, Colombia and currently living in Rio de Janeiro, Brazil. I am a Software Developer who is excited about being part of the future tech solutions that will help LATAM grow.',
      },
    ],
    //Favicon
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://tarralva.com',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vueTyper.js', ssr: false },
    { src: '~/plugins/aosClient.js', ssr: false },
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
    '@nuxtjs/svg',
    // '@nuxtjs/google-analytics',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['nuxt-i18n'],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
