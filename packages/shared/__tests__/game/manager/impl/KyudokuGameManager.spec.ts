import KyudokuGameManager from '@infinite/shared/src/game/manager/impl/KyudokuGameManager';
import Puzzle from '@infinite/shared/src/models/Puzzle';
import KyudokuGameState from '@infinite/shared/src/game/state/impl/KyudokuGameState';
import * as KyudokuCellUtils from '@infinite/shared/src/utils/KyudokuCell';
import Cell from '@infinite/shared/src/models/cell';
import CellState from '@infinite/shared/src/enums/CellState';
import PuzzleState from '@infinite/shared/src/enums/PuzzleState';

jest.mock('@infinite/shared/src/game/state/impl/KyudokuGameState');

describe('Kyudoku Game Manager', () => {
  it('Should initialize the board state after creation', () => {
    const puzzle = new Puzzle([]);
    const gameManager = new KyudokuGameManager(puzzle);

    expect(KyudokuGameState).toHaveBeenCalled();
    expect(gameManager.gameState).toBeDefined();
    expect(gameManager.gameState.initialize).toHaveBeenCalledWith(puzzle);
  });

  it('Should have the new puzzle with the last play', () => {
    const getNextStateSpy = jest.spyOn(KyudokuCellUtils, 'getNextState');

    const selectedCell = new Cell(4);
    const puzzle = new Puzzle([[new Cell(4), selectedCell]]);
    const gameManager = new KyudokuGameManager(puzzle);
    const newPuzzle = gameManager.play(
      {
        row: 0,
        column: 1
      },
      puzzle
    );

    expect(newPuzzle.cells[0][1].state).toBe(CellState.BLOCKED);
    expect(newPuzzle.state).toBe(PuzzleState.PROGRESS);
    expect(getNextStateSpy).toHaveBeenCalledWith(selectedCell);
  });
});
