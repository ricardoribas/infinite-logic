import Cell from '@infinite/shared/src/models/cell';
import CellState from '@infinite/shared/src/enums/CellState';

const STATES_SEQUENCE: CellState[] = [
  CellState.NONE,
  CellState.BLOCKED,
  CellState.SELECTED
];

export function getNextState(cell: Cell): CellState {
  const currentSequenceIndex = STATES_SEQUENCE.indexOf(cell.state);

  return STATES_SEQUENCE[(currentSequenceIndex + 1) % STATES_SEQUENCE.length];
}

export function getPreviousState(cell: Cell): CellState {
  const currentSequenceIndex = STATES_SEQUENCE.indexOf(cell.state);

  return STATES_SEQUENCE[
    (currentSequenceIndex - 1 + 3) % STATES_SEQUENCE.length
  ];
}

export function isDisabled(cell: Cell): boolean {
  return cell.state === CellState.DISABLED;
}

export function isSelected(cell: Cell): boolean {
  return cell.state === CellState.SELECTED;
}

export function hasState(cell: Cell): boolean {
  return cell.state !== CellState.NONE;
}

export default {
  getNextState,
  getPreviousState,
  isSelected
};
