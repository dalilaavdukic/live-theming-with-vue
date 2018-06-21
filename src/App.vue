<template>
  <div id="app">
    <div class="container">
      <img src="./assets/logo.png">
      <h1 class="title is-4">Live Theming with Styled-Components in Vue</h1>
      <hr>
      <div class="columns">
        <div class="column">
          <theme-picker class="column"/>
        </div>
        <div class="column is-three-quarters">
          <themed-title>Examples of Themed Components</themed-title>
          <themed-btn>Themed Button</themed-btn>
          <themed-btn>Another Themed Button</themed-btn>
        </div>
      </div>
    </div>
    <themed-footer>Made by Dalila Avdukic</themed-footer>
  </div>
</template>

<script>
import 'bulma/css/bulma.css';
import ThemePicker from './components/ThemePicker';

export default {
  name: 'app',
  components: {
    ThemePicker,
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
