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

  const cities = users.map(function (user) {
    return user.data.city.displayName;
  });
  return cities;
};

const getSquareRoots = nums => {
  if (!nums) throw new Error('nums is required');

  const squareRootToTwo = nums.map(function (num) {
    return Math.round(Math.sqrt(num) * 100) / 100;
  });
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
