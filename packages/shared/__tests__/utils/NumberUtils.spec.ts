import * as NumberUtils from '@infinite/shared/src/utils/Number';

describe('Number Utils', () => {
  it('Should prepend a zero if is a single digit value', () => {
    expect(NumberUtils.ensureDoubleDigitValue(0)).toBe('00');
    expect(NumberUtils.ensureDoubleDigitValue(5)).toBe('05');
  });

  it('Should do nothing is a double digit value', () => {
    expect(NumberUtils.ensureDoubleDigitValue(10)).toBe('10');
  });
});
