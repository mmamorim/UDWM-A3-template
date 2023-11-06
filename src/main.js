import { createApp } from 'vue'
import 'virtual:windi.css'
import './styles/fonts.css'

import App from './App.vue'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/pt-BR'
import { Icon } from "@iconify/vue"

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'


const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  lang: quasarLang,
})

myApp.component('Icon', Icon)
myApp.mount('#app')