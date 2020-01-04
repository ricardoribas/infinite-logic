import React, { FunctionComponent, Fragment, useEffect } from 'react';
import { View } from 'react-native';

import KyudokuCell from '@infinite/shared/src/models/cell/impl/KyudokuCell';
import CellState from '@infinite/shared/src/enums/CellState';
import Puzzle from '@infinite/shared/src/models/Puzzle';
import KyudokuGame from '@infinite/ui/src/components/game/KyudokuGame';
import { getWidth } from '@infinite/mobile/src/shared/utils/Device';
import Text from '@infinite/ui/src/components/text';
import Button from '@infinite/ui/src/components/button';
import Header from '@infinite/ui/src/components/header';
import { HeaderType } from '@infinite/ui/src/shared/types/Header';
import StopWatch from '@infinite/ui/src/components/clock/StopWatch';
import {
  Banner,
  createInterstitialAdRequest,
  createRewardedAdRequest,
  loadInterstitial
} from '@infinite/firebase/src/Admob';

const PUZZLE_WIDTH_SCREEN_PERCENTAGE = 0.9;

const KYUDOKU_PUZZLE_1 = [
  [
    new KyudokuCell(4),
    new KyudokuCell(4),
    new KyudokuCell(8),
    new KyudokuCell(6),
    new KyudokuCell(4),
    new KyudokuCell(5)
  ],
  [
    new KyudokuCell(8),
    new KyudokuCell(5),
    new KyudokuCell(3),
    new KyudokuCell(2),
    new KyudokuCell(3),
    new KyudokuCell(1)
  ],
  [
    new KyudokuCell(4),
    new KyudokuCell(9),
    new KyudokuCell(5),
    new KyudokuCell(3),
    new KyudokuCell(6),
    new KyudokuCell(4, CellState.DISABLED)
  ],
  [
    new KyudokuCell(8),
    new KyudokuCell(7),
    new KyudokuCell(7),
    new KyudokuCell(7),
    new KyudokuCell(9),
    new KyudokuCell(3)
  ],
  [
    new KyudokuCell(3),
    new KyudokuCell(6),
    new KyudokuCell(1),
    new KyudokuCell(3),
    new KyudokuCell(9),
    new KyudokuCell(3)
  ],
  [
    new KyudokuCell(8),
    new KyudokuCell(5),
    new KyudokuCell(5),
    new KyudokuCell(2),
    new KyudokuCell(1),
    new KyudokuCell(8)
  ]
];

const Game: FunctionComponent<{}> = () => {
  useEffect(() => {
    createInterstitialAdRequest({});
    createRewardedAdRequest({});
  }, []);

  const width = getWidth() * PUZZLE_WIDTH_SCREEN_PERCENTAGE;
  const height = width;

  return (
    <Fragment>
      <Header type={HeaderType.BACK} />
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          paddingLeft: 10,
          paddingRight: 20,
          marginBottom: 20,
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Text category="s1">Fast</Text>
        <Text category="s1">Mistakes 0/3</Text>
        <Text category="s1">icon</Text>
        <StopWatch />
      </View>
      <View
        style={{
          marginBottom: 20,
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
          flexDirection: 'row',
          height: 50,
          paddingLeft: 10,
          paddingRight: 20,
          marginBottom: 20,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Button
          iconName="undo-outline"
          style={{
            marginRight: 10
          }}
        >
          Undo
        </Button>
        <Button iconName="bulb-outline">Hint</Button>
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
