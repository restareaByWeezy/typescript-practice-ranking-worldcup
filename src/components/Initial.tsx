import React from 'react';

import '../styles/global.scss'

interface InitialStepProps {
  moveTo: (step: string)=>void
}

const InitialStep: React.FC<InitialStepProps> = (props) => {
  return (
    <div className="world-cup-container">
      <div className="title">이상형 테스트</div>
      <button
        className="world-cup-button"
        onClick={() => {
          props.moveTo('firstRound');
        }}>
        시작하기
      </button>
    </div>
  );
};

export default InitialStep;
