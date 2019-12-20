import KyudokuGameValidator from '@infinite/shared/src/game/impl/KyudokuGameValidator';

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

  describe('Validate Columns', () => {
    it('Should be valid column if the game is empty', () => {});

    it('Should be valid column if all positions are blocked', () => {});

    it('Should be valid column if all positions are not selected', () => {});

    it('Should invalid column if some positions exceed the maximum', () => {});
  });
});
