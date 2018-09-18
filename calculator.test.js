const Calculator = require('./calculator');
const calculator = new Calculator();

test('performs add operation', () => {
  expect(calculator.add(20, 10)).toBe(30);
});

test('adds negative number correctly', () => {
  expect(calculator.add(20, -5)).toBe(15);
});

test('performs subtract operation', () => {
  expect(calculator.subtract(20, 10)).toBe(10);
});

test('subtracts negative number correctly', () => {
  expect(calculator.subtract(20, -10)).toBe(30);
});

test('subtracts larger numbers and gives negative result', () => {
  expect(calculator.subtract(10, 20)).toBe(-10);
});

test('performs multiply operation', () => {
  expect(calculator.multiply(20, 10)).toBe(200);
});

test('multiplies by negative number', () => {
  expect(calculator.multiply(20, -10)).toBe(-200);
});

test('multiplies by zero', () => {
  expect(calculator.multiply(20, 0)).toBe(0);
});

test('performs divide operation', () => {
  expect(calculator.divide(20, 10)).toBe(2);
});

test('prevents zero division', () => {
  const tryZeroDivision = () => calculator.divide(20, 0);
  expect(tryZeroDivision).toThrowError('You cannot perform division by zero!');
});
