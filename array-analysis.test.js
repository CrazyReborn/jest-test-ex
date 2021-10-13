const analyze = require('./array-analysis');

const object = analyze([1,8,3,4,2,6]);

test('Write a function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.', () => {
    expect(object.average).toBe(4);
    expect(object.min).toBe(1);
    expect(object.max).toBe(8);
    expect(object.length).toBe(6);
})