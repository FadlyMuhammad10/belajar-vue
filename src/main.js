import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import CompositionComponent from './components/CompositionComponent.vue'
import OptionsComponent from './components/OptionsComponent.vue'

const app = createApp(App)

// registrasi global component disarankan untuk component yang sering digunakan
app
  .component('CompositionComponent', CompositionComponent)
  .component('OptionsComponent', OptionsComponent)

// createApp(App).mount('#app')
app.mount('#app')
