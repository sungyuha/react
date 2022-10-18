import { useState, useEffect } from "react";

function Hello() {
  function byFn() {
    console.log("bye :(");
  }
  function hiFn() {
    console.log("created :)");
    return byFn;
  }
  /* useEffect(function () {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);   
  useEffect(function () {
    console.log("hi :)");
    return function() {
      console.log("bye :(");
    }
  }, []);
  // useEffect(hiFn, []);
  return <h1>Hello</h1>;
  // 현재는 자주 쓰이지 않는 코드
} */
  useEffect(() => {
    // 컴포넌트를 새로 만들 때는 useEffect 사용 필수
    return () => console.log("destroyed :(");
  }, [])
  return <h1>Hello</h1>;
    // function 값을 리턴해줌
    // 컴포넌트를 활용해서 event listener를 지우거나 console.log에 뭔가를 보야줌
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