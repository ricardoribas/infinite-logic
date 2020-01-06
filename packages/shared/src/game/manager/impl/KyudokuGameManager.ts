import AbstractGameManager from '@infinite/shared/src/game/manager/AbstractGameManager';
import Puzzle from '@infinite/shared/src/models/Puzzle';
import {
  getNextState,
  getPreviousState
} from '@infinite/shared/src/utils/KyudokuCell';
import KyudokuGameValidator from '@infinite/shared/src/game/validator/impl/KyudokuGameValidator';
import KyudokuPlayInfo from '@infinite/shared/src/models/game/impl/KyudokuPlayInfo';
import KyudokuGameState from '@infinite/shared/src/game/state/impl/KyudokuGameState';
import { PlayCoordinates } from '@infinite/shared/src/types/game';
import PuzzleState from '@infinite/shared/src/enums/PuzzleState';

export default class KyudokuGameManager extends AbstractGameManager<
  PlayCoordinates,
  KyudokuGameState,
  KyudokuPlayInfo
> {
  constructor(puzzle: Puzzle) {
    super(KyudokuGameState);

    this.gameState.initialize(puzzle);
  }

  play(action: PlayCoordinates, puzzle: Puzzle): Puzzle {
    super.play(action, puzzle);

    const cell = puzzle.cells[action.row][action.column];

    cell.state = getNextState(cell);

    const gameValidator = new KyudokuGameValidator(puzzle);

    const isValidRow = gameValidator.isValidRow(action.row);
    const isValidColumn = gameValidator.isValidColumn(action.column);

    const playInfo = new KyudokuPlayInfo({
      coordinates: action,
      cell,
      rowValid: isValidRow,
      columnValid: isValidColumn
    });

    this.gameSequence.push(playInfo);
    this.gameState.update(playInfo);

    puzzle.state = gameValidator.hasWon(puzzle, this.gameState)
      ? PuzzleState.FINISHED
      : PuzzleState.PROGRESS;

    return Puzzle.fromPuzzle(puzzle);
  }

  undo(puzzle: Puzzle): Puzzle {
    const lastPlay = this._gameSequence.pop();

    if (lastPlay) {
      this.updatePlay(lastPlay.coordinates, puzzle);

      const cell = lastPlay.cell;

      cell.state = getPreviousState(cell);

      puzzle.cells[lastPlay.coordinates.row][
        lastPlay.coordinates.column
      ] = cell;

      const gameValidator = new KyudokuGameValidator(puzzle);

      const isValidRow = gameValidator.isValidRow(lastPlay.coordinates.row);
      const isValidColumn = gameValidator.isValidColumn(
        lastPlay.coordinates.column
      );

      const undoPlayInfo = new KyudokuPlayInfo({
        coordinates: lastPlay.coordinates,
        cell,
        rowValid: isValidRow,
        columnValid: isValidColumn
      });

      this.gameState.update(undoPlayInfo);

      return Puzzle.fromPuzzle(puzzle);
    }

    return puzzle;
  }

  get gameSequence(): KyudokuPlayInfo[] {
    return this._gameSequence;
  }

  get gameState(): KyudokuGameState {
    return this._gameState;
  }
}
