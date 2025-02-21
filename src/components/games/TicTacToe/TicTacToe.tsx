import { useState } from "react";
import Board from "./Board";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); // Creates a 3x3 board
  const [isXNext, setIsXNext] = useState(true); // Keeps track of current player (X or O)

  const handleCellClick = (index: number) => {
    if (board[index] || calculateWinner(board)) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${isXNext ? "X" : "O"}`;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-400">
      <h1 className="text-2xl font-bold mb-4 bg-red-100">{status}</h1>
      <Board board={board} onCellClick={handleCellClick} />
      <button className="bg-gray-200 w-20 m-3" onClick={restartGame}>
        Restart?
      </button>
    </div>
  );
};

const calculateWinner = (board: Array<string | null>) => {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const [a, b, c] of winningCombos) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

export default TicTacToe;
