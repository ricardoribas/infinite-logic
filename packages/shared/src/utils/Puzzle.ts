import Puzzle from '@infinite/shared/src/models/Puzzle';
import PuzzleState from '@infinite/shared/src/enums/PuzzleState';

export function hasWon(puzzle: Puzzle): boolean {
  return puzzle.state === PuzzleState.FINISHED;
}

export default {
  hasWon
};
