import { useState } from 'react';
import RadioButtons from '../../RadioButtons';


type TicTacToeOptionsProps = {
  onStartGame: (selectedOption: string) => void;
};

const TicTacToeOptions = ({ onStartGame }: TicTacToeOptionsProps)  => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [showOnlineOptions, setShowOnlineOptions] = useState<boolean>(false);
  const [showAIOptions, setShowAIOptions] = useState<boolean>(false);
  const [showLocalOptions, setShowLocalOptions] = useState<boolean>(false);

  const onlineOptions = ['Random', 'Friend'];
  const aiOptions = ['Easy', 'Medium', 'Hard'];

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  const handlePlayClick = () => {
    if (showLocalOptions || showAIOptions) {
      onStartGame(selectedOption);
    }
  };

  return (
    <div className='bg-slate-600'>
      <h3>Choice Game Mode:</h3>

      {/* Play Online */}
      <div className="bg-blue-700 p-4 rounded mb-4">
        <button
          onClick={() => {
            setShowOnlineOptions(!showOnlineOptions);
            setShowAIOptions(false);
            setShowLocalOptions(false);
          }}
          className="mb-2"
        >
          Play Online
        </button>
        {showOnlineOptions && (
          <div className="animate-fade-in">
            <RadioButtons
              options={onlineOptions}
              selectedOption={selectedOption}
              onChange={handleOptionChange}
              classNames='m-5'
            />
            <p>Selected option: {selectedOption}</p>
          </div>
        )}
      </div>

      {/* Play AI */}
      <div className="bg-green-700 p-4 rounded mb-4">
        <button
          onClick={() => {
            setShowAIOptions(!showAIOptions);
            setShowOnlineOptions(false);
            setShowLocalOptions(false);
          }}
          className="mb-2"
        >
          Play AI
        </button>
        {showAIOptions && (
          <div className="animate-fade-in">
            <RadioButtons
              options={aiOptions}
              selectedOption={selectedOption}
              onChange={handleOptionChange}
              classNames='m-5'
            />
            <p>Selected option: {selectedOption}</p>
          </div>
        )}
      </div>

      {/* Play Locally */}
      <div className="bg-orange-200 p-4 rounded">
        <button
          onClick={() => {
            setShowLocalOptions(!showLocalOptions);
            setShowOnlineOptions(false);
            setShowAIOptions(false);
          }}
        >
          Play Locally
        </button>
        {showLocalOptions && (
          <div className="animate-fade-in space-y-2">
            <input id="playerX" type="text" placeholder="Player X" className="animate-fade-in" />
            <input id="playerO" type="text" placeholder="Player O" className="animate-fade-in" />
          </div>
        )}
      </div>

      {/* Play Button */}
      {(showLocalOptions || showAIOptions) && (
        <button onClick={handlePlayClick} className="mt-4 p-2 bg-purple-500 text-white rounded">
          Play
        </button>
      )}
    </div>
  );
};

export default TicTacToeOptions;