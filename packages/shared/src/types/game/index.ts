import Cell from '@infinite/shared/src/models/cell';

export type PlayCoordinates = {
  row: number;
  column: number;
};

export type PlayInfo = {
  cell: Cell;
  action: PlayCoordinates;
  rowValid: boolean;
  columnValid: boolean;
};
