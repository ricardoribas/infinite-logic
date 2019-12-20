import AbstractGameManager from '@infinite/shared/src/game/manager/AbstractGameManager';
import Puzzle from '@infinite/shared/src/models/Puzzle';
import KyudokuGameState from '@infinite/shared/src/game/state/impl/KyudokuGameState';
import { PlayCoordinates } from '@infinite/shared/src/types/game';
import { getNextState } from '@infinite/shared/src/utils/KyudokuCell';
import KyudokuGameValidator from '@infinite/shared/src/game/validator/impl/KyudokuGameValidator';
import KyudokuPlayInfo from '@infinite/shared/src/models/game/impl/KyudokuPlayInfo';

export default class KyudokuGameManager extends AbstractGameManager<
  PlayCoordinates,
  KyudokuGameState,
  KyudokuPlayInfo
> {
  constructor() {
    super(KyudokuGameState);
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

    this._gameState.update(playInfo);

    return Puzzle.fromPuzzle(puzzle);
  }

  get gameState(): KyudokuGameState {
    return this._gameState;
  }
}
