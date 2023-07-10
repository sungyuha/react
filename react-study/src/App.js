import React from "react";
//import Component from "./Component";
import './style.css';
import Column from "./Column";

function App() {
    return (
        <div className='App'>
            {/* <h1>React.Fragment</h1> */}
            {/* <Component /> */}
            <table>
                <tbody>
                    <tr>
                        <Column />
                    </tr>
                    <tr>
                        <Column />
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default App;