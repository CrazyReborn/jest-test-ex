const calculator = require('./calculator');

test('testing', () => {
    expect(calculator.add(2, 2)).toBe(4);
    expect(calculator.sub(3, 2)).toBe(1);
    expect(calculator.mult(4, 2)).toBe(8);
    expect(calculator.div(4, 2)).toBe(2);
});