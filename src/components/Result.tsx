import React from 'react';

interface ResultProps {
  moveTo: (step: string)=>void;
  foods: string;
  retireFood: (index:number)=> void;
}

const Result: React.FC<ResultProps> = (props) => {
  return (
    <div className="world-cup-container">
      <div className="title">결과</div>
      {/* 배열에 하나만 남게 됨 */}
      <div className="result">{props.foods[0]}이(가) 우승하였습니다!</div>
      <button
        className="world-cup-button"
        onClick={() => {
          props.moveTo('initial');
        }}>
        다시하기
      </button>
    </div>
  );
};

export default Result;
