// ForwardRef는 부모 컴포넌트에서 자녀 컴포넌트로 Ref를 전달할 때 사용하는 기법
// 부모 컴포넌트가 자녀의 컴포넌트 돔 요소에 접근해야 할 때 유용하게 사용

import {useRef} from "react";

function ForwardRef() {
    const inputRef = useRef();

    const focus = () => {
        inputRef.current.focus();
    };

    return (
        <>
            <h1>ForwardRef</h1>
            <input ref={inputRef} />
            <button onClick={focus}>집중</button>
        </>
    );
};

export default ForwardRef;
