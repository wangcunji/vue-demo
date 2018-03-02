// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import store from './vuex/index';
import VueLazyComponent from "vue-lazy-component";

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(VueLazyComponent);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
