import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import VuePlugin from 'ui' // "ui" is aliased in quasar.conf.js

import zhCN from 'uisrc/i18n/zh-CN.json'
import enUS from 'uisrc/i18n/en-US.json'

export default boot(({ app }) => {
  app.use(VuePlugin)
  app.use(
    createI18n({
      legacy: false,
      locale: 'zh-CN',
      fallbackLocale: 'en-US',
      messages: {
        'zh-CN': zhCN,
        'en-US': enUS,
      },
    })
  )
})
