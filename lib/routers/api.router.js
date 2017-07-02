const router = require('express').Router();

const controllers = require('../controllers');

router.post('/subscription', controllers.subscription.post);

module.exports = router;
