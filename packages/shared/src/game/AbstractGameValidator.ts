import Validator from './Validator';
import Puzzle from './../models/Puzzle';

export default class AbstractGameValidator implements Validator {
  constructor(protected _puzzle: Puzzle) {}

  isValidRow(): boolean {
    throw new Error('Method not implemented.');
  }
  isValidColumn(): boolean {
    throw new Error('Method not implemented.');
  }
  isValidBlock(): boolean {
    throw new Error('Method not implemented.');
  }
  isValidGame(): boolean {
    throw new Error('Method not implemented.');
  }

  get puzzle(): Puzzle {
    return this._puzzle;
  }
}
