import './js/' // JS - ./js/index.js
import './scss/main.scss' // SCSS
import './css/main.css' // CSS (example)

window.Vue = require('vue') // Vue.js
import store from './store'
Vue.component('example-component', require('./components/Example.vue').default) // Vue components (for use in html)

// Bootstrap (example)
// import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

const app = new Vue({ // Vue init
  data () {
    return {
      component: false,
    }
  },
  store,
  el: '#app'
})
