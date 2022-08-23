import { createApp } from 'vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import {
  faEarthAmerica, faStar, faNewspaper, faFilterCircleDollar, faWaveSquare,
} from '@fortawesome/free-solid-svg-icons';
import router from './router';
import App from './App.vue';

/* add icons to the library */
library.add(faEarthAmerica, faStar, faNewspaper, faFilterCircleDollar, faWaveSquare);

createApp(App)
  /* add font awesome icon component */
  .component('fa', FontAwesomeIcon)
  .use(router)
  .mount('#app');
