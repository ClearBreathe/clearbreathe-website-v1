<template>
  <i :class="['fa', 'fa-'+name, faSize]" aria-hidden="true"></i>
</template>

<script>
function toFASize(size){
  return ({
    'xs': '',
    'sm': 'fa-lg',
    'md': 'fa-2x',
    'lg': 'fa-3x',
    'xl': 'fa-4x',
    'xxl': 'fa-5x',
  })[size];
};
export default {
  props: {
    'name': {
      type: String,
      required: true,
    },
    'size': {
      type: String,
      default: 'xs',
    }
  },
  data(){
    return {
      faSize: toFASize(this.size), 
    };
  }
}
</script>

<style>
</style>
