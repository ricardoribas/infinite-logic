import React, { ReactNode } from 'react';
import { View, ViewPropTypes } from 'react-native';
import PropTypes, { InferProps, ReactNodeArray } from 'prop-types';

import Row from './Row';
import Column from './Column';
import { GRID as GRID_STYLES } from './Styles';

function renderRow(nColumns: Number, renderCell: Function): ReactNodeArray {
  const columns = [];

  for (let i = 0; i < nColumns; i++) {
    columns.push(
      <Column
        key={`column_${String(i)}`}
        style={{
          flex: 1
        }}
      >
        {renderCell()}
      </Column>
    );
  }

  return columns;
}

function renderGrid(nRows: Number, nColumns: Number, renderCell: Function) {
  const rows = [];

  for (let i = 0; i < nRows; i++) {
    rows.push(
      <Row
        key={`row_${String(i)}`}
        style={{
          flex: nRows,
          flexDirection: 'row'
        }}
      >
        {renderRow(nColumns, renderCell)}
      </Row>
    );
  }

  return rows;
}

function Grid({
  rows,
  columns,
  renderCell,
  style
}: InferProps<typeof Grid.propTypes>) {
  return (
    <View style={[GRID_STYLES, style]}>
      {renderGrid(rows, columns, renderCell)}
    </View>
  );
}

Grid.propTypes = {
  rows: PropTypes.number.isRequired,
  columns: PropTypes.number.isRequired,
  renderCell: PropTypes.func.isRequired,
  style: ViewPropTypes.style
};

export default Grid;
