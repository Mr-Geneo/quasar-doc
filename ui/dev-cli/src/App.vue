<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-toolbar-title> quasar-ui-doc v{{ version }} </q-toolbar-title>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <doc-page title="Vue Cli Test"></doc-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { version } from 'quasar-ui-doc'

export default {
  name: 'LayoutDefault',

  // components: {
  //   DocPage,
  // },

  setup() {
    return {
      version,
    }
  },
}
</script>
