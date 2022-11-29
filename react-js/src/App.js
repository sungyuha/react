import ExpenseItem from "./components/ExpenseItem";

function App () {
    // const para = document.createElement('p');
    // para.textContent = 'This is also visible';
    // document.getElementById('root').append(para);
    return (
        <>
            <h2>Let's get started!</h2>
            <ExpenseItem></ExpenseItem>
            <p>This is alsp visble!</p>
        </>
        // JSX는 자바스크립트 XML을 의미
    );
}

export default App;