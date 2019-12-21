import Cell from '@infinite/shared/src/models/cell';
import PuzzleState from '@infinite/shared/src/enums/PuzzleState';

export default class Puzzle {
  static from(cells: Cell[][]): Puzzle {
    return new Puzzle(cells);
  }

  static fromPuzzle(puzzle: Puzzle): Puzzle {
    return new Puzzle(puzzle.cells, puzzle.state);
  }

  constructor(
    private _cells: Cell[][],
    private _state: PuzzleState = PuzzleState.NONE
  ) {}

  get cells(): Cell[][] {
    return this._cells;
  }

  get state(): PuzzleState {
    return this._state;
  }

  set state(newState: PuzzleState) {
    this._state = newState;
  }
}
