import { useFetch } from "./useFetch";

// 변수 baseUrl
const baseUrl = "https://jsonplaceholder.typicode.com";

function App() {
    const {data, fetchUrl} = useFetch(baseUrl, 'users');

    // const [data,setData] = useState(null);

    /* 
    1) 함수 fetchUrl
    2) fetchUrl은 type이라는 매개변수를 받음
    3) // type에는 user가 올 수도 있고, post가 올 수도 있음
    */
    /*const fetchUrl = (type) => { // * 예들들면 users 버튼을 클릭하면 매개변수 type에는 users의 정보
        // users 정보
        fetch(baseUrl + '/' + type)
        // 가져온 데이터를 json 형태로 변환
        .then(res => res.json())
        // setDate로 useState에 넣어줌
        // setDate로 안에다가 users 정보 넣어줌
        .then(res => setData(res));
    };

    useEffect(() => {
        fetchUrl('users');
    }, []);*/

    // 콘설에 출력
    //console.log(data);

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