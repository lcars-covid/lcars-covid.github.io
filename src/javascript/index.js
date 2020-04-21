import Vue from 'vue';
import VueFilterDateFormat from 'vue-filter-date-format';
import numeral from 'numeral';
import numFormat from 'vue-filter-number-format';
import BootstrapVue from 'bootstrap-vue';
import VueGraph from 'vue-graph';
import App from '../App.vue';
import VuePaginate from 'vue-paginate';
import '../sass/styles.scss';
 
Vue.use(VueGraph);
Vue.filter('numFormat', numFormat(numeral));
Vue.use(VueFilterDateFormat);
Vue.use(VuePaginate);
Vue.use(BootstrapVue);

new Vue({
    el:'#app',
    render: h => h(App)
})
