import Cell from '@infinite/shared/src/models/Cell';
import CellState from '@infinite/shared/src/enums/CellState';

describe('Cell Model', () => {
  it('Initialize cell with values', () => {
    const cell = new Cell(2, CellState.INVALID);

    expect(cell).toEqual({
      _value: 2,
      _state: CellState.INVALID
    });
    expect(cell.state).toBe(CellState.INVALID);
    expect(cell.value).toBe(2);
  });

  it('Initialize cell with defaults', () => {
    const cell = new Cell(3);

    expect(cell).toEqual({
      _value: 3,
      _state: CellState.NONE
    });
    expect(cell.state).toBe(CellState.NONE);
    expect(cell.value).toBe(3);
  });

  it('Should return the new value for the state', () => {
    const cell = new Cell(2, CellState.INVALID);

    cell.state = CellState.SELECTED;

    expect(cell.state).not.toBe(CellState.INVALID);
    expect(cell.state).toBe(CellState.SELECTED);
  });

  it('Should thrown when try to do a toString over an abstract class', () => {
    expect(() => {
      const cell = new Cell(2, CellState.NONE);

      cell.toString();
    }).toThrow('Not Implemented');
  });
});
