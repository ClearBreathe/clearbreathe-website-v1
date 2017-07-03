module.exports = function(err, req, res, next){
  if(!err) return next();

  switch(err.name){
    case 'ValidationError':
      return require('./ValidationError.handler')(err, req, res, next);
    default:
      res.status(500).end('Somthing is wrong.');
      return next(err);
  };
};
