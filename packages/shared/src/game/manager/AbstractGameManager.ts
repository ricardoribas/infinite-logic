import GameActions from '@infinite/shared/src/game/manager/GameActions';
import Puzzle from '@infinite/shared/src/models/Puzzle';

export default class AbstractGameManager<T> implements GameActions<T> {
  protected _lastAction: T | undefined;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  play(action: T, puzzle: Puzzle): Puzzle {
    this.lastPlay = action;

    return puzzle;
  }

  get lastPlay(): T | undefined {
    return this._lastAction;
  }

  set lastPlay(action: T | undefined) {
    this._lastAction = action;
  }
}
