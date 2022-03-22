import React from 'react';
import {Text, StatusBar} from 'react-native';
import globals from 'src/resources/globals';
import styled from 'styled-components/native';
const Game = () => {
  return (
    <Wrapper>
      <StatusBar
        backgroundColor={globals.colors.primary}
        barStyle="light-content"
      />
      <Text>Game</Text>
    </Wrapper>
  );
};

export default Game;

const Wrapper = styled.SafeAreaView`
  padding: 20px;
  background-color: ${globals.colors.primary};
  flex: 1;
`;
