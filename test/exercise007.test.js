const {
  sumDigits,
  //createRange,
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

// describe('createRange', () => {});

// describe('getScreentimeAlertList', () => {});

// describe('hexToRGB', () => {});

// describe('findWinner', () => {});
