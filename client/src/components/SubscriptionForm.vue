<template>
  <div class="d-flex flex-column align-items-center pt-5 pb-5 container-fluid">
    <h6>Sign up here to receive updates and be the first to hear our launch!</h6>
    <layout-form @submit="subscribe" inline>
      <layout-input v-model="email" type="email" placeholder="name@example.com" required></layout-input> 
      <layout-input type="submit">Subscribe</layout-input> 
    </layout-form>
    <layout-alert type="success" class="mt-3" v-if="successful">You are added to the mailing list!</layout-alert>
    <layout-alert type="danger" class="mt-3" v-if="failed">Opps! Something went wrong... Please try again!</layout-alert>
  </div>
</template>

<script>
import subscriptionsService from '../services/subscriptions.service';
export default { 
  data(){
    return {
      successful: false,
      failed: false,
      email: '',
    };
  },
  methods: {
    subscribe(){
      const succeed = () => {
        this.successful = true;
        this.failed = false;
      }
      const fail = () => {
        this.successful = false;
        this.failed = true;
      }
      subscriptionsService.subscribe(this.email)
        .then(succeed)
        .catch(fail);
    }
  }
}
</script>

<style scoped>
</style>
