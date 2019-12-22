import CellState from '@infinite/shared/src/enums/CellState';

export default class Cell {
  constructor(
    protected _value: number,
    protected _state: CellState = CellState.NONE
  ) {}

  get state(): CellState {
    return this._state;
  }

  set state(newState: CellState) {
    this._state = newState;
  }

  get value(): number {
    return this._value;
  }

  toString(): string {
    throw new Error('Not Implemented');
  }
}
