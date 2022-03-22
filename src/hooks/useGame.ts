import {useState} from 'react';

function calculateWinner(squares: number[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {player: squares[a], winLine: lines[i]};
    }
  }
  return null;
}
export enum PlayerEnum {
  X = 'X',
  O = 'O',
}
const useGame = () => {
  const [squares, $squares] = useState(Array(9).fill(null));
  const [stepNumber, $stepNumber] = useState<number>(0);

  const player =
    stepNumber === 0 || stepNumber % 2 === 0 ? PlayerEnum.X : PlayerEnum.O;
  const handlePress = (i: number) => {
    const newSquares = [...squares];
    newSquares[i] = player;
    if (calculateWinner(squares)?.player || squares[i]) {
      return;
    }
    $squares(newSquares);
    $stepNumber(stepNumber + 1);
  };
  const startNewGame = () => {
    $squares(Array(9).fill(null));
    $stepNumber(0);
  };
  const winner = calculateWinner(squares);
  const status = winner?.player
    ? 'Winner Player:' + winner.player
    : 'Current Move for Player: ' + player;

  return {
    handlePress,
    winner,
    squares,
    status,
    startNewGame,
  };
};

export default useGame;
