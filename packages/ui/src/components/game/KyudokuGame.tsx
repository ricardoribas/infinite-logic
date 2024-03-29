import React, { useState, ReactNode, FunctionComponent } from 'react';
import {
  Text,
  View,
  ViewStyle,
  TouchableOpacity,
  LayoutChangeEvent,
  LayoutRectangle
} from 'react-native';

import Puzzle from '@infinite/shared/src/models/Puzzle';
import { isDisabled } from '@infinite/shared/src/utils/Cell';
import Cell from '@infinite/shared/src/models/cell';
import KyudokuGameManager from '@infinite/shared/src/game/manager/impl/KyudokuGameManager';
import KyudokuCellStyleFactory from '@infinite/shared/src/factories/cells/KyudokuCellStyle';
import Grid from '@infinite/ui/src/components/grid';
import { hasWon } from '@infinite/shared/src/utils/Puzzle';
import { getMessage } from '@infinite/shared/src/services/vocabulary';
import Button from '@infinite/ui/src/components/button';

type Props = {
  puzzle: Puzzle;
  style: ViewStyle | ViewStyle[];
  onWin: Function;
};

function getInvalidRowRectangle(
  layoutInfo: LayoutRectangle,
  gameManager: KyudokuGameManager,
  puzzle: Puzzle
): JSX.Element[] {
  const gameState = gameManager.gameState;
  const rowHeight = layoutInfo.height / puzzle.cells.length;

  const rowRectangles: JSX.Element[] = [];

  gameState.rowStates.forEach((_r, index) => {
    if (!_r) {
      rowRectangles.push(
        <View
          key={`invalid_row_${String(index)}`}
          pointerEvents="box-none"
          style={{
            position: 'absolute',
            zIndex: 2,
            borderColor: 'blue',
            borderWidth: 1,
            left: 0,
            top: index * rowHeight,
            width: layoutInfo.width,
            height: rowHeight
          }}
        />
      );
    }
  });

  return rowRectangles;
}

function getInvalidColumnRectangle(
  layoutInfo: LayoutRectangle,
  gameManager: KyudokuGameManager,
  puzzle: Puzzle
): JSX.Element[] {
  const gameState = gameManager.gameState;
  const columnWidth = layoutInfo.width / puzzle.cells[0].length;

  const columnRectangles: JSX.Element[] = [];

  gameState.columnStates.forEach((_c, index) => {
    if (!_c) {
      columnRectangles.push(
        <View
          key={`invalid_column_${String(index)}`}
          pointerEvents="box-none"
          style={{
            position: 'absolute',
            zIndex: 1,
            borderColor: 'blue',
            borderWidth: 1,
            left: index * columnWidth,
            top: 0,
            width: columnWidth,
            height: layoutInfo.height
          }}
        />
      );
    }
  });

  return columnRectangles;
}

const KyudokuGame: FunctionComponent<Props> = ({
  puzzle,
  style,
  onWin
}: Props) => {
  const nRows = puzzle.cells.length;
  const nColumns = puzzle.cells[0].length;
  const [currentPuzzle, setPuzzle] = useState<Puzzle>(puzzle);
  const [layoutInfo, setLayoutInfo] = useState<LayoutRectangle>();
  const [gameManager] = useState<KyudokuGameManager>(
    function getInitialState() {
      return new KyudokuGameManager(puzzle);
    }
  );

  return (
    <>
      <View
        style={[
          style,
          {
            marginBottom: 20
          }
        ]}
      >
        {layoutInfo &&
          getInvalidColumnRectangle(layoutInfo, gameManager, currentPuzzle)}
        {layoutInfo &&
          getInvalidRowRectangle(layoutInfo, gameManager, currentPuzzle)}
        <Grid
          style={[
            {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100'
            },
            style
          ]}
          rows={nRows}
          columns={nColumns}
          onLayout={(event: LayoutChangeEvent): void => {
            const layout = event.nativeEvent.layout;
            const { width, height, x, y } = layout;

            setLayoutInfo({
              width,
              height,
              x,
              y
            });
          }}
          renderCell={(row, column): ReactNode => {
            const cell: Cell = currentPuzzle.cells[row][column];

            return (
              <TouchableOpacity
                disabled={isDisabled(cell) || hasWon(currentPuzzle)}
                onPress={(): void => {
                  const newPuzzle = gameManager.play(
                    {
                      row,
                      column
                    },
                    currentPuzzle
                  );

                  hasWon(newPuzzle) && onWin();

                  setPuzzle(newPuzzle);
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
          onPress={(): void => {
            const newPuzzle = gameManager.undo(currentPuzzle);

            setPuzzle(newPuzzle);
          }}
        >
          {getMessage('gameUndo')}
        </Button>
        <Button iconName="bulb-outline">{getMessage('gameHint')}</Button>
      </View>
    </>
  );
};

export default KyudokuGame;
