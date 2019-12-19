import Cell from './../models/Cell';
import CellState from '../enums/CellState';

export function isDisabled(cell: Cell): boolean {
  return cell.state === CellState.DISABLED;
}

export function isBlocked(cell: Cell): boolean {
  return cell.state === CellState.BLOCKED;
}

export function isSelected(cell: Cell): boolean {
  return cell.state === CellState.SELECTED;
}

export default {
  isDisabled,
  isBlocked,
  isSelected
}
