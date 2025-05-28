import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import './style.css'
import { ObserveVisibility } from 'vue-observe-visibility'


const app = createApp(App)
app.directive('observe-visibility', ObserveVisibility)
app.use(router)
app.mount('#app')