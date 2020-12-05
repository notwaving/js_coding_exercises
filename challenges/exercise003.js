getSquares = nums => {
  if (nums === undefined) throw new Error('nums is required');
  let arrSquared = [];
  let i;

  for (i = 0; i < nums.length; i++) {
    arrSquared.push(nums[i] * nums[i]);
  }
  return arrSquared;
};

camelCaseWords = words => {
  if (words === undefined) throw new Error('words is required');

  let camelCased = [];
  // push first word in array to final array, camelCased
  camelCased.push(words[0]);

  // Create new array, with first word removed
  const wordsToChange = words.slice(1);
  let i;

  for (i = 0; i < wordsToChange.length; i++) {
    camelCased.push(
      wordsToChange[i].charAt(0).toUpperCase() + wordsToChange[i].slice(1)
    );
  }
  return camelCased.join('');
};

getTotalSubjects = people => {
  if (people === undefined) throw new Error('people is required');
  // This seems like a very roundabout way of finding the answer.
  // With more time I'd like to experiment with the more powerful functions
  let count = [];
  let i;

  for (i = 0; i < people.length; i++) {
    count.push(people[i].subjects);
  }
  // At the moment we have a multidimensional array, and we need to flatten it so everything gets counted.
  const flattened = [].concat.apply([], count);
  return flattened.length;
};

checkIngredients = (menu, ingredient) => {
  if (menu === undefined) throw new Error('menu is required');
  if (!ingredient) throw new Error('ingredient is required');

  let extractedIngredients = [];

  menu.forEach(element => extractedIngredients.push(element.ingredients));

  const storeCupboard = extractedIngredients.flat();

  let answer = storeCupboard.includes(ingredient);
  return answer;
};

duplicateNumbers = (arr1, arr2) => {
  if (arr1 === undefined) throw new Error('arr1 is required');
  if (arr2 === undefined) throw new Error('arr2 is required');

  let duplicates = [];

  for (let i of arr1) {
    if (arr2.includes(i)) {
      duplicates.push(i);
    }
  }
  // Removes matches that appear multiple times
  duplicates.splice(0, duplicates.length, ...new Set(duplicates));

  return duplicates.sort();
};

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers,
};
