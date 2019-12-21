import AbstractGameManager from '@infinite/shared/src/game/manager/AbstractGameManager';
import KyudokuPlayInfo from '@infinite/shared/src/models/game/impl/KyudokuPlayInfo';
import KyudokuGameState from '@infinite/shared/src/game/state/impl/KyudokuGameState';
import { PlayCoordinates } from '@infinite/shared/src/types/game';
import Puzzle from '@infinite/shared/src/models/Puzzle';

describe('AbstractGameManager Model', () => {
  it('The game state should be defined', () => {
    const gameManager = new AbstractGameManager<
      PlayCoordinates,
      KyudokuGameState,
      KyudokuPlayInfo
    >(KyudokuGameState);

    expect(gameManager.gameState).toBeDefined();
  });

  it('Should get the last play', () => {
    const gameManager = new AbstractGameManager<
      PlayCoordinates,
      KyudokuGameState,
      KyudokuPlayInfo
    >(KyudokuGameState);

    gameManager.play(
      {
        row: 2,
        column: 10
      },
      new Puzzle([])
    );

    expect(gameManager.lastPlay).toEqual({
      row: 2,
      column: 10
    });
  });
});
