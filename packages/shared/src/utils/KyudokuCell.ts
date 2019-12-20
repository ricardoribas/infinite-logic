import Cell from './../models/cell';
import CellState from '../enums/CellState';

const STATES_SEQUENCE: CellState[] = [
  CellState.NONE,
  CellState.BLOCKED,
  CellState.SELECTED
];

export function getNextState(cell: Cell): CellState {
  const currentSequenceIndex = STATES_SEQUENCE.indexOf(cell.state);

  return STATES_SEQUENCE[(currentSequenceIndex + 1) % STATES_SEQUENCE.length];
}

export function isSelected(cell: Cell): boolean {
  return cell.state === CellState.SELECTED || cell.state === CellState.DISABLED;
}

export default {
  getNextState,
  isSelected
};
