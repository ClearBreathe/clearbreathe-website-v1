<template>
  <div class="col" :class="colClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['spans', 'xs-spans', 'sm-spans', 'md-spans', 'lg-spans', 'xl-spans'],
  data(){
    return {
      colClasses: [
        this['spans']? 'col-' + this['spans']: '',
        this['xs-spans']? 'col-xs-' + this['spans']: '',
        this['sm-spans']? 'col-sm-' + this['spans']: '',
        this['md-spans']? 'col-md-' + this['spans']: '',
        this['lg-spans']? 'col-lg-' + this['spans']: '',
        this['xl-spans']? 'col-xl-' + this['spans']: '',
      ],
    }
  },
}
</script>

<style>
</style>
