import CellState from '../enums/CellState';

export default class Cell {
  constructor(
    protected value: Number,
    protected state: CellState = CellState.NONE
  ) {}

  toString(): String {
    throw new Error('Not Implemented');
  }
}
