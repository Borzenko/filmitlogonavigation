import Vue from 'vue';
import VueRouter from 'vue-router';
import jquery from 'jquery';
import App from './App.vue';
import './scss/app.scss';

window.$ = jquery;

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [{
    path: '/', component: App, name: 'app',
  }],
});

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
  install: (VueInstance) => {
    // eslint-disable-next-line no-param-reassign
    VueInstance.prototype.$jQuery = jquery; // you'll have this.$jQuery anywhere in your vue project
  },
}).$mount('#app');
