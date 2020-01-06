import KyudokuCellUtils from '@infinite/shared/src/utils/KyudokuCell';
import Cell from '@infinite/shared/src/models/cell';
import CellState from '@infinite/shared/src/enums/CellState';

describe('KyudokuCell Utils', () => {
  describe('Next State', () => {
    it('Should be a blocked position after invalidating a cell', () => {
      expect(KyudokuCellUtils.getNextState(new Cell(2, CellState.NONE))).toBe(
        CellState.BLOCKED
      );
    });

    it('Should be a selected position after unblocking a cell', () => {
      expect(
        KyudokuCellUtils.getNextState(new Cell(2, CellState.BLOCKED))
      ).toBe(CellState.SELECTED);
    });

    it('Should be a default position after unselecting a cell', () => {
      expect(
        KyudokuCellUtils.getNextState(new Cell(2, CellState.SELECTED))
      ).toBe(CellState.NONE);
    });
  });

  describe('Get Previous State', () => {
    it('Should be a blocked position before a selected celll', () => {
      expect(
        KyudokuCellUtils.getPreviousState(new Cell(2, CellState.SELECTED))
      ).toBe(CellState.BLOCKED);
    });

    it('Should be a selected position before an unselected cell', () => {
      expect(
        KyudokuCellUtils.getPreviousState(new Cell(2, CellState.NONE))
      ).toBe(CellState.SELECTED);
    });

    it('Should be a selected position before blocking a cell', () => {
      expect(
        KyudokuCellUtils.getPreviousState(new Cell(2, CellState.BLOCKED))
      ).toBe(CellState.NONE);
    });
  });
});
