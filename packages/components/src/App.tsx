import React, { Component, ReactNode } from 'react';
import { View } from 'react-native';

import KyudokuCell from '@infinite/shared/src/models/cell/impl/KyudokuCell';
import CellState from '@infinite/shared/src/enums/CellState';
import Puzzle from '@infinite/shared/src/models/Puzzle';

import KyudokuGrid from './kyudoku';

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

const KYUDOKU_PUZZLE_2 = [
  [
    new KyudokuCell(8, CellState.DISABLED),
    new KyudokuCell(3),
    new KyudokuCell(2),
    new KyudokuCell(1),
    new KyudokuCell(7),
    new KyudokuCell(1)
  ],
  [
    new KyudokuCell(6),
    new KyudokuCell(2),
    new KyudokuCell(3),
    new KyudokuCell(9),
    new KyudokuCell(8),
    new KyudokuCell(5)
  ],
  [
    new KyudokuCell(2),
    new KyudokuCell(6),
    new KyudokuCell(4),
    new KyudokuCell(2),
    new KyudokuCell(9),
    new KyudokuCell(7)
  ],
  [
    new KyudokuCell(9),
    new KyudokuCell(4),
    new KyudokuCell(4),
    new KyudokuCell(1),
    new KyudokuCell(7),
    new KyudokuCell(7)
  ],
  [
    new KyudokuCell(7),
    new KyudokuCell(8),
    new KyudokuCell(7),
    new KyudokuCell(9),
    new KyudokuCell(7),
    new KyudokuCell(6)
  ],
  [
    new KyudokuCell(8),
    new KyudokuCell(8),
    new KyudokuCell(4),
    new KyudokuCell(7),
    new KyudokuCell(2),
    new KyudokuCell(4)
  ]
];

export default class App extends Component {
  render(): ReactNode {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'red'
        }}
      >
        <KyudokuGrid
          puzzle={Puzzle.from(KYUDOKU_PUZZLE_2)}
          style={{
            width: 500,
            height: 500
          }}
        />
      </View>
    );
  }
}
