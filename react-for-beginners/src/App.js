import { useState } from "react";

function App(){
  const [toDo, setoDo] = useState("");
  const [toDos, setoDos] = useState([]); // 수정하는 함수 toDos, setoDos
  // 기본값으로는 array
  const onChange = (event) => setoDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if ( toDo === "" ) {
      return;
    }
    /* setoDo(""); // setoDo는 input을 수정하는 함수
    // toDo의 값을 변경하면 input값도 변겯 됨
    // toDos.push(); -> State를 직접적으로 수정 불가능*/
    setoDos(currnetArray => [toDo, ...currnetArray]);
    // 새로운 array는 state에 있는 toDo
    // 더 정확하게 하기 위해서 currnetArray라고 명시 / 그리고 뒤에 함수
    // 수정하는 함수를 사용할 때 두 가지 옵션이 있음
    // 함수를 보낼 때 react.js는 함수의 첫 번째 argument를 현재 state로 보냄
    setoDo("");
    // 우리가 지정한 data를 가지고 있음
    // 여기에 직전의 값(prevens Value)를 받아올거. 
    // array르 직접족으로 수정하지 않으면서 setoDos로 array에 element를 추가하는 방법
  };
  console.log(toDos);
  // array를 직접적으로 수정하지 않으면서 setToDos로 array에 element를 추가하는 방법
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={toDo} 
          type="text" 
          placeholder="Write your to do.!"
        />
        <button>Add TO Do</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      {/* map은 element들을 다 바꾸고 싶고, 다 바뀐 새로운 array를 가지고 싶을 때  map은 이 안에 함수를 넣을 수 있도록 해줌 -> 이 함수는 array의 모든 item에 대해 실행 */}
    </div>
  );
}

export default App;