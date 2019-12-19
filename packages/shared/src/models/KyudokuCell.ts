import Cell from './Cell';

export default class KyudokuCell extends Cell {
  toString(): String {
    return String(this.value);
  }
}
