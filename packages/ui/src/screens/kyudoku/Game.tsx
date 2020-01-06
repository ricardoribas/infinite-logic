import React, { FunctionComponent, Fragment, useEffect } from 'react';
import { View } from 'react-native';

import {
  Banner,
  createInterstitialAdRequest,
  loadInterstitial
} from '@infinite/firebase/src/Admob';
import KyudokuCell from '@infinite/shared/src/models/cell/impl/KyudokuCell';
import CellState from '@infinite/shared/src/enums/CellState';
import Puzzle from '@infinite/shared/src/models/Puzzle';
import KyudokuGame from '@infinite/ui/src/components/game/KyudokuGame';
import { getWidth } from '@infinite/mobile/src/shared/utils/Device';
import Header from '@infinite/ui/src/components/header';
import { HeaderType } from '@infinite/ui/src/shared/types/Header';
import GameInfo from '@infinite/ui/src/components/game/Info';
import { goToScreen } from '@infinite/shared/src/services/navigation';

const PUZZLE_WIDTH_SCREEN_PERCENTAGE = 0.9;

const KYUDOKU_PUZZLE_1 = [
  [
    new KyudokuCell(4),
    new KyudokuCell(4),
    new KyudokuCell(8),
    new KyudokuCell(6, CellState.SELECTED),
    new KyudokuCell(4),
    new KyudokuCell(5)
  ],
  [
    new KyudokuCell(8, CellState.BLOCKED),
    new KyudokuCell(5, CellState.BLOCKED),
    new KyudokuCell(3, CellState.SELECTED),
    new KyudokuCell(2, CellState.SELECTED),
    new KyudokuCell(3, CellState.BLOCKED),
    new KyudokuCell(1, CellState.SELECTED)
  ],
  [
    new KyudokuCell(4, CellState.BLOCKED),
    new KyudokuCell(9, CellState.BLOCKED),
    new KyudokuCell(5, CellState.SELECTED),
    new KyudokuCell(3, CellState.BLOCKED),
    new KyudokuCell(6, CellState.BLOCKED),
    new KyudokuCell(4, CellState.DISABLED)
  ],
  [
    new KyudokuCell(8, CellState.BLOCKED),
    new KyudokuCell(7),
    new KyudokuCell(7, CellState.BLOCKED),
    new KyudokuCell(7, CellState.BLOCKED),
    new KyudokuCell(9, CellState.BLOCKED),
    new KyudokuCell(3, CellState.BLOCKED)
  ],
  [
    new KyudokuCell(3, CellState.BLOCKED),
    new KyudokuCell(6, CellState.BLOCKED),
    new KyudokuCell(1, CellState.BLOCKED),
    new KyudokuCell(3, CellState.BLOCKED),
    new KyudokuCell(9, CellState.SELECTED),
    new KyudokuCell(3, CellState.BLOCKED)
  ],
  [
    new KyudokuCell(8, CellState.SELECTED),
    new KyudokuCell(5, CellState.BLOCKED),
    new KyudokuCell(5, CellState.BLOCKED),
    new KyudokuCell(2, CellState.BLOCKED),
    new KyudokuCell(1, CellState.BLOCKED),
    new KyudokuCell(8, CellState.BLOCKED)
  ]
];

function goToGameSuccess(): void {
  goToScreen('KyudokuGameSuccess');
}

const Game: FunctionComponent<{}> = () => {
  useEffect(() => {
    createInterstitialAdRequest({
      onAdFailedToLoad() {
        goToGameSuccess();
      },
      onAdClosed() {
        goToGameSuccess();
      }
    });
  }, []);

  const width = getWidth() * PUZZLE_WIDTH_SCREEN_PERCENTAGE;
  const height = width;

  return (
    <Fragment>
      <Header type={HeaderType.BACK} />
      <GameInfo />
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <KyudokuGame
          puzzle={Puzzle.from(KYUDOKU_PUZZLE_1)}
          style={{
            width,
            height
          }}
          onWin={(): void => {
            loadInterstitial();
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}
      >
        <Banner />
      </View>
    </Fragment>
  );
};

export default Game;
