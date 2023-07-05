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
/* 
React의 ForwardRef란? | Ref 전달하기
<Parent>
const myRef = useRef()
            ↘
<Child ref={useRef}>
1) 부모 컴포넌트에서 자녀 컴포넌트에게 ref를 전달할 때 ForwardRef를 사용하면 
마치 기본적인 엘리먼트에다가 ref를 전달하듯 전달해줄 수 있으니까 정말 편리함!!
2) 특히나 자주 사용되는 재사용성이 높은 자녀 컴포넌트라면 ForwardRef를 사용해서 더 유연하게 돔 요소에 접근 가능
3) 
(1) 지나친 유용성은 단점을 불러옴!! ForwardRef를 사용해서 자녀의 돔 요소에 접근한다는 것은
(2) 자녀 컴포넌트의 캡슐화에 대한 장점을 없애버리는 의미(왜냐면 자녀 컴포넌트가 가진 돔 노드를 외부로 노출시키는거라서)
(3) 그렇기 때문에 필요하지 않으면 ForwardRef를 사용하지 않는 편이 좋음!
4) 그렇지만 엘리먼트에 포커스를 준다던지 -> focus(), 애니메이션을 관리 해야한다던지, 돔 노드에 접근하는게 불가피할때는 ForwardRef를 사용하면 됨
*/