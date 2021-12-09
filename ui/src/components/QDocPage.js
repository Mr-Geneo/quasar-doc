import { defineComponent, h, ref, computed, watch, unref } from 'vue'
import { QPage, QBadge } from 'quasar'

export default defineComponent({
  name: 'QDocPage',
  props: {
    title: {
      type: String,
      required: true,
    },
    badge: String,
  },
  setup(props, { slots }) {
    function _hTitle() {
      if (!props.title) {
        return null
      }
      return h(
        'div',
        {
          class: 'col doc-heading',
        },
        [
          h('span', {}, props.title),
          h(QBadge, {
            class: 'q-ml-sm doc-page__badge',
            color: 'brand-primary',
            label: props.badge,
          }),
        ]
      )
    }
    return () =>
      h(QPage, { class: 'doc-page' }, [
        h('div', { class: 'items-start doc-h1 row no-wrap' }, _hTitle),
        () => {
          slots.default !== void 0 ? slots.default() : null
        },
      ])
  },
})
