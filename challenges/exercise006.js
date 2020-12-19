/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error('arr is required');
  if (!Array.isArray(arr))
    throw new Error('argument passed to function must be an array');

  let sum = 0;

  arr.forEach(n => {
    if (n % 3 === 0 || n % 5 === 0) {
      sum += n;
    }
  });
  return sum;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error('str is required');
  return [...str].every(char => 'CGTA'.includes(char));
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error('str is required');
  if (!isValidDNA(str)) throw new Error('str must be a valid DNA string');
  let compDNA = '';

  const strArr = [...str];

  strArr.forEach(letter => {
    if (letter === 'C') {
      compDNA += 'G';
    } else if (letter === 'G') {
      compDNA += 'C';
    } else if (letter === 'T') {
      compDNA += 'A';
    } else {
      compDNA += 'T';
    }
  });
  return compDNA;
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error('n is required');
  if (!Number.isInteger(n)) throw new Error('number is required');

  if (n % 2 != 0 || n == 1) {
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        return false;
      } else {
        return true;
      }
      // Tried refactoring the above with this ternary, but it failed 'returns true on prime numbers'
      // n % i == 0 ? false : true;
    }
  }
  return false;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error('n is required');
  if (fill === undefined) throw new Error('fill is required');
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    // for every array created, fill it with fill, n times
    for (let j = 0; j < n; j++) {
      matrix[i][j] = fill;
    }
  }
  return matrix;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error('staff is required');
  if (day === undefined) throw new Error('day is required');

  let count = 0;

  for (let i = 0; i < staff.length; i++) {
    staff[i].rota.includes(day) ? count++ : (count += 0);
  }
  return count >= 3;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
};
