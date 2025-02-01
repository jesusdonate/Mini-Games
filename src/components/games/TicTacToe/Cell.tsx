interface CellProps {
  value: string | null;
  onClick: () => void;
}

const Cell = ({ value, onClick }: CellProps) => {
  return (
    <button
      className="bg-green-100 w-13 h-13 hover:bg-gray-300"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Cell;
