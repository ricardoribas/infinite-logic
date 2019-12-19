import { StyleProp, ViewStyle } from 'react-native';

import Cell from '@infinite/shared/src/models/Cell';
import CellState from '@infinite/shared/src/enums/CellState';
import {
  DISABLED_CELL,
  BLOCKED_CELL,
  SELECTED_CELL
} from '@infinite/shared/src/theme/cells/Kyudoku';

export default class KyudokuCellStyleFactory {
  static from(cell: Cell): StyleProp<ViewStyle> {
    switch (cell.state) {
      case CellState.DISABLED:
        return DISABLED_CELL;
      case CellState.BLOCKED:
        return BLOCKED_CELL;
      case CellState.SELECTED:
        return SELECTED_CELL;
      default:
        return {};
    }
  }
}
