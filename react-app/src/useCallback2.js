import React, {useCallback, useState} from "react";
import Box from './Box';

function App() {
    const [size, setSize] = useState(100);
    const [isDark, setIsDark] = useState(false);

    const createBoxStyle = useCallback( () => {
        // useCallback의 첫 번째 인자로 함수를 넣어줌
        return {
            backgroundColor: 'pink',
            width: `${size}px`,
            height: `${size}px`,
        };
        // 의존성 배열에는 size. size가 변경될때마다 초기화가 됐으면 좋겠으니끼
    }, [size]);

    return (
        <div style={{
            // 만약에 isDark가 ture라면 상위 div의 색상을 블랙으로, isDark가 false라면 white로
            background: isDark ? "black": "white",
            }}
        >
            <input 
                type="number"
                value={size}
                onChange={(e) => setSize(e.target.value)}
            />
            <button onClick={() => setIsDark(!isDark)}>테마 체인지</button>
            {/* 뤂업으로 전달 받음 */}
            <Box createBoxStyle={createBoxStyle} />
        </div>

        /* 
        함수 컴포넌트는 함수다.
        함수 컴포넌트는 상태변화시 다시 렌더링이 된다.
        렌더링시, 함수 내부 변수는 초기화가 된다. 그리고 함수는 객체다.
        초기화가 된다는건 새로운 객체가 다시 만들어지고, 메모리 주소도 새로 생성 된다.
        그 말은, 렌더링 전 변수와, 렌더링 후 변수가 다르다. {A} === {A} // FALSE
        이렇게 되면, useEffect에서 의존성 배열은, 객체 구분을 하지 못하고, 렌더링이 계속 일어난다.
        * 문제점: 객체 초기화를 멈추지 않으면, 렌더링이 계속 발생한다.
        * 해결책: useMemo, useCallback ---> 객체 (함수) 자체를 Memoization 해준다. 값과 콜백을 메모리 어디엔가 저장해두고, 필요할때 가져다 쓴다
        */
    );
}

export default App;