import { useCallback, useEffect, useState } from "react";

function App() {
    const [number, setNumber] = useState(0);


    const someFunction = useCallback( () => { // someFunction 안에 메모리의 주소를 가지고 있음
        console.log(`someFunc: number: ${number}`); // App 컴포넌트가 랜더링 될때마다 초기화가 된다면
        return; 
    },[]); // 의존성 배열에 아무것도 없으니 App 컴포넌트가 만들아질 때미디 someFunction 객체가 메모이제이션 됨

    useEffect(() => {
        console.log("someFunction이 변경되었습니다.");
    }, [someFunction]); // 의존성 배열에는 someFunction

    return (
        <div>
            <input 
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <br />
            <button onClick={someFunction}>Call somFunc</button>
        </div>
    );
}

export default App;