export default interface GameValidator<T> {
  isValidRow(row: number): boolean;
  isValidColumn(column: number): boolean;
  isValidBlock(row: number, column: number): boolean;
  hasWon(state: T): boolean;
}
