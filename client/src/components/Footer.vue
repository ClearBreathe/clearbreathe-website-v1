<template>
  <footer class="pb-4 pt-4 mt-4">
    <div class="container">
      <p>
        <a :href="facebook_link" target="_blank">
          <layout-icon name="facebook-official" size="md"></layout-icon>
        </a>
        <a :href="twitter_link" target="_blank" class="ml-2">
          <layout-icon name="twitter" size="md"></layout-icon>
        </a>
      </p>

      <p>
        &copy; 2017 AirBreathe Limited | All Rights Reserved
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  data(){
    return {
      facebook_link: 'https://facebook.com/airbreathemask',
      twitter_link: 'https://twitter.com/AirBreatheMask',
    }
  }
}
</script>

<style scoped>
footer{
  background-color: #eee;  
}
</style>
