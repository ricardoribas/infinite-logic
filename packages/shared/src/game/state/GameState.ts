import Puzzle from '@infinite/shared/src/models/Puzzle';

export default interface GameState<T> {
  initialize(puzzle: Puzzle): void;

  update(playInfo: T): void;
}
