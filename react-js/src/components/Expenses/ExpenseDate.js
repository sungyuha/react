import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-us', {month: 'long'});
    {/* toLocaleString -> 리액트에 내장되어 있음. 사람이 읽기 쉽게 변경해줌 */}
    const day = props.date.toLocaleString('en-us', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            {/* 변수나 상수를 작성 */}
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );
};

export default ExpenseDate;