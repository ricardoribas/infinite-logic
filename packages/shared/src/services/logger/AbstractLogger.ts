/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Logger from '@infinite/shared/src/services/logger/Logger';

export default class AbstractLogger implements Logger {
  constructor(protected _name: string) {}

  info(...args: any[]): void {
    throw new Error('Method not implemented.');
  }

  warn(...args: any[]): void {
    throw new Error('Method not implemented.');
  }

  error(...args: any[]): void {
    throw new Error('Method not implemented.');
  }

  get name(): string {
    return this._name;
  }
}
