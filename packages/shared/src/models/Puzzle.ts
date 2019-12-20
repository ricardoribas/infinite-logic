import Cell from '@infinite/shared/src/models/cell';

export default class Puzzle {
  static from(cells: Cell[][]): Puzzle {
    return new Puzzle(cells);
  }

  static fromPuzzle(puzzle: Puzzle): Puzzle {
    return new Puzzle(puzzle.cells);
  }

  constructor(private _cells: Cell[][]) {}

  get cells(): Cell[][] {
    return this._cells;
  }
}
