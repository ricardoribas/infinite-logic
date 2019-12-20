import GameValidator from '@infinite/shared/src/game/GameValidator';
import Puzzle from '@infinite/shared/src/models/Puzzle';

/* eslint-disable @typescript-eslint/no-unused-vars */
export default class AbstractGameValidator implements GameValidator {
  isValidRow(row: number): boolean {
    throw new Error('Method not implemented.');
  }
  isValidColumn(column: number): boolean {
    throw new Error('Method not implemented.');
  }
  isValidBlock(row: number, column: number): boolean {
    throw new Error('Method not implemented.');
  }
  isValidGame(): boolean {
    throw new Error('Method not implemented.');
  }
  constructor(protected _puzzle: Puzzle) {}

  get puzzle(): Puzzle {
    return this._puzzle;
  }
}
