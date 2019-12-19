import React, { useState, ReactNode, FunctionComponent } from 'react';
import { Text, View, ViewStyle, TouchableOpacity } from 'react-native';

import Puzzle from '@infinite/shared/src/models/Puzzle';
import { isDisabled } from '@infinite/shared/src/utils/Cell';
import { getNextState } from '@infinite/shared/src/utils/KyudokuCell';
import Cell from '@infinite/shared/src/models/Cell';
import KyudokuCellStyleFactory from '@infinite/shared/src/factories/cells/KyudokuCellStyle';

import Grid from 'grid';

type Props = {
  puzzle: Puzzle;
  style: ViewStyle | ViewStyle[];
};

const KyudokuGrid: FunctionComponent<Props> = ({ puzzle, style }: Props) => {
  const nRows = puzzle.cells.length;
  const nColumns = puzzle.cells[0].length;
  const [board, setPuzzle] = useState(puzzle);

  return (
    <Grid
      style={style}
      rows={nRows}
      columns={nColumns}
      renderCell={(row, column): ReactNode => {
        const cell: Cell = board.cells[row][column];

        return (
          <TouchableOpacity
            disabled={isDisabled(cell)}
            onPress={(): void => {
              cell.state = getNextState(cell);

              setPuzzle(new Puzzle(board.cells));
            }}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <View
              style={[
                {
                  padding: 10,
                  alignItems: 'center',
                  justifyContent: 'center'
                },
                KyudokuCellStyleFactory.from(cell)
              ]}
            >
              <Text
                style={{
                  fontSize: 20
                }}
              >
                {cell.toString()}
              </Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default KyudokuGrid;
