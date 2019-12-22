// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import VueResource from 'vue-resource'
Vue.use(VueResource);
import Validator from 'vue-validator'
Vue.use(Validator)
Vue.http.options.emulateJSON = true;
Vue.prototype.token = "c9417824296769475271a2a256b0826a_$1"



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
