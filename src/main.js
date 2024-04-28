import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Router
import router from "./router/index.js";
import 'primevue/resources/themes/lara-dark-teal/theme.css';

// PrimeVue Components
import PrimeVue from 'primevue/config';

import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Row from "primevue/row";
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";

createApp(App)
    .use(router)
    .use(PrimeVue, { ripple: true })
    .component('pv-toolbar', Toolbar)
    .component('pv-button', Button)
    .mount('#app')
