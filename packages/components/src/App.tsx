import React, { Component } from 'react';
import { View } from 'react-native';

import KyudokuCell from 'shared/src/models/KyudokuCell';
import CellState from 'shared/src/enums/CellState';
import KyudokuGrid from './grid/Kyudoku';
import Puzzle from 'shared/src/models/Puzzle';

const KYUDOKU_PUZZLE = [
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

export default class App extends Component {
  render() {
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
          puzzle={Puzzle.from(KYUDOKU_PUZZLE)}
          style={{
            width: 500,
            height: 500
          }}
        />
      </View>
    );
  }
}
