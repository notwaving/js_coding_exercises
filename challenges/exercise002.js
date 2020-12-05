getFillings = sandwich => {
  if (sandwich === undefined) throw new Error('ingredients is required');
  return sandwich.fillings;
};

isFromManchester = person => {
  if (person === undefined) throw new Error('person is required');

  return person.city === 'Manchester' ? true : false;
};

getBusNumbers = people => {
  if (people === undefined) throw new Error('people is required');
  return Math.ceil(people / 40);
};

countSheep = arr => {
  if (arr === undefined) throw new Error('arr is required');

  return arr.filter(x => x == 'sheep').length;
};

hasMPostCode = person => {
  if (person === undefined) throw new Error('person is required');

  return person.address.postCode.charAt(0) === 'M' &&
    person.address.city === 'Manchester'
    ? true
    : false;
};

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode,
};
