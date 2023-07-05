// ForwardRef는 부모 컴포넌트에서 자녀 컴포넌트로 Ref를 전달할 때 사용하는 기법
// 부모 컴포넌트가 자녀 컴포넌트 돔 요소에 접근해야 할 때 특히나 유용하게 사용

import {useRef} from "react";
import MyInput from "./MyInput";

function ForwardRef() {
    // useRef를 통해 inputRef 생성
    const inputRef = useRef();

    // focus라는 이름을 가진 함수
    const focus = () => {
        // 참조하고 있는 inputRef를 focus시켜줌
        inputRef.current.focus();
    };

    return (
        <>
            <h2>ForwardRef</h2>
            {/* inputRef를 input의 ref 속성으로 넣음. inputRef의 돔 모드를 참조 */}
            {/* <input ref={inputRef} /> */}
            <MyInput ref={inputRef} />
            {/* 집중 버튼을 누를면 focus시키게 onClick속성으로 focus 넣음 */}
            <button onClick={focus}>집중</button>
        </>
    );
};

export default ForwardRef;
