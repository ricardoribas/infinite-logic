import AbstractGameValidator from '@infinite/shared/src/game/AbstractGameValidator';
import Cell from '@infinite/shared/src/models/cell';
import { isSelected } from '@infinite/shared/src/utils/Cell';

const AXIS_MAX_SUM_VALUE = 9;

export default class KyudokuGameValidator extends AbstractGameValidator {
  // TODO: We don't need to re calculate the whole row.
  // If we are saving the current state of the board we can validate it
  // with more efficiency

  isValidRow(row: number): boolean {
    return !(
      this.puzzle.cells[row].reduce((acc: number, c: Cell): number => {
        if (isSelected(c)) {
          acc += c.value;
        }

        return acc;
      }, 0) > AXIS_MAX_SUM_VALUE
    );
  }

  isValidColumn(column: number): boolean {
    return !(
      this.puzzle.cells.reduce((acc: number, r: Cell[]): number => {
        const $column = r[column];

        if (isSelected($column)) {
          acc += $column.value;
        }

        return acc;
      }, 0) > AXIS_MAX_SUM_VALUE
    );
  }

  isValidBlock(row: number, column: number): boolean {
    return true;
  }

  isValidGame(): boolean {
    return false;
  }
}

// function isValidRow(puzzle: Puzzle, row: number) {
//     const selectedRowCells: SelectedCells = {};

//     debugger;

//     let axisSum = 0;
//     const rowSize = puzzle.cells[row].length;

//     for (let i = 0; i < rowSize; i++) {
//       const column = puzzle.cells[row][i];
//       const isAlreadySelected =
//         (column.state === CellState.SELECTED ||
//           column.state === CellState.BLOCKED) &&
//         selectedRowCells[i];

//       if (isAlreadySelected) {
//         return false;
//       }

//       column.state === CellState.SELECTED && (selectedRowCells[i] = column);
//       axisSum += column.value;
//     }

//     const exceedMaximumAxisValue = axisSum > AXIS_MAX_SUM_VALUE;

//     return !exceedMaximumAxisValue;
//   }

//   function isValidColumn(puzzle: Puzzle, column: number) {
//     const selectedColumnCells: SelectedCells = {};

//     debugger;

//     let axisSum = 0;
//     const columnSize = puzzle.cells.length;

//     for (let i = 0; i < columnSize; i++) {
//       const row = puzzle.cells[i];
//       const columnInRow = row[column];

//       const isAlreadySelected =
//         (columnInRow.state === CellState.SELECTED ||
//           columnInRow.state === CellState.BLOCKED) &&
//         selectedColumnCells[i];

//       if (isAlreadySelected) {
//         return false;
//       }

//       selectedColumnCells[i] = columnInRow;
//       axisSum += columnInRow.value;
//     }

//     const exceedMaximumAxisValue = axisSum > AXIS_MAX_SUM_VALUE;

//     return !exceedMaximumAxisValue;
//   }
