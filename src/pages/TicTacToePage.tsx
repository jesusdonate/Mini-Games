import NavBar from "../components/NavBar";
import TicTacToe from "../components/games/TicTacToe/TicTacToe";

const TicTacToePage = () => {
  return (
    <main className="min-h-screen bg-gray-200">
      <NavBar />
      <TicTacToe />
    </main>
  );
};

export default TicTacToePage;
