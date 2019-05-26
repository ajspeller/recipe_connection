module.exports.addNum = (x, y) => {
  return x + y;
};

exports.subNum = (x, y) => {
  return x - y;
};

module.exports.multiply = (x, y) => {
  return x * y;
};

module.exports.divide = (x, y) => {
  return x / y;
};

module.exports.negate = (x) => {
  return -x;
};

module.exports.reciprocal = (x) => {
  return 1 / x;
};

module.exports = {
  add: (x, y) => x + y,
  sub: (x, y) => x - y,
  mult: (x, y) => x * y,
  div: (x, y) => x / y,
  neg: (x, y) => -x,
  recip: (x, y) => 1 / x
};
