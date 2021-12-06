import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-doc'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
