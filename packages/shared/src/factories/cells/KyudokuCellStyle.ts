import { StyleProp, ViewStyle } from 'react-native';

import Cell from "../../models/Cell";
import { DISABLED_CELL, BLOCKED_CELL, SELECTED_CELL } from '../../theme/cells/Kyudoku';
import CellState from '../../enums/CellState';

export default class KyudokuCellStyleFactory {
    static from(cell: Cell): StyleProp<ViewStyle> {
        switch(cell.state) {
            case CellState.DISABLED:
                return DISABLED_CELL;
            case CellState.BLOCKED:
                return BLOCKED_CELL;
            case CellState.SELECTED:
                return SELECTED_CELL
            default:
                return {}
        }
    }
}