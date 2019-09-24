function valid() {
  let randomBoolean = Math.random();
  if (randomBoolean >= .5){
    return true;
  } else{
    return false;
  }
}

module.exports = valid;
