function findSmallNums(nums) {
  if (!nums) throw new Error('nums is required');
  // Looping through the nums array, return all items smaller than 1
  let smallNums = [];
  let i;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      smallNums.push(nums[i]);
    }
  }
  return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error('names is required');
  if (!char) throw new Error('char is required');
  let beginsWithChar = [];
  let i;

  for (i = 0; i < names.length; i++) {
    if (names[i].charAt(0) === char) {
      beginsWithChar.push(names[i]);
    }
  }
  return beginsWithChar;
}

function findVerbs(words) {
  if (!words) throw new Error('words is required');

  let verbs = [];
  let i;

  for (i = 0; i < words.length; i++) {
    if (words[i].slice(0, 3) === 'to ') {
      verbs.push(words[i]);
    }
  }
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error('nums is required');
  // Your code here
  let integers = [];
  let i;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] % 1 == 0) {
      integers.push(nums[i]);
    }
  }
  return integers;
}

function getCities(users) {
  if (!users) throw new Error('users is required');
  let cities = [];
  let i = 0;

  for (i = 0; i < users.length; i++) {
    cities.push(users[i].data.city.displayName);
  }
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error('nums is required');
  // Your code here
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error('sentences is required');
  if (!str) throw new Error('str is required');
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error('triangles is required');
  // Your code here
}

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
