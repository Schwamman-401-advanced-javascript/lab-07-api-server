module.exports = (req, res, next) => {
  let timestamp = new Date();

  req.requestTime = timestamp;

  next();
};
