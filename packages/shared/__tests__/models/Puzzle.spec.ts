import Puzzle from '@infinite/shared/src/models/Puzzle';
import Cell from '@infinite/shared/src/models/cell';
import CellState from '@infinite/shared/src/enums/CellState';

describe('Puzzle Model', () => {
  it('Initialize puzzle with empty cells', () => {
    const puzzleCells: Cell[][] = [];
    const emptyPuzzle = new Puzzle(puzzleCells);

    expect(emptyPuzzle).toBeDefined();
    expect(emptyPuzzle.cells).toHaveLength(0);
  });

  it('Initialize puzzle from cells', () => {
    const puzzleCells: Cell[][] = [[new Cell(2, CellState.NONE)]];

    const singleCellPuzzle = Puzzle.from(puzzleCells);

    expect(singleCellPuzzle.cells).toHaveLength(1);
    expect(singleCellPuzzle.cells[0][0].value).toBe(2);
    expect(singleCellPuzzle.cells[0][0].state).toBe(CellState.NONE);
  });
});
