const getSquares = nums => {
  if (nums === undefined) throw new Error('nums is required');

  const squared = nums.map(function (n) {
    return n * n;
  });
  return squared;
};

const camelCaseWords = words => {
  if (words === undefined) throw new Error('words is required');

  const camelCased = [];
  // push first word in array to final array, camelCased
  camelCased.push(words[0]);

  // Create new array, with first word removed
  const wordsToChange = words.slice(1);

  // map?
  let i;

  for (i = 0; i < wordsToChange.length; i++) {
    camelCased.push(
      wordsToChange[i].charAt(0).toUpperCase() + wordsToChange[i].slice(1)
    );
  }
  return camelCased.join('');
};

const getTotalSubjects = people => {
  if (people === undefined) throw new Error('people is required');

  let count = 0;

  people.forEach(person => {
    count += person.subjects.length;
  });

  return count;
};

const checkIngredients = (menu, ingredient) => {
  if (menu === undefined) throw new Error('menu is required');
  if (!ingredient) throw new Error('ingredient is required');

  const includesIngredient = menu => menu.ingredients.includes(ingredient);
  return menu.some(includesIngredient);
};

const duplicateNumbers = (arr1, arr2) => {
  if (arr1 === undefined) throw new Error('arr1 is required');
  if (arr2 === undefined) throw new Error('arr2 is required');

  const duplicates = arr1.filter(function (value) {
    return arr2.includes(value);
  });

  return [...new Set(duplicates.sort())];
};

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers,
};
