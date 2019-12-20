import AbstractGameValidator from '../AbstractGameValidator';

export default class KyudokuGameValidator extends AbstractGameValidator {
  isValidRow(row: number) {
    return false;
  }

  isValidColumn(column: number) {
    return false;
  }

  isValidBlock(row: number, column: number) {
    return true;
  }

  isValidGame() {
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
