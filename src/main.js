import { createApp, defineAsyncComponent } from 'vue';

import App from './App.vue';
import router from './router.js';
import store from './store/index.js';
import BaseCard from './components/ui/BaseCard.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';

const BaseDialog = defineAsyncComponent(() =>
  import('./components/ui/BaseDialog.vue')
);

createApp(App)
  .use(router)
  .use(store)
  .component('base-card', BaseCard)
  .component('base-button', BaseButton)
  .component('base-badge', BaseBadge)
  .component('base-spinner', BaseSpinner)
  .component('base-dialog', BaseDialog)
  .mount('#app');
