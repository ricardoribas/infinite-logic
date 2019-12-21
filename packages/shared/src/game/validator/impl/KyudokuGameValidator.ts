import AbstractGameValidator from '@infinite/shared/src/game/validator/AbstractGameValidator';
import Cell from '@infinite/shared/src/models/cell';
import { isSelected } from '@infinite/shared/src/utils/KyudokuCell';
import { AXIS_MAX_SUM_VALUE } from '@infinite/shared/src/constants/Kyudoku';
import KyudokuGameState from '@infinite/shared/src/game/state/impl/KyudokuGameState';
import KyudokuPlayInfo from '@infinite/shared/src/models/game/impl/KyudokuPlayInfo';

export default class KyudokuGameValidator extends AbstractGameValidator<
  KyudokuGameState,
  KyudokuPlayInfo
> {
  isValidRow(row: number): boolean {
    const rowSum: number = this.puzzle.cells[row].reduce(
      (acc: number, c: Cell): number => {
        if (isSelected(c)) {
          acc += c.value;
        }

        return acc;
      },
      0
    );

    return rowSum <= AXIS_MAX_SUM_VALUE;
  }

  isValidColumn(column: number): boolean {
    const columnSum: number = this.puzzle.cells.reduce(
      (acc: number, r: Cell[]): number => {
        const $column = r[column];

        if (isSelected($column)) {
          acc += $column.value;
        }

        return acc;
      },
      0
    );

    return columnSum <= AXIS_MAX_SUM_VALUE;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isValidBlock(_row: number, _column: number): boolean {
    return true;
  }

  hasWon(state: KyudokuGameState): boolean {
    const hasInvalidRows =
      state.rowStates.filter(Boolean).length < AXIS_MAX_SUM_VALUE;
    const hasInvalidColumns =
      state.columnStates.filter(Boolean).length < AXIS_MAX_SUM_VALUE;

    if (hasInvalidRows || hasInvalidColumns) {
      return false;
    }

    for (let i = 0; i < AXIS_MAX_SUM_VALUE; i++) {
      const hasRepeatedCell = state.selectedCells[i] > 1;
      const hasDuplicatedCell =
        state.selectedCells[i] > 0 && state.disabledCells[i] > 0;
      const hasNoCellSelected =
        state.selectedCells[i] === 0 && state.disabledCells[i] === 0;

      if (hasRepeatedCell || hasDuplicatedCell || hasNoCellSelected) {
        return false;
      }
    }

    return true;
  }
}
