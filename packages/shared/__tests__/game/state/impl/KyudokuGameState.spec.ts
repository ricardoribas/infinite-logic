import KyudokuGameState from '@infinite/shared/src/game/state/impl/KyudokuGameState';
import Puzzle from '@infinite/shared/src/models/Puzzle';
import Cell from '@infinite/shared/src/models/cell';
import CellState from '@infinite/shared/src/enums/CellState';
import KyudokuPlayInfo from '@infinite/shared/src/models/game/impl/KyudokuPlayInfo';
import { AXIS_MAX_SUM_VALUE } from '../../../../src/constants/Kyudoku';

describe('KyudokuGameState Model', () => {
  let GAME_STATE: KyudokuGameState;

  describe('Initialize state cells', () => {
    beforeEach(() => {
      GAME_STATE = new KyudokuGameState();
    });

    it('Should have all rows valid by default', () => {
      expect(GAME_STATE.rowStates).toStrictEqual(Array(9).fill(true));
    });

    it('Should have all columns valid by default', () => {
      expect(GAME_STATE.columnStates).toStrictEqual(Array(9).fill(true));
    });

    it('Should not have any selected cells', () => {
      expect(GAME_STATE.selectedCells).toStrictEqual(Array(9).fill(0));
    });

    it('Should return no disabled cells after initializing', () => {
      const puzzle: Puzzle = new Puzzle([]);

      GAME_STATE.initialize(puzzle);

      expect(GAME_STATE.selectedCells).toStrictEqual(Array(9).fill(0));
      expect(GAME_STATE.disabledCells).toStrictEqual(Array(9).fill(0));
    });

    it('Should return some disabled cells after initializing', () => {
      const puzzle: Puzzle = new Puzzle([
        [new Cell(2, CellState.DISABLED), new Cell(8, CellState.NONE)],
        [new Cell(1, CellState.NONE), new Cell(8, CellState.NONE)],
        [new Cell(8, CellState.DISABLED), new Cell(8, CellState.NONE)],
        [new Cell(9, CellState.NONE), new Cell(8, CellState.NONE)]
      ]);

      GAME_STATE.initialize(puzzle);

      expect(GAME_STATE.selectedCells).toStrictEqual(Array(9).fill(0));
      expect(GAME_STATE.disabledCells).toStrictEqual([
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ]);
    });
  });

  describe('Update state', () => {
    beforeEach(() => {
      GAME_STATE = new KyudokuGameState();
    });

    it('From a play with all valid axis', () => {
      const playInfo = new KyudokuPlayInfo({
        rowValid: true,
        columnValid: true,
        coordinates: {
          row: 1,
          column: 2
        },
        cell: new Cell(4, CellState.SELECTED)
      });

      GAME_STATE.update(playInfo);

      expect(GAME_STATE.rowStates[0]).toBeTruthy();
      expect(GAME_STATE.columnStates[1]).toBeTruthy();
      expect(GAME_STATE.selectedCells[3]).toBe(1);
      expect(GAME_STATE.selectedCells).toStrictEqual([
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0
      ]);
    });

    it('From a play with invalid column', () => {
      const playInfo = new KyudokuPlayInfo({
        rowValid: true,
        columnValid: false,
        coordinates: {
          row: 2,
          column: 3
        },
        cell: new Cell(4, CellState.SELECTED)
      });

      GAME_STATE.update(playInfo);

      expect(GAME_STATE.rowStates[2]).toBeTruthy();
      expect(GAME_STATE.columnStates[3]).toBeFalsy();
      expect(GAME_STATE.selectedCells[3]).toBe(1);
      expect(GAME_STATE.selectedCells).toStrictEqual([
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0
      ]);
    });

    it('From a play with invalid row', () => {
      const playInfo = new KyudokuPlayInfo({
        rowValid: false,
        columnValid: true,
        coordinates: {
          row: 1,
          column: 5
        },
        cell: new Cell(8, CellState.SELECTED)
      });

      GAME_STATE.update(playInfo);

      expect(GAME_STATE.rowStates[1]).toBeFalsy();
      expect(GAME_STATE.columnStates[5]).toBeTruthy();
      expect(GAME_STATE.selectedCells[7]).toBe(1);
      expect(GAME_STATE.selectedCells).toStrictEqual([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0
      ]);
    });

    describe('Execute several play', () => {
      let FULL_GAME_STATE: KyudokuGameState;

      beforeAll(() => {
        FULL_GAME_STATE = new KyudokuGameState();
      });

      it('Execute first play', () => {
        const firstPlay = new KyudokuPlayInfo({
          rowValid: true,
          columnValid: true,
          coordinates: {
            row: 1,
            column: 5
          },
          cell: new Cell(8, CellState.SELECTED)
        });

        FULL_GAME_STATE.update(firstPlay);

        expect(FULL_GAME_STATE.selectedCells).toStrictEqual([
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0
        ]);
      });

      it('Execute second play', () => {
        const secondPlay = new KyudokuPlayInfo({
          rowValid: true,
          columnValid: true,
          coordinates: {
            row: 1,
            column: 5
          },
          cell: new Cell(4, CellState.SELECTED)
        });

        FULL_GAME_STATE.update(secondPlay);

        expect(FULL_GAME_STATE.selectedCells).toStrictEqual([
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          1,
          0
        ]);
      });

      it('Execute third play with a repeated value', () => {
        const secondPlay = new KyudokuPlayInfo({
          rowValid: true,
          columnValid: true,
          coordinates: {
            row: 1,
            column: 5
          },
          cell: new Cell(4, CellState.SELECTED)
        });

        FULL_GAME_STATE.update(secondPlay);

        expect(FULL_GAME_STATE.selectedCells).toStrictEqual([
          0,
          0,
          0,
          2,
          0,
          0,
          0,
          1,
          0
        ]);
      });
    });
  });

  describe('Has all values selected', () => {
    it('Should not have all values selected', () => {
      const gameState = new KyudokuGameState();

      expect(gameState.hasAllValuesSelected()).toBeFalsy();
    });

    it('Should have all values selected', () => {
      const gameState = new KyudokuGameState();

      for (let i = 1; i <= AXIS_MAX_SUM_VALUE; i++) {
        const playInfo = new KyudokuPlayInfo({
          rowValid: true,
          columnValid: true,
          coordinates: {
            row: 1,
            column: 2
          },
          cell: new Cell(i, CellState.SELECTED)
        });

        gameState.update(playInfo);
      }

      expect(gameState.hasAllValuesSelected()).toBeTruthy();
    });

    it('Should not have all values selected as some are repeated', () => {
      const gameState = new KyudokuGameState();

      for (let i = 1; i <= AXIS_MAX_SUM_VALUE; i++) {
        const playInfo = new KyudokuPlayInfo({
          rowValid: true,
          columnValid: true,
          coordinates: {
            row: 1,
            column: 2
          },
          cell: new Cell(i, CellState.SELECTED)
        });

        gameState.update(playInfo);
      }

      const repeatedPlayInfo = new KyudokuPlayInfo({
        rowValid: true,
        columnValid: true,
        coordinates: {
          row: 1,
          column: 2
        },
        cell: new Cell(2, CellState.SELECTED)
      });

      gameState.update(repeatedPlayInfo);

      expect(gameState.hasAllValuesSelected()).toBeFalsy();
      expect(gameState.selectedCells[1]).toBe(2);
    });
  });

  describe('Has disabled cells', () => {
    it('Should not have disabled cells selected', () => {
      const gameState = new KyudokuGameState();

      const puzzle: Puzzle = new Puzzle([
        [new Cell(4, CellState.DISABLED), new Cell(8, CellState.DISABLED)]
      ]);

      gameState.initialize(puzzle);

      for (let i = 1; i <= 2; i++) {
        const playInfo = new KyudokuPlayInfo({
          rowValid: true,
          columnValid: true,
          coordinates: {
            row: 1,
            column: 2
          },
          cell: new Cell(i, CellState.SELECTED)
        });

        gameState.update(playInfo);
      }

      expect(gameState.hasDisabledCellsSelected()).toBeFalsy();
    });

    it('Should have disabled cells selected', () => {
      const gameState = new KyudokuGameState();

      const puzzle: Puzzle = new Puzzle([
        [new Cell(4, CellState.DISABLED), new Cell(8, CellState.DISABLED)]
      ]);

      gameState.initialize(puzzle);

      for (let i = 1; i <= AXIS_MAX_SUM_VALUE; i++) {
        const playInfo = new KyudokuPlayInfo({
          rowValid: true,
          columnValid: true,
          coordinates: {
            row: 1,
            column: 2
          },
          cell: new Cell(i, CellState.SELECTED)
        });

        gameState.update(playInfo);
      }

      expect(gameState.hasDisabledCellsSelected()).toBeTruthy();
    });
  });
});
