const { add, sum } = require('./add');

test('Empty string should return zero ', () => {
  const result = add('');
  expect(result).toBe(0);
});

test.each`
  input           | expected
  ${'1,2\n3'}     | ${6}
  ${'3\n5\n30,9'} | ${47}
`(
  'returns $expected when $input is comma or break line separator',
  ({ input, expected }) => {
    const result = add(input);
    expect(result).toBe(expected);
  },
);

test('should support different delimiters', () => {
  const input = '//;\n1;2';
  const result = add(input);
  expect(result).toBe(3);
});

test.each`
  input      | expected
  ${'1'}     | ${1}
  ${'1,2'}   | ${3}
  ${'1,2,3'} | ${6}
`('returns $expected when $input is comma separator', ({ input, expected }) => {
  const result = add(input);
  expect(result).toBe(expected);
});

test.each`
  input                          | expected
  ${'//[*][%]\n1*2%3'}           | ${6}
  ${'//[***]\n1***2***3'}        | ${6}
  ${'//[!*--*]\n1!*--*20!*--*3'} | ${24}
  ${'//[**1*][%%]\n1**1*2%%3'}   | ${6}
  ${'//[/1*][%]\n1/1*2%3'}       | ${6}
  ${'//[*1*][%]\n1*1*2%3'}       | ${6}
`(
  'returns $expected when $input is custom delimiter',
  ({ input, expected }) => {
    const result = add(input);
    expect(result).toBe(expected);
  },
);

test.each`
  toSum           | expected
  ${[0]}          | ${0}
  ${[1]}          | ${1}
  ${[1, 2, 4]}    | ${7}
  ${[1, 2, 3, 4]} | ${10}
`('sum returns $expected when $toSum', ({ toSum, expected }) => {
  const result = sum(toSum);
  expect(result).toBe(expected);
});
