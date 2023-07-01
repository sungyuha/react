import { useFetch } from "./useFetch";

// 변수 baseUrl
const baseUrl = "https://jsonplaceholder.typicode.com";

function App() {
    // fetchUrl 전달 받음
    const {data, fetchUrl} = useFetch(baseUrl, 'users');

    return (
        <div>
            {/* fetch api를 통해서 네트워크 상에서 데이터를 가져오는 기능을 해주는 커스텀훅 */}
            <h1>useFetch</h1>
            {/* Users버튼이 클릭하면 만든 fetchUrl 함수 호출. 대신 uesr에 관한 데이터 받아옴 */}
            <button onClick={() => fetchUrl('users')}>Users</button>
            <button onClick={() => fetchUrl('posts')}>Posts</button>
            <button onClick={() => fetchUrl('todos')}>Todos</button>
            {/* pre 태그를 사용해서 출력. 데이터는 json 형태 */}
            {/* 첫 번째는 data, 두 번째 인자로는 Null, 세 번째 인자로는 2 */}
            {/* 받아와진 정보는 pre 태그를 통해 화면에 출력 */}
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default App;