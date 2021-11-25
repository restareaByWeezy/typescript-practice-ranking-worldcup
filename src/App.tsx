import React, { useState, useEffect } from 'react';
//자바스크립트 라이브러리 lodash
import _, { String } from 'lodash'
import Initial from './components/Initial';
import FirstRound from './components/FirstRound';
import SecondRound from './components/SecondRound';
import FinalRound from './components/FinalRound';
import Result from './components/Result';

import './App.css';

interface AppProps {
  step: string;
  setStep: (targetStep: string)=> string;
  foods: string[];
  setFoods: (item: string[])=> string[];
  retireFood: (index:number)=> void;
  moveTo : (targetStep: string) => string;
}

const App: React.FC<AppProps> =  () => {
  // step: 'initial', 'firstRound', 'secondRound', finalRound', 'result'
  const [step, setStep] = useState<string>('initial');
  //foods 배열 state관리
  const [foods, setFoods] = useState([]);
  //탈락한 foods 아이템 retireFood index가 1이면 0 2 3만 반환 
  const retireFood = (index:number) => {
    setFoods(foods.filter((food, foodIndex) => foodIndex !== index));
  };

  const moveTo = (targetStep: string) => {
    setStep(targetStep);
  };
  //초기설정
  useEffect(() => {
    if (step === 'initial') {
      const initialFoods: string[] = ['김밥', '떡볶이', '순대', '라면'];
      //lodash shuffle 함수 이용
      setFoods(_.shuffle(initialFoods));
    }
  }, [step]);

  console.log(foods)

  return (
    <div className="App">
      {step === 'initial' ? (
        <Initial moveTo={moveTo} />
      ) : step === 'firstRound' ? (
        <FirstRound moveTo={moveTo} 
        //4강 shuffle로 섞고 앞에 두개 슬라이스 0 1 // 2 3
        foods={foods.slice(0, 2)} retireFood={retireFood} />
      ) : step === 'secondRound' ? (
        //4강 두 번째에는 탈락한 아이템까지 배열에 3개 아이템이 있으므로
        //0 // 1 2 뒤에서 두 개 슬라이스
        <SecondRound moveTo={moveTo} foods={foods.slice(-2)} retireFood={retireFood} />
      ) : step === 'finalRound' ? (
        //두 개만 남기때문에 다시 foods배열로 넘겨줌
        <FinalRound moveTo={moveTo} foods={foods} retireFood={retireFood} />
      ) : step === 'result' ? (
        //아이템이 하나만 남기 때문에 foods배열로 넘겨줌
        <Result moveTo={moveTo} foods={foods} />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;




