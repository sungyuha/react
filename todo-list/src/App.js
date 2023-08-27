import React, {useState} from 'react';
import './App.css';
import TodoBorad from './components/TodoBorad';

function App() {
  const [inputValue, setInputValue] = useState(''); // useState의 초기값은 비어있는 문자열

  // 아이템들을 모아주는 장소인 배열
  const [todoList, setTodoList] = useState([]); // 타입은 array
  
  const addItem = () => {
    // console.log(inputValue);
    // 기본 아이템 그대로 두고 새로운 아이템 추가
    setTodoList([...todoList, inputValue]);
    // 추가 버튼을 클릭하면 input값 초기화
    setInputValue('');
  };

  return (
    <div>
      {/* 1. input창에 값을 입력할 때 마다 호출되는 onChange 이벤트 */}
      {/* 2. onChange는 event 줌. e로 생략 가능 */}
      {/* 3. 이벤트 안에 input에 입력한 값이 있음 */}
      <input value={inputValue} type='text' onChange={(e) => {
        // input창에 입력한 값
        setInputValue(e.target.value);
      }} />
      {/* 버튼 클릭 이벤트 -> 클릭 할때 마다 함수호출  */}
      <button onClick={addItem}>추가</button>

      {/* 전달하고 싶은 값은 props로 전달 */}
      <TodoBorad todoList={todoList} />
    </div>
  );
}

export default App;
