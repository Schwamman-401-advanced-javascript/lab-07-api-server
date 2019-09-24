module.exports = (message = 'You forgot a message') => {
  return (req, res, next) => {
    console.log(message, req.path, req.method, req.requestTime);
    next();
  };
};
