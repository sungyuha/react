import { useCallback, useEffect, useState } from "react";

function App() {
    const [number, setNumber] = useState(0);


    const someFunction = useCallback(() => { // someFunction 안에 함수 겍체가 메모이제이션
        console.log(`someFunc: number: ${number}`); 
        return; 
        // 의존성 배열에 아무것도 없으니 App 컴포넌트가 만들아질 때미디 someFunction 객체가 메모이제이션 됨
    },[number]);// number state가 업데이트 될때마다 메모이제이션 된 함수도 업데이트 시켜주고 싶으면 두 번째 인자에 들어있는 의존성 배열에 number

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