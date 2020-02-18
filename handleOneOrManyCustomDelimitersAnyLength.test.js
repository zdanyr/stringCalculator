const {
  isOneOrManyCustomDelimitersAnyLength,
  handleOneOrManyCustomDelimitersAnyLength,
  removeCustomDelimiterFromInput,
  removeAllCustomDelimitersFromInput,
  replaceCustomDelimiterWithEmptySpace,
  findCustomDelimiter,
  findAllDelimitersFromInput,
  handleInputAfterBreakLine,
} = require('./handleOneOrManyCustomDelimitersAnyLength');

test.each`
  input                            | expected
  ${'//[a][b][c][d]\n1a2a3b3c4d5'} | ${true}
  ${'//[***]\n1***2***3}'}         | ${true}
  ${'//[***][#][%]\n10***2#3%4'}   | ${true}
  ${'//[**1*][%%]\n1**1*2%%3'}     | ${true}
  ${'//-\n1-2-9'}                  | ${false}
`(
  'isOneOrManyCustomDelimitersAnyLength should return $expected when $input',
  ({ input, expected }) => {
    const result = isOneOrManyCustomDelimitersAnyLength(input);
    expect(result).toBe(expected);
  },
);

test.each`
  input                            | expected
  ${'//[***]\n1***2***3'}          | ${['1', '2', '3']}
  ${'//[a][b][c][d]\n1a2a3b3c4d5'} | ${['1', '2', '3', '3', '4', '5']}
  ${'//[/1*][%]\n1/1*2%3'}         | ${['1', '2', '3']}
`(
  'returns $expected when $input is custom delimiter',
  ({ input, expected }) => {
    const result = handleOneOrManyCustomDelimitersAnyLength(input);
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
  input                                                                | expected
  ${['/', '/', '[', '*', '1', '*', ']', '[', '%', ']']}                | ${['*1*', '%']}
  ${['/', '/', '[', '/', '/', '/', ']', '[', '*', ']', '[', '#', ']']} | ${['///', '*', '#']}
`('findAllDelimitersFromInput', ({ input, expected }) => {
  const result = findAllDelimitersFromInput(input);
  expect([...result]).toMatchObject(expected);
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

test.each`
  input              | delimiter | expected
  ${'1a2a3b3c4d5'}   | ${'a'}    | ${'1,2,3b3c4d5'}
  ${'10a2a3b3c4d5'}  | ${'a'}    | ${'10,2,3b3c4d5'}
  ${'1a2a3b3,4a5'}   | ${'a'}    | ${'1,2,3b3,4,5'}
  ${'1///2#3%4///5'} | ${'///'}  | ${'1,2#3%4,5'}
`('should return $expected when $input', ({ input, delimiter, expected }) => {
  const result = removeCustomDelimiterFromInput(input, delimiter);
  expect(result).toBe(expected);
});

test.each`
  numbers              | customDelimiters        | expected
  ${'1a2a3b3'}         | ${['a', 'b']}           | ${'1,2,3,3'}
  ${'10a2a3b3c4d5'}    | ${['a', 'b', 'c', 'd']} | ${'10,2,3,3,4,5'}
  ${'1///2#3%4#3///5'} | ${['///', '#', '%']}    | ${'1,2,3,4,3,5'}
`(
  'removeAllCustomDelimitersFromInputshould return $expected when $input',
  ({ numbers, customDelimiters, expected }) => {
    const result = removeAllCustomDelimitersFromInput(
      numbers,
      customDelimiters,
    );
    expect(result).toBe(expected);
  },
);

it.each`
  input                          | customDelimiters     | expected
  ${'//[***]\n1***2***3'}        | ${'***'}             | ${['1', '', '', '2', '', '', '3']}
  ${'//[**1*][%%]\n1**1*2%%3'}   | ${['**1*', '%%']}    | ${['1', '2', '3']}
  ${'//[***][#][%]\n10***2#3%4'} | ${['***', '#', '%']} | ${['10', '2', '3', '4']}
`('handleInputAfterBreakLine', ({ input, customDelimiters, expected }) => {
  const result = handleInputAfterBreakLine(input, customDelimiters);
  expect([...result]).toMatchObject(expected);
});
