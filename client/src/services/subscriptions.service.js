import apiService from './api.service';

class SubscriptionService{
  subscribe(email){
    return apiService.post('/subscription', {
      body: {email}
    });
  }
}

export default new SubscriptionService();
