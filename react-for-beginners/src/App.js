import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  // useEffect fun 은 코드가 단 한 번만 실행되도록 작동
  useEffect(() => {
    console.log("CALL THE API...");
  }, []);
  console.log("Search for", keyword);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here!"/>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
      {/* 
      1. fun 이 작동할때 argument로 event 받음 
      2. 그리고 event를 발생시킨 input에서 value를 받아서,
      3. value를 keyword state에 넣어줌
      4. 그리고 그 keyword를 가져와서, input의 value로 사용하면
      5. 원하는 때에 input 작동 가능
      */}
    </div>
  );
}

export default App;