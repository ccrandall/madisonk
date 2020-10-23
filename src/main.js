import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import App from './App.vue'

Vue.config.productionTip = false;

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faFacebook, faYoutube, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from './router'

// lookup icon imports here
// https://github.com/FortAwesome/Font-Awesome/tree/master/js-packages/%40fortawesome/free-brands-svg-icons
library.add(faTwitter, faInstagram, faFacebook, faYoutube, faChevronUp, faChevronDown, faTimes, faLinkedinIn);

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
