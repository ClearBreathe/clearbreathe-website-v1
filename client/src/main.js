import Vue from 'vue';
import App from './App.vue';

import { requireLayout, requireComponent } from './webpack/require';

// register the layout components
const layout_components = [
  'Alert',
  'grid/Row',
  'grid/Col',
  'form/Form',
  'form/Input',
];
layout_components.forEach(path => {
  const name = path.substring(path.lastIndexOf('/')+1);
  Vue.component('layout' + name, requireLayout(path));
});

// register the app components
const clearbreathe_components = [
  'Header',
  'IntroVideo',
  'SubscriptionForm',
];
clearbreathe_components.forEach(path => {
  const name = path.substring(path.lastIndexOf('/')+1);
  Vue.component('clearbreathe' + name, requireComponent(path));
});

// initiate the app
new Vue({
  el: '#app',
  render: h => h(App)
})
