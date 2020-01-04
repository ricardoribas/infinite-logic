export function ensureDoubleDigitValue(value: number): string {
  return ('0' + value).slice(-2);
}

export default {
  ensureDoubleDigitValue
};
