import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    // props 사용자 시점에서 모든 값을 가지고 있는 객체
    // props 객체에서 key와 vlaue로 이루어진 파일 포맷을 얻는데 그것은 리액트에 의해 자동으로 전달 됨

    return (
        // 사용자 지정 Card로 변경 가능
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                {/* <h2>{Math.random()}</h2> */}
                {/* 내장 된 math객체로 임의의 숫자를 생성함 */}
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                {/* 사용자 인터페이스를 구축하는 이런 접근 방법응ㄹ 일반적으로 합성이라고 함 */}
            </div>
        </Card>
    );
};

export default ExpenseItem;