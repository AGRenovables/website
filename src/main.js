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

import projects_enUS from './locales/projects/en.json';
import projects_caES from './locales/projects/ca.json';
import projects_esES from './locales/projects/es.json';

import App from './App.vue'


Vue.use(AtComponents)
Vue.use(VueI18Next)
Vue.use(Router)


const router = new Router({
  routes // short for `routes: routes`
})


const i18n_common = {
  en: enUS,
  ca: caES,
  es: esES
};

const i18n_projects = {
  en: projects_enUS,
  ca: projects_caES,
  es: projects_esES
};

i18next.init({
  lng: 'es',
  resources: {
    en: { common: i18n_common.en, projects: i18n_projects.en },
    es: { common: i18n_common.es, projects: i18n_projects.es },
    ca: { common: i18n_common.ca, projects: i18n_projects.ca },
  },
});

Vue.config.productionTip = false

const i18n = new VueI18Next(i18next);
new Vue({
  router,
  render: h => h(App),
  i18nOptions: { namespaces: ["common","projects"] },
  i18n: i18n
}).$mount('#app')