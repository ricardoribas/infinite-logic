import AbstractGameValidator from '@infinite/shared/src/game/AbstractGameValidator';
import Puzzle from '@infinite/shared/src/models/Puzzle';
import Cell from '@infinite/shared/src/models/cell';

describe('AbstractGame Validaator', () => {
  let gameValidator: AbstractGameValidator;

  beforeEach(() => {
    const puzzleCells: Cell[][] = [];
    const puzzle = new Puzzle(puzzleCells);

    gameValidator = new AbstractGameValidator(puzzle);
  });

  it('Initialize with an empty puzzle', () => {
    const puzzleCells: Cell[][] = [];
    const puzzle = new Puzzle(puzzleCells);

    gameValidator = new AbstractGameValidator(puzzle);

    expect(gameValidator.puzzle).toBe(puzzle);
  });

  it('Should get the right puzzle after initializing it', () => {
    const puzzle = gameValidator.puzzle;

    expect(puzzle).toBeDefined();
  });

  it('Should throw while validating row', () => {
    expect(() => {
      gameValidator.isValidRow();
    }).toThrow('Method not implemented.');
  });

  it('Should throw while validating column', () => {
    expect(() => {
      gameValidator.isValidColumn();
    }).toThrow('Method not implemented.');
  });

  it('Should throw while validating block', () => {
    expect(() => {
      gameValidator.isValidBlock();
    }).toThrow('Method not implemented.');
  });

  it('Should throw while validating game', () => {
    expect(() => {
      gameValidator.isValidGame();
    }).toThrow('Method not implemented.');
  });
});
