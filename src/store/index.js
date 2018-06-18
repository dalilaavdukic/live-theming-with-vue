import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// initial state, whole reseller portal
const state = {
  brandColor: '#41B883'
};
// mutations
const mutations = {
  setBrandColor(state, color) {
    state.brandColor = color;
  }
};

// getters
const getters = {
  brandColor: state => state.brandColor,
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
});