import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar, Notify } from 'quasar'
import quasarUserOptions from './quasar-user-options'

createApp(App).use(Quasar,{plugins:{Notify}, config:{ notify: { /* look at QuasarConfOptions from the API card */ }}}, quasarUserOptions).use(router).mount('#app')
