import KyudokuGameValidator from '@infinite/shared/src/game/validator/impl/KyudokuGameValidator';
import Cell from '@infinite/shared/src/models/cell';
import CellState from '@infinite/shared/src/enums/CellState';
import Puzzle from '@infinite/shared/src/models/Puzzle';

describe('Kyudoku Game Validator', () => {
  describe('Validate Columns', () => {
    it('Should be valid column if the column is empty', () => {
      const column = [
        [new Cell(6, CellState.NONE)],
        [new Cell(3, CellState.NONE)],
        [new Cell(4, CellState.NONE)],
        [new Cell(6, CellState.NONE)],
        [new Cell(9, CellState.NONE)],
        [new Cell(4, CellState.NONE)]
      ];

      const puzzle = new Puzzle(column);
      const gameValidator = new KyudokuGameValidator(puzzle);

      expect(gameValidator.isValidColumn(0)).toBeTruthy();
    });

    it('Should be valid column if all positions are blocked', () => {
      const column = [
        [new Cell(6, CellState.BLOCKED)],
        [new Cell(3, CellState.BLOCKED)],
        [new Cell(4, CellState.BLOCKED)],
        [new Cell(6, CellState.BLOCKED)],
        [new Cell(9, CellState.BLOCKED)],
        [new Cell(4, CellState.BLOCKED)]
      ];

      const puzzle = new Puzzle(column);
      const gameValidator = new KyudokuGameValidator(puzzle);

      expect(gameValidator.isValidColumn(0)).toBeTruthy();
    });

    it('Should be valid column if a position is disabled', () => {
      const column = [
        [new Cell(6, CellState.DISABLED)],
        [new Cell(3, CellState.NONE)],
        [new Cell(4, CellState.NONE)],
        [new Cell(6, CellState.NONE)],
        [new Cell(9, CellState.NONE)],
        [new Cell(4, CellState.NONE)]
      ];

      const puzzle = new Puzzle(column);
      const gameValidator = new KyudokuGameValidator(puzzle);

      expect(gameValidator.isValidColumn(0)).toBeTruthy();
    });

    it('Should be invalid column if the maximum position cell is selected and there is a default position', () => {
      const column = [
        [new Cell(9, CellState.SELECTED)],
        [new Cell(3, CellState.DISABLED)],
        [new Cell(4, CellState.NONE)],
        [new Cell(6, CellState.NONE)],
        [new Cell(9, CellState.NONE)],
        [new Cell(4, CellState.NONE)]
      ];

      const puzzle = new Puzzle(column);
      const gameValidator = new KyudokuGameValidator(puzzle);

      expect(gameValidator.isValidColumn(0)).toBeFalsy();
    });

    it('Should invalid column if the maximum position cell is selected', () => {
      const column = [
        [new Cell(9, CellState.SELECTED)],
        [new Cell(3, CellState.NONE)],
        [new Cell(4, CellState.NONE)],
        [new Cell(6, CellState.NONE)],
        [new Cell(9, CellState.NONE)],
        [new Cell(4, CellState.NONE)]
      ];

      const puzzle = new Puzzle(column);
      const gameValidator = new KyudokuGameValidator(puzzle);

      expect(gameValidator.isValidColumn(0)).toBeTruthy();
    });

    it('Should invalid column if some positions exceed the maximum', () => {
      const column = [
        [new Cell(6, CellState.SELECTED)],
        [new Cell(3, CellState.SELECTED)],
        [new Cell(4, CellState.SELECTED)],
        [new Cell(6, CellState.NONE)],
        [new Cell(9, CellState.NONE)],
        [new Cell(4, CellState.NONE)]
      ];

      const puzzle = new Puzzle(column);
      const gameValidator = new KyudokuGameValidator(puzzle);

      expect(gameValidator.isValidColumn(0)).toBeFalsy();
    });
  });
});
