const caesar = require('./caesar');

test('rotates a lowercase letter correctly', () => {
  expect(caesar('a', 5)).toBe('f');
});

test('rotates an uppercase letter correctly', () => {
  expect(caesar('A', 7)).toBe('H');
});

test('wraps lowercase letters', () => {
  expect(caesar('z', 1)).toBe('a');
});

test('wraps uppercase letters', () => {
  expect(caesar('Z', 2)).toBe('B');
});

test('rotates words correctly', () => {
  expect(caesar('example', 13)).toBe('rknzcyr');
});

test('doesn\'t affect spaces and punctuation', () => {
  expect(caesar('Example sentence! Another one? Ok.', 21)).toBe('Zsvhkgz nziozixz! Vijoczm jiz? Jf.');
});

test('prevents empty string from being passed in', () => {
  const tryEmptyString = () => caesar('', 5);
  expect(tryEmptyString).toThrowError('Empty string cannot be encoded!');
});
