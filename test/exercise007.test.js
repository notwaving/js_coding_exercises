const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  //hexToRGB,
  //findWinner,
} = require('../challenges/exercise007');

describe('sumDigits', () => {
  test("returns the sum of all n's digits", () => {
    expect(sumDigits(123)).toEqual(6);
    expect(sumDigits(19)).toEqual(10);
    expect(sumDigits(101010)).toEqual(3);
  });
});

describe('createRange', () => {
  // if step not defined, assume it's 1
  test('returns a range as defined by start, end, and step', () => {
    expect(createRange(3, 8, 2)).toEqual([3, 5, 7]);
    expect(createRange(-5, 13, 7)).toEqual([-5, 2, 9]);
    expect(createRange(14.5, 22.4, 4)).toEqual([14.5, 18.5]);
  });

  test('Both the start and the end numbers are inclusive', () => {
    expect(createRange(1, 10, 3)).toEqual([1, 4, 7, 10]);
  });

  test('step is an optional parameter. If not defined, presume it is 1', () => {
    expect(createRange(11, 14)).toEqual([11, 12, 13, 14]);
  });
});

describe('getScreentimeAlertList', () => {
  const users = [
    {
      username: 'beth_1234',
      name: 'Beth Smith',
      screenTime: [
        {
          date: '2019-05-01',
          usage: { twitter: 34, instagram: 22, facebook: 40 },
        },
        {
          date: '2019-05-02',
          usage: { twitter: 56, instagram: 40, facebook: 31 },
        },
        {
          date: '2019-05-03',
          usage: { twitter: 12, instagram: 15, facebook: 19 },
        },
        {
          date: '2019-05-04',
          usage: { twitter: 10, instagram: 56, facebook: 61 },
        },
      ],
    },
    {
      username: 'sam_j_1989',
      name: 'Sam Jones',
      screenTime: [
        {
          date: '2019-06-11',
          usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
        },
        {
          date: '2019-06-13',
          usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
        },
        {
          date: '2019-06-14',
          usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
        },
      ],
    },
  ];

  test('return an array of usernames of users who have used more than 100 minutes of screentime for a given date', () => {
    expect(getScreentimeAlertList(users, '2019-05-02')).toEqual(['beth_1234']);
    expect(getScreentimeAlertList(users, '2019-05-03')).toEqual([]);
  });
});

// describe('hexToRGB', () => {});

// describe('findWinner', () => {});
