import KyudokuGameValidator from '@infinite/shared/src/game/validator/impl/KyudokuGameValidator';
import Cell from '@infinite/shared/src/models/cell';
import CellState from '@infinite/shared/src/enums/CellState';
import Puzzle from '@infinite/shared/src/models/Puzzle';

describe('Kyudoku Game Validator', () => {
  describe('Validate Rows', () => {
    it('Should be valid row if the row is empty', () => {
      const row = [
        new Cell(6, CellState.NONE),
        new Cell(3, CellState.NONE),
        new Cell(4, CellState.NONE),
        new Cell(6, CellState.NONE),
        new Cell(9, CellState.NONE),
        new Cell(4, CellState.NONE)
      ];

      const puzzle = new Puzzle([row]);
      const gameValidator = new KyudokuGameValidator(puzzle);

      expect(gameValidator.isValidRow(0)).toBeTruthy();
    });

    it('Should be valid row if all positions are blocked', () => {
      const row = [
        new Cell(6, CellState.BLOCKED),
        new Cell(3, CellState.BLOCKED),
        new Cell(4, CellState.BLOCKED),
        new Cell(6, CellState.BLOCKED),
        new Cell(9, CellState.BLOCKED),
        new Cell(4, CellState.BLOCKED)
      ];

      const puzzle = new Puzzle([row]);
      const gameValidator = new KyudokuGameValidator(puzzle);

      expect(gameValidator.isValidRow(0)).toBeTruthy();
    });

    it('Should be valid row if a position is disabled', () => {
      const row = [
        new Cell(6, CellState.DISABLED),
        new Cell(3, CellState.NONE),
        new Cell(4, CellState.NONE),
        new Cell(6, CellState.NONE),
        new Cell(9, CellState.NONE),
        new Cell(4, CellState.NONE)
      ];

      const puzzle = new Puzzle([row]);
      const gameValidator = new KyudokuGameValidator(puzzle);

      expect(gameValidator.isValidRow(0)).toBeTruthy();
    });

    it('Should be valid row if the maximum position cell is selected', () => {
      const row = [
        new Cell(9, CellState.SELECTED),
        new Cell(3, CellState.NONE),
        new Cell(4, CellState.NONE),
        new Cell(6, CellState.NONE),
        new Cell(9, CellState.NONE),
        new Cell(4, CellState.NONE)
      ];

      const puzzle = new Puzzle([row]);
      const gameValidator = new KyudokuGameValidator(puzzle);

      expect(gameValidator.isValidRow(0)).toBeTruthy();
    });

    it('Should be invalid row if the maximum position cell is selected and there is a default position', () => {
      const row = [
        new Cell(9, CellState.SELECTED),
        new Cell(3, CellState.DISABLED),
        new Cell(4, CellState.NONE),
        new Cell(6, CellState.NONE),
        new Cell(9, CellState.NONE),
        new Cell(4, CellState.NONE)
      ];

      const puzzle = new Puzzle([row]);
      const gameValidator = new KyudokuGameValidator(puzzle);

      expect(gameValidator.isValidRow(0)).toBeFalsy();
    });

    it('Should invalid row if some positions exceed the maximum', () => {
      const row = [
        new Cell(6, CellState.SELECTED),
        new Cell(3, CellState.SELECTED),
        new Cell(4, CellState.SELECTED),
        new Cell(6, CellState.NONE),
        new Cell(9, CellState.NONE),
        new Cell(4, CellState.NONE)
      ];

      const puzzle = new Puzzle([row]);
      const gameValidator = new KyudokuGameValidator(puzzle);

      expect(gameValidator.isValidRow(0)).toBeFalsy();
    });
  });
});
