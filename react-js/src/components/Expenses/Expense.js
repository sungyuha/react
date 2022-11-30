import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import './Expense.css';
import { useState } from "react";

const Expense = (props) => { // 매개변수 props
    const [] = useState();

    const filterChangeHandler = selectedYear => {
        console.log('Expense.js');
        console.log(selectedYear);
    };

    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter />
                <ExpenseItem 
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
                />
                {/* 여기서는 props가  title, amount, date */}
            {/* // JSX는 자바스크립트 XML을 의미 */}
            </Card>
        </div>
    )
}

export default Expense;