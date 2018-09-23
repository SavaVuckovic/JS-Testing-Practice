import analyze from './arrayAnalysis';

test('finds correct average value', () => {
  expect(analyze([0, 1, 2, 3, 4, 5, 6]).average).toBe(3);
});

test('average can also be negative', () => {
  expect(analyze([0, -1, -2, -3, -4, -5, -6]).average).toBe(-3);
});

test('finds correct min value', () => {
  expect(analyze([99, 1, 2, 3, 4, 5, 6]).min).toBe(1);
});

test('min value can also be negative', () => {
  expect(analyze([22, -11, 0, 11, -22]).min).toBe(-22);
});

test('finds correct max value', () => {
  expect(analyze([0, 1, 2, 3, 4, 6, 5]).max).toBe(6);
});

test('max value can be negative if all values are negative', () => {
  expect(analyze([-1, -2, -3, -4, -6, -5]).max).toBe(-1);
});

test('finds correct length value', () => {
  expect(analyze([0, 1, 2, 3, 4, 5, 6]).length).toBe(7);
});

test('prevents empty array from being passed in', () => {
  const tryEmptyArray = () => analyze([]);
  expect(tryEmptyArray).toThrowError('Array cannot be empty!');
});
