import React, { useState } from 'react';

interface FirstRoundProps {
  active: number;
  setActive: (index:number) => number;
  moveTo: (step: string)=>void;
  foods: string[];
  retireFood: (index:number)=> void;
}

const FirstRound: React.FC<FirstRoundProps> = (props) => {
  //foods배열에 넘겨줄 아이템을 원할하게 제어하기 위해 지정해준 것으로 보임
  const [active, setActive] = useState(0);

  const handleChange = (index: number) => {
    setActive(index);
  };

  const getRetiredFoodIndex = () => {
    //0을 선택하면 active값이 1이고 retireFoods함수에서 
    //반환되는 값은 0 2 3 결론적으로 0이 2강으로 올라가는 것을 구현함

    //1을 선택하면 active 0
    //배열 1 2 3 반환
    return active === 0 ? 1 : 0;
  };

  return (
    <div className="world-cup-container">
      <div className="title">4강</div>
      <div className="radio-container">
        {props.foods.map((food:string, index:number) => {
          return (
            <div key={food}>
              <input
              //선택에 따라 스테이트 변경
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
          //버튼 클릭시 state값 배열에 전달
          props.retireFood(getRetiredFoodIndex()); //내가 0번째를 선택하면 인덱스는 1이 들어간다
          props.moveTo('secondRound');
        }}>
        다음
      </button>
    </div>
  );
};

export default FirstRound;
