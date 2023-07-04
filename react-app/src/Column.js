import React from "react";

const Column = (props) => {
    // map() 사용시 Fragment에 key를 전달할 때
    const todoList = ["밥먹기", "코딩하기", "딸기라떼 마시기"]; 

    return (
        /*
        // table 처럼 정해진 구조를 따라야할 때 (중요)
        // 안그러면 tr태그 안에 의미 없는 div 태그가 들어가게 되어 오류가 됨
        // 그래서 최상위 div가 아닌 React.Fragment
        <>
            <td>밥먹기</td>
            <td>코딩하기</td>
            <td>딸기라떼 마시기</td>
        </>*/
        <>
            {/* map으로 돌면서 하나의 태그로 */}
            {todoList.map((todo, idx) => (
                <React.Fragment key={idx}>
                    {/* 
                    1) 상위태그로 감싸줘야 함! 그럴땐 React.Fragment 사용하기!! 
                    2) 아무것도 없는 <></> React.Fragment를 사용하면 key값을 표시하라고 에레 메시지가 출력
                    3) 그래서 key값도 표시하고 React.Fragment 사용하려면, 직접적으로 React.Fragment 명시 해줘야 함
                    4) 그래야 key값을 넣어줄 수 있음
                    */}
                    <td>{todo}</td>
                    <td>{todo}</td>
                </React.Fragment>
            ))}
        </>
    );
};

export default Column;