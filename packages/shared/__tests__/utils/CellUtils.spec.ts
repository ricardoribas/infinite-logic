import { isDisabled } from '@infinite/shared/src/utils/Cell';
import Cell from '@infinite/shared/src/models/Cell';
import CellState from '@infinite/shared/src/enums/CellState';

describe('Cell Utils', () => {
  it('Should return state disabled', () => {
    const cell = new Cell(10, CellState.DISABLED);

    expect(isDisabled(cell)).toBeTruthy();
  });

  it('A stateless cell should not be disabled', () => {
    const statelessCell = new Cell(10, CellState.NONE);

    expect(isDisabled(statelessCell)).toBeFalsy();
  });

  it('A blocked cell should not be disabled', () => {
    const blockedCell = new Cell(10, CellState.BLOCKED);

    expect(isDisabled(blockedCell)).toBeFalsy();
  });

  it('A selected cell should not be disabled', () => {
    const selectedCell = new Cell(10, CellState.SELECTED);

    expect(isDisabled(selectedCell)).toBeFalsy();
  });

  it('An invalid cell should not be disabled', () => {
    const selectedCell = new Cell(10, CellState.INVALID);

    expect(isDisabled(selectedCell)).toBeFalsy();
  });
});
