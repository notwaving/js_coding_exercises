const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error('nums is required');
  if (n === undefined) throw new Error('n is required');

  const last_element = nums[nums.length - 1];

  if (last_element === n) {
    return null;
  } else {
    const nextNumInArray = nums.includes(n) ? nums[nums.indexOf(n) + 1] : null;
    return nextNumInArray;
  }
};

const count1sand0s = str => {
  if (str === undefined) throw new Error('str is required');
  const array1 = [...str];

  let count0 = 0;
  let count1 = 0;

  for (element in array1) {
    if (array1[element] == 0) {
      count0++;
    } else {
      count1++;
    }
  }
  let answer = {
    1: count1,
    0: count0,
  };

  return answer;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error('n is required');

  nString = n.toString();

  return parseInt(nString.split('').reverse().join(''));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error('arrs is required');

  const sum = arrs.flat().reduce((total, amount) => total + amount);

  return sum;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error('arr is required');
  if (arr.length < 2) {
    return arr;
  } else {
    let finalArray = [];

    finalArray.push(arr[arr.length - 1]);

    const secondToLastElement = arr.length - 1;

    finalArray.push(arr.slice(1, secondToLastElement));

    finalArray.push(arr[0]);

    return finalArray.flat();
  }
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error('haystack is required');
  if (searchTerm === undefined) throw new Error('searchTerm is required');

  let listOfStrings = [];

  for (value in haystack) {
    listOfStrings.push(haystack[value].toString().toLowerCase());
  }

  let oneLowerString = listOfStrings.join(' ');

  return oneLowerString.includes(searchTerm.toLowerCase());
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error('str is required');
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies,
};
