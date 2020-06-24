const config = {

  runtimeCompiler: true,
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import '@/styles/01_atoms/_common.scss';`
      },
      sass: {
        prependData: `@import '@/styles/01_atoms/_04vuetify-variables.sass'`
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ],
};

module.exports = config;