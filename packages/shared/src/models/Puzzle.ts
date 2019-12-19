import Cell from './Cell';

export default class Puzzle {
  static from(cells: Cell[][]) {
    return new Puzzle(cells);
  }

  constructor(private _cells: Cell[][]) {}

  get cells() {
    return this._cells;
  }
}
