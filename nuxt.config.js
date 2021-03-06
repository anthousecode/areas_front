const webpack = require("webpack");
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "Мартова Риверсайд",
    htmlAttrs: {
      lang: "ru"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, user-scalable=no" },
      { hid: "description", name: "description", content: "Мартова Риверсайд - Ваш загородный клуб." },
      { hid: "keywords", name: "keywords", content: "Мартова, мартова, мартова риверсайд, мартовая, Мартовая, martova, martova riverside, mahnjdf, Мартова, Риверсайд, продажа, участков, покупка, отдых, Харьков" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" },
    ],
    script: [
      { src: "http://martovariverside.com/js/jquery112.js" },
      { src: "http://martovariverside.com/js/d3.js" },
      { src: "http://martovariverside.com/js/d3-selection.js" },
      { src: "http://martovariverside.com/js/turntable.js" }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: "components/loading.vue",
  /*
  ** Build configuration
  */
  css: [
    "@/node_modules/bootstrap/dist/css/bootstrap.min.css",
    "~assets/scss/main.scss"
  ],
  styleResources: {
    scss: ["~assets/scss/main.scss"]
  }
  ,
  modules: [
    "@nuxtjs/axios",
  ],
  axios: {
    baseURL: "https://api.martovariverside.com/api/",
    proxyHeaders: false,
    credentials: false,
  },
  plugins: [
    { src: "~plugins/vuelidate", ssr: false },
    { src: "~plugins/vue-notifications", ssr: false },
    { src: "~plugins/locales/localize.filter.js", ssr: false },
    { src: "@plugins/eventBus", ssr: false }
  ],
  build: {
    optimizeCss: false,
    vendor: ["jquery", "/js/turntable.js", "vuelidate", "vue-notifications", "localize.filter"],
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery"
      })],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          exclude: /(node_modules)/
        });
      }
    }
  },
  mode: "spa"
};

