import { createApp } from 'vue';
import Router from './router';
import App from './App.vue';
import store from './store/index.js';
import baseCard from './components/ui/baseCard.vue';
import baseBadge from './components/ui/baseBadge.vue';
import baseButton from './components/ui/baseButton.vue';

const app = createApp(App);

app.use(Router);
app.use(store);
app.component('base-card', baseCard);
app.component('base-button', baseButton);
app.component('base-badge', baseBadge);

app.mount('#app');
