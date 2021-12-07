<template>
  <div class="doc-copy-button relative">
    <q-btn color="brand-primary" round dense flat :icon="mdiContentCopy" @click="copy">
      <q-tooltip>{{ t('doc.copy') }}</q-tooltip>
    </q-btn>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <q-badge class="absolute" v-show="copied" style="top: 8px; right: 58px" color="brand-primary">{{
        t('doc.copied')
      }}</q-badge>
    </transition>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { copyToClipboard } from 'quasar'
import { mdiContentCopy } from '@quasar/extras/mdi-v6'
// import { useLocale } from '../../hooks/useLocale'

export default defineComponent({
  name: 'DocCopyButton',
  props: {
    text: String,
  },
  setup(props) {
    let timer
    const copied = ref(false)

    function copy() {
      if (props.text) {
        copyToClipboard(props.text)
          .then(() => {
            copied.value = true
            clearTimeout(timer)
            timer = setTimeout(() => {
              copied.value = false
              timer = null
            }, 2000)
          })
          .catch(() => {})
      }
    }

    // const { t } = useLocale()
    function t(t) {
      return t
    }

    return {
      mdiContentCopy,
      copied,
      copy,
      t,
    }
  },
})
</script>
