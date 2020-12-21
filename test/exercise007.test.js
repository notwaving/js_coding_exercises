const {
  sumDigits,
  createRange,
  //getScreentimeAlertList,
  //hexToRGB,
  //findWinner,
} = require('../challenges/exercise007');

describe('sumDigits', () => {
  test("returns the sum of all n's digits", () => {
    expect(sumDigits(123)).toEqual(6);
    expect(sumDigits(19)).toEqual(10);
    expect(sumDigits(101010)).toEqual(3);
  });
});

describe('createRange', () => {
  // if step not defined, assume it's 1
  test('returns a range as defined by start, end, and step', () => {
    expect(createRange(3, 8, 2)).toEqual([3, 5, 7]);
    expect(createRange(-5, 13, 7)).toEqual([-5, 2, 9]);
    expect(createRange(14.5, 22.4, 4)).toEqual([14.5, 18.5]);
  });

  test('Both the start and the end numbers are inclusive', () => {
    expect(createRange(1, 10, 3)).toEqual([1, 4, 7, 10]);
  });

  test('step is an optional parameter. If not defined, presume it is 1', () => {
    expect(createRange(11, 14)).toEqual([11, 12, 13, 14]);
  });
});

// describe('getScreentimeAlertList', () => {});

// describe('hexToRGB', () => {});

// describe('findWinner', () => {});
