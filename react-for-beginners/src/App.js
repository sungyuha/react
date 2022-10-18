import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("I'm here");
  }, [])
  return (
    <h1>Hello</h1>
  )
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  // state가 바뀔때, showing이 변경 될 때 모든 component가 함깨 변경 됨
  return (
    <div>
      {showing ? <Hello /> : null}
      {/* 
      1. hello component를 hide할 때는 그 component를 screen에서 지워줌
      2. 그래서 코드가 실행 될 때는 console.log도 재 작동함
      */}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  )  
}

export default App;