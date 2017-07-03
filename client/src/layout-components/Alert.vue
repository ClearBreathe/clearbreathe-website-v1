<template>
  <div :class="['alert-' + type]" class="alert" role="alert">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    'type': {
      type: String,
      default: 'success',
    },
  },
}
</script>

<style>
</style>
