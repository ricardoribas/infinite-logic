import { transformIntoParametrizedJest } from '@infinite/shared/src/utils/Jest';
import Puzzle from '@infinite/shared/src/models/Puzzle';

const KYUDOKU_GAMES_DATASET = [
  {
    input: new Puzzle([]),
    output: false
  }
];

export default transformIntoParametrizedJest<Puzzle, boolean>(
  KYUDOKU_GAMES_DATASET
);
