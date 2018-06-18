<template>
  <chrome-color-picker :value ="brandColor" @input="setBrandColor($event.hex)" :disableAlpha="true"/>
</template>

<script>
import { Chrome } from 'vue-color';
import { mapGetters, mapMutations } from 'vuex';

export default {
  components: {
    'chrome-color-picker': Chrome,
  },
  computed: {
    ...mapGetters([
      'brandColor'
    ]),
  },
  methods: {
    ...mapMutations([
      'setBrandColor'
    ]),
  },
};
</script>

<style>

</style>
