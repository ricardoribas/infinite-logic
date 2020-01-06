import Puzzle from '@infinite/shared/src/models/Puzzle';
import * as PuzzleUtils from '@infinite/shared/src/utils/Puzzle';
import Cell from '@infinite/shared/src/models/cell';
import CellState from '@infinite/shared/src/enums/CellState';
import PuzzleState from '@infinite/shared/src/enums/PuzzleState';

describe('Puzzle Utils', () => {
  it('Should have not won the game from a initial game', () => {
    const notInitializedPuzzle = new Puzzle([]);

    expect(PuzzleUtils.hasWon(notInitializedPuzzle)).toBeFalsy();
  });

  it('Should have not won the game from in progress game', () => {
    const inProgressPuzzle = new Puzzle([[new Cell(2, CellState.DISABLED)]]);

    inProgressPuzzle.state = PuzzleState.PROGRESS;

    expect(PuzzleUtils.hasWon(inProgressPuzzle)).toBeFalsy();
  });
});
