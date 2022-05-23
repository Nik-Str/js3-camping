import 'vuetify/styles';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import VueGoogleMaps from '@fawmi/vue-google-maps';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);
loadFonts();

createApp(App)
  .component('fa', FontAwesomeIcon)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(VueGoogleMaps, {
    load: {
      key: process.env.VUE_APP_MAPS,
    },
  })
  .mount('#app');
