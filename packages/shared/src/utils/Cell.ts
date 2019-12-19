import Cell from './../models/Cell';
import CellState from '../enums/CellState';

export function isDisabled(cell: Cell): boolean {
  return cell.state === CellState.DISABLED;
}

export default {
  isDisabled
};
