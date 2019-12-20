import Puzzle from '@infinite/shared/src/models/Puzzle';
import Cell from '@infinite/shared/src/models/cell';
import CellState from '@infinite/shared/src/enums/CellState';
import PuzzleState from '@infinite/shared/src/enums/PuzzleState';

describe('Puzzle Model', () => {
  it('Initialize puzzle with empty cells', () => {
    const puzzleCells: Cell[][] = [];
    const emptyPuzzle = new Puzzle(puzzleCells);

    expect(emptyPuzzle).toBeDefined();
    expect(emptyPuzzle.cells).toHaveLength(0);
    expect(emptyPuzzle.state).toBe(PuzzleState.NONE);
  });

  it('Initialize puzzle from cells', () => {
    const puzzleCells: Cell[][] = [[new Cell(2, CellState.NONE)]];

    const singleCellPuzzle = Puzzle.from(puzzleCells);

    expect(singleCellPuzzle.cells).toHaveLength(1);
    expect(singleCellPuzzle.cells[0][0].value).toBe(2);
    expect(singleCellPuzzle.cells[0][0].state).toBe(CellState.NONE);
  });

  it('Initialize puzzle from another puzzle', () => {
    const oldPuzzle = new Puzzle([], PuzzleState.INVALID_BLOCK);
    const newPuzzle = Puzzle.fromPuzzle(oldPuzzle);

    expect(newPuzzle.state).toBe(PuzzleState.INVALID_BLOCK);
    expect(newPuzzle.cells).toHaveLength(0);
  });
});
