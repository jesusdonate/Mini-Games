import { useState } from "react";
import NavBar from "../components/NavBar";
import TicTacToe from "../components/games/TicTacToe/TicTacToe";
import TicTacToeOptions from "../components/games/TicTacToe/TicTacToeOptions";
import GamePreview from "../components/GamePreview";
import PlayerGameStats from "../components/PlayerGameStats";

const TicTacToePage = () => {
  const [startGame, setStartGame] = useState(false);
  const [gameMode, setGameMode] = useState<string>('');
  const [playerX, setPlayerX] = useState<string>('Player X');
  const [playerO, setPlayerO] = useState<string>('Player O');

  const handleStartGame = (selectedOption: string) => {
    setGameMode(selectedOption);
    setStartGame(true);
  };

  return (
    <main className="min-h-screen bg-primary">
      <header>
        <NavBar />
      </header>
      {!startGame && (
        <>
          <GamePreview
            nameOfGame="Tic-Tac-Toe"
            imgPath="/images/game_thumbnails/Tic-Tac-Toe.png"
            description="Tic-Tac-Toe is a classic two-player game played on a 3x3 grid. Players take turns 
            marking a space in the grid, one using X and the other using O. The goal is to be the first to 
            get three of your marks in a row horizontally, vertically, or diagonally. If all spaces are 
            filled without a winner, the game ends in a draw."
          />
          <div className="flex items-center justify-center animate-fade-in">
            <div className="mt-12 w-4/5 max-w-[1250px] flex flex-col lg:flex-row">
              <div className="mx-10 w-3/5">
                <TicTacToeOptions onStartGame={handleStartGame} />   
              </div>
              <div className="mx-10 w-2/5">
                <PlayerGameStats/>
              </div>
            </div>
          </div>
        </>
      )}
      {startGame && (
        <TicTacToe playerX={playerX} playerO={playerO} gameMode={gameMode} />
      )}
    </main>
  );
};

export default TicTacToePage;