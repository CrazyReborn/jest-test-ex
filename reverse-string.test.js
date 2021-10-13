const reversestring = require('./reverse-string')

test('reverse a string', () => {
    expect(reversestring('hello')).toBe('olleh');
})