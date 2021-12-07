<template>
  <section class="doc-card-title cursor-pointer q-my-xs q-mr-md text-subtitle1">
    <div class="`doc-card-title-title`">{{ title }}</div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DocCardTitle',
  props: {
    title: String,
  },
  setup() {
    return {}
  },
})
</script>
