function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error('firstName is required');
  if (lastName === undefined) throw new Error('lastName is required');
  return firstName[0] + '.' + lastName[0];
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error('originalPrice is requied');
  if (vatRate === undefined) throw new Error('vatRate is required');
  // add 100 to the VAT percentage rate and divide by that number.)
  let answer = ((originalPrice / 100) * vatRate) + originalPrice;
  // This handles answers that are floats, as tests only want two decimal places returned
  // parseInt(answer) == answer compares a round number (integer) to the calculated answer
  if(parseInt(answer) == answer){
    return answer;
  } else {
    // This handles a float with potentially more than two decimal places. 
    // The result of toFixed() is a string, to this needs to be converted to a number before returning
    let stringNum = answer.toFixed(2);
    return parseFloat(stringNum);
  };
};

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error('originalPrice is required');
  if (reduction === undefined) throw new Error('reduction is required');
  const numToSubtract = (originalPrice / 100) * reduction;
  const answer = originalPrice - numToSubtract;

  // This handles answers that are floats, as tests only want two decimal places returned
  if(parseInt(answer) == answer){
    return answer;
  } else {
    // This handles a float with potentially more than two decimal places. 
    // The result of toFixed() is a string, to this needs to be converted to a number before returning
    let stringNum = answer.toFixed(2);
    return parseFloat(stringNum);
  };
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error('str is required');

  // If number of letters is odd:
  if (str.length % 2 !== 0) {
    // (Minus one to offset zero indexing)
    const oddMiddle = Math.round(str.length/2) -1;
    return str.charAt(oddMiddle);
  } else {
    const evenMiddle = Math.round(str.length/2) -1;
    return str.charAt(evenMiddle) + str.charAt(evenMiddle + 1)
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error('word is required');
  const splitWord = word.split('');
  return splitWord.reverse().join('');
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error('words is required');
  // Words need to be reversed in place, i.e. retain original order in given array.
  let reversedArray = []
  let i;
  for (i = 0; i < words.length; i++) {
    let word = words[i].split('').reverse().join('');
    reversedArray.push(word);
  }
  return reversedArray;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error('users is required');
  
  let numOfLinuxUsers = 0;
  let i;
  for (i = 0; i < users.length; i++) {
    if (users[i].type == "Linux") {
      numOfLinuxUsers ++;
    }
  } return numOfLinuxUsers;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error('scores is required');
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error('n is required');
  // Add your code here!
}

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
