import React from "react";

const Column = (props) => {
    return (
        // table 처럼 정해진 구조를 따라야할 때 (중요)
        // 안그러면 tr태그 안에 의미 없는 div 태그가 들어가게 되어 오류가 됨
        // 그래서 최상위 div가 아닌 React.Fragment
        <>
            <td>밥먹기</td>
            <td>코딩하기</td>
            <td>딸기라떼 마시기</td>
        </>
    )
}

export default Column;