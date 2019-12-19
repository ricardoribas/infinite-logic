import Cell from './Cell';

export default class KyudokuCell extends Cell {
  toString(): string {
    return String(this.value);
  }
}
