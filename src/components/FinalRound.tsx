import React, { useState } from 'react';

interface FinalRoundProps {
  active: number;
  setActive: (index:number) => void;
  moveTo: (targetstep: string)=> void;
  foods: string[];
  retireFood: (index:number)=> void;
}

const FinalRound: React.FC<FinalRoundProps> = (props) => {
  const [active, setActive] = useState(0);

  const handleChange = (index:number) => {
    setActive(index);
  };

  const getRetiredFoodIndex = () => {
    return active === 0 ? 1 : 0;
  };

  return (
    <div className="world-cup-container">
      <div className="title">2강</div>
      <div className="radio-container">
        {props.foods.map((food, index) => {
          return (
            <div key={food}>
              <input
                type="radio"
                id={food}
                checked={active === index}
                onChange={() => {
                  handleChange(index);
                }}></input>
              <label htmlFor={food}>{food}</label>
            </div>
          );
        })}
      </div>
      <button
        className="world-cup-button"
        onClick={() => {
          props.retireFood(getRetiredFoodIndex());
          props.moveTo('result');
        }}>
        다음
      </button>
    </div>
  );
};

export default FinalRound;
