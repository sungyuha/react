import React, {useState} from 'react';

// State에 리액션을 함 & 자동으로 값이 업데이트되면 UI도 업데이트 시켜주자 -> 리액트
/*
State란 React에서 앱의 유동적인 데이터를 다루기 위한 개체
사용이유
    - State가 변경될 시 자동으로 재렌더링 되기 때문
    - 이점이 변수와 다른 점임
*/
const State = () => {
    // let count = 0;

    // 첫 번째는 초기값을 담고 있는 state 변수, 두 번째는 state의 값을 업데이트 해주는 함수
    const [count2, setCount2] = useState(0); // useState에 들어가는 매개변수는 초기값!
    const increase = () => {
        // count = count + 1;

        // state가 바뀌면 UI가 자동으로 업데이트 되는것을 알 수 있음
        setCount2(count2 + 1);
        console.log(count2, "state count2 증가")

        /*
        state 값은 왜 한 박자씩 느리게 업데이트 될까?
        1) state가 업데이트 되면 UI를 다시 그려줌
        2) 함수가 끝나면 값을 업데이트하기 시작함
        *비동기적임! // setCount2 -> 비동기적
        3) 그래서 한 박자씩 느리게 업데이트 됨 -> state 쓸때 주의사항!
        */
    };

    return (
        <>
            {/* <div>{count}</div> */}
            <div>state: {count2}</div>
            <button onClick={increase}>증가</button>
        </>
    );
};

export default State;