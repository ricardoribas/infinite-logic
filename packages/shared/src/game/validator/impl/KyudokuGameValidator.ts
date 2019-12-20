import AbstractGameValidator from '@infinite/shared/src/game/validator/AbstractGameValidator';
import Cell from '@infinite/shared/src/models/cell';
import { isSelected } from '@infinite/shared/src/utils/KyudokuCell';
import { AXIS_MAX_SUM_VALUE } from '@infinite/shared/src/constants/Kyudoku';

export default class KyudokuGameValidator extends AbstractGameValidator {
  // TODO: We don't need to re calculate the whole row.
  // If we are saving the current state of the board we can validate it
  // with more efficiency

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

  isValidGame(): boolean {
    return false;
  }
}
