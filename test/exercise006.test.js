const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  // areWeCovered,
} = require('../challenges/exercise006');

describe('sumMultiples', () => {
  test('if an array is not passed to the function, throws an error', () => {
    expect(() => {
      sumMultiples();
    }).toThrow('arr is required');

    expect(() => {
      sumMultiples('string');
    }).toThrow('argument passed to function must be an array');
  });

  test('returns the sum of any numbers which are a multiple of 3 or 5', () => {
    expect(sumMultiples([1, 2, 3, 4, 5])).toBe(8);
    expect(sumMultiples([8, 17, 2, 4])).toBe(0);
  });

  test('works with decimal numbers', () => {
    expect(sumMultiples([5, 3.0, 7.2, 8, 1.3, 10])).toBe(18);
  });
});

describe('isValidDNA', () => {
  test('if a string is not passed to the function, throws an error', () => {
    expect(() => {
      isValidDNA(undefined);
    }).toThrow('str is required');
  });

  test('returns true if str is valid DNA', () => {
    expect(isValidDNA('ATCGAAA')).toBe(true);
  });
  test('returns false if str is invalid DNA', () => {
    expect(isValidDNA('OTCAG')).toBe(false);
  });
  test('returns false if str is not in uppercase', () => {
    expect(isValidDNA('agtcca')).toBe(false);
  });
});

describe('getComplementaryDNA', () => {
  test('if a string is not passed to the function, throws an error', () => {
    expect(() => {
      getComplementaryDNA(undefined);
    }).toThrow('str is required');
  });

  test('returns complementary str', () => {
    expect(getComplementaryDNA('ATGC')).toEqual('TACG');
    expect(getComplementaryDNA('AAAAA')).toEqual('TTTTT');
    expect(getComplementaryDNA('G')).toEqual('C');
  });
});

describe('isItPrime', () => {
  test('if a number is not passed to the function, throws an error', () => {
    expect(() => {
      isItPrime();
    }).toThrow('n is required');

    expect(() => {
      isItPrime('string');
    }).toThrow('number is required');
  });

  test('returns false on 1', () => {
    expect(isItPrime(1)).toBe(false);
  });

  test('returns false on even numbers', () => {
    expect(isItPrime(2)).toBe(false);
    expect(isItPrime(26)).toBe(false);
  });

  test('returns true on prime numbers', () => {
    expect(isItPrime(3)).toBe(true);
    expect(isItPrime(5)).toBe(true);
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(17)).toBe(true);
    expect(isItPrime(101)).toBe(true);
  });
});
describe('createMatrix', () => {
  // result of returning the correct array
  test('returns an array of arrays, n * n, filled with fill', () => {
    expect(createMatrix(3, 'foo')).toEqual([
      ['foo', 'foo', 'foo'],
      ['foo', 'foo', 'foo'],
      ['foo', 'foo', 'foo'],
    ]);
  });
});
