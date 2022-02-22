import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import vSelect from "vue-select";
import 'vue-select/dist/vue-select.css';


import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(vSelect).mount('#app') /*  */
