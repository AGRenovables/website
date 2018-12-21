import Vue from 'vue'
import Router from 'vue-router'
import AtComponents from 'at-ui'
import 'at-ui-style'

import i18next from 'i18next';
import VueI18Next from '@panter/vue-i18next';

import routes from './routes';

import enUS from './locales/en.json';
import caES from './locales/ca.json';
import esES from './locales/es.json';

import App from './App.vue'


Vue.use(AtComponents)
Vue.use(VueI18Next)
Vue.use(Router)


const router = new Router({
  routes // short for `routes: routes`
})


const locales = {
  es: enUS,
  ca: caES,
  en: esES
};

i18next.init({
  lng: 'es',
  resources: {
    en: { translation: locales.en },
    es: { translation: locales.es },
    ca: { translation: locales.ca },
  },
});

Vue.config.productionTip = false

const i18n = new VueI18Next(i18next);
new Vue({
  router,
  render: h => h(App),
  i18n: i18n
}).$mount('#app')
