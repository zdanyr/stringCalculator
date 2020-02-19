const {
  hasValueGraterThan1000,
  handleNumbersGraterThan1000,
} = require('./removeNumbersGraterThan1000');

test.each`
  input            | expected
  ${'1000,1001,2'} | ${true}
  ${'1,1001,2'}    | ${true}
  ${'1,10,2'}      | ${false}
`(
  'hasValueGraterThan1000 returns $expected when $input',
  ({ input, expected }) => {
    const result = hasValueGraterThan1000(input);
    expect(result).toEqual(expected);
  },
);

test.each`
  input            | expected
  ${'1000,1001,2'} | ${['2']}
  ${'1,1001,2'}    | ${['1', '2']}
  ${'1,100,2'}     | ${['1', '100', '2']}
`(
  'handleNumbersGraterThan1000 should return $expected when $input',
  ({ input, expected }) => {
    const result = handleNumbersGraterThan1000(input);
    expect(result).toEqual(expected);
  },
);
