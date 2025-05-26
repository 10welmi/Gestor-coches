import { crearViewModel } from './viewmodel.js';

const { createApp } = Vue;

createApp({
  setup() {
    return crearViewModel();
  }
}).mount('#app');
