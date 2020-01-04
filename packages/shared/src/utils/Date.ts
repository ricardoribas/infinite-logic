import { ensureDoubleDigitValue } from './Number';

export function getStopWatchTime(ms: number): string {
  const mins = Math.floor(ms / 60);
  const hours = Math.floor(mins / 60);
  const secs = ms % 60;

  const timeParts = [
    ensureDoubleDigitValue(mins),
    ensureDoubleDigitValue(secs)
  ];

  hours > 0 && timeParts.unshift(ensureDoubleDigitValue(hours));

  return timeParts.join(':');
}
