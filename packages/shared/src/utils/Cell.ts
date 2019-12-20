import Cell from '@infinite/shared/src/models/cell';
import CellState from '@infinite/shared/src/enums/CellState';

export function isDisabled(cell: Cell): boolean {
  return cell.state === CellState.DISABLED;
}

export default {
  isDisabled
};
