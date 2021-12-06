import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'QDoc',

  setup () {
    return () => h(QBadge, {
      class: 'QDoc',
      label: 'QDoc'
    })
  }
}
