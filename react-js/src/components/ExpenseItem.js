import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2022, 11, 29);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;

    return (
        <div className="expense-item">
            <div>{expenseDate}</div>
            <div className="expense-item__description">
                {/* <h2>{Math.random()}</h2> */}
                {/* 내장 된 math객체로 임의의 숫자를 생성함 */}
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">{expenseAmount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;