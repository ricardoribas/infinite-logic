import KyudokuGameValidator from '@infinite/shared/src/game/impl/KyudokuGameValidator';
import Puzzle from '@infinite/shared/src/models/Puzzle';

import KyudokuGameDataset from './KyudokuGameDataset';

describe('Kyudoku Game Validator', () => {
  describe('Kyudoku game parametrized test with different row scenarios', () => {
    it.each(KyudokuGameDataset)(
      '.generateDeliveriesCalendar(%o)',
      (input, expected) => {
        const validator = new KyudokuGameValidator(input);

        expect(validator.isValidGame()).toBe(expected);
      }
    );
  });

  it('Should be always valid the blocks', () => {
    const getRandomValue = (): number => Math.floor(Math.random() * 10);
    const gameValidator = new KyudokuGameValidator(new Puzzle([]));

    expect(
      gameValidator.isValidBlock(getRandomValue(), getRandomValue())
    ).toBeTruthy();
  });
});
