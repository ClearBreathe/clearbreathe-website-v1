module.exports = (req, res, next) => {
  res.error = (...args) => res.status(400).json(...args);
  next();
};
