import AbstractGameState from '@infinite/shared/src/game/state/AbstractGameState';
import KyudokuPlayInfo from '@infinite/shared/src/models/game/impl/KyudokuPlayInfo';
import Puzzle from '@infinite/shared/src/models/Puzzle';
import Cell from '@infinite/shared/src/models/cell';
import CellState from '@infinite/shared/src/enums/CellState';

describe('AbstractGameState Model', () => {
  it('Should throw while calling the initialize method', () => {
    expect(() => {
      const gameState = new AbstractGameState<KyudokuPlayInfo>();

      gameState.initialize(new Puzzle([]));
    }).toThrow('Method not implemented.');
  });

  it('Should throw while calling the update method', () => {
    expect(() => {
      const gameState = new AbstractGameState<KyudokuPlayInfo>();

      gameState.update(
        new KyudokuPlayInfo({
          cell: new Cell(4, CellState.BLOCKED),
          coordinates: { row: 2, column: 10 },
          rowValid: false,
          columnValid: true
        })
      );
    }).toThrow('Method not implemented.');
  });
});
