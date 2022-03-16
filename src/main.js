import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/index.css'
import 'animate.css'

// --- vee-validate v4 ---
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import tw from '@vee-validate/i18n/dist/locale/zh_TW.json';

// Globally add all vee-validate rules
Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule]);
});

// Register locale message
configure({
  generateMessage: localize({ zh_TW: tw }),
  validateOnInput: true,
})

setLocale('zh_TW')


const app = createApp(App)
app.use(router)
app.use(store)
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)
app.mount('#app')
