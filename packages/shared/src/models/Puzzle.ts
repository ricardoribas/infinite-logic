import Cell from '@infinite/shared/src/models/cell';
import PuzzleState from '@infinite/shared/src/enums/PuzzleState';

export default class Puzzle {
  private _size: number;

  static from(cells: Cell[][]): Puzzle {
    return new Puzzle(cells);
  }

  static fromPuzzle(puzzle: Puzzle): Puzzle {
    return new Puzzle(puzzle.cells, puzzle.state);
  }

  constructor(
    private _cells: Cell[][],
    private _state: PuzzleState = PuzzleState.NONE
  ) {
    this._size = _cells.length * _cells[0].length;
  }

  get cells(): Cell[][] {
    return this._cells;
  }

  get state(): PuzzleState {
    return this._state;
  }

  set state(newState: PuzzleState) {
    this._state = newState;
  }

  get size(): number {
    return this._size;
  }
}
