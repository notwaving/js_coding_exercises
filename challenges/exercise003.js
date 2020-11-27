function getSquares(nums) {
  if (nums === undefined) throw new Error('nums is required');
  let arrSquared = [];
  let i;

  for (i = 0; i < nums.length; i++) {
    arrSquared.push(nums[i] * nums[i]);
  }
  return arrSquared;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error('words is required');

  let camelCased = [];
  // push first word in array to final array, camelCased
  camelCased.push(words[0]);

  // Create new array, with first word removed
  let wordsToChange = words.slice(1);
  let i;

  for (i = 0; i < wordsToChange.length; i++) {
    camelCased.push(
      wordsToChange[i].charAt(0).toUpperCase() + wordsToChange[i].slice(1)
    );
  }
  return camelCased.join('');
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error('people is required');
  // This seems like a very roundabout way of finding the answer.
  // With more time I'd like to experiment with the more powerful functions
  let count = [];
  let i;

  for (i = 0; i < people.length; i++) {
    count.push(people[i].subjects);
  }
  // At the moment we have a multidimensional array, and we need to flatten it so everything gets counted.
  var flattened = [].concat.apply([], count);
  return flattened.length;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error('menu is required');
  if (!ingredient) throw new Error('ingredient is required');
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error('arr1 is required');
  if (arr2 === undefined) throw new Error('arr2 is required');
  // Something with filter method?
  // let z = arr1.filter(function (val) {
  //   return arr2.indexOf(val) != -1;
  // });

  // return z;
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers,
};
