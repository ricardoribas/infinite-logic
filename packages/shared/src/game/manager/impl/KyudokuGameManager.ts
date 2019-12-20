import AbstractGameManager from '@infinite/shared/src/game/manager/AbstractGameManager';
import KyudokuGameValidator from '@infinite/shared/src/game/validator/impl/KyudokuGameValidator';
import { getNextState } from '@infinite/shared/src/utils/KyudokuCell';
import PuzzleState from '@infinite/shared/src/enums/PuzzleState';
import Puzzle from '@infinite/shared/src/models/Puzzle';

type PlayCoordinates = {
  row: number;
  column: number;
};

export default class KyudokuGameManager extends AbstractGameManager<
  PlayCoordinates
> {
  play(action: PlayCoordinates, puzzle: Puzzle): Puzzle {
    super.play(action, puzzle);

    const cell = puzzle.cells[action.row][action.column];

    cell.state = getNextState(cell);

    const gameValidator = new KyudokuGameValidator(puzzle);

    let gameState = PuzzleState.NONE;

    if (!gameValidator.isValidRow(action.row)) {
      gameState |= PuzzleState.INVALID_ROW;
    }

    if (!gameValidator.isValidColumn(action.column)) {
      gameState |= PuzzleState.INVALID_COLUM;
    }

    puzzle.state = gameState;

    return Puzzle.fromPuzzle(puzzle);
  }
}
