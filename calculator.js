class Calculator {
  add(x, y) {
    return x + y;
  }

  subtract(x, y) {
    return x - y;
  }

  multiply(x, y) {
    return x * y;
  }

  divide(x, y) {
    if (x === 0 || y === 0) {
      throw new Error('You cannot perform division by zero!');
    }
    return x / y;
  }
}

module.exports = Calculator;
