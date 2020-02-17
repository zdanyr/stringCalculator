const {
  handleOneOrManyCustomDelimitersAnyLength,
  removeCustomDelimiterFromInput,
  removeAllCustomDelimitersFromInput,
  replaceCustomDelimiterWithEmptySpace,
  findCustomDelimiter,
  splitInputReturnBeforeBreakLine,
} = require('./handleOneOrManyCustomDelimitersAnyLength');

test.each`
  input                   | expected
  ${'//[***]\n1***2***3'} | ${['1', '2', '3']}
`(
  'returns $expected when $input is custom delimiter',
  ({ input, expected }) => {
    const result = handleOneOrManyCustomDelimitersAnyLength(input);
    expect([...result]).toMatchObject(expected);
  },
);

test.each`
  input             | expected
  ${'1a2a3b3c4d5'}  | ${'1,2,3b3c4d5'}
  ${'10a2a3b3c4d5'} | ${'10,2,3b3c4d5'}
  ${'1a2a3b3c4a5'}  | ${'1,2,3b3c4,5'}
`('should return $expected when $input', ({ input, expected }) => {
  const delimiter = 'a';
  const result = removeCustomDelimiterFromInput(input, delimiter);
  expect(result).toBe(expected);
});

test('removeAllCustomDelimitersFromInput', () => {
  let numbers = '1a2a3b3';
  const customDelimiters = ['a', 'b'];
  const result = removeAllCustomDelimitersFromInput(numbers, customDelimiters);
  expect(result).toBe('1,2,3,3');
});

test('handleInputAfterBreakLine', () => {
  let userInput = '1a2a3b3';
  const customDelimiters = ['a', 'b'];
  const result = removeAllCustomDelimitersFromInput(
    userInput,
    customDelimiters,
  );
  expect(result).toBe('1,2,3,3');
});

it.each`
  input                                                           | customDelimiter | expected
  ${['/', '/', '[', '*', ']', '[', '%', ']']}                     | ${'*'}          | ${['[', '%', ']']}
  ${['/', '/', '[', '*', '*', '*', ']']}                          | ${'***'}        | ${[]}
  ${['/', '/', '[', '!', '*', '-', '-', '*', ']']}                | ${'!*--*'}      | ${[]}
  ${['/', '/', '[', '*', '*', '1', '*', ']', '[', '%', '%', ']']} | ${'**1*'}       | ${['[', '%', '%', ']']}
  ${['[', '%', '%', ']']}                                         | ${'%%'}         | ${[]}
`(
  'should return $expected when $input and delimiter is $customDelimiter',
  ({ input, expected, customDelimiter }) => {
    result = replaceCustomDelimiterWithEmptySpace(input, customDelimiter);
    expect([...result]).toMatchObject(expected);
  },
);

it.each`
  input                                                 | expected
  ${['/', '/', '[', '*', '*', '*', ']']}                | ${'***'}
  ${['/', '/', '[', '*', '1', '*', ']', '[', '%', ']']} | ${'*1*'}
`('findCustomDelimiter', ({ input, expected }) => {
  const result = findCustomDelimiter(input);
  expect(result).toBe(expected);
});

it.each`
  input                          | expected
  ${'//[/1*][%]\n1/1*2%3'}       | ${'//[/1*][%]\n'}
  ${'//[***][#][%]\n10***2#3%4'} | ${'//[***][#][%]\n'}
`('splitInputReturnBeforeBreakLine', ({ input, expected }) => {
  const result = splitInputReturnBeforeBreakLine(input);
  expect(result).toBe(expected);
});
