import KyudokuCellStyleFactory from '@infinite/shared/src/factories/cells/KyudokuCellStyle';
import Cell from '@infinite/shared/src/models/cell';
import CellState from '@infinite/shared/src/enums/CellState';

describe('KyudokuCellStyle Factory', () => {
  it('Should return disabled cell styles', () => {
    const cell = new Cell(2, CellState.DISABLED);

    expect(KyudokuCellStyleFactory.from(cell)).toStrictEqual({
      borderColor: 'black',
      borderRadius: 20,
      borderWidth: 1,
      height: 40,
      width: 40
    });
  });

  it('Should return blocked cell styles', () => {
    const cell = new Cell(2, CellState.BLOCKED);

    expect(KyudokuCellStyleFactory.from(cell)).toStrictEqual({
      backgroundColor: 'black',
      height: '100%',
      width: '100%'
    });
  });

  it('Should return selected cell styles', () => {
    const cell = new Cell(2, CellState.SELECTED);

    expect(KyudokuCellStyleFactory.from(cell)).toStrictEqual({
      borderColor: 'blue',
      borderRadius: 20,
      borderWidth: 1,
      height: 40,
      width: 40
    });
  });

  it('Should return default cell styles', () => {
    const cell = new Cell(2, CellState.NONE);

    expect(KyudokuCellStyleFactory.from(cell)).toStrictEqual({});
  });
});
