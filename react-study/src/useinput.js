import { useState } from "react";

/* 
Custom Hooks 이란?
    1. 우리의 입맛대로 직접 커스텀해서  만드는 리액트 훅 
    2. 예시.)
    function useEat( food ) {
        ...
        return [eat, setFood]
    }
    3. 커스텀 훅 안에서 다른 리액트 훅을 자유롭게 사용 가능함
*/

/* 
1) useInput은 커스텀 훅, 
2) 리액트 훅을 사용할거니 앞에 use를 붙여야 함, 
3)그래야 리액트 훅으로 사용 가능 
*/

// 괄호 란에는 input에 들어갈 초기값
// 매개변수로 submitAction
export function useInput(initiaValue, submitAction) {
    // 기본적인 useState 상태관리
    const [inputValue, setInputValue] = useState(initiaValue); // useState에 초기값 전달

    const handleChange = (e) => {
        // setInputValue로 state가 업데이트 됨
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        // setInputValue 를 초기값으로
        setInputValue("");
        // 매개변수로 받아온 submitAction을 호출. 인자로는 inputValue
        submitAction(inputValue);
    }

    // 1) 배열 안에는 input값을 가지고 있을 inputValue, 
    // 2) handleChange도, 다른 데도 사용할수 있게 리턴값으로 handleSubmit
    return [inputValue, handleChange, handleSubmit];
} 