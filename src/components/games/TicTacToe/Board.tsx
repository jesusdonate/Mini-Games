import Cell from "./Cell";

interface BoardProps {
  board: Array<string | null>;
  onCellClick: (index: number) => void;
}

const Board = ({ board, onCellClick }: BoardProps) => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-3 w-full max-w-[400px]
    aspect-square bg-black">
  {board.map((value, index) => (
    <Cell key={index} value={value} onClick={() => onCellClick(index)} />
  ))}
</div>
  );
};

export default Board;
