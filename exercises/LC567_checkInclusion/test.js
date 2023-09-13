const checkInclusion = require('./index');

describe('checkInclusion', () => {
  test('returns false when s1 is an empty string', () => {
    expect(checkInclusion('', 'test')).toBe(false);
  });

  test('returns false when s2 is shorter than s1', () => {
    expect(checkInclusion('longer', 'short')).toBe(false);
  });

  test('returns true when s1 is a permutation of a substring in s2', () => {
    expect(checkInclusion('ab', 'eidbaooo')).toBe(true);
  });

  test('returns false when s1 is not a permutation of any substring in s2', () => {
    expect(checkInclusion('abc', 'eidbaooo')).toBe(false);
  });

  test('returns true when s1 is a permutation of a substring in s2', () => {
    expect(checkInclusion('adc', 'dcda')).toBe(true);
  });

  test('returns true when s1 is a permutation of a substring in s2', () => {
    expect(checkInclusion('oie', 'eidbaooo')).toBe(false);
  });
});
