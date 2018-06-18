<template>
  <div id="app" class="container">
    <img src="./assets/logo.png">
    <h1 class="title is-4">Live Branding with Styled-Components in Vue</h1>
    <hr>
    <div class="columns">
      <div class="column">
        <color-picker style="width: 95%" class="column"/>
      </div>
      <div class="column is-three-quarters">
        <brand-title>Examples of Branded Components</brand-title>
        <brand-btn>Branded Button</brand-btn>
        <brand-btn>Another Branded Button</brand-btn>
      </div>
    </div>
  </div>
</template>

<script>
import 'bulma/css/bulma.css';
import ColorPicker from './components/ColorPicker';

export default {
  name: 'app',
  components: {
    ColorPicker,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 30px;
}
</style>
