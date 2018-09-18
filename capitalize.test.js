const capitalize = require('./capitalize');

test('capitalize the string', () => {
  expect(capitalize('example')).toBe('Example');
});

test('capitalize the string with multiple uppercase characters', () => {
  expect(capitalize('eXaMpLe')).toBe('Example');
});

test('doesn\'t modify already capitalized string', () => {
  expect(capitalize('Example')).toBe('Example');
});

test('Doesn\'t affect punctuation', () => {
  expect(capitalize('example sentence...')).toBe('Example sentence...');
});
