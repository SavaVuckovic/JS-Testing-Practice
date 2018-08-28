const analyze = require('./arrayAnalysis');

test('contains correct average value', () => {
  expect(analyze([0, 1, 2, 3, 4, 5, 6]).average).toBe(3);
});

test('contains correct min value', () => {
  expect(analyze([99, 1, 2, 3, 4, 5, 6]).min).toBe(1);
});

test('contains correct max value', () => {
  expect(analyze([0, 1, 2, 3, 4, 6, 5]).max).toBe(6);
});

test('contains correct length value', () => {
  expect(analyze([0, 1, 2, 3, 4, 5, 6]).length).toBe(7);
});
