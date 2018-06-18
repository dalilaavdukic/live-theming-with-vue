import Vue from 'vue';

import BrandButton from './BrandButton';
import BrandTitle from './BrandTitle';

export const brandButton = Vue.component('brand-btn', {
  components: { BrandButton },
  template: `<BrandButton class="button" :color="$store.getters['brandColor']"><slot></slot></BrandButton>`,
});

export const brandTitle = Vue.component('brand-title', {
  components: { BrandTitle },
  template: `<BrandTitle :color="$store.getters['brandColor']"><slot></slot></BrandTitle>`,
});