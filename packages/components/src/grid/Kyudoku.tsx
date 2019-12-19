import React from 'react';
import { Text, View, ViewPropTypes, TouchableOpacity } from 'react-native';
import PropTypes, { InferProps } from 'prop-types';

import Puzzle from 'shared/src/models/Puzzle';
import Grid from './../grid';

function KyudokuGrid({
  puzzle,
  style
}: InferProps<typeof KyudokuGrid.propTypes>) {
  const nRows = puzzle.cells.length;
  const nColumns = puzzle.cells[0].length;

  return (
    <Grid
      style={style}
      rows={nRows}
      columns={nColumns}
      renderCell={(row, column) => (
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text
            style={{
              fontSize: 18
            }}
          >
            {puzzle.cells[row][column].toString()}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
}

KyudokuGrid.propTypes = {
  puzzle: PropTypes.instanceOf(Puzzle).isRequired,
  style: ViewPropTypes.style
};

export default KyudokuGrid;
