import React, { FunctionComponent, ReactNodeArray } from 'react';
import { View, ViewStyle } from 'react-native';

import Row from './Row';
import Column from './Column';
import { GRID as GRID_STYLES, GRID_ROWS } from './Styles';

type Props = {
  rows: number;
  columns: number;
  renderCell: Function;
  style: ViewStyle | ViewStyle[];
};

function renderRow(
  row: number,
  nColumns: number,
  renderCell: Function
): ReactNodeArray {
  const columns = [];

  for (let i = 0; i < nColumns; i++) {
    columns.push(
      <Column
        key={`column_${String(i)}`}
        style={{
          flex: 1
        }}
      >
        {renderCell(row, i)}
      </Column>
    );
  }

  return columns;
}

function renderGrid(
  nRows: number,
  nColumns: number,
  renderCell: Function
): ReactNodeArray {
  const rows = [];

  for (let i = 0; i < nRows; i++) {
    rows.push(
      <Row
        key={`row_${String(i)}`}
        style={[
          GRID_ROWS,
          {
            flex: nRows,
            flexDirection: 'row'
          }
        ]}
      >
        {renderRow(i, nColumns, renderCell)}
      </Row>
    );
  }

  return rows;
}

const Grid: FunctionComponent<Props> = ({
  rows,
  columns,
  renderCell,
  style
}: Props) => (
  <View style={[GRID_STYLES, style]}>
    {renderGrid(rows, columns, renderCell)}
  </View>
);

export default Grid;
