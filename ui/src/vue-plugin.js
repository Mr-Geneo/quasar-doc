import DocCode from './components/DocCode.vue'
// import DocCodepen from './components/DocCodepen.vue'
import DocPage from './components/DocPage.vue'
import DocExample from './components/DocExample.vue'

const version = __UI_VERSION__

function install(app) {
  app.component(DocCode.name, DocCode)
  // app.component(DocCodepen.name, DocCodepen)
  app.component(DocExample.name, DocExample)
  app.component(DocPage.name, DocPage)
}

// export { version, DocPage, DocExample, DocCodepen, DocCode, install }
export { version, DocPage, DocExample, DocCode, install }
