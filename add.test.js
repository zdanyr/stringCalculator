const add = require('./add')

test('Empty string should return zero ', () => {
    const result = add("");
    expect(result).toBe(0);
});