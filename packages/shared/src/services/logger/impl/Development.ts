import ILogger from '../ILogger';
import AbstractLogger from '../AbstractLogger';

function getLoggerPrefix(name: String) : String {
  return `[${name}]`;
}

export default class DevelopmentLogger extends AbstractLogger implements ILogger {
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
