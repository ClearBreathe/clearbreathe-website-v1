<template>
  <div id="slide" class="text-center align-middle" :style="backgroundImg(imgs[current])">
  </div>
</template>

<script>
const req_slide = require.context('images/slide/');
const SLIDE_IMAGES = req_slide.keys();

export default {
  created(){
    setInterval(() => this.current = (this.current + 1) % this.imgs.length, 2500);
  },
  methods: {
    backgroundImg: (img) => ({
      'background-image': `url(${img})`,
      'background-color': 'white',
    }),
  },
  data(){
    return {
      imgs: SLIDE_IMAGES.map(req_slide),
      current: 0,
    };
  }
}
</script>

<style>
#slide{
  max-width: 100%;
  height: 30em;;
  background-size: cover;
  background-position: 50%;
  transition: 0.5s ease;
}
</style>
