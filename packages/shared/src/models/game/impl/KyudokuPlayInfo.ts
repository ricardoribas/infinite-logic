import AbstractPlayInfo from '@infinite/shared/src/models/game/AbstractPlayInfo';
import Cell from '@infinite/shared/src/models/cell';
import { PlayCoordinates } from '@infinite/shared/src/types/game';

type Info = {
  cell: Cell;
  coordinates: PlayCoordinates;
  rowValid: boolean;
  columnValid: boolean;
};

export default class KyudokuPlayInfo extends AbstractPlayInfo {
  constructor(private _info: Info) {
    super();
  }

  get cell(): Cell {
    return this._info.cell;
  }

  get coordinates(): PlayCoordinates {
    return this._info.coordinates;
  }

  isRowValid(): boolean {
    return this._info.rowValid;
  }

  isColumnValid(): boolean {
    return this._info.columnValid;
  }
}
