import React, { forwardRef } from "react";

// forwardRef함수의 인자로 넣어주면 됨. forwardRef로 컴포넌트를 묶어주는 것
// forwardRef로 묶어줬기 때문에 두 번째 인자로 ref를 받게 되는것
// ref를 두 번째 인자로 받게 됨. ref라는 인자 안에 부모로부터 전달 받은 ref가 들어있게 됨
const MyInput = forwardRef((props, ref) => {
    return <input ref={ref} />;
});

export default MyInput;