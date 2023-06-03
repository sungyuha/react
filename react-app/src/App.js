import { useState } from "react";

function App() {
    const [number, setNumber] = useState(0);


    const someFunction = () => {
        console.log(`somFunc: number: $(number)`);
        return;
    }

    return (
        <div>
            <input 
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <br />
            <button onClick={someFunction}>Call somFunc</button>
        </div>
    );
}

export default App;