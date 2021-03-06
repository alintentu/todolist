import Vue from 'vue'
window.Vue = Vue
require('./bootstrap');

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlusSquare, faTrash)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('app', require('./vue/app.vue').default);



const App = new Vue({
    el: '#app',
    // components: { App }
});