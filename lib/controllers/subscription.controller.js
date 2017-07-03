const Subscription = require('../models').Subscription;

module.exports = {
  post(req, res, next){
    const subscription = new Subscription({
      email: req.body.email,
      timestamp: new Date()
    });

    subscription.save().then((s) => {
      res.json(s);
      next();
    }).catch(next);
  }
};
