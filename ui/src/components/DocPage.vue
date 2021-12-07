<template>
  <q-page class="doc-page">
    <div class="items-start doc-h1 row no-wrap">
      <div class="col doc-heading" v-if="title">
        <span>{{ title }}</span>
        <q-badge class="q-ml-sm doc-page__badge" v-if="badge" color="brand-primary" :label="badge"></q-badge>
      </div>
    </div>
    <slot></slot>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

const props = {
  title: String,
  badge: String,
}
export default defineComponent({
  name: 'DocPage',
  props: props,
  setup() {
    return {}
  },
})
</script>
