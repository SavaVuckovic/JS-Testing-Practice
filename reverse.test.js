const reverse = require('./reverse');

test('reverse the string', () => {
  expect(reverse('example')).toBe('elpmaxe');
});
