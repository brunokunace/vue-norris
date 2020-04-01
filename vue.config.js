module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-norris/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/sass/main.sass";'
      }
    }
  }
}
