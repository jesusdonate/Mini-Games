interface CellProps {
  value: string | null;
  onClick: () => void;
}

const GetColor = (value: string | null) => {
  switch (value) {
    case 'X': return 'text-red-600';
    case 'O': return 'text-blue-600';
    default: return '';
  }
};

const Cell = ({ value, onClick }: CellProps) => {
  return (
    <button
      className={` ${GetColor(value)} bg-gray-200 w-15 h-15 text-5xl font-bold hover:bg-gray-300`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Cell;
