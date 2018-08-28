function analyze(array) {
  return {
    average: calculateAverage(array),
    min: calculateMin(array),
    max: calculateMax(array),
    length: calculateLength(array)
  };
}

function calculateAverage(array) {
  return array.reduce((current, next) => current + next) / array.length;
}

function calculateMin(array) {
  let min = array[0];
  array.forEach(num => {
    if (num < min) {
      min = num;
    }
  });
  return min;
}

function calculateMax(array) {
  let max = array[0];
  array.forEach(num => {
    if (num > max) {
      max = num;
    }
  });
  return max;
}

function calculateLength(array) {
  let len = 0;
  array.forEach(e => len += 1);
  return len;
}

module.exports = analyze;
