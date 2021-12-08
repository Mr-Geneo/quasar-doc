import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import Plugin from 'quasar-ui-doc'
import 'quasar-ui-doc/dist/index.css'

createApp(App).use(Plugin).use(Quasar, quasarUserOptions).mount('#app')
