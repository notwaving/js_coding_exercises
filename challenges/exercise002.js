function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error('ingredients is required');
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error('person is required');
  if (person.city === 'Manchester') {
    return true;
  } else {
    return false;
  }
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error('people is required');
  return Math.ceil(people / 40);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error('arr is required');
  // Let's filter this array!
  return arr.filter(x => x == 'sheep').length;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error('person is required');

  // Check postCode for letter "M"
  if (
    person.address.postCode.charAt(0) === 'M' &&
    person.address.city === 'Manchester'
  ) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode,
};
