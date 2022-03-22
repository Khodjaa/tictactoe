import React from 'react';
import {StatusBar} from 'react-native';
import Button from 'src/components/Button';
import Player from 'src/components/Player';
import useGame from 'src/hooks/useGame';
import globals from 'src/resources/globals';
import {BoardItem, Board, BoardLineWrap, InfoText, NewGameBtn} from './styled';

const Game = () => {
  const {winner, handlePress, squares, status, startNewGame} = useGame();

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
      <InfoText bottom={20}>{status}</InfoText>
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
      <Button onPress={startNewGame}>
        <NewGameBtn>
          <InfoText>Start New Game</InfoText>
        </NewGameBtn>
      </Button>
    </Board>
  );
};

export default Game;
