import Cell from '@infinite/shared/src/models/cell';

export default class KyudokuCell extends Cell {
  toString(): string {
    return String(this.value);
  }
}
