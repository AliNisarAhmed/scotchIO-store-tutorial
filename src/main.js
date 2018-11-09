// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VeeValidate from 'vee-validate';
import Vuex from 'vuex';

import App from './App';
import router from './router';
import '../static/styles.css';
import store from './store'

library.add(faEdit);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VeeValidate);
Vue.use(Vuex);


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});


//https://scotch.io/courses/build-an-online-shop-with-vue/mutations