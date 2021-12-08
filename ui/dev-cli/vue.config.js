const path = require('path')

module.exports = {
  chainWebpack: (chain) => {
    chain.resolve.alias.merge({
      examples: path.resolve(__dirname, `./src/examples`),
    })
  },

  // 第三方插件配置
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false,
    },
  },

  transpileDependencies: ['quasar'],
}
