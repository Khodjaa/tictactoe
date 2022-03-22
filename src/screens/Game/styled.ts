import globals from 'src/resources/globals';
import styled from 'styled-components/native';

export const BoardItemSize = globals.strings.width / 6 + 'px';

export const Board = styled.SafeAreaView`
  padding: 20px;
  background-color: ${globals.colors.primary};
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const BoardLineWrap = styled.View`
  width: 66%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;
export const BoardItem = styled.View`
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
export const InfoText = styled.Text`
  font-family: ${globals.fonts.regular};
  color: ${globals.colors.focus};
  padding-bottom: ${({bottom = 0}: {bottom?: number}) => bottom + 'px'};
`;
export const NewGameBtn = styled.View`
  padding: 10px;
  border-width: 3px;
  border-radius: 20px;
  border-color: ${globals.colors.focus};
  align-items: center;
  justify-content: center;
`;
