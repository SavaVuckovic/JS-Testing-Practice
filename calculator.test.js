const Calculator = require('./calculator');
const calculator = new Calculator();

test('performs add operation', () => {
  expect(calculator.add(20, 10)).toBe(30);
});

test('performs subtract operation', () => {
  expect(calculator.subtract(20, 10)).toBe(10);
});

test('performs multiply operation', () => {
  expect(calculator.multiply(20, 10)).toBe(200);
});

test('performs divide operation', () => {
  expect(calculator.divide(20, 10)).toBe(2);
});

test('handles zero division error', () => {
  function tryZeroDivision() {
    calculator.divide(20, 0);
  }
  expect(tryZeroDivision).toThrowError('You cannot perform division by zero!');
});
