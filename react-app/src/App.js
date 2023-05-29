import React, {useEffect, useState} from "react";

function App() {
    const [number, setNumber] = useState(0);
    const [isKorea, setisKorea] = useState(true);

    // location 변수
    const location = isKorea ? '한국' : '외국';

    // useEffect은 화면이 렌더링 될 때와 화면이 변동될 때 실행 됨
    useEffect(() => {
        console.log('useEffect호출');
        // 의존성 배열에는 location
        // useEffect가 불릴지 말지 판단하는것은 의존정 배열인 location 렌더링 이후에 차이가 있는지 확인 -> 그래서 location 값이 변동 될 때만 호출 됨
    }, [location]);

    return (
        <div>
            <h2>하루에 몇 끼 먹어요?</h2>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <hr />
            <h2>어느 나라에서 있어요?</h2>
            {/* 버튼을 눌러주면  isKorear가 외국으로 변동되서 외국으로 변경 됨 */}
            <p>나라 : {location}</p>
            <button onClick={() => setisKorea(!isKorea)}>비행기 타자</button>
        </div>
    );
}

export default App;