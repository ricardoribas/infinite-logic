import Puzzle from '@infinite/shared/src/models/Puzzle';

export default interface GameValidator<T> {
  isValidRow(row: number): boolean;
  isValidColumn(column: number): boolean;
  isValidBlock(row: number, column: number): boolean;
  hasWon(puzzle: Puzzle, state: T): boolean;
}
