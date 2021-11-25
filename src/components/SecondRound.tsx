import React, { useState } from 'react';

interface SecondRoundProps {
  active: number;
  setActive: (index:number) => void;
  moveTo: (step: string)=>void;
  foods: string[];
  retireFood: (index:number)=> void;
}

const SecondRound: React.FC<SecondRoundProps> = (props) => { 
  //FirstRound에서 배열의 아이템이 3개로 바뀜
  //뒤에서 부터 슬라이스했으니까 Index가 1 2만 남음
  const [active, setActive] = useState(1);

  const handleChange = (index:number) => {
    setActive(index);
  };

  const getRetiredFoodIndex = () => {
    //아까랑 마찬가지 패턴
    return active === 1 ? 2 : 1;
  };

console.log(props.foods)

  return (
    <div className="world-cup-container">
      <div className="title">4강</div>
      <div className="radio-container">
        {props.foods.map((food, index) => {
          //원본 배열이랑 컴포넌트 내부 index값이랑 다름
          //원본 0 1 2
          //컴포넌트 배열 0 1 따라서 active === index + 1해줘야 맞음
          return (
            <div key={food}>
              <input
                type="radio"
                id={food}
                checked={active === index + 1}
                onChange={() => {
                  handleChange(index + 1);
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
          props.moveTo('finalRound');
        }}>
        다음
      </button>
    </div>
  );
};

export default SecondRound;
