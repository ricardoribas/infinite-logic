import Puzzle from '@infinite/shared/src/models/Puzzle';

export default interface GameActions<T> {
  play(action: T, puzzle: Puzzle): Puzzle;
}
