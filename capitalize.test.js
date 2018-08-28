const capitalize = require('./capitalize');

test('capitalize the string', () => {
  expect(capitalize('example')).toBe('Example');
});

test('capitalize the string with multiple uppercase characters', () => {
  expect(capitalize('eXaMpLe')).toBe('Example');
});
