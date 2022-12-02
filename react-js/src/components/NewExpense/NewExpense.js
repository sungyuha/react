import React, {useState} from "react";
import NewExpenseForm from "./NewExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => { // 상수 saveExpenseDataHandler / enteredExpenseData는 매개변수
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // console.log(expenseData);
        // 매개변수로 전달 받는 값
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
            {/* NewExpenseForm로 전달 */}
            {/* 리액트에서 자주 사용하게 될 패턴 -> 자식에서 부모 컴포넌트로 소통하는 방법 */}
        </div>
    );
};
// 62. 자식 대 부모 컴포넌트 통신(상향식) 보고 수정사항 있으면 수정하기!

export default NewExpense;