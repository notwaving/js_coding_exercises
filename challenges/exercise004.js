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

  //filter(), startsWith()

  let verbs = [];
  let i;

  for (i = 0; i < words.length; i++) {
    if (words[i].slice(0, 3) === 'to ') {
      verbs.push(words[i]);
    }
  }
  return verbs;
};

const getIntegers = nums => {
  if (!nums) throw new Error('nums is required');

  // filter()

  let integers = [];
  let i;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] % 1 == 0) {
      integers.push(nums[i]);
    }
  }
  return integers;
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

  // filter()

  // Convert all strings to lowercase
  let sentencesLower = [];
  let strLower = str.toLowerCase();

  for (let i = 0; i < sentences.length; i++) {
    sentencesLower.push(sentences[i].toLowerCase());
  }

  let results = [];

  // for each sentence in array, if it includes the str, push that sentence to results
  for (let i = 0; i < sentencesLower.length; i++) {
    if (sentencesLower[i].includes(strLower)) {
      results.push(sentences[i]);
    }
  }
  return results;
};

const getLongestSides = triangles => {
  if (!triangles) throw new Error('triangles is required');
  /* 
  A two dimensional array is passed to the function. 
  For each internal array, push the largest number to a new one.
  */

  // filter()

  let longestSides = [];

  for (let i = 0; i < triangles.length; i++) {
    longestSides.push(Math.max(...triangles[i]));
  }
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
