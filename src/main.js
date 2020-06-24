import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import VueGraph from 'vue-graph';
import vueMoment from 'vue-moment';
import titleMixin from './mixins/titleMixin'

Vue.mixin(titleMixin);
Vue.config.productionTip = false;
Vue.use(VueGraph);
Vue.use(vueMoment);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
