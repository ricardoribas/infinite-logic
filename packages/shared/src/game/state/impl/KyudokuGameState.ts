import AbstractGameState from '@infinite/shared/src/game/state/AbstractGameState';
import Puzzle from '@infinite/shared/src/models/Puzzle';
import { AXIS_MAX_SUM_VALUE } from '@infinite/shared/src/constants/Kyudoku';
import KyudokuPlayInfo from '@infinite/shared/src/models/game/impl/KyudokuPlayInfo';
import { isSelected, isDisabled } from '@infinite/shared/src/utils/KyudokuCell';
import { PlayCoordinates } from '@infinite/shared/src/types/game';
import Cell from '@infinite/shared/src/models/cell';

function getCellIndex(cell: Cell): number {
  return cell.value - 1;
}

export default class KyudokuGameState extends AbstractGameState<
  KyudokuPlayInfo
> {
  private _rowStates: boolean[] = Array(AXIS_MAX_SUM_VALUE).fill(true);
  private _columnStates: boolean[] = Array(AXIS_MAX_SUM_VALUE).fill(true);
  private _disabledCells: number[] = Array(AXIS_MAX_SUM_VALUE).fill(0);
  private _selectedCells: PlayCoordinates[][] = Array(AXIS_MAX_SUM_VALUE).fill(
    []
  );

  initialize(puzzle: Puzzle): void {
    for (let r = 0; r < puzzle.cells.length; r++) {
      for (let c = 0; c < puzzle.cells[r].length; c++) {
        const cell = puzzle.cells[r][c];

        if (isDisabled(cell)) {
          this._disabledCells[getCellIndex(cell)] = 1;
        } else if (isSelected(cell)) {
          this._selectedCells[getCellIndex(cell)].push({
            row: r,
            column: c
          });
        }
      }
    }
  }

  addSelectedCell(cell: Cell, coordinates: PlayCoordinates): void {
    this._selectedCells[getCellIndex(cell)].push(coordinates);
  }

  removeSelectedCell(cell: Cell, coordinates: PlayCoordinates): void {
    const allCoordinates = this._selectedCells[getCellIndex(cell)];

    this._selectedCells[getCellIndex(cell)] = allCoordinates.filter(
      (c) => c.row !== coordinates.row || c.column !== coordinates.column
    );
  }

  update(playInfo: KyudokuPlayInfo): void {
    const coordinates = playInfo.coordinates;
    const rowValid = playInfo.isRowValid();
    const columnValid = playInfo.isColumnValid();
    const cell = playInfo.cell;

    this._rowStates[coordinates.row] = rowValid;
    this._columnStates[coordinates.column] = columnValid;

    if (isSelected(cell)) {
      this.addSelectedCell(cell, coordinates);
    } else {
      this.removeSelectedCell(cell, coordinates);
    }
  }

  get rowStates(): boolean[] {
    return this._rowStates;
  }

  get columnStates(): boolean[] {
    return this._columnStates;
  }

  get disabledCells(): number[] {
    return this._disabledCells;
  }

  get selectedCells(): number[] {
    return this._selectedCells.map((c) => c.length);
  }
}
