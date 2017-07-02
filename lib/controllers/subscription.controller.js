const Subscriber = require('../models').Subscriber;

module.exports = {
  post(req, res){
    console.log(req.body.email);    
  }
};
