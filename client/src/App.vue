<template>
  <div>
    <clearbreathe-header></clearbreathe-header>

    <clearbreathe-photo-slides></clearbreathe-photo-slides>
    <clearbreathe-intro-paragraph></clearbreathe-intro-paragraph>
    <clearbreathe-subscription-form></clearbreathe-subscription-form>

    <clearbreathe-footer></clearbreathe-footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
}
</script>

<style lang="scss">
/*!
 * Bootstrap v4.0.0-alpha.6 (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors
 * Copyright 2011-2017 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

// Core variables and mixins
@import "~bootstrap/scss/mixins";
@import "./custom";

// Reset and dependencies
@import "~bootstrap/scss/normalize";
@import "~bootstrap/scss/print";

// Core CSS
@import "~bootstrap/scss/reboot";
@import "~bootstrap/scss/type";
@import "~bootstrap/scss/images";
@import "~bootstrap/scss/code";
@import "~bootstrap/scss/grid";
@import "~bootstrap/scss/tables";
@import "~bootstrap/scss/forms";
@import "~bootstrap/scss/buttons";

// Components
@import "~bootstrap/scss/transitions";
@import "~bootstrap/scss/dropdown";
@import "~bootstrap/scss/button-group";
@import "~bootstrap/scss/input-group";
@import "~bootstrap/scss/custom-forms";
@import "~bootstrap/scss/nav";
@import "~bootstrap/scss/navbar";
@import "~bootstrap/scss/card";
@import "~bootstrap/scss/breadcrumb";
@import "~bootstrap/scss/pagination";
@import "~bootstrap/scss/badge";
@import "~bootstrap/scss/jumbotron";
@import "~bootstrap/scss/alert";
@import "~bootstrap/scss/progress";
@import "~bootstrap/scss/media";
@import "~bootstrap/scss/list-group";
@import "~bootstrap/scss/responsive-embed";
@import "~bootstrap/scss/close";

// Components w/ JavaScript
@import "~bootstrap/scss/modal";
@import "~bootstrap/scss/tooltip";
@import "~bootstrap/scss/popover";
@import "~bootstrap/scss/carousel";

// Utility classes
@import "~bootstrap/scss/utilities";
</style>

<style lang="scss">
/* some global css here */
button, input[type="button"], input[type="submit"], select, a {
  cursor: pointer
}

</style>
