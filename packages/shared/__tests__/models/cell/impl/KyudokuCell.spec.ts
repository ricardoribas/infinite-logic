import KyudokuCell from '@infinite/shared/src/models/cell/impl/KyudokuCell';
import CellState from '@infinite/shared/src/enums/CellState';

describe('KyudokuCell Model', () => {
  it('Initialize kyudoku cell with values', () => {
    const kyudokuCell = new KyudokuCell(2, CellState.INVALID);

    expect(kyudokuCell).toEqual({
      _value: 2,
      _state: CellState.INVALID
    });
    expect(kyudokuCell.state).toBe(CellState.INVALID);
    expect(kyudokuCell.value).toBe(2);
  });

  it('Initialize kyudoku cell with defaults', () => {
    const kyudokuCell = new KyudokuCell(3);

    expect(kyudokuCell).toEqual({
      _value: 3,
      _state: CellState.NONE
    });
    expect(kyudokuCell.state).toBe(CellState.NONE);
    expect(kyudokuCell.value).toBe(3);
  });

  it('Should return the new value for the state', () => {
    const kyudokuCell = new KyudokuCell(2, CellState.INVALID);

    kyudokuCell.state = CellState.SELECTED;

    expect(kyudokuCell.state).not.toBe(CellState.INVALID);
    expect(kyudokuCell.state).toBe(CellState.SELECTED);
  });

  it('Should get the value when doing a toString', () => {
    const kyudokuCell = new KyudokuCell(2, CellState.NONE);

    expect(kyudokuCell.toString()).toBe('2');
  });
});
