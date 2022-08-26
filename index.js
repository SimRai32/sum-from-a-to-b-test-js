
function sum(fromN, toN) {
  let total = 0;
  total += fromN;
  if (fromN === toN) {
    return total;
  }
  fromN++;
  return total + sum(fromN, toN);
}

module.exports = sum;
