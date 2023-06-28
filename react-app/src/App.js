import { useInput } from './useinput';

function App() {
    // 커스텀 훅
    const [inputValue, handleChange] = useInput('안녕');

    // 확인 버튼 누르면 모달창
    const handleSubmit = () => {
        alert(inputValue);
        // 확인 버튼 누르면 초기화
        // setInputValue('');
    }

    return (
        <div>
            <h1>useInput</h1>
            <input value={inputValue} onChange={handleChange} />
            <button onClick={handleSubmit}>확인</button>
        </div>
    )
}

export default App;