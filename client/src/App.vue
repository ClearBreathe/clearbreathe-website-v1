<template>
  <div>
    <clearbreathe-header></clearbreathe-header>
    <div class="container">
      <clearbreathe-intro-video></clearbreathe-intro-video>
      <clearbreathe-subscription-form></clearbreathe-subscription-form>
    </div>
  </div>
</template>

<script>
import { requireComponent } from './webpack/require';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
}
</script>

<style>
</style>
