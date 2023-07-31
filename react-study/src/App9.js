// useRef 완벽 정리 2# DOM 요소 접근 
/*
    const ref = useRef(value) 
        -> { current: value } 
    useRef를 부르면 ref를 반환. 이 object를 우리가 접근하고자 하는 태그에 
    <input ref={ref} /> ref 속성으로 넣어주기만 하면 해당 요소에 접근 가능
*/
import React, {useEffect, useRef} from "react";

const App9 = () => {

    // 초기값은 비워둠
    const inputRef = useRef();

    // 맨 처음 랜더링이 시작
    useEffect(() => {
        //console.log(inputRef);
        inputRef.current.focus();
    }, []);

    const login = () => {
        alert(`환영합니다. ${inputRef.current.value}!`);
    }

    return (
        <div>
            <h2>useRef</h2>
            <p>간단한 로그인페이지</p>
            {/* current안에 input값이 들어감 */}
            <input ref={inputRef} type="text" placeholder="username" />
            <button onClick={login}>로그인</button>
        </div>
    );
};

export default App9;