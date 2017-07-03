const Subscription = require('../models').Subscription;

module.exports = {
  async post(req, res){
    const subscription = new Subscription({
      email: req.body.email,
      timestamp: new Date()
    });

    subscription.save()
      .then(res.json.bind(res))
      .catch(res.error.bind(res));
  }
};
