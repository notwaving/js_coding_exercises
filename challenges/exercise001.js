const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);

const generateInitials = (firstName, lastName) => {
  if (firstName === undefined) throw new Error('firstName is required');
  if (lastName === undefined) throw new Error('lastName is required');
  return firstName[0] + '.' + lastName[0];
};

const addVAT = (originalPrice, vatRate) => {
  if (originalPrice === undefined) throw new Error('originalPrice is requied');
  if (vatRate === undefined) throw new Error('vatRate is required');
  // add 100 to the VAT percentage rate and divide by that number.)
  let total = (originalPrice / 100) * vatRate + originalPrice;
  // This handles answers that are floats, as tests only want two decimal places returned
  // parseInt(answer) == answer compares a round number (integer) to the calculated answer
  if (parseInt(total) === total) {
    return total;
  } else {
    return parseFloat(total.toFixed(2));
  }
};

const getSalePrice = (originalPrice, reduction) => {
  if (originalPrice === undefined) throw new Error('originalPrice is required');
  if (reduction === undefined) throw new Error('reduction is required');

  return (
    originalPrice - Math.round(((originalPrice * reduction) / 100) * 100) / 100
  );
};

const getMiddleCharacter = str => {
  if (str === undefined) throw new Error('str is required');

  // (Minus one to offset zero indexing)
  const middle = Math.round(str.length / 2) - 1;

  // If number of letters is odd:
  // if (str.length % 2 !== 0) {
  //   return str.charAt(middle);
  // } else {
  //   return str.charAt(middle) + str.charAt(middle + 1);
  // }

  // Not convinced that Future Sam would be able to read this more easily than the if statement above...
  return str.length % 2 !== 0
    ? str.charAt(middle)
    : str.charAt(middle) + str.charAt(middle + 1);
};

const reverseWord = word => {
  if (word === undefined) throw new Error('word is required');

  const splitWord = [...word];
  return splitWord.reverse().join('');
};

const reverseAllWords = words => {
  if (words === undefined) throw new Error('words is required');
  // Words need to be reversed in place, i.e. retain original order in given array.
  let reversedArray = [];
  let i;
  for (i = 0; i < words.length; i++) {
    let word = words[i].split('').reverse().join('');
    reversedArray.push(word);
  }
  return reversedArray;
};

const countLinuxUsers = users => {
  if (users === undefined) throw new Error('users is required');

  let numOfLinuxUsers = 0;

  users.forEach(user => {
    if (user.type == 'Linux') numOfLinuxUsers += 1;
  });

  return numOfLinuxUsers;
};

const getMeanScore = scores => {
  if (scores === undefined) throw new Error('scores is required');

  // Add up the scores in an array - reduce, but for loop for now

  let total = 0;
  let i;

  for (i = 0; i < scores.length; i++) {
    total += scores[i];
  }
  // Calculate the mean by dividing by length of the scores array
  const mean = total / scores.length;

  // Handle answers that are floats, as tests only want two decimal places returned
  if (parseInt(mean) === mean) {
    return mean;
  } else {
    // Handles a float with potentially more than two decimal places.
    // The result of toFixed() is a string, to this needs to be converted to a number before returning
    return parseFloat(mean.toFixed(2));
  }
};

const simpleFizzBuzz = n => {
  if (n === undefined) throw new Error('n is required');

  if (n % 15 === 0) {
    return 'fizzbuzz';
  } else if (n % 3 === 0) {
    return 'fizz';
  } else if (n % 5 === 0) {
    return 'buzz';
  } else {
    return n;
  }
};

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz,
};
