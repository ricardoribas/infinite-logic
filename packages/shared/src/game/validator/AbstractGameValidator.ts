import GameValidator from '@infinite/shared/src/game/GameValidator';
import Puzzle from '@infinite/shared/src/models/Puzzle';
import AbstractGameState from '@infinite/shared/src/game/state/AbstractGameState';
import AbstractPlayInfo from '@infinite/shared/src/models/game/AbstractPlayInfo';

/* eslint-disable @typescript-eslint/no-unused-vars */
export default class AbstractGameValidator<
  T extends AbstractGameState<U>,
  U extends AbstractPlayInfo
> implements GameValidator<T> {
  isValidRow(row: number): boolean {
    throw new Error('Method not implemented.');
  }

  isValidColumn(column: number): boolean {
    throw new Error('Method not implemented.');
  }

  isValidBlock(row: number, column: number): boolean {
    throw new Error('Method not implemented.');
  }

  hasWon(puzzle: Puzzle, _state: T): boolean {
    throw new Error('Method not implemented.');
  }

  constructor(protected _puzzle: Puzzle) {}

  get puzzle(): Puzzle {
    return this._puzzle;
  }
}
