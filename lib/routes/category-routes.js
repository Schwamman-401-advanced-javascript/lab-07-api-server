const valid = require('../middleware/random-boolean');

let db = [];

const postCategory = (req, res, next) => {
  let record = req.body;
  record.id = Math.random();
  record.valid = valid();
  if (record.valid === true) {
    db.push(record);
    res.json(record);
    console.log(
      'I actually know what a jpeg is. But do you have a picture of a god dang hot dog?'
    );
    next();
  } else {
    throw `Invalid record`;
  }
};

const getCategory = (req, res, next) => {
  let count = db.length;
  let results = db;
  res.json({ count, results });
};

module.exports = exports = { postCategory, getCategory };
