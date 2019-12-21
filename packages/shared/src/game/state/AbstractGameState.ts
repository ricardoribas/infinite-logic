/* eslint-disable @typescript-eslint/no-unused-vars */
import GameState from '@infinite/shared/src/game/state/GameState';
import Puzzle from '@infinite/shared/src/models/Puzzle';

export default class AbstractGameState<T> implements GameState<T> {
  initialize(_puzzle: Puzzle): void {
    throw new Error('Method not implemented.');
  }

  update(_playInfo: T): void {
    throw new Error('Method not implemented.');
  }
}
