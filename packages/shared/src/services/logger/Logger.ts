/* eslint-disable @typescript-eslint/no-explicit-any */
export default interface Logger {
  info(...args: any[]): void;
  warn(...args: any[]): void;
  error(...args: any[]): void;
}
