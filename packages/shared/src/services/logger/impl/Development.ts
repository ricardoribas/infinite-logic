/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import AbstractLogger from '@infinite/shared/src/services/logger/AbstractLogger';

function getLoggerPrefix(name: string): string {
  return `[${name}]`;
}

export default class DevelopmentLogger extends AbstractLogger {
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
