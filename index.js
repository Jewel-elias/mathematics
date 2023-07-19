function sumTwo(x, y) {
  return x + y;
}
exports.sumTwo = sumTwo;

function multiplyTwo(x, y) {
  return x * y;
}
exports.multiplyTwo = multiplyTwo;

function maxNum(x, y) {
  return Math.max(x,y);
}
exports.maxNum = maxNum;

function minNum(x, y) {
  return Math.min(x,y);
}
exports.minNum = minNum;

function compareTwo(x, y) {
  if (x > y) return `(${x}) is bigger than (${y})`;
  else if (x === y) return `(${x}) is equal to (${y})`;
  else if (x < y) return `(${x}) is less than (${y})`;
  return `some error happened, make sure that the params are numbers`;
}
exports.compareTwo = compareTwo;
