import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import './Expense.css';
import { useState } from "react";

const Expense = (props) => { // 매개변수 props
    const [filteredYear, setfilteredYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
        // console.log('Expense.js');
        // console.log(selectedYear);
        setfilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => { // tilter는 새로운 배열을 반환
        // 상수는 props.items인데 filter 메소드가 호출하는 모든 expenses를 저장하는 함수
        return expense.date.getFullYear().toString() === filteredYear;
        //필터링 된 연도와 일치하는 연도의 아이템만이 이 filteredExpenses 배열에 남겨짐
    });

    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {/* selected에 선택 된 ExpenseFilter 안에서 드롭다운 값을 설정 */}
                {filteredExpenses.length === 0 ? (
                    <p>No expenses found</p> 
                    ) : 
                        filteredExpenses.map((expense) => (
                            <ExpenseItem
                            key={expense.id}
                            // 특정 아이템은 모두 고유의 id값을 가지고 있어야 함
                            title={expense.tilte} 
                            amount={expense.amount} 
                            date={expense.date} 
                        />
                    ))}
                    {/* map은 매개뱐수를 통해 함수를 반환하고 그 함수는 배열에 있는 모든 요소를 실행해서 현재 매개변수로 실행되고 있는 요소를 얻음 */}
                    {/*  expense는 자동적으로 함수를 매개변수로 전달하는데 map이 작동하는 방식 */}
                    {/* {expense.tilte}의 expense는 tilte를 추출하기 위해 사용 */}

                {/* <ExpenseItem
                    title={props.items[0].title} // 컴포넌트 이름을 expenses말고 items로 변경 가능
                    amount={props.items[0].amount} 
                    date={props.items[0].date} 
                />
                <ExpenseItem
                    title={props.items[1].title} 
                    amount={props.items[1].amount} 
                    date={props.items[1].date} 
                />
                <ExpenseItem 
                    title={props.items[2].title} 
                    amount={props.items[2].amount} 
                    date={props.items[2].date} 
                />
                <ExpenseItem 
                    title={props.items[3].title} 
                    amount={props.items[3].amount} 
                    date={props.items[3].date}
                /> */}
                {/* 여기서는 props가  title, amount, date */}
            {/* // JSX는 자바스크립트 XML을 의미 */}
            </Card>
        </div>
    );
};

export default Expense;