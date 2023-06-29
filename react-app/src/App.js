import {useEffect} from "react";

function App() {
    // {/* 네트워크상에서 데이터를 가져올 때 Fetch api를 가장 많이 사용 */}

    useEffect(() => {
        // fetch안에다가 네트워크 상에서 가져오고 싶은 데이터의 url를 집어넣어줌
        // 사용할 api는 jsonplacehodler
        fetch('https://jsonplaceholder.typicode.com/users') // 더미 데이터 반환. 여러명의 노크 유저 데이터를 반환
        // 가져온 데이터를 json 형태로 변환
        .then(res => res.json())
        // 반환 된 값을 콘솔에 출력
        .then(res => console.log(res));

        // 단 한 번만 useEffect가 실행이 될 수 있도록 빈 의존성 배열로 넣어줌
    }, [])

    return (
        <div>
            {/* fetch api를 통해서 네트워크 상에서 데이터를 가져오는 기능을 해주는 커스텀훅 */}
            <h1>useFetch</h1>
        </div>
    )
}

export default App;