const Subscription = require('../models').Subscription;

module.exports = {
  async post(req, res){
    const subscription = new Subscription({
      email: req.body.email,
      timestamp: new Date()
    });

    try{
      var s = await subscription.save();
      res.json(s);
    }catch(err){
      res.error(err);
    }
  }
};
