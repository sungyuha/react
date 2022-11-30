import './ExpenseItem.css';

function ExpenseItem(props) {
    // props 사용자 시점에서 모든 값을 가지고 있는 객체
    // props 객체에서 key와 vlaue로 이루어진 파일 포맷을 얻는데 그것은 리액트에 의해 자동으로 전달 됨
    const month = props.date.toLocaleString('en-us', {month: 'long'});
    {/* toLocaleString -> 리액트에 내장되어 있음. 사람이 읽기 쉽게 변경해줌 */}
    const day = props.date.toLocaleString('en-us', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <div className="expense-item">
            <div>
                <div>{month}</div>
                {/* 변수나 상수를 작성 */}
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className="expense-item__description">
                {/* <h2>{Math.random()}</h2> */}
                {/* 내장 된 math객체로 임의의 숫자를 생성함 */}
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;