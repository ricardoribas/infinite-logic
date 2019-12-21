import AbstractGameValidator from '@infinite/shared/src/game/validator/AbstractGameValidator';
import Cell from '@infinite/shared/src/models/cell';
import { isSelected } from '@infinite/shared/src/utils/KyudokuCell';
import { AXIS_MAX_SUM_VALUE } from '@infinite/shared/src/constants/Kyudoku';

export default class KyudokuGameValidator extends AbstractGameValidator {
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
  isValidBlock(row: number, column: number): boolean {
    return true;
  }

  hasWon(): boolean {
    return false;
    //   const hasInvalidRows =
    //     this.rowStates.filter(Boolean).length < AXIS_MAX_SUM_VALUE;
    //   const hasInvalidColumns =
    //     this.columnStates.filter(Boolean).length < AXIS_MAX_SUM_VALUE;
    //   return (
    //     !hasInvalidRows &&
    //     !hasInvalidColumns &&
    //     this.hasAllValuesSelected() &&
    //     !this.hasDisabledCellsSelected()
    //   );
  }
}
