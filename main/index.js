// import Vue from 'vue'
import App from 'VIEWS/app.vue'
import '../scss/index.scss'

import router from 'VVR/router'

// ie-ignore-s
window.testie = true
// ie-ignore-e


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
