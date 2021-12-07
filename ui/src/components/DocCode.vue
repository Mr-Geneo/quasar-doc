<template>
  <div class="doc-code">
    <code-prism :lang="lang" :code="code"></code-prism>
    <div class="absolute" :style="copyStyle">
      <CopyButton :text="code"></CopyButton>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'

import CodePrism from './components/CodePrism.js'
import CopyButton from './components/CopyButton.vue'

const props = {
  code: String,
  lang: {
    type: String,
    default: 'js',
  },
}
export default defineComponent({
  name: 'DocCode',
  props: props,
  components: {
    CodePrism,
    CopyButton,
  },
  setup() {
    const copyStyle = computed(() => {
      return {
        top: '8px',
        right: '8px',
      }
    })
    return {
      copyStyle,
    }
  },
})
</script>
