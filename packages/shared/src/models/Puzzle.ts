import Cell from './Cell';

export default class Puzzle {
  static from(cells: Cell[][]): Puzzle {
    return new Puzzle(cells);
  }

  constructor(private _cells: Cell[][]) {}

  get cells(): Cell[][] {
    return this._cells;
  }
}
