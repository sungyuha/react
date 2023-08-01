// useContext + Context API
// context는 앱 안에서 전역적으로 사용되는 데이터 들을 여러 컴포넌트끼리 쉽게 공유할 수 있는 형태를 재공해줌
/* 
context는 꼭 필요할때만! 
    - Context를 사용하면 컴포넌트를 재사용하기 어려워 질 수 있다
    - Prop drilling을 피하기 위한 목적이라면 Component Composition(컴포넌트 합성)을 먼저 고려해보자
*/

import React, {useState} from "react";
import './pageindex.css';
import Page from './Components/Page';

const App10 = () => {
    const [isDark, setIsDark] = useState(false);

    return (
        <div>
            {/* <h2>useContext + Context API</h2> */}
            <Page isDark={isDark} setIsDark={setIsDark} />
        </div>
    );
};

export default App10;