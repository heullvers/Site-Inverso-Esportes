import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
import 'popper.js';
import './assets/app.scss';

Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.component('Home', require('./views/Home.vue').default);
Vue.component('Header', require('./components/Header.vue').default);
Vue.component('Products', require('./components/Products.vue').default);
Vue.component('AboutUs', require('./components/AboutUs.vue').default);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
