import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

// 컴포넌트는 함수형 
const ExpenseItem = (props) => {
    // props 사용자 시점에서 모든 값을 가지고 있는 객체
    // props 객체에서 key와 vlaue로 이루어진 파일 포맷을 얻는데 그것은 리액트에 의해 자동으로 전달 됨

    // function clickHandler() {}
    //const [title, setTitle] = useState(props.title); // 상수 저장
    // tilte: 상수 / setTitle : 새로운 title을 설정하기 위해 호출할 수 있는 함수or 값을 업데이트 해주는 함수
    // useState는 독립 된 두 요소인 변수나 상수를 저장
    // 컴포넌트 함수안에 호출 해야 함
    /* useState 규칙 : 첫 번째 요소는 현재 상태값, 두 번째 요소는 그것을 업데이트 하는 함수 */

    // 버튼을 클릭했을 때 title 화면이 변경
    // let title = props.title;
    //console.log('ExpenseItem evalueated by React');

    /*const ClickHander = () => {
        // console.log('Cliked!!!!');
        // title = 'Updated!';
        setTitle('Updated!!!'); // 인자값을 새로 전달
        // 어떤 변수에 새로운 값을 할당하는 것이 아니라 대신, 이 특별한 변수로 시작하기 때문
        console.log(title);
        // State는 컴포넌트의 인스턴스별로 // 새로운 값을 사용할 때 왜 상수형을 사용할까? -> 등호를 사용해서 값을 할당하지 않는다는 것
    };*/

    return (
        <li>
        {/* 사용자 지정 Card로 변경 가능 */}
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            {/* 이 함수에서 특별한 것은 JSX코드로 반환 */}
            {/* 함수를 호출해야 동작 */}
            <div className="expense-item__description">
                {/* <h2>{Math.random()}</h2> */}
                {/* 내장 된 math객체로 임의의 숫자를 생성함 */}
                <h2>{props.title}</h2> {/* 변수명을 JSX코드로 변경 */}
                {/* {props.title}은 props를 통해서 얻은 값 */}
                <div className="expense-item__price">${props.amount}</div>
                {/* 사용자 인터페이스를 구축하는 이런 접근 방법응ㄹ 일반적으로 합성이라고 함 */}
            </div>
            {/* <button onClick={ClickHander}>Change Title</button> */}
            {/* 버튼을 클릭했을 때 h2가 출력되는 title이 변경 */}
            {/* 모든 이벤트 핸들러 props는 값으로  */}
            {/* () => {console.log('Cliked!') */}
        </Card>
        </li>
    );
};

export default ExpenseItem;