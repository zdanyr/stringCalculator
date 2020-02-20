const {
  hasNegativeNumbers,
  handleNegativeNumbers,
} = require('./handleNegativeNumbers');

test.each`
  input            | expected
  ${'1,-20,-30,1'} | ${true}
  ${'1,20,30,-1'}  | ${true}
  ${'1,20,30,1'}   | ${false}
`('hasNegativeNumbers', ({ input, expected }) => {
  const result = hasNegativeNumbers(input);
  expect(result).toBe(expected);
});

test.each`
  input            | expected
  ${'1,-20,-30,1'} | ${'Negatives not allowed: -20, -30'}
  ${'1,20,30,-1'}  | ${'Negatives not allowed: -1'}
`('handleNegativeNumbers', ({ input, expected }) => {
  const result = handleNegativeNumbers(input);
  expect(result).toBe(expected);
});
