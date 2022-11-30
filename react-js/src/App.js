import React from "react";
import Expense from "./components/Expenses/Expense";

const App = () => {
    // 화살표 함수로 사용하기 위해 상수형으로 변경 함 -> 상수에 할당하는 값은 화살표 함수
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2022, 11, 30),
        },
    ];

    return React.createElement(
        'div', 
        {}, 
        React.createElement('h2', {}, "Let's get started!"),
        React.createElement(Expense, {items: expenses})
        // 사용자 지정 컴포넌트
        // 리액트를 사용하는 JSX
    );
    
    // return (
    //     <>
    //         <h2>Let's get started!</h2>
    //         <Expense items={expenses} />
    //         {/* items속성을 위해 매개변수 props를 통해 전달하는 대신 Expenses 컴포넌트 안에 있는 속성으로 추출해서 모든 expenses를 랜더링 함 */}
    //     </>
    // );
};

export default App;