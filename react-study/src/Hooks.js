import React, { useState, useReducer } from 'react';

// Reducer : state를 업데이트를 해주는 역할(은향)
// Dispatch : state 업데이트를 위한 요구
// Action : Dispatch에 들어갈 요구의 내용

// 컴포넌트 밖에 reducer
// 두 가지 인자를 받음. 첫 번째 인자는 현재 state를 받고, 두 번째 인자는 action을 받음
/* 
인자 안에 들어있는 state가 불리는 시점에 money 값이 들어감
action은 reducer에게 state를 변경해달라고 요구할때. 요구에 대한 내용이 들어감
*/

// 리팩토링
const ACTION_TYPES = {
    deposit: 'deposit',
    withdraw: 'withdraw',
};

const reducer = (state, action) => { // reducer는 전달 된 state 값만 업데이트 시켜줌
    console.log("reducer가 일을 합니다.", state, action);
    // action.type에 따라서
    switch (action.type) {
        // 만약에 타입이 deposit이면(예금에 대한 로직)
        case ACTION_TYPES.deposit:
        // action 케이스 교채 전 case 'deposit':
            // 더한 겂을 리턴
            return state + action.payload;
        // 출금에 대한 로직
        case ACTION_TYPES.withdraw:
        // action 케이스 교채 전 case 'withdraw':
            // 뺀 값을 리턴
            return state - action.payload;
        default:
            // 디폴트 값은 현재 state 반환
            return state;
    }
};

function Hooks() {

    const [number, setNumber] = useState(0);
    // useReducer 사용해서 새로운 state
    /* useReducer는 useState랑 비슷하게 배열을 그냥 반환해줌. 
    1) 이 배열의 첫 번째 요소에는 새로 만들어둔 state가 들어있음, 
    2) 배열의 두 번쩨 요소에는 useReducer가 만들어준 patch 함수가 들어있음
    */
    const [money, dispatch] = useReducer(reducer, 0); // useReducer는 인자를 두 가지 받음. 첫 번째 인자는 reducer, 두 번째 인자는 money state안에 들어갈 초기값

    return(
        <div>
            <h2>Hooks - useReducer</h2>
            {/* 
            useReducer는 복잡한 state를 관리해야 할때 사용
            useReducer 를 사용하려면 알아야 하는 개념! 
            1) Reducer, 2) Dispatch, 3) Action
            */}
            <h3>useReducer 은행에 오신것을 환영합니다.</h3>
            {/* money state는 잔고가 얼마 남아있는지 기록 */}
            <p>잔고: {money}원</p>
            <input 
                type="number"
                // vlaue는 state의 number타입
                value={number}
                // input타입이 변경될때마다 number state값이 변경
                onChange={(e) => setNumber(parseInt(e.target.value))}
                // 천 단위로 증가
                step="1000"
            />
            {/* onClick에 콜백함수 */}
            <button onClick={() => {
                // action은 오브젝트 형태로 보냄. 그 안에 type 넣음
                // payload 안에 현재 input에 들어있는 값을 넣어줌. number state
                dispatch({ type: ACTION_TYPES.deposit, payload: number });
            }}>예금</button>
            <button onClick={() => {
                dispatch({ type: ACTION_TYPES.withdraw, payload: number });
            }}>출금</button>
        </div>
    );
};

export default Hooks;