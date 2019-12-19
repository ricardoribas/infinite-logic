import React, { useState, ReactNode } from 'react';
import { Text, View, ViewPropTypes, TouchableOpacity } from 'react-native';
import PropTypes, { InferProps } from 'prop-types';

import Puzzle from '@infinite/shared/src/models/Puzzle';
import Grid from './../grid';

import { isDisabled } from '@infinite/shared/src/utils/Cell';
import { getNextState } from '@infinite/shared/src/utils/KyudokuCell';
import Cell from '@infinite/shared/src/models/Cell';
import KyudokuCellStyleFactory from '@infinite/shared/src/factories/cells/KyudokuCellStyle';

function KyudokuGrid({
  puzzle,
  style
}: InferProps<typeof KyudokuGrid.propTypes>): ReactNode {
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
}

KyudokuGrid.propTypes = {
  puzzle: PropTypes.instanceOf(Puzzle).isRequired,
  style: ViewPropTypes.style
};

export default KyudokuGrid;
