const capitalize = require('./capitalize')

test('capitilize first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
})