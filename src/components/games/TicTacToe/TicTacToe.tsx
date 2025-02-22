import { useState } from "react";
import Board from "./Board";
import { FaDoorOpen } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

interface TicTacToeProps {
  playerX: string;
  playerO: string;
}

const TicTacToe = ({playerX, playerO}: TicTacToeProps) => {
  const [board, setBoard] = useState(Array(9).fill(null)); // Creates a 3x3 board
  const [isXNext, setIsXNext] = useState(true); // Keeps track of current player (X or O)
  const [foundWinner, setFoundWinner] = useState(false); // Checks if there is a winner
  const navigate = useNavigate();

  const handleCellClick = (index: number) => {
    if (board[index] || foundWinner) return; // Disable clicks if cell is occupied or there's a winner

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);

    // Check for a winner after updating the board
    const winner = calculateWinner(newBoard);
    if (winner) {
      setFoundWinner(true); // Set foundWinner to true if there's a winner
    } else {
      setIsXNext(!isXNext); // Switch turns if there's no winner
    }
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setFoundWinner(false); // Reset the winner state
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
        return board[a]; // Return the winner ("X" or "O")
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const isDraw = board.every((cell) => cell !== null) && !winner; // Check for a draw
  const status = winner
    ? `Winner: ${winner == "X" ? playerX : playerO}`
    : isDraw
    ? "It's a Draw!"
    : `Next player: ${isXNext ? playerX : playerO}`;

  return (
    <div className="flex flex-col items-center justify-center flex-grow pt-12">
      {/* Pseudo-Header */}
      <div className="w-full h-10 grid grid-cols-3 items-center">
        <FaDoorOpen
          size={30}
          className="pl-5 box-content cursor-pointer text-red-500"
          onClick={() => navigate("/")}
        />
        <h2 className="text-center col-start-2 font-extrabold underline sm:text-3xl text-xl">
          Tic-Tac-Toe
        </h2>
      </div>

      {/* Game Content */}
      <h3 className="text-2xl font-bold my-8">{status}</h3>
      <Board board={board} onCellClick={handleCellClick} />


      {/* Conditionally Render Replay Button */}
      {(foundWinner || isDraw) && (
        <button
          className="bg-gray-200 w-24 h-10 mt-8 hover:bg-red-300 rounded-md border-2 border-red-500"
          onClick={restartGame}
        >
          Replay?
        </button>
      )}
    </div>
  );
};

export default TicTacToe;