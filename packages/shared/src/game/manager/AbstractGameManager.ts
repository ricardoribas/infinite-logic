import GameActions from '@infinite/shared/src/game/manager/GameActions';
import Puzzle from '@infinite/shared/src/models/Puzzle';
import AbstractGameState from '@infinite/shared/src/game/state/AbstractGameState';
import AbstractPlayInfo from '@infinite/shared/src/models/game/AbstractPlayInfo';

export default class AbstractGameManager<
  T,
  U extends AbstractGameState<K>,
  K extends AbstractPlayInfo
> implements GameActions<T> {
  protected _lastAction: T | undefined;

  protected _gameState: U;

  constructor(protected GameStateClazz: new () => U) {
    this._gameState = new GameStateClazz();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  play(action: T, puzzle: Puzzle): Puzzle {
    this.lastPlay = action;

    return puzzle;
  }

  get gameState(): U {
    return this._gameState;
  }

  get lastPlay(): T | undefined {
    return this._lastAction;
  }

  set lastPlay(action: T | undefined) {
    this._lastAction = action;
  }
}
