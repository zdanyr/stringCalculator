const add = require('./add')

test('Empty string should return zero ', () => {
    const result = add("");
    expect(result).toBe(0);
});

test.each`
   input   | expected
   ${"1,2\n3"} | ${6}
   ${"3\n5\n30,9"} | ${47}
`('returns $expected when $input is comma or break line separator', ({input, expected}) => {
    const result = add(input)
    expect(result).toBe(expected);
});

test.each`
   input   | expected
   ${"1"} | ${1}
   ${"1,2"} | ${3}
   ${"1,2,3"} | ${6}
`('returns $expected when $input is comma separator', ({input, expected}) => {
    const result = add(input)
    expect(result).toBe(expected);
});




