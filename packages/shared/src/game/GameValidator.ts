export default interface GameValidator {
  isValidRow(row: number): boolean;
  isValidColumn(column: number): boolean;
  isValidBlock(row: number, column: number): boolean;
  hasWon(): boolean;
}
