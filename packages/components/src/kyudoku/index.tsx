import React, { useState, ReactNode, Component } from 'react';
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
import Grid from '@infinite/components/src/grid';
import PuzzleState from '@infinite/shared/src/enums/PuzzleState';

type Props = {
  puzzle: Puzzle;
  style: ViewStyle | ViewStyle[];
};

function getInvalidRowRectangle(
  layoutInfo: LayoutRectangle,
  gameManager: KyudokuGameManager,
  puzzle: Puzzle
): JSX.Element[] {
  const gameState = gameManager.gameState;
  const rowHeight = layoutInfo.height / puzzle.cells.length;

  return gameState.rowStates.filter(Boolean).map((_r, index) => (
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
  ));
}

function getInvalidColumnRectangle(
  layoutInfo: LayoutRectangle,
  gameManager: KyudokuGameManager,
  puzzle: Puzzle
): JSX.Element[] {
  const gameState = gameManager.gameState;
  const columnWidth = layoutInfo.width / puzzle.cells[0].length;

  return gameState.columnStates.filter(Boolean).map((_c, index) => (
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
  ));
}

export default class KyudokuGrid extends Component<Props> {
  gameManager: KyudokuGameManager;

  constructor(props: Props) {
    super(props);

    this.gameManager = new KyudokuGameManager(this.props.puzzle);
  }

  render(): ReactNode {
    const { puzzle, style }: Props = this.props;
    const nRows = puzzle.cells.length;
    const nColumns = puzzle.cells[0].length;
    const [currentPuzzle, setPuzzle] = useState<Puzzle>(puzzle);
    const [layoutInfo, setLayoutInfo] = useState<LayoutRectangle>();

    return (
      <>
        <Text>
          Finished{' '}
          {currentPuzzle.state === PuzzleState.FINISHED ? 'true' : 'false'}
        </Text>
        <View
          style={[
            style,
            {
              backgroundColor: 'yellow'
            }
          ]}
        >
          {layoutInfo &&
            getInvalidColumnRectangle(
              layoutInfo,
              this.gameManager,
              currentPuzzle
            )}
          {layoutInfo &&
            getInvalidRowRectangle(layoutInfo, this.gameManager, currentPuzzle)}
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
                  disabled={isDisabled(cell)}
                  onPress={(): void => {
                    const newPuzzle = this.gameManager.play(
                      {
                        row,
                        column
                      },
                      currentPuzzle
                    );

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
        </View>
      </>
    );
  }
}
