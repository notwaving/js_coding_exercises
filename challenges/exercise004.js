const findSmallNums = nums => {
  if (!nums) throw new Error('nums is required');
  // Looping through the nums array, return all items smaller than 1
  const smallNums = nums.filter(function (value) {
    return value < 1;
  });
  return smallNums;
};

const findNamesBeginningWith = (names, char) => {
  if (!names) throw new Error('names is required');
  if (!char) throw new Error('char is required');

  const beginsWithChar = names.filter(function (value) {
    return value.charAt(0) === char;
  });
  return beginsWithChar;
};

const findVerbs = words => {
  if (!words) throw new Error('words is required');

  const foundVerbs = words.filter(function (word) {
    return word.startsWith('to ');
  });
  return foundVerbs;
};

const getIntegers = nums => {
  if (!nums) throw new Error('nums is required');

  const onlyIntegers = nums.filter(function (num) {
    return num % 1 === 0;
  });
  return onlyIntegers;
};

const getCities = users => {
  if (!users) throw new Error('users is required');

  // returns array of same length, so use map()
  let cities = [];
  let i = 0;

  for (i = 0; i < users.length; i++) {
    cities.push(users[i].data.city.displayName);
  }
  return cities;
};

const getSquareRoots = nums => {
  if (!nums) throw new Error('nums is required');

  // map()

  let squareRootToTwo = [];
  let i;

  for (i = 0; i < nums.length; i++) {
    // Check for integer vs float
    if (Math.sqrt(nums[i]) % 1 == 0) {
      squareRootToTwo.push(Math.sqrt(nums[i]));
    } else {
      // Remember that .toFixed() returns a string!
      squareRootToTwo.push(parseFloat(Math.sqrt(nums[i]).toFixed(2)));
    }
  }
  return squareRootToTwo;
};

const findSentencesContaining = (sentences, str) => {
  if (!sentences) throw new Error('sentences is required');
  if (!str) throw new Error('str is required');

  const matchingSentences = sentences.filter(function (sentence) {
    return sentence.toLowerCase().includes(str);
  });
  return matchingSentences;
};

const getLongestSides = triangles => {
  if (!triangles) throw new Error('triangles is required');
  /* 
  A two dimensional array is passed to the function. 
  For each internal array, push the largest number to a new one.
  */

  const longestSides = triangles.map(function (sides) {
    return Math.max(...sides);
  });
  return longestSides;
};

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides,
};
