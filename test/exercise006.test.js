const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} = require('../challenges/exercise006');

// This function will receive an array of numbers and should return the sum
// of any numbers which are a multiple of 3 or 5

describe('sumMultiples', () => {
  test('returns the sum of any numbers which are a multiple of 3 or 5', () => {
    expect(sumMultiples([1, 2, 3, 4, 5])).toBe(8);
    expect(sumMultiples([8, 17, 2, 4])).toBe(0);
  });

  // test('if the number is not found in the array, returns null', () => {
  //   expect(sumMultiples([5, 3, 7, 8, 1, 10], 55)).toBe(null);
  // });

  // test('if the number is found more than once, returns the number after the first instance', () => {
  //   expect(sumMultiples([5, 3, 7, 8, 1, 3, 10], 3)).toBe(7);
  // });

  // test('if the number is found in the final index position of the array, returns null', () => {
  //   expect(sumMultiples([5, 3, 7, 8, 1, 3, 10], 10)).toBe(null);
  // });
});
