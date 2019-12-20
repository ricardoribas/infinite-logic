import AbstractGameState from '@infinite/shared/src/game/state/AbstractGameState';
import { AXIS_MAX_SUM_VALUE } from '@infinite/shared/src/constants/Kyudoku';
import { PlayInfo } from '@infinite/shared/src/types/game';
import { isSelected } from '@infinite/shared/src/utils/KyudokuCell';

export default class KyudokuGameState extends AbstractGameState {
  private _rowStates: boolean[] = Array(AXIS_MAX_SUM_VALUE).fill(true);
  private _columnStates: boolean[] = Array(AXIS_MAX_SUM_VALUE).fill(true);
  private _selectedCells: number[] = Array(AXIS_MAX_SUM_VALUE).fill(0);

  update(info: PlayInfo): void {
    const { action, rowValid, columnValid, cell } = info;

    this.rowStates[action.row] = rowValid;
    this.columnStates[action.column] = columnValid;

    const oldSelectedCellCounter = this.selectedCells[cell.value - 1];
    const newSelectedCellCounter = Math.max(
      0,
      oldSelectedCellCounter + (isSelected(cell) ? 1 : -1)
    );

    this.selectedCells[cell.value - 1] = newSelectedCellCounter;
  }

  get rowStates(): boolean[] {
    return this._rowStates;
  }

  get columnStates(): boolean[] {
    return this._columnStates;
  }

  get selectedCells(): number[] {
    return this._selectedCells;
  }
}
