import Cell from "./Cell";

interface BoardProps {
  board: Array<string | null>;
  onCellClick: (index: number) => void;
}

const Board = ({ board, onCellClick }: BoardProps) => {
  return (
    <div className="grid grid-cols-3 gap-5 w-48 h-48 bg-blue-200">
      {board.map((value, index) => (
        <Cell key={index} value={value} onClick={() => onCellClick(index)} />
      ))}
    </div>
  );
};

export default Board;
