import AbstractGameManager from '@infinite/shared/src/game/manager/AbstractGameManager';
import KyudokuGameValidator from '@infinite/shared/src/game/validator/impl/KyudokuGameValidator';
import {
  getNextState,
  isSelected
} from '@infinite/shared/src/utils/KyudokuCell';
import Puzzle from '@infinite/shared/src/models/Puzzle';
import { AXIS_MAX_SUM_VALUE } from '@infinite/shared/src/constants/Kyudoku';
import CellState from '../../../enums/CellState';

type PlayCoordinates = {
  row: number;
  column: number;
};

export default class KyudokuGameManager extends AbstractGameManager<
  PlayCoordinates
> {
  private rowStates: boolean[] = Array(AXIS_MAX_SUM_VALUE).fill(true);
  private columnStates: boolean[] = Array(AXIS_MAX_SUM_VALUE).fill(true);
  private selectedCells: number[] = Array(AXIS_MAX_SUM_VALUE).fill(0);

  play(action: PlayCoordinates, puzzle: Puzzle): Puzzle {
    super.play(action, puzzle);

    const cell = puzzle.cells[action.row][action.column];

    cell.state = getNextState(cell);

    const gameValidator = new KyudokuGameValidator(puzzle);

    this.rowStates[action.row] = gameValidator.isValidRow(action.row);
    this.columnStates[action.column] = gameValidator.isValidColumn(
      action.column
    );

    const oldSelectedCellCounter = this.selectedCells[cell.value - 1];
    const newSelectedCellCounter = Math.max(
      0,
      oldSelectedCellCounter + (isSelected(cell) ? 1 : -1)
    );

    this.selectedCells[cell.value - 1] = newSelectedCellCounter;

    return Puzzle.fromPuzzle(puzzle);
  }
}
