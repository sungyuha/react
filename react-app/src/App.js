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
    );
}

export default App;