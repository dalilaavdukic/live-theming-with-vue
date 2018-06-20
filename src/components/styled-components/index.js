import Vue from 'vue';

import ThemedButton from './ThemedButton';
import ThemedTitle from './ThemedTitle';

export const themedButton = Vue.component('themed-btn', {
  components: { ThemedButton },
  template: `<ThemedButton class="button" :color="$store.getters['themeColor']"><slot></slot></ThemedButton>`,
});

export const themedTitle = Vue.component('themed-title', {
  components: { ThemedTitle },
  template: `<ThemedTitle :color="$store.getters['themeColor']"><slot></slot></ThemedTitle>`,
});