<template>
  <form @submit.prevent="(e) => $emit('submit', e)" :class="{'form-inline': inline}">
    <slot></slot>
  </form>
</template>

<script>
export default {
  props: {
    'inline': {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style>
</style>
