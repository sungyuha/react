import { useInput } from './useinput';

function displayMessage(message) { // 매개변수로 message 전달
    alert(message);
}

function App() {
    // 커스텀 훅
    // useInput이 반환해주는 값을
    const [inputValue, handleChange, handleSubmit] = useInput(
        // 초기값은 빈 문자열
        '',
        // displayMessage를 useInput의 두 번째 인자로 넣어줌
        displayMessage
    );

    /* // 확인 버튼 누르면 모달창
    const handleSubmit = () => {
        alert(inputValue);
        // 확인 버튼 누르면 초기화
        // setInputValue('');
    }*/

    return (
        <div>
            <h1>useInput</h1>
            {/* input 의 속성으로 넣어주면 */}
            <input value={inputValue} onChange={handleChange} />
            <button onClick={handleSubmit}>확인</button>
        </div>
    )
}

export default App;