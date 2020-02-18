const {
  add,
  sum,
  inputToArrayCommaBackSlashSeparator,
  findDelimiter,
  convertInputWithCustomSeparatorIntoArray,
} = require('./add');

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
  input              | expected
  ${'1,2,3'}         | ${['1', '2', '3']}
  ${'3\n5\n30,9,10'} | ${['3', '5', '30', '9', '10']}
`(
  'returns $expected when input has comma or break line separator',
  ({ input, expected }) => {
    const result = inputToArrayCommaBackSlashSeparator(input);
    expect(result).toEqual(expected);
  },
);

test('should return sum of elements', () => {
  const toSum = [1, 2, 3, 4];
  const result = sum(toSum);
  expect(result).toBe(10);
});

test.each`
  input           | expected
  ${'//;\n1;2'}   | ${';'}
  ${'//-\n1-2-9'} | ${'-'}
`(
  'returns $expected when $input contains custom delimiter',
  ({ input, expected }) => {
    const result = findDelimiter(input);
    expect(result).toBe(expected);
  },
);

test.each`
  input      | delimiter | expected
  ${'1;2'}   | ${';'}    | ${['1', '2']}
  ${'1-2-9'} | ${'-'}    | ${['1', '2', '9']}
`(
  'returns $expected when $input should be converted in array using custom delimiter',
  ({ input, delimiter, expected }) => {
    const result = convertInputWithCustomSeparatorIntoArray(input, delimiter);
    expect([...result]).toMatchObject(expected);
  },
);

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
