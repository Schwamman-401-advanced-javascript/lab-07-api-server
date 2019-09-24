module.exports = (status) => {

  return (err, req, res, next) => {
    console.log(err);
    res.status(status);

    res.send({
      message: err.toString(),
      status: status,
    });
    
    next();
  };
};
