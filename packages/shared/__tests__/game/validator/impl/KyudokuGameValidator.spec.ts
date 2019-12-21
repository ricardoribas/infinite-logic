import KyudokuGameValidator from '@infinite/shared/src/game/validator/impl/KyudokuGameValidator';
import Puzzle from '@infinite/shared/src/models/Puzzle';

describe('Kyudoku Game Validator', () => {
  it('Should be always valid the blocks', () => {
    const getRandomValue = (): number => Math.floor(Math.random() * 10);
    const gameValidator = new KyudokuGameValidator(new Puzzle([]));

    expect(
      gameValidator.isValidBlock(getRandomValue(), getRandomValue())
    ).toBeTruthy();
  });
});
