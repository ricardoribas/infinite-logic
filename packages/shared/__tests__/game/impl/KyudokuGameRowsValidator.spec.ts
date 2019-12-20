import KyudokuGameValidator from '@infinite/shared/src/game/impl/KyudokuGameValidator';
import Cell from '@infinite/shared/src/models/cell';
import CellState from '@infinite/shared/src/enums/CellState';
import Puzzle from '@infinite/shared/src/models/Puzzle';

import KyudokuGameDataset from './KyudokuGameDataset';

describe('Kyudoku Game Validator', () => {
  describe('Kyudoku game parametrized test with different row scenarios', () => {
    it.each(KyudokuGameDataset)(
      '.generateDeliveriesCalendar(%o)',
      (input, expected) => {
        const validator = new KyudokuGameValidator(input);

        expect(validator.isValidGame()).toBe(expected);
      }
    );
  });

  describe('Validate Rows', () => {
    it('Should be valid row if the row is empty', () => {
      const column = [
        new Cell(6, CellState.NONE),
        new Cell(3, CellState.NONE),
        new Cell(4, CellState.NONE),
        new Cell(6, CellState.NONE),
        new Cell(9, CellState.NONE),
        new Cell(4, CellState.NONE)
      ];

      const puzzle = new Puzzle([column]);
      const gameValidator = new KyudokuGameValidator(puzzle);

      expect(gameValidator.isValidRow(0)).toBeTruthy();
    });

    it('Should be valid row if all positions are blocked', () => {
      const column = [
        new Cell(6, CellState.BLOCKED),
        new Cell(3, CellState.BLOCKED),
        new Cell(4, CellState.BLOCKED),
        new Cell(6, CellState.BLOCKED),
        new Cell(9, CellState.BLOCKED),
        new Cell(4, CellState.BLOCKED)
      ];

      const puzzle = new Puzzle([column]);
      const gameValidator = new KyudokuGameValidator(puzzle);

      expect(gameValidator.isValidRow(0)).toBeTruthy();
    });

    it('Should be valid row if a position is disabled', () => {
      const column = [
        new Cell(6, CellState.DISABLED),
        new Cell(3, CellState.DISABLED),
        new Cell(4, CellState.DISABLED),
        new Cell(6, CellState.DISABLED),
        new Cell(9, CellState.DISABLED),
        new Cell(4, CellState.DISABLED)
      ];

      const puzzle = new Puzzle([column]);
      const gameValidator = new KyudokuGameValidator(puzzle);

      expect(gameValidator.isValidRow(0)).toBeTruthy();
    });

    it('Should invalid row if the maximum position cell is selected', () => {
      const column = [
        new Cell(9, CellState.SELECTED),
        new Cell(3, CellState.NONE),
        new Cell(4, CellState.NONE),
        new Cell(6, CellState.NONE),
        new Cell(9, CellState.NONE),
        new Cell(4, CellState.NONE)
      ];

      const puzzle = new Puzzle([column]);
      const gameValidator = new KyudokuGameValidator(puzzle);

      expect(gameValidator.isValidRow(0)).toBeTruthy();
    });

    it('Should invalid row if some positions exceed the maximum', () => {
      const column = [
        new Cell(6, CellState.SELECTED),
        new Cell(3, CellState.SELECTED),
        new Cell(4, CellState.SELECTED),
        new Cell(6, CellState.NONE),
        new Cell(9, CellState.NONE),
        new Cell(4, CellState.NONE)
      ];

      const puzzle = new Puzzle([column]);
      const gameValidator = new KyudokuGameValidator(puzzle);

      expect(gameValidator.isValidRow(0)).toBeFalsy();
    });
  });
});
