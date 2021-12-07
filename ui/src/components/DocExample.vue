<template>
  <q-card :class="classes" class="q-my-lg" flat bordered>
    <q-toolbar :class="`${prefixCls}__toolbar`">
      <CardTitle :title="title"></CardTitle>
      <q-space></q-space>
      <div class="col-auto" v-if="!loading">
        <q-btn v-if="noGit === false" dense flat round :icon="fabGithub" @click="openGitHub">
          <q-tooltip>{{ t('doc.viewGitHub') }}</q-tooltip>
        </q-btn>
        <q-btn class="q-ml-sm" v-if="noEdit === false" dense flat round :icon="fabCodepen" @click="openCodepen">
          <q-tooltip>{{ t('doc.editCodepen') }}</q-tooltip>
        </q-btn>
        <q-btn class="q-ml-sm" dense flat round icon="code" @click="expanded = !expanded">
          <q-tooltip>{{ t('doc.viewSource') }}</q-tooltip>
        </q-btn>
      </div>
    </q-toolbar>
    <q-separator :class="`${prefixCls}__separator`"></q-separator>
    <q-slide-transition>
      <div v-show="expanded">
        <q-tabs
          :class="`${prefixCls}__tabs`"
          v-model="currentTab"
          align="left"
          :active-color="dark ? 'amber' : void 0"
          :indicator-color="dark ? 'amber' : 'brand-primary'"
          dense
          :breakpoint="0"
        >
          <q-tab v-for="tab in def.tabs" :key="`tab-${tab}`" :name="tab" :label="tab"></q-tab>
        </q-tabs>
        <q-separator></q-separator>
        <q-tab-panels class="text-grey-3 text-weight-regular" v-model="currentTab" animated>
          <q-tab-panel class="q-pa-none" v-for="tab in def.tabs" :key="`pane-${tab}`" :name="tab">
            <DocCode lang="markup" :code="def.parts[tab]"></DocCode>
          </q-tab-panel>
        </q-tab-panels>
        <q-separator :class="`${prefixCls}__separator`"></q-separator>
      </div>
    </q-slide-transition>
    <div class="row">
      <q-linear-progress v-if="loading" color="brand-primary" indeterminate></q-linear-progress>
      <component class="col" v-else :is="component" :class="componentClass"></component>
    </div>
    <DocCodepen v-if="!loading" ref="codepen" :title="title"></DocCodepen>
  </q-card>
</template>

<script>
import { markRaw } from 'vue'
import { defineComponent, ref, reactive, computed, onMounted } from 'vue'
import { openURL } from 'quasar'
import { fabGithub, fabCodepen } from '@quasar/extras/fontawesome-v5'
// import { useLocale } from '../hooks/useLocale'

import CardTitle from './components/CardTitle.vue'
import DocCode from './DocCode.vue'
import DocCodepen from './DocCodepen.vue'

const props = {
  title: String,
  file: String,
  noEdit: {
    type: Boolean,
    default: true,
  },
  noGit: {
    type: Boolean,
    default: true,
  },
  dark: Boolean,
  scrollable: Boolean,
  overflow: Boolean,
}
export default defineComponent({
  name: 'DocExample',
  props: props,
  components: {
    CardTitle,
    DocCode,
    DocCodepen,
  },
  setup(props) {
    const prefixCls = ref('doc-example')
    const loading = ref(true)
    const expanded = ref(false)
    const currentTab = ref('template')
    const def = reactive({
      tabs: [],
      parts: {},
    })
    const component = ref(null)
    const codepen = ref()

    function parseTemplate(target, template) {
      const string = `(<${target}(.*)?>[\\w\\W]*<\\/${target}>)`,
        regex = new RegExp(string, 'g'),
        parsed = regex.exec(template) || []

      return parsed[1] || ''
    }

    function parseComponent(comp) {
      const template = parseTemplate('template', comp),
        script = parseTemplate('script', comp),
        style = parseTemplate('style', comp)

      def.parts = {
        template,
        script,
        style,
      }

      def.tabs = ['template', 'script', 'style'].filter((type) => def.parts[type])
    }

    const componentClass = computed(() => {
      return [
        `${prefixCls}__content`,
        props.scrollable === true
          ? `${prefixCls}__content--scrollable scroll-y`
          : props.overflow === true
          ? 'overflow-auto'
          : '',
      ]
    })

    const classes = computed(() => {
      return [prefixCls, props.dark === true ? `${prefixCls}--dark` : '']
    })

    onMounted(() => {
      Promise.all([
        import(
          /* webpackChunkName: "demo" */
          /* webpackMode: "lazy-once" */
          'examples/' + props.file + '.vue'
        ).then((comp) => {
          component.value = markRaw(comp.default)
        }),

        import(
          /* webpackChunkName: "demo-source" */
          /* webpackMode: "lazy-once" */
          '!raw-loader!examples/' + props.file + '.vue'
        ).then((comp) => {
          parseComponent(comp.default)
        }),
      ]).then(() => {
        loading.value = false
      })
    })

    // const { t } = useLocale()
    function t(t) {
      return t
    }

    return {
      prefixCls,
      classes,
      fabGithub,
      fabCodepen,
      loading,
      expanded,
      currentTab,
      def,
      codepen,
      component,
      componentClass,
      openGitHub() {
        openURL(`https://github.com/quasarframework/quasar/tree/dev/docs/src/examples/${props.file}.vue`)
      },
      openCodepen() {
        codepen.value.open(def.parts)
      },
      t,
    }
  },
})
</script>
