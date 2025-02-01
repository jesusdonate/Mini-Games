import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import TicTacToePage from './pages/TicTacToePage';
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tic-tac-toe" element={<TicTacToePage />} />
      </Routes>
    </Router>
  )
}

export default App