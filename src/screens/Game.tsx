import React from 'react';
import {StatusBar, Text} from 'react-native';
import Button from 'src/components/Button';
import Player from 'src/components/Player';
import useGame from 'src/hooks/useGame';
import globals from 'src/resources/globals';
import styled from 'styled-components/native';

const Game = () => {
  const {winner, handlePress, squares, status} = useGame();

  const renderItem = (i: number) => {
    const isWinLine = winner?.winLine && winner.winLine.includes(i);
    return (
      <Button onPress={() => handlePress(i)}>
        <BoardItem active={isWinLine}>
          <Player value={squares[i]} />
        </BoardItem>
      </Button>
    );
  };
  return (
    <Board>
      <StatusBar
        backgroundColor={globals.colors.primary}
        barStyle="light-content"
      />
      <BoardLineWrap>
        {renderItem(0)}
        {renderItem(1)}
        {renderItem(2)}
      </BoardLineWrap>
      <BoardLineWrap>
        {renderItem(3)}
        {renderItem(4)}
        {renderItem(5)}
      </BoardLineWrap>
      <BoardLineWrap>
        {renderItem(6)}
        {renderItem(7)}
        {renderItem(8)}
      </BoardLineWrap>
      <Text>{status}</Text>
    </Board>
  );
};

export default Game;

const BoardItemSize = globals.strings.width / 6 + 'px';

const Board = styled.SafeAreaView`
  padding: 20px;
  background-color: ${globals.colors.primary};
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const BoardLineWrap = styled.View`
  width: 66%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;
const BoardItem = styled.View`
  background-color: ${({active = false}: {active?: boolean}) =>
    active ? globals.colors.active : globals.colors.primary};
  border-width: 3px;
  width: ${BoardItemSize};
  height: ${BoardItemSize};
  border-radius: 20px;
  border-color: ${globals.colors.focus}
  align-items: center;
  justify-content: center;
`;
