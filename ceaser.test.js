const ceaser = require('./ceaser')

test('ceaser cipher', () => {
    expect(ceaser('hello world')).toBe('gdkkn vnqkc');
})

test('ceaser cipher but with punct', () => {
    expect(ceaser(',.[hello')).toBe(',.[gdkkn');
})