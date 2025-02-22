import NavBar from "../components/NavBar";
import TicTacToe from "../components/games/TicTacToe/TicTacToe";
import GamePreview from "../components/GamePreview";

const TicTacToePage = () => {
  let playerX = "Jesus";
  let playerO = "Jasmine";

  return (
    <main className="min-h-screen bg-primary">
      <header>
        <NavBar />
      </header>
      <GamePreview
        nameOfGame="Tic-Tac-Toe"
        imgPath="/images/game_thumbnails/Tic-Tac-Toe.png"
        description="Tic-Tac-Toe is a classic two-player game played on a 3x3 grid. Players take turns 
        marking a space in the grid, one using X and the other using O. The goal is to be the first to 
        get three of your marks in a row horizontally, vertically, or diagonally. If all spaces are 
        filled without a winner, the game ends in a draw."
      />
      <TicTacToe playerX={playerX} playerO={playerO} />
    </main>
  );
};

export default TicTacToePage;
