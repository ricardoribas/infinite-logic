import AbstractPlayInfo from '@infinite/shared/src/models/game/AbstractPlayInfo';
import Puzzle from '@infinite/shared/src/models/Puzzle';

export default interface GameState<T extends AbstractPlayInfo> {
  initialize(puzzle: Puzzle): void;

  update(playInfo: T): void;
}
