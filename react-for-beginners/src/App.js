import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");
  // useEffect fun 은 코드가 단 한 번만 실행되도록 작동
  useEffect(() => {
    console.log("CALL THE API...");
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
      {/* <Button text={"Continue"} /> */}
    </div>
  );
}

export default App;