/* eslint-disable @typescript-eslint/no-unused-vars */
import GameState from '@infinite/shared/src/game/state/GameState';
import AbstractPlayInfo from '@infinite/shared/src/models/game/AbstractPlayInfo';
import Puzzle from '@infinite/shared/src/models/Puzzle';

export default class AbstractGameState<T extends AbstractPlayInfo>
  implements GameState<T> {
  initialize(_puzzle: Puzzle): void {
    throw new Error('Method not implemented.');
  }

  update(_playInfo: T): void {
    throw new Error('Method not implemented.');
  }
}
