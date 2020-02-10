const add = require('./add')

test('Empty string should return zero ', () => {
    const result = add("");
    expect(result).toBe(0);
});

test('The single number should return the input number ', () => {
    const result = add("1");
    expect(result).toBe(1);
});

test('Comma separator numbers should return sum ', () => {
    const result = add("1,2")
    expect(result).toBe(3);
    
});