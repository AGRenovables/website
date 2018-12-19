import Vue from 'vue'
import App from './App.vue'
import AtComponents from 'at-ui'
import i18next from 'i18next';
import VueI18Next from '@panter/vue-i18next';
import enUS from './locales/en.json';

import 'at-ui-style'

Vue.use(AtComponents)
Vue.use(VueI18Next)

const locales = {
  en: enUS
};

i18next.init({
  lng: 'en',
  resources: {
    en: { translation: locales.en },
  },
});

Vue.config.productionTip = false

const i18n = new VueI18Next(i18next);
new Vue({
  render: h => h(App),
  i18n: i18n,
}).$mount('#app')
