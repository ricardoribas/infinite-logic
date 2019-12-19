import CellState from '../enums/CellState';

export default class Cell {
  constructor(
    protected _value: Number,
    protected _state: CellState = CellState.NONE
  ) {}

  get state() {
    return this._state;
  }

  set state(newState: CellState) {
    this._state = newState;
  }

  get value() {
    return this._value;
  }

  toString(): String {
    throw new Error('Not Implemented');
  }
}
