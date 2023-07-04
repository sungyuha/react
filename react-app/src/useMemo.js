import React, {useMemo, useState} from 'react';

const hardCalculate = (number) => {
  console.log('어려운 계산기');
  for (let i = 0; i < 99999999; i++) {} // 생각하는 시간
  return number + 10000;
}

const easyCalculate = (number) => {
  console.log('정말 쉬운 계산기');
  return number + 1;
}

// 렌더링이 된다는 말은 App 함수가 호출 되는 것
function App() {
  const [hardNumber, sethardNuber] = useState(1);
  const [easyNumber, seteasyNember] = useState(1);

  // 함수 내부에 있는 변수는 초기화가 됨
  // const harSum = hardCalculate(hardNumber);
  
  /* useMemo는 두 가지 안자를 받아옴
  1- 콜백함수, 2- 배열
  */
  const hardSum = useMemo(() => {
    // 콜백함수의 리턴 값으로 메모아이징할 값을 정해줌
    return hardCalculate(hardNumber);
    // 배열
  }, [hardNumber]);

  // 함수형 컴포넌트라 다시 랜더링 되어서 호출이 약간 늦음(1초 정도 딜레이)
  const easySum = easyCalculate(easyNumber);
  
  return (
    <div>
      <h3>어려운 계산기
        <input className='input'
          type="number"
          value={hardNumber}
          onChange={(e) => sethardNuber(parseInt(e.target.value))}
        />
        <span> + 10000 = {hardSum}</span>
      </h3>

      <h3>쉬운 계산기
        <input className='input'
          type="number"
          value={easyNumber}
          onChange={(e) => seteasyNember(parseInt(e.target.value))}
        />
        <span> + 1 = {easySum}</span>
      </h3>
    </div>
  );
}

export default App;
