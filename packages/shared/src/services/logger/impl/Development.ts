/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import Logger from '../Logger';
import AbstractLogger from '../AbstractLogger';

function getLoggerPrefix(name: string): string {
  return `[${name}]`;
}

export default class DevelopmentLogger extends AbstractLogger
  implements Logger {
  info(...args: any[]): void {
    console.info(getLoggerPrefix(this.name), ...args);
  }
  warn(...args: any[]): void {
    console.warn(getLoggerPrefix(this.name), ...args);
  }
  error(...args: any[]): void {
    console.error(getLoggerPrefix(this.name), ...args);
  }
}
