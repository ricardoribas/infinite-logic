import AbstractGameState from '@infinite/shared/src/game/state/AbstractGameState';
import Puzzle from '@infinite/shared/src/models/Puzzle';
import { AXIS_MAX_SUM_VALUE } from '@infinite/shared/src/constants/Kyudoku';
import KyudokuPlayInfo from '@infinite/shared/src/models/game/impl/KyudokuPlayInfo';
import { isSelected, isDisabled } from '@infinite/shared/src/utils/KyudokuCell';

export default class KyudokuGameState extends AbstractGameState<
  KyudokuPlayInfo
> {
  private _rowStates: boolean[] = Array(AXIS_MAX_SUM_VALUE).fill(true);
  private _columnStates: boolean[] = Array(AXIS_MAX_SUM_VALUE).fill(true);
  private _selectedCells: number[] = Array(AXIS_MAX_SUM_VALUE).fill(0);
  private _disabledCells: number[] = Array(AXIS_MAX_SUM_VALUE).fill(0);

  initialize(puzzle: Puzzle): void {
    for (let r = 0; r < puzzle.cells.length; r++) {
      for (let c = 0; c < puzzle.cells[r].length; c++) {
        const cell = puzzle.cells[r][c];

        if (isDisabled(cell)) {
          this._disabledCells[cell.value - 1] = 1;
        }
      }
    }
  }

  update(playInfo: KyudokuPlayInfo): void {
    const coordinates = playInfo.coordinates;
    const rowValid = playInfo.isRowValid();
    const columnValid = playInfo.isColumnValid();
    const cell = playInfo.cell;

    this.rowStates[coordinates.row] = rowValid;
    this.columnStates[coordinates.column] = columnValid;

    const oldSelectedCellCounter = this.selectedCells[cell.value - 1];
    const newSelectedCellCounter = Math.max(
      0,
      oldSelectedCellCounter + (isSelected(cell) ? 1 : -1)
    );

    this.selectedCells[cell.value - 1] = newSelectedCellCounter;
  }

  hasAllValuesSelected(): boolean {
    return this.selectedCells.every((c) => c === 1);
  }

  hasDisabledCellsSelected(): boolean {
    return (
      this.selectedCells.filter(
        (_c, index) => _c > 0 && this.disabledCells[index] > 0
      ).length > 0
    );
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
    return this._selectedCells;
  }
}
