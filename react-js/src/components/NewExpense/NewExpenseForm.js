import React, { useState } from "react";
import './NewExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setenteredTitle] = useState('');
    // 두 요소를 얻기 위해서 구조 분해 할당을 사용할 수 있음
    const [enteredAmount, setenteredAmount] = useState('');
    const [enteredDate, setenteredDate] = useState('');
    // const [userInput, setuserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });
    // 독립적인 한개의 state처럼 관리 가능

    // 컴포넌트 함수 밖에서 전역변수 사용 가능
    // state를 사용하면 양방향 바인딩 구현 가능

    // 사용자가 입력한 데이터를 받음
    const titleChangeHanlder = (e) => {
        setenteredTitle(e.target.value);
        // 입력 된 값을 받음
        // 매개변수로 입력 된 값
        // userInput({
        //     ...userInput,
        //     enteredTitle: e.target.value, 
        //     // 스레드 연산자
        // });
        // setuserInput((prevState) => {
        //     return { ...prevState, enteredTitle: e.target.value };
        //     // 새로운 state 반환
        // });
    };

    const amountChangeHandler = (e) => {
        setenteredAmount(e.target.value);
        // userInput({
        //     ...userInput,
        //     enteredAmount: e.target.value,
        // });
    };

    const dateChangeHandler = (e) => {
        setenteredDate(e.target.value);
        // userInput({
        //     ...userInput,
        //     enteredDate: e.target.value,
        // });
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseDeta = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
            // 프로퍼티를 전달
        };

        console.log(expenseDeta);
        // 출력 함수에 expenseDeta 전달
        setenteredTitle('');
        setenteredAmount('');
        setenteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type='text' 
                        value={enteredTitle} 
                        onChange={titleChangeHanlder}
                    />
                    {/* onChange이벤트는 같은 이벤트 사용 가능 */}
                    {/* value는 enteredTitle로 바인딩 */}
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        type="number" 
                        min="0.01" 
                        step="0.01"
                        value={enteredAmount}
                        onChange={amountChangeHandler} 
                    />
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        type="date" 
                        min="2020-01-01" 
                        max="2022-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler} 
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form> 
        // 양방향 바인딩은 폼을 작성할 때 아주아주 좋음
        // 폼 전송에 따라 사용자의 입력을 모으거나 변경할 수 있게 해줌
    );
};

export default ExpenseForm;