import { useState, useEffect } from "react";

// 1. 리액트는 component 를 refresh(새로고침)이 가능
// 2. 새로운 데이터가 들어올때마다 ui를 refresh
// 3. react.js는 변화가 일어날 때만 refresh함
// 4. 첫 번째 arrgument는 우리가 실행시키고 싶은 코드
/* 5. 두 번재는 deoendencies라고 불리우는 것
deoendencies는 리액트가 지켜보아야 하는것 */

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  // keyword는 setKeyword라는 function 으로 변화
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  // setKeyword는 onChange라는 function에 의해 호출

  // console.log("i run all the time");
  // useEffect fun 은 코드가 단 한 번만 실행되도록 작동
  useEffect(() => {
    console.log("I run only once.");
    // 이 코드는 한 번 만 실행
    // 내가 원하는 콘솔만 찍힘
  }, []);
  // 빈 array를 실행시켰을때 코드가 단 한 번만 실행되는 이유는
  // 아래에 keyword값이 변화할때만 실행 되서
  useEffect(() => {
  /* console.log("Search for", keyword); */
  // keyword가 변화 할 때 코드를 실행하고 싶다면 keyword작성
  // keyword 값이 변화할 떄만 실행되는 코드
    /* if ( keyword !== "" && keyword.length > 5 ) { 
      // keyword가 빈 값이 아니라면 그 때 keyword를 검색
      // keyword.length가 5 보다 길때 조건
      // 실행되는 이유는 keyword의 길이값이 5보다 길 때 검색
      console.log("SEARCH FOR", keyword);
      // 특정한 keyword가 update될 때만 코드를 실행
    }*/
    console.log("I run when 'keyword' changes.");
    // 키워드가 변화 할 때 때마다 실행
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
    // 카운터가 변화 할 때 실행
    // keyword와 counter 둘 다 state 안에 있음
    // 위의 조합을 이용하여 값이 변화 할 때 특정 코드를 실행시킬 수 있음
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here!"/>
      {/* onChange는 사용자 input이 변화할 때 호출 */}
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
      {/* 
      1. fun 이 작동할때 argument로 event 받음 
      2. 그리고 event를 발생시킨 input에서 value를 받아서,
      3. value를 keyword state에 넣어줌
      4. 그리고 그 keyword를 가져와서, input의 value로 사용하면
      5. 원하는 때에 input 작동 가능
      */}
      {/* 리액트는 state를 뱐화시킬 때 component를 재실행시키는 것 */}
    </div>
  );
}

export default App;