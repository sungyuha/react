import { useState } from "react";

function App(){
  const [toDo, setoDo] = useState("");
  const onChange = (event) => setoDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if ( toDo === "" ) {
      return;
    }
    setoDo(""); // setoDo는 input을 수정하는 함수
    // toDo의 값을 변경하면 input값도 변겯 됨
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={toDo} 
          type="text" 
          placeholder="Write your to do.!"
        />
        <button>Add TO Do</button>
      </form>
    </div>
  );
}

export default App;