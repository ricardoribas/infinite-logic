import GameState from '@infinite/shared/src/game/state/GameState';

export default class AbstractGameState<T> implements GameState<T> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(_playInfo: T): void {
    throw new Error('Method not implemented.');
  }
}
