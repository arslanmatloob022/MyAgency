
import { _replaceAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {},
  "__swiper": {
    "bundled": true
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    _replaceAppConfig(newModule.default)
  })
}



export default /*@__PURE__*/ defuFn(inlineConfig)
