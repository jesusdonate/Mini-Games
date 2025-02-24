import React from 'react';

interface RadioButtonsProps {
  options: Array<string>; // Array of radio button values/labels
  selectedOption: string; // Currently selected option
  onChange: (value: string) => void; // Callback to handle selection change
  classNames: string;
}

const RadioButtons: React.FC<RadioButtonsProps> = ({ options, selectedOption, onChange, classNames }) => {
  return (
    <div>
      {options.map((item, index) => (
        <label key={index} className={classNames}>
          <input
            type="radio"
            value={item}
            checked={selectedOption === item}
            onChange={() => onChange(item)}
            className='mx-[5px]'
          />
          {item}
        </label>
      ))}
    </div>
  );
};

export default RadioButtons;