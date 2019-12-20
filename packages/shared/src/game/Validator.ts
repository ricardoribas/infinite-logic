export default interface Validator {
  isValidRow(row: number): boolean;
  isValidColumn(column: number): boolean;
  isValidBlock(row: number, column: number): boolean;
  isValidGame(): boolean;
}
